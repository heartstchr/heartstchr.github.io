<script setup>
import { computed, ref } from 'vue';
import { submitPurchaseLead } from '../services/notionService';

const props = defineProps({
    project: {
        type: Object,
        required: true,
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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const price = computed(() => parseFloat(props.project.price || "0"));
const currency = computed(() => props.project.currency || "USD");
const purchasable = computed(() => price.value > 0 && !!RAZORPAY_KEY_ID);

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
            },
            modal: {
                ondismiss: () => {
                    checkoutActive.value = false;
                    rzpRef.value = null;
                    showConfirm.value = false;
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
};

const onVisibleChange = (visible) => {
    if (!visible) {
        closeDialog();
    }
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
    <div class="flex flex-column gap-1 w-full" @click.stop>
        <div class="flex flex-nowrap align-items-center gap-2 w-full">
            <template v-if="price > 0">
                <template v-if="purchasable && !success">
                    <InputText
                        v-model="buyerEmailInput"
                        type="email"
                        size="small"
                        placeholder="you@example.com"
                        :disabled="savingLead"
                        style="flex: 1 1 7rem; min-width: 0; width: auto;"
                        aria-label="Email address for purchase"
                        @keyup.enter="confirmBuyerEmail"
                    />
                    <Button
                        type="button"
                        :label="savingLead ? 'Please wait...' : 'Buy Now · ' + priceLabel"
                        icon="pi pi-credit-card"
                        size="small"
                        raised
                        :loading="savingLead || opening"
                        style="background: var(--theme-color); border-color: var(--theme-color); color: #fff;"
                        aria-label="Enter your email and buy this ready-made app securely via Razorpay"
                        @click.stop.prevent="confirmBuyerEmail"
                    />
                </template>
                <span v-else-if="success" class="text-sm font-bold" style="color: #16a34a;">
                    <i class="pi pi-check-circle mr-1"></i>Payment Successful
                </span>
                <span v-else class="font-bold text-900">{{ priceLabel }}</span>
            </template>
            <span v-else class="text-xs font-bold uppercase" style="color: #16a34a;">
                <i class="pi pi-download mr-1"></i> Free
            </span>
        </div>
        <small v-if="buyerEmailError && !success" class="p-error">{{ buyerEmailError }}</small>
    </div>

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
</template>
