import { jsxs, jsx } from "react/jsx-runtime";
import { H as Helmet } from "../entry-server.js";
import "react";
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "react-dom";
function ResellerPage() {
  return /* @__PURE__ */ jsxs("div", { className: "reseller-page", id: "reseller-page", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "IPTV Reseller Panel — Start Your Own IPTV Business" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Join the Forest IPTV reseller program. Get access to the best IPTV reseller panel with 4K streaming and 24/7 technical support." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.forestiptv.pro/iptv-reseller-panel" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "IPTV Reseller Panel — Start Your IPTV Business" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Join the Forest IPTV reseller program. Get access to our premium 4K IPTV panel." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://www.forestiptv.pro/og-image.png" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.forestiptv.pro/iptv-reseller-panel" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Forest IPTV Reseller Program" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Manage your own customers with our premium IPTV reseller panel." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://www.forestiptv.pro/og-image.png" }),
      "/",
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
            "name": "IPTV Reseller Panel",
            "item": "https://www.forestiptv.pro/iptv-reseller-panel"
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "hero", style: { minHeight: "60vh", paddingBottom: "var(--space-12)" }, children: [
      /* @__PURE__ */ jsx("div", { className: "hero__bg-effects", children: /* @__PURE__ */ jsx("div", { className: "hero__glow hero__glow--1" }) }),
      /* @__PURE__ */ jsxs("div", { className: "container hero__content", style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsx("span", { className: "label-md", style: { color: "var(--primary)", marginBottom: "var(--space-4)", display: "inline-block" }, children: "B2B Program" }),
        /* @__PURE__ */ jsxs("h1", { className: "display-lg hero__title", children: [
          "Start Earning with the ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "hero__title-accent", children: "Forest IPTV Reseller Panel" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "640px", margin: "var(--space-4) auto var(--space-6)" }, children: "Start your own fully white-labeled streaming business. Purchase discounted credits, manage your own clients, and set your own profit margins using our robust infrastructure." }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: "var(--space-4)", justifyContent: "center" }, children: /* @__PURE__ */ jsx(
          "a",
          {
            href: `https://wa.me/212763569826?text=${encodeURIComponent("Hello Forest IPTV, I am interested in the Reseller Program. Please send me the pricing and credit details.")}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "btn btn-primary btn-lg",
            children: "Apply for Reseller Account"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", children: /* @__PURE__ */ jsxs("div", { className: "container", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("h2", { className: "display-sm", style: { marginBottom: "var(--space-10)" }, children: "How Our IPTV Reseller Program Works" }),
      /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)", maxWidth: "900px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { style: { width: "48px", height: "48px", margin: "0 auto var(--space-4)", background: "var(--primary)", color: "var(--on-primary-fixed)", borderRadius: "var(--radius-full)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", fontWeight: 800 }, children: "1" }),
          /* @__PURE__ */ jsx("h3", { className: "title-md", style: { marginBottom: "var(--space-2)" }, children: "Buy Credits" }),
          /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)" }, children: "Purchase server credits in bulk at a massive discount. 1 Credit = 1 Month of service." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { style: { width: "48px", height: "48px", margin: "0 auto var(--space-4)", background: "var(--primary)", color: "var(--on-primary-fixed)", borderRadius: "var(--radius-full)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", fontWeight: 800 }, children: "2" }),
          /* @__PURE__ */ jsx("h3", { className: "title-md", style: { marginBottom: "var(--space-2)" }, children: "Generate Lines" }),
          /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)" }, children: "Log into your custom dashboard and generate m3u links or Xtream Codes for your clients instantly." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { style: { width: "48px", height: "48px", margin: "0 auto var(--space-4)", background: "var(--primary)", color: "var(--on-primary-fixed)", borderRadius: "var(--radius-full)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", fontWeight: 800 }, children: "3" }),
          /* @__PURE__ */ jsx("h3", { className: "title-md", style: { marginBottom: "var(--space-2)" }, children: "Keep 100% Profit" }),
          /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)" }, children: "Sell the subscriptions to your customers at whatever retail price you choose." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "reseller-pricing", children: /* @__PURE__ */ jsxs("div", { className: "container", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("h2", { className: "display-sm", style: { marginBottom: "var(--space-6)" }, children: "Reseller Credits & Pricing" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "700px", margin: "0 auto var(--space-8)" }, children: "We offer the most competitive wholesale rates in the industry. Our pricing is tiered based on volume to ensure maximum profit margins for your business. Contact our B2B team directly on WhatsApp for our current rate card and panel setup options." }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: "var(--space-4)", justifyContent: "center" }, children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: `https://wa.me/212763569826?text=${encodeURIComponent("Hello Forest IPTV, I am interested in the Reseller Program. Please send me the pricing and credit details.")}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "btn btn-primary btn-lg",
          children: [
            /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { marginRight: "8px" }, children: "chat" }),
            "Contact for Reseller Pricing"
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-10)" }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "display-sm", style: { marginBottom: "var(--space-4)" }, children: "Benefits of Partnering with Forest IPTV" }),
        /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)" }, children: "Don't risk your reputation on unstable servers. By reselling Forest IPTV, you are selling the industry's highest quality streams. Our robust anti-freezing tech means fewer support tickets for you, resulting in happier, long-term clients and recurring revenue." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "display-sm", style: { marginBottom: "var(--space-4)" }, children: "Manage Your Customers with Our Dashboard" }),
        /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)" }, children: "Our proprietary Reseller Panel gives you ultimate control. Generate 24-hr trial links in seconds, instantly extend expired lines, MAC address management, and monitor active connections all from one secure, mobile-friendly interface." })
      ] })
    ] }) }) })
  ] });
}
export {
  ResellerPage as default
};
