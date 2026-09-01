<script setup>
import { computed, ref } from 'vue';
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
const purchasable = computed(() => price.value > 0 && !!RAZORPAY_KEY_ID);
const workspaceUrl = computed(() => props.project.workspace || props.project.link || "");

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

const openCheckout = async (buyerEmail) => {
    if (!purchasable.value || opening.value) return;
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

const closeDialog = () => {
    if (rzpRef.value) {
        rzpRef.value.close();
        rzpRef.value = null;
    }
    checkoutActive.value = false;
    showConfirm.value = false;
    restoreScroll();
};

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
            console.warn("[Razorpay] Could not save lead:", res.error);
        }
        localStorage.setItem("collected_email", email);
        window.open(workspaceUrl.value, "_blank", "noopener,noreferrer");
        downloaded.value = true;
    } catch (err) {
        console.warn("[Razorpay] Could not save lead:", err);
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
            console.warn("[Razorpay] Could not save buyer email:", res.error);
        }
    } catch (err) {
        console.warn("[Razorpay] Could not save buyer email:", err);
    }
    savingLead.value = false;
    openCheckout(email);
};
</script>

<template>
    <div class="w-full" @click.stop>
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
                        aria-label="Enter your email and buy this ready-made app securely via Razorpay"
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
                <div v-if="opening" class="absolute top-0 left-0 w-full h-full flex align-items-center justify-content-center surface-0 z-1">
                    <i class="pi pi-spin pi-spinner text-4xl"></i>
                </div>
            </div>
            <template #footer>
                <div class="flex justify-content-end gap-2">
                    <Button label="Cancel" severity="secondary" text @click="closeDialog" :disabled="opening" />
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
</style>
