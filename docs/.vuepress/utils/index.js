import DOMPurify from "dompurify";

export const sanitizedHtml = (htmlContent) => {
  return DOMPurify.sanitize(htmlContent, {
    ALLOWED_TAGS: ["p", "strong", "ul", "li", "a"],
    ALLOWED_ATTR: ["href", "target"],
  });
};