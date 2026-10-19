<template>
  <div v-if="adSlot" ref="host" class="ad-slot" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { renderAd } from "../utils/ads";

const props = withDefaults(
  defineProps<{
    adSlot?: string;
    adClient?: string;
  }>(),
  { adSlot: "", adClient: "" }
);

const host = ref<HTMLElement | null>(null);

onMounted(() => {
  if (host.value) {
    renderAd(host.value, props.adSlot, props.adClient || undefined);
  }
});
</script>
