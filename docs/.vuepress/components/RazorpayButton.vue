<script setup>
import { computed, ref, onBeforeUnmount, onMounted } from 'vue';
import { submitPurchaseLead } from '../services/notionService';

const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
    pageTheme: {
        type: Boolean,
        default: false,
    },
});

const RAZORPAY_KEY_ID = typeof __VITE_RAZORPAY_KEY_ID__ !== "undefined"
    ? __VITE_RAZORPAY_KEY_ID__
    : "";

const DODO_PAYMENT_URL = typeof __VITE_DODO_PAYMENT_URL__ !== "undefined"
    ? __VITE_DODO_PAYMENT_URL__
    : "";

const opening = ref(false);
const success = ref(false);
const showConfirm = ref(false);
const checkoutHost = ref(null);
const rzpRef = ref(null);

const buyerEmailInput = ref("");
const buyerEmailError = ref("");
const savingLead = ref(false);
const checkoutActive = ref(false);
const downloaded = ref(false);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const price = computed(() => parseFloat(props.project.price || "0"));
const currency = computed(() => props.project.currency || "USD");
const dodoUrl = computed(() => props.project.dodoPaymentUrl || DODO_PAYMENT_URL);
const hasRazorpay = computed(() => !!RAZORPAY_KEY_ID);
const hasDodo = computed(() => !!dodoUrl.value);
const bothAvailable = computed(() => hasRazorpay.value && hasDodo.value);
const purchasable = computed(() => price.value > 0 && (hasRazorpay.value || hasDodo.value));
const workspaceUrl = computed(() => props.project.workspace || props.project.link || "");

const paymentMethod = ref("dodo");

const priceLabel = computed(() => {
    if (!price.value) return "Free";
    try {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: currency.value,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(price.value);
    } catch {
        return `${currency.value} ${price.value}`;
    }
});

const loadScript = () => {
    return new Promise((resolve, reject) => {
        if (typeof window === "undefined") {
            reject(new Error("No window available"));
            return;
        }
        if (window.Razorpay) {
            resolve(true);
            return;
        }
        const existing = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
        if (existing) {
            existing.addEventListener("load", () => resolve(true));
            existing.addEventListener("error", () => reject(new Error("Failed to load Razorpay checkout")));
            return;
        }
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => reject(new Error("Failed to load Razorpay checkout"));
        document.head.appendChild(script);
    });
};

const embedCheckout = () => {
    const container = document.querySelector(".razorpay-container");
    const host = checkoutHost.value;
    if (!container || !host) return false;
    if (!host.contains(container)) {
        host.appendChild(container);
    }
    container.style.position = "relative";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.maxHeight = "none";
    container.style.zIndex = "1";
    container.style.overflow = "visible";
    const backdrop = container.querySelector(".razorpay-backdrop");
    if (backdrop) {
        backdrop.style.display = "none";
    }
    return true;
};

const waitForEmbed = async () => {
    for (let i = 0; i < 50; i++) {
        if (embedCheckout()) return true;
        await new Promise((r) => setTimeout(r, 100));
    }
    return false;
};

const openRazorpayCheckout = async (buyerEmail) => {
    if (!hasRazorpay.value || opening.value) return;
    opening.value = true;
    showConfirm.value = true;
    checkoutActive.value = true;
    saveScroll();
    try {
        await loadScript();
        embedCheckout();
        const options = {
            key: RAZORPAY_KEY_ID,
            amount: Math.round(price.value * 100),
            currency: currency.value,
            name: "Stack Seekers",
            description: props.project.name,
            image: "https://stackseekers.com/img/stackseekers.webp",
            theme: { color: "#10b981" },
            prefill: buyerEmail ? { email: buyerEmail } : {},
            handler: () => {
                success.value = true;
                checkoutActive.value = false;
                rzpRef.value = null;
                showConfirm.value = false;
                restoreScroll();
            },
            modal: {
                ondismiss: () => {
                    checkoutActive.value = false;
                    rzpRef.value = null;
                    showConfirm.value = false;
                    restoreScroll();
                },
            },
        };
        const rzp = new window.Razorpay(options);
        rzpRef.value = rzp;
        rzp.open();
        await waitForEmbed();
    } catch (err) {
        console.error("[Razorpay] Checkout error:", err);
    } finally {
        opening.value = false;
    }
};

const dodoIframeUrl = ref("");
let dodoChannel = null;

const DODO_CHANNEL_NAME = "stackseekers-dodo-payment";

const markPaid = () => {
    dodoIframeUrl.value = "";
    success.value = true;
    checkoutActive.value = false;
    showConfirm.value = false;
    restoreScroll();
    teardownDodoListeners();
};

const DODO_SUCCESS_MARKER = "__dodo_ss_paid";

const isSucceededReturn = () => {
    if (typeof window === "undefined" || !window.location) return false;
    const params = new URLSearchParams(window.location.search);
    return params.get("status") === "succeeded";
};

const isCanceledReturn = () => {
    if (typeof window === "undefined" || !window.location) return false;
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");
    return status && status !== "succeeded"; // canceled, failed, abandoned, etc.
};

const announceDodoSuccess = () => {
    // Tell the parent dialog (iframe case) we paid, without clicking anything.
    try {
        if (window.self !== window.top && window.parent) {
            window.parent.postMessage(
                { type: "dodo-payment-success", product: props.project.name },
                "*"
            );
        }
    } catch (e) {
        console.warn("[Dodo] Could not notify parent frame:", e);
    }
    // Cross-tab (new-tab fallback) signal.
    try {
        if ("BroadcastChannel" in window) {
            const bc = new BroadcastChannel(DODO_CHANNEL_NAME);
            bc.postMessage({ type: "dodo-payment-success", product: props.project.name });
            bc.close();
        }
    } catch (e) {
        console.warn("[Dodo] BroadcastChannel unavailable:", e);
    }
    // Persist as a safe fallback for a returning visitor.
    try {
        localStorage.setItem(DODO_SUCCESS_MARKER, String(Date.now()));
    } catch (e) {
        console.warn("[Dodo] localStorage unavailable:", e);
    }
};

const announceDodoCancel = () => {
    // Payment was canceled/failed. Tell the opener (parent dialog or original
    // tab) so it closes the dialog without ever marking the order paid.
    try {
        if (window.self !== window.top && window.parent) {
            window.parent.postMessage(
                { type: "dodo-payment-canceled", product: props.project.name },
                "*"
            );
        }
    } catch (e) {
        console.warn("[Dodo] Could not notify parent frame:", e);
    }
    try {
        if ("BroadcastChannel" in window) {
            const bc = new BroadcastChannel(DODO_CHANNEL_NAME);
            bc.postMessage({ type: "dodo-payment-canceled", product: props.project.name });
            bc.close();
        }
    } catch (e) {
        console.warn("[Dodo] BroadcastChannel unavailable:", e);
    }
};

const onDodoMessage = (event) => {
    if (!event.data || typeof event.data !== "object") return;
    if (event.data.type === "dodo-payment-success" || event.data.paymentSuccess === true) {
        if (checkoutActive.value) {
            markPaid();
        }
    } else if (event.data.type === "dodo-payment-canceled") {
        if (checkoutActive.value) {
            closeDialog();
        }
    }
};

const onDodoStorageEvent = (event) => {
    if (event.key === DODO_SUCCESS_MARKER && checkoutActive.value) {
        markPaid();
    }
};

const setupDodoListeners = () => {
    window.addEventListener("message", onDodoMessage);
    window.addEventListener("storage", onDodoStorageEvent);
    if ("BroadcastChannel" in window) {
        try {
            dodoChannel = new BroadcastChannel(DODO_CHANNEL_NAME);
            dodoChannel.onmessage = onDodoMessage;
        } catch (e) {
            console.warn("[Dodo] BroadcastChannel unavailable:", e);
        }
    }
};

const teardownDodoListeners = () => {
    window.removeEventListener("message", onDodoMessage);
    window.removeEventListener("storage", onDodoStorageEvent);
    if (dodoChannel) {
        try {
            dodoChannel.close();
        } catch (e) {
            console.warn("[Dodo] Failed to close channel:", e);
        }
        dodoChannel = null;
    }
};

const handleDodoFrameError = () => {
    // Fallback for browsers/contexts that block iframe rendering: open the
    // checkout in a new tab. Detection still works cross-tab via
    // BroadcastChannel/localStorage when Dodo redirects back with status=succeeded.
    if (!dodoIframeUrl.value) return;
    const url = dodoIframeUrl.value;
    dodoIframeUrl.value = "";
    window.open(url, "_blank", "noopener,noreferrer");
};

const openDodoCheckout = async (buyerEmail) => {
    if (!dodoUrl.value || opening.value) return;
    opening.value = true;
    showConfirm.value = true;
    checkoutActive.value = true;
    saveScroll();
    setupDodoListeners();
    try {
        const url = new URL(dodoUrl.value);
        url.searchParams.set("quantity", "1");
        url.searchParams.set("showDiscounts", "false");
        if (buyerEmail) {
            url.searchParams.set("email", buyerEmail);
        }
        if (typeof window !== "undefined" && window.location) {
            const returnUrl = window.location.origin + window.location.pathname;
            url.searchParams.set("redirect_url", returnUrl);
        }
        dodoIframeUrl.value = url.toString();
    } catch (err) {
        console.error("[Dodo] Checkout error:", err);
        checkoutActive.value = false;
        showConfirm.value = false;
        restoreScroll();
        teardownDodoListeners();
    } finally {
        opening.value = false;
    }
};

const confirmDodoPaid = () => {
    markPaid();
};

const closeDialog = () => {
    if (rzpRef.value) {
        rzpRef.value.close();
        rzpRef.value = null;
    }
    dodoIframeUrl.value = "";
    checkoutActive.value = false;
    showConfirm.value = false;
    restoreScroll();
    teardownDodoListeners();
};

onBeforeUnmount(() => {
    teardownDodoListeners();
});

// Auto-detect a return from the Dodo checkout page (iframe or new tab).
// Dodo redirects to redirect_url with ?status=succeeded&payment_id=... after a
// successful payment, so a freshly-mounted instance on that URL announces the
// success to the opener/parent that still has the checkout dialog open.
// On cancel/failed, Dodo may redirect with a different status — close cleanly.
const initDodoAutoDetect = () => {
    if (typeof window === "undefined") return;
    setupDodoListeners();
    if (isSucceededReturn()) {
        announceDodoSuccess();
        markPaid();
    } else if (isCanceledReturn()) {
        // Payment was explicitly canceled/failed — announce it so the opener
        // (parent dialog / original tab) closes its checkout, and close here
        // too if this instance still has a dialog open.
        announceDodoCancel();
        if (checkoutActive.value) {
            closeDialog();
        }
    }
};

onMounted(() => {
    initDodoAutoDetect();
});

const restoreScroll = () => {
    if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        if (typeof window !== 'undefined' && window.scrollTo) {
            window.scrollTo(0, Number(localStorage.getItem('__scroll_pos') || 0));
        }
    }
};

const saveScroll = () => {
    if (typeof window !== 'undefined' && window.scrollY !== undefined) {
        localStorage.setItem('__scroll_pos', String(window.scrollY));
    }
};

const onVisibleChange = (visible) => {
    if (!visible) {
        closeDialog();
    }
};

const confirmFreeDownload = async () => {
    if (!workspaceUrl.value || savingLead.value) return;
    const email = buyerEmailInput.value.trim();
    if (!EMAIL_RE.test(email)) {
        buyerEmailError.value = "Please enter a valid email address.";
        return;
    }
    buyerEmailError.value = "";
    savingLead.value = true;
    try {
        const res = await submitPurchaseLead({
            email,
            product: props.project.name,
            price: "0",
            currency: currency.value,
        });
        if (!res.ok) {
            console.warn("[Payment] Could not save lead:", res.error);
        }
        localStorage.setItem("collected_email", email);
        window.open(workspaceUrl.value, "_blank", "noopener,noreferrer");
        downloaded.value = true;
    } catch (err) {
        console.warn("[Payment] Could not save lead:", err);
        buyerEmailError.value = "An error occurred. Please try again.";
    }
    savingLead.value = false;
};

const confirmBuyerEmail = async () => {
    if (!purchasable.value || opening.value || savingLead.value) return;
    const email = buyerEmailInput.value.trim();
    if (!EMAIL_RE.test(email)) {
        buyerEmailError.value = "Please enter a valid email address.";
        return;
    }
    buyerEmailError.value = "";
    savingLead.value = true;
    try {
        const res = await submitPurchaseLead({
            email,
            product: props.project.name,
            price: String(price.value),
            currency: currency.value,
        });
        if (!res.ok) {
            console.warn("[Payment] Could not save buyer email:", res.error);
        }
    } catch (err) {
        console.warn("[Payment] Could not save buyer email:", err);
    }
    savingLead.value = false;

    if (paymentMethod.value === "dodo" && hasDodo.value) {
        openDodoCheckout(email);
    } else if (hasRazorpay.value) {
        openRazorpayCheckout(email);
    }
};
</script>

<template>
    <div class="w-full" @click.stop>
        <!-- Payment method selector (shown above the email input when both providers available) -->
        <div v-if="price > 0 && purchasable && !success && bothAvailable" class="flex align-items-center mb-4 w-full">
            <div class="payment-toggle inline-flex align-items-center relative border-round-full w-full">
                <span
                    class="payment-toggle__thumb"
                    :class="paymentMethod === 'razorpay' ? 'payment-toggle__thumb--right' : ''"
                ></span>
                <label
                    class="payment-toggle__option relative z-1 flex-1 flex justify-content-center align-items-center gap-1 cursor-pointer text-xs font-bold px-4 py-1 border-round-full transition-colors"
                    :class="paymentMethod === 'dodo' ? 'payment-toggle__option--active' : 'payment-toggle__option--inactive'"
                >
                    <input type="radio" v-model="paymentMethod" value="dodo" class="hidden" />
                    Others
                </label>
                <label
                    class="payment-toggle__option relative z-1 flex-1 flex justify-content-center align-items-center gap-1 cursor-pointer text-xs font-bold px-4 py-1 border-round-full transition-colors"
                    :class="paymentMethod === 'razorpay' ? 'payment-toggle__option--active' : 'payment-toggle__option--inactive'"
                >
                    <input type="radio" v-model="paymentMethod" value="razorpay" class="hidden" />
                    India (INR)
                </label>
            </div>
        </div>
        <div class="flex flex-nowrap align-items-stretch w-full">
            <template v-if="price > 0">
                <template v-if="purchasable && !success">
                    <InputText
                        v-model="buyerEmailInput"
                        type="email"
                        :size="pageTheme ? undefined : 'small'"
                        placeholder="you@company.com"
                        :disabled="savingLead"
                        class="flex-1 min-w-0"
                        aria-label="Email address for purchase"
                        @keyup.enter="confirmBuyerEmail"
                    />
                    <Button
                        type="button"
                        :label="savingLead ? 'Please wait...' : 'Buy Now · ' + priceLabel"
                        icon="pi pi-credit-card"
                        :size="pageTheme ? undefined : 'small'"
                        :severity="pageTheme ? 'primary' : undefined"
                        raised
                        class="white-space-nowrap flex-shrink-0"
                        :style="pageTheme ? null : 'background: var(--theme-color); border-color: var(--theme-color); color: #fff;'"
                        :aria-label="'Enter your email and buy this ready-made app securely via ' + (paymentMethod === 'dodo' ? 'Dodo Payments' : 'Razorpay')"
                        @click.stop.prevent="confirmBuyerEmail"
                    />
                </template>
                <span v-else-if="success" class="text-sm font-bold" style="color: #16a34a;">
                    <i class="pi pi-check-circle mr-1"></i>Payment Successful
                </span>
                <span v-else class="font-bold text-900">{{ priceLabel }}</span>
            </template>
            <template v-else>
                <template v-if="!downloaded">
                    <InputText
                        v-model="buyerEmailInput"
                        type="email"
                        :size="pageTheme ? undefined : 'small'"
                        placeholder="you@company.com"
                        :disabled="savingLead"
                        class="flex-1 min-w-0"
                        aria-label="Email address to get this free app"
                        @keyup.enter.stop="confirmFreeDownload"
                    />
                    <Button
                        type="button"
                        :label="savingLead ? 'Please wait...' : 'Get Free'"
                        icon="pi pi-download"
                        :size="pageTheme ? undefined : 'small'"
                        :severity="pageTheme ? 'success' : undefined"
                        raised
                        class="white-space-nowrap flex-shrink-0"
                        :style="pageTheme ? null : 'background: #16a34a; border-color: #16a34a; color: #fff;'"
                        aria-label="Enter your email and get this app for free"
                        @click.stop.prevent="confirmFreeDownload"
                    />
                </template>
                <span v-else class="text-sm font-bold" style="color: #16a34a;">
                    <i class="pi pi-check-circle mr-1"></i>Download Opened
                </span>
            </template>
        </div>
        <small v-if="buyerEmailError && !success" class="p-error mt-1 block">{{ buyerEmailError }}</small>

        <Dialog
            v-model:visible="showConfirm"
            modal
            :header="props.project.name"
            :style="{ width: '92vw', maxWidth: '1080px' }"
            :draggable="false"
            @update:visible="onVisibleChange"
        >
            <div ref="checkoutHost" class="w-full" style="height: min(62vh, 560px); position: relative; overflow: hidden;">
                <div v-if="dodoIframeUrl" class="w-full h-full">
                    <iframe
                        :src="dodoIframeUrl"
                        class="w-full h-full border-none"
                        style="min-height: 500px;"
                        title="Dodo Payments Checkout"
                        allow="payment"
                        @error="handleDodoFrameError"
                    ></iframe>
                </div>
                <div v-else-if="opening" class="absolute top-0 left-0 w-full h-full flex align-items-center justify-content-center surface-0 z-1">
                    <i class="pi pi-spin pi-spinner text-4xl"></i>
                </div>
            </div>
            <template #footer>
                <div class="flex align-items-center justify-content-between gap-3">
                    <small v-if="dodoIframeUrl" class="text-500">
                        <i class="pi pi-shield mr-1"></i>This page will update automatically once payment is confirmed&nbsp;&middot;&nbsp;
                        <a href="#" class="text-500 font-bold" @click.prevent="confirmDodoPaid">Paid already? Refresh</a>
                    </small>
                    <Button label="Cancel" severity="secondary" text @click="closeDialog" />
                </div>
            </template>
        </Dialog>
    </div>
</template>

<style scoped>
:deep(.p-inputtext) {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    border-right: 0 !important;
}
:deep(.p-button) {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
}
.payment-toggle {
    height: 36px;
    padding: 3px;
    background: rgba(0, 0, 0, 0.05) !important;
    border: 1px solid var(--premium-border, rgba(0, 0, 0, 0.08));
    border-radius: 999px !important;
}
.payment-toggle__thumb {
    position: absolute;
    top: 3px;
    bottom: 3px;
    left: 3px;
    width: calc(50% - 3px);
    border-radius: 999px;
    background: linear-gradient(135deg, var(--theme-color, #10b981) 0%, #059669 100%);
    box-shadow: 0 12px 24px -8px rgba(16, 185, 129, 0.5);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.payment-toggle__thumb--right {
    transform: translateX(100%);
}
.payment-toggle__option {
    z-index: 1;
    border-radius: 999px !important;
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.payment-toggle__option--active {
    color: #fff;
}
.payment-toggle__option--inactive {
    color: var(--text-color-secondary, #6b7280);
}
.payment-toggle__option--inactive:hover {
    color: var(--text-color, #1e293b);
}
</style>
