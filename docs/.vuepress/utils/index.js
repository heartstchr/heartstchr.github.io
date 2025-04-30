import { JSDOM } from "jsdom";
import createDOMPurify from "dompurify";

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

export const sanitizedHtml = (htmlContent) => {
  return DOMPurify.sanitize(htmlContent, {
    ALLOWED_TAGS: ["p", "strong", "ul", "li", "a"],
    ALLOWED_ATTR: ["href", "target"],
  });
};
