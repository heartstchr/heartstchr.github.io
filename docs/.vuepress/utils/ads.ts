import { ADSENSE_CLIENT } from "../data/ads";

function pushAdsense(): void {
  try {
    const w = window as unknown as { adsbygoogle?: unknown[] };
    w.adsbygoogle = w.adsbygoogle || [];
    w.adsbygoogle.push({});
  } catch {
  }
}

export function renderAd(
  container: HTMLElement,
  slot: string,
  client: string = ADSENSE_CLIENT
): void {
  if (!slot || !container) return;

  const ins = document.createElement("ins");
  ins.className = "adsbygoogle";
  ins.setAttribute("data-ad-client", client);
  ins.setAttribute("data-ad-slot", slot);
  ins.setAttribute("data-ad-format", "auto");
  ins.setAttribute("data-full-width-responsive", "true");
  container.appendChild(ins);
  pushAdsense();
}

export function insertInlineAd(contentId: string, slot: string): void {
  if (!slot || typeof document === "undefined") return;

  const content = document.getElementById(contentId);
  if (!content || content.querySelector(".ad-slot--inline")) return;

  const paragraphs = Array.from(content.querySelectorAll(":scope > p"));
  if (paragraphs.length < 6) return;

  const anchor = paragraphs[3];
  const wrapper = document.createElement("div");
  wrapper.className = "ad-slot ad-slot--inline";
  anchor.insertAdjacentElement("afterend", wrapper);
  renderAd(wrapper, slot);
}
