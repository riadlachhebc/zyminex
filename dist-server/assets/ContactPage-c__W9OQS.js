import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { H as Helmet, L as Link } from "../entry-server.js";
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "react-dom";
function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Forest IPTV Support,

Name: ${formData.name}
Subject: ${formData.subject}

Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/212763569826?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setFormData({ name: formData.name, email: formData.email, subject: "", message: "" });
  };
  return /* @__PURE__ */ jsxs("div", { className: "contact-page", id: "contact-page", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Contact Forest IPTV — 24/7 Support via WhatsApp" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Get 24/7 support from Forest IPTV. Contact us via WhatsApp for instant help with setup, billing, or technical issues." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.forestiptv.pro/contact" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Contact Forest IPTV — 24/7 Support via WhatsApp" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Get 24/7 support from Forest IPTV. Contact us via WhatsApp for instant help with setup, billing, or technical issues." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://www.forestiptv.pro/og-image.png" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.forestiptv.pro/contact" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Contact Forest IPTV — 24/7 Support" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Need help? Contact us via WhatsApp for instant support with your IPTV setup." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://www.forestiptv.pro/og-image.png" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "contact-hero", id: "contact-hero", children: [
      /* @__PURE__ */ jsx("div", { className: "contact-hero__glow" }),
      /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("span", { className: "label-md", style: { color: "var(--primary)" }, children: "Support" }),
        /* @__PURE__ */ jsx("h1", { className: "display-lg", style: { marginTop: "var(--space-3)" }, children: "Contact Forest IPTV Support" }),
        /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "800px", margin: "var(--space-4) auto 0" }, children: "Our support team is available 24 hours a day, 7 days a week. Whether you need help with installation, have a billing question, or are experiencing technical issues — we are always just one message away." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "contact-content", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "contact-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "contact-info", children: [
        /* @__PURE__ */ jsxs("div", { className: "contact-info-card", children: [
          /* @__PURE__ */ jsx("div", { className: "contact-info-card__icon", children: /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "schedule" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "title-md", children: "Response Times" }),
            /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)" }, children: "We typically respond within 5–15 minutes during peak hours and within 30 minutes at night. Our goal is to get you streaming as fast as possible." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "contact-info-card", children: [
          /* @__PURE__ */ jsx("div", { className: "contact-info-card__icon", children: /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "help_outline" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "title-md", children: "Before You Contact Us" }),
            /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: "Check our FAQ page first — many common questions are already answered there. If you still need help, we are happy to assist." }),
            /* @__PURE__ */ jsx(Link, { to: "/faq", className: "btn btn-secondary", style: { width: "100%", justifyContent: "center" }, children: "View FAQ First" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "contact-whatsapp", children: [
          /* @__PURE__ */ jsx("h3", { className: "headline-md", children: "How to Reach Us" }),
          /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-5)" }, children: "We currently offer support through WhatsApp for the fastest response times. Simply send us a message and our team will respond within minutes." }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `https://wa.me/212763569826?text=${encodeURIComponent("Hello Forest IPTV Support, I am contacting you from the contact page for assistance.")}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "btn btn-primary btn-lg",
              id: "contact-whatsapp-btn",
              style: { width: "100%" },
              children: [
                /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "chat" }),
                "Chat on WhatsApp"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("form", { className: "contact-form", onSubmit: handleSubmit, id: "contact-form", children: [
        /* @__PURE__ */ jsx("h3", { className: "headline-md", style: { marginBottom: "var(--space-3)" }, children: "What We Can Help With" }),
        /* @__PURE__ */ jsxs("ul", { className: "body-md", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-6)", paddingLeft: "var(--space-5)" }, children: [
          /* @__PURE__ */ jsx("li", { children: "Setting up IPTV on your device" }),
          /* @__PURE__ */ jsx("li", { children: "Troubleshooting buffering or connection issues" }),
          /* @__PURE__ */ jsx("li", { children: "Account activation and credentials" }),
          /* @__PURE__ */ jsx("li", { children: "Payment and subscription questions" }),
          /* @__PURE__ */ jsx("li", { children: "Upgrading or changing your plan" }),
          /* @__PURE__ */ jsx("li", { children: "General IPTV questions" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "contact-form__group", children: [
          /* @__PURE__ */ jsx("label", { className: "label-md", htmlFor: "contact-name", children: "Full Name" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "contact-name",
              name: "name",
              className: "input-field",
              placeholder: "Your name",
              value: formData.name,
              onChange: handleChange,
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "contact-form__group", children: [
          /* @__PURE__ */ jsx("label", { className: "label-md", htmlFor: "contact-email", children: "Email Address" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              id: "contact-email",
              name: "email",
              className: "input-field",
              placeholder: "you@example.com",
              value: formData.email,
              onChange: handleChange,
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "contact-form__group", children: [
          /* @__PURE__ */ jsx("label", { className: "label-md", htmlFor: "contact-subject", children: "Subject" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "contact-subject",
              name: "subject",
              className: "input-field",
              placeholder: "How can we help?",
              value: formData.subject,
              onChange: handleChange,
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "contact-form__group", children: [
          /* @__PURE__ */ jsx("label", { className: "label-md", htmlFor: "contact-message", children: "Message" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "contact-message",
              name: "message",
              className: "input-field",
              placeholder: "Describe your issue or question...",
              value: formData.message,
              onChange: handleChange,
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("button", { type: "submit", className: "btn btn-primary btn-lg", style: { width: "100%" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "chat" }),
          "Start Chat on WhatsApp"
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  ContactPage as default
};
