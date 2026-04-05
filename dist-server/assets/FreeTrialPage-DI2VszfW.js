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
const trialFeatures = [
  { icon: "timer", title: "Free Test Trial access", desc: "Complete access to our entire premium library." },
  { icon: "tv", title: "20,000+ channels", desc: "Global coverage including sports and cinema." },
  { icon: "hd", title: "4K/8K quality", desc: "Crystal clear streaming focusing on the Anti-Freezing experience." },
  { icon: "verified_user", title: "No commitment", desc: "No credit card required for the trial." }
];
const steps = [
  { num: "01", title: "Request", desc: "Fill out the form with your correct device type." },
  { num: "02", title: "Receive", desc: "Check your email for custom setup instructions." },
  { num: "03", title: "Stream", desc: "Log in and enjoy the forest canopy of content." }
];
function FreeTrialPage() {
  const [formData, setFormData] = useState({ name: "", email: "", device: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Forest IPTV, I would like to request a Free Test Trial.

Name: ${formData.name}
Email: ${formData.email}
Device: ${formData.device}`;
    const waUrl = `https://wa.me/212763569826?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setFormData({ name: "", email: "", device: "" });
  };
  return /* @__PURE__ */ jsxs("div", { className: "trial-page", id: "trial-page", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "IPTV Free Test Trial — Test Our 22,000+ Channels" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Claim your IPTV Free Test Trial with Forest IPTV today. Test our buffer-free servers, 4K sports channels, and VOD library before you buy. Instant activation!" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.forestiptv.pro/iptv-free-trial" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "IPTV Free Test Trial — Try Forest IPTV Today" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Test our buffer-free servers, 4K sports channels, and VOD library before you buy. Instant activation!" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://www.forestiptv.pro/og-image.png" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.forestiptv.pro/iptv-free-trial" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "IPTV Free Trial | Forest IPTV" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Instant activation for your 4K IPTV test. Try before you buy." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://www.forestiptv.pro/og-image.png" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.forestiptv.pro/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Free Test Trial",
            "item": "https://www.forestiptv.pro/iptv-free-trial"
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "trial-hero", id: "trial-hero", children: [
      /* @__PURE__ */ jsx("div", { className: "trial-hero__glow" }),
      /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("span", { className: "label-md", style: { color: "var(--tertiary)" }, children: "Risk-Free Testing" }),
        /* @__PURE__ */ jsx("h1", { className: "display-lg", style: { marginTop: "var(--space-3)" }, children: "Claim Your Forest IPTV Free Test Trial" }),
        /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "600px", margin: "var(--space-4) auto 0" }, children: "Witness the pinnacle of streaming technology. Claim your Free Test Trial to test our anti-freezing technology before committing." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "trial-content", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "trial-grid", children: [
      /* @__PURE__ */ jsxs("form", { className: "trial-form", onSubmit: handleSubmit, id: "trial-form", children: [
        /* @__PURE__ */ jsx("h2", { className: "headline-md", children: "Request Free Test Trial Access" }),
        /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-5)" }, children: "Fill out the form below. You will be redirected to WhatsApp to send your request instantly to our support team." }),
        /* @__PURE__ */ jsxs("div", { className: "trial-form__group", children: [
          /* @__PURE__ */ jsx("label", { className: "label-md", htmlFor: "trial-name", children: "Full Name" }),
          /* @__PURE__ */ jsx("input", { type: "text", id: "trial-name", name: "name", className: "input-field", placeholder: "Your name", value: formData.name, onChange: handleChange, required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "trial-form__group", children: [
          /* @__PURE__ */ jsx("label", { className: "label-md", htmlFor: "trial-email", children: "Email Address" }),
          /* @__PURE__ */ jsx("input", { type: "email", id: "trial-email", name: "email", className: "input-field", placeholder: "you@example.com", value: formData.email, onChange: handleChange, required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "trial-form__group", children: [
          /* @__PURE__ */ jsx("label", { className: "label-md", htmlFor: "trial-device", children: "Device Type" }),
          /* @__PURE__ */ jsxs("select", { id: "trial-device", name: "device", className: "input-field", value: formData.device, onChange: handleChange, required: true, children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Select your device" }),
            /* @__PURE__ */ jsx("option", { value: "firestick", children: "Amazon Fire Stick" }),
            /* @__PURE__ */ jsx("option", { value: "android", children: "Android Phone/Tablet" }),
            /* @__PURE__ */ jsx("option", { value: "ios", children: "iPhone/iPad" }),
            /* @__PURE__ */ jsx("option", { value: "smarttv", children: "Smart TV (Samsung/LG)" }),
            /* @__PURE__ */ jsx("option", { value: "androidtv", children: "Android TV Box" }),
            /* @__PURE__ */ jsx("option", { value: "pc", children: "Windows/Mac" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("button", { type: "submit", className: "btn btn-primary btn-lg", style: { width: "100%" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "play_circle" }),
          "Start Your Free Test Trial"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "trial-features", children: [
        /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-6)" }, children: "Why Test Forest IPTV?" }),
        /* @__PURE__ */ jsx("div", { className: "trial-features-grid", children: trialFeatures.map((f) => /* @__PURE__ */ jsxs("div", { className: "trial-feature-card", children: [
          /* @__PURE__ */ jsx("div", { className: "trial-feature-card__icon", children: /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: f.icon }) }),
          /* @__PURE__ */ jsx("h3", { className: "title-md", children: f.title }),
          /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)" }, children: f.desc })
        ] }, f.title)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", id: "trial-how", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("div", { className: "section-header", children: /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "How to Get Your Free IPTV Trial in 3 Steps" }) }),
      /* @__PURE__ */ jsx("div", { className: "trial-steps", children: steps.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "trial-step", children: [
        /* @__PURE__ */ jsx("div", { className: "trial-step__num", children: s.num }),
        /* @__PURE__ */ jsx("h3", { className: "title-md", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)" }, children: s.desc })
      ] }, s.num)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "trial-limitations", children: /* @__PURE__ */ jsxs("div", { className: "container", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Trial Limitations & Rules" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "600px", margin: "var(--space-4) auto var(--space-6)" }, children: "To ensure network stability for our paying customers, free trials are strictly limited to one per user/IP address. We employ advanced monitoring to prevent trial abuse." }),
      /* @__PURE__ */ jsxs("p", { className: "body-md", style: { color: "var(--outline)" }, children: [
        "Ready to commit? ",
        /* @__PURE__ */ jsx(Link, { to: "/buy-iptv-subscription", style: { color: "var(--primary)", textDecoration: "underline" }, children: "View our Premium Subscription Plans" }),
        " and skip the trial."
      ] })
    ] }) })
  ] });
}
export {
  FreeTrialPage as default
};
