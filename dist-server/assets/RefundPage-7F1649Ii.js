import { jsxs, jsx } from "react/jsx-runtime";
/* empty css                   */
function RefundPage() {
  return /* @__PURE__ */ jsxs("div", { className: "legal-page", id: "refund-page", children: [
    /* @__PURE__ */ jsxs("section", { className: "legal-hero", children: [
      /* @__PURE__ */ jsx("div", { className: "legal-hero__glow" }),
      /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("h1", { className: "display-lg", children: "Refund Policy" }),
        /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)" }, children: "Last updated: January 2025" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container legal-content", children: [
      /* @__PURE__ */ jsx("h2", { className: "headline-md", children: "1. Money-Back Guarantee" }),
      /* @__PURE__ */ jsx("p", { children: "We stand behind the quality of Forest IPTV. If you are not completely satisfied with our service, we offer a 7-day money-back guarantee for all new subscriptions." }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", children: "2. Eligibility" }),
      /* @__PURE__ */ jsx("p", { children: "To be eligible for a refund, you must request it within 7 days of your initial purchase. This policy applies strictly to the first purchase of a subscription and does not apply to renewals or subsequent purchases." }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", children: "3. How to Request a Refund" }),
      /* @__PURE__ */ jsx("p", { children: "To request a refund, please contact our support team at support@forestiptv.pro or open a ticket through your account dashboard. Include your order number and the email address associated with your account." }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", children: "4. Processing Time" }),
      /* @__PURE__ */ jsx("p", { children: "Refunds will be processed back to the original method of payment. Please allow 5-10 business days for the credit to appear on your statement, depending on your financial institution." }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", children: "5. Exceptions" }),
      /* @__PURE__ */ jsx("p", { children: "We reserve the right to refuse a refund if we detect abuse of our policy, such as repeated refund requests or violations of our Terms of Service." })
    ] }) })
  ] });
}
export {
  RefundPage as default
};
