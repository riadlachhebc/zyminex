import { jsxs, jsx } from "react/jsx-runtime";
/* empty css                   */
function PrivacyPage() {
  return /* @__PURE__ */ jsxs("div", { className: "legal-page", id: "privacy-page", children: [
    /* @__PURE__ */ jsxs("section", { className: "legal-hero", children: [
      /* @__PURE__ */ jsx("div", { className: "legal-hero__glow" }),
      /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("h1", { className: "display-lg", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)" }, children: "Last updated: January 2025" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container legal-content", children: [
      /* @__PURE__ */ jsx("h2", { className: "headline-md", children: "1. Information We Collect" }),
      /* @__PURE__ */ jsx("p", { children: "We collect information you provide directly to us when you register for an account, subscribe to our newsletter, request support, or otherwise communicate with us. This may include your name, email address, payment information, and device details necessary for providing the service." }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", children: "2. How We Use Your Information" }),
      /* @__PURE__ */ jsx("p", { children: "We use the information we collect to provide, maintain, and improve our services, communicate with you about your account, process transactions, and send you technical notices and support messages." }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", children: "3. Information Sharing" }),
      /* @__PURE__ */ jsx("p", { children: "We do not share your personal information with third parties except as necessary to process your payments or comply with legal obligations. Your privacy and data security are our top priorities." }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", children: "4. Data Security" }),
      /* @__PURE__ */ jsx("p", { children: "We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure." }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", children: "5. Your Choices" }),
      /* @__PURE__ */ jsx("p", { children: "You may update, correct, or delete your account information at any time by logging into your account or contacting us. You may also opt out of receiving promotional communications from us." })
    ] }) })
  ] });
}
export {
  PrivacyPage as default
};
