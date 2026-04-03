import { jsxs, jsx } from "react/jsx-runtime";
import { H as Helmet, L as Link } from "../entry-server.js";
import "react";
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "react-dom";
function TutorialSmartersPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Set Up Forest IPTV on IPTV Smarters Pro",
    "description": "Learn how to easily install and configure IPTV Smarters Pro with your Forest IPTV subscription.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Download IPTV Smarters Pro",
        "text": "Download the app from the Apple App Store, Google Play Store, or via Downloader on Firestick."
      },
      {
        "@type": "HowToStep",
        "name": "Select Login Type",
        "text": "Open the app and select 'Login with Xtream Codes API'."
      },
      {
        "@type": "HowToStep",
        "name": "Enter Credentials",
        "text": "Input any Name, followed by the Username, Password, and Server URL provided in your welcome email."
      },
      {
        "@type": "HowToStep",
        "name": "Start Watching",
        "text": "Click 'Add User' and wait for the channels, VOD, and series to load."
      }
    ]
  };
  return /* @__PURE__ */ jsxs("div", { className: "tutorial-page", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "How to Set Up Forest IPTV on Smarters Pro (2026 Guide)" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Step-by-step guide to installing Forest IPTV on IPTV Smarters Pro for Android, iOS, Windows, Mac, and Smart TVs." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.forestiptv.pro/tutorials/how-to-setup-smarters-pro" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "IPTV Smarters Pro Setup | Forest IPTV" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Learn how to install and configure Forest IPTV on Smarters Pro for any device." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://www.forestiptv.pro/og-image.png" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.forestiptv.pro/tutorials/how-to-setup-smarters-pro" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Smarters Pro Guide | Forest IPTV" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Step-by-step installation for Smarters Pro on all platforms." }),
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
            "name": "Setup Guides",
            "item": "https://www.forestiptv.pro/setup-guides"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "How to Setup Smarters Pro",
            "item": "https://www.forestiptv.pro/tutorials/how-to-setup-smarters-pro"
          }
        ]
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(howToSchema) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "hero", style: { minHeight: "50vh", paddingBottom: "var(--space-12)" }, children: [
      /* @__PURE__ */ jsx("div", { className: "hero__bg-effects", children: /* @__PURE__ */ jsx("div", { className: "hero__glow hero__glow--1" }) }),
      /* @__PURE__ */ jsxs("div", { className: "container hero__content", style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsx("span", { className: "label-md", style: { color: "var(--primary)", marginBottom: "var(--space-4)", display: "inline-block" }, children: "Installation Guide" }),
        /* @__PURE__ */ jsxs("h1", { className: "display-lg hero__title", children: [
          "How to Set Up Forest IPTV on Smarters Pro ",
          /* @__PURE__ */ jsx("span", { className: "hero__title-accent", children: "(Step-by-Step)" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "640px", margin: "var(--space-4) auto var(--space-6)" }, children: "IPTV Smarters Pro is one of the most versatile streaming apps. Follow this guide to get it running on your favorite device." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", style: { padding: "var(--space-6) 0" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: "Don't have a playlist yet?" }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "var(--space-4)", justifyContent: "center" }, children: [
        /* @__PURE__ */ jsx(Link, { to: "/buy-iptv-subscription", className: "btn btn-primary", children: "Get Your Subscription" }),
        /* @__PURE__ */ jsx("span", { style: { color: "var(--outline)", alignSelf: "center" }, children: "or" }),
        /* @__PURE__ */ jsx(Link, { to: "/iptv-free-trial", className: "btn btn-secondary", children: "Try a Free Test Trial" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "800px", margin: "0 auto", background: "var(--surface-container-low)", padding: "var(--space-8)", borderRadius: "var(--radius-xl)" }, children: [
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)", color: "var(--primary)" }, children: "What You Need Before Starting" }),
      /* @__PURE__ */ jsxs("ul", { style: { listStyleType: "disc", listStylePosition: "inside", color: "var(--on-surface)", marginBottom: "var(--space-8)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }, children: [
        /* @__PURE__ */ jsx("li", { children: "A compatible device (Android, iOS, Firestick, PC, Mac, or Smart TV)." }),
        /* @__PURE__ */ jsx("li", { children: "Your Forest IPTV subscription configuration email." })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)" }, children: "Step 1: Download Smarters Pro" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: `Search for "IPTV Smarters Pro" or "Smarters Player Lite" in your device's app store. If you are on Amazon Firestick, you will need to sideload it using the Downloader app.` }),
      /* @__PURE__ */ jsx("div", { style: { width: "100%", height: "300px", background: "var(--surface-container-highest)", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--outline)", marginBottom: "var(--space-8)" }, children: "[Screenshot: Smarters Pro App Interface]" }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)" }, children: "Step 2: Login via Xtream Codes" }),
      /* @__PURE__ */ jsxs("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: [
        "Open the app and accept the Terms of Service. Select ",
        /* @__PURE__ */ jsx("strong", { children: '"Login with Xtream Codes API"' }),
        " from the menu options."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: [
        "Fill out the fields as follows:",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("strong", { children: "Any Name:" }),
        " Forest IPTV",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("strong", { children: "Username:" }),
        " (Found in your email)",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("strong", { children: "Password:" }),
        " (Found in your email)",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("strong", { children: "URL:" }),
        " (The server URL link provided)"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)" }, children: "Step 3: Add User and Load Content" }),
      /* @__PURE__ */ jsxs("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: [
        "Click ",
        /* @__PURE__ */ jsx("strong", { children: '"Add User"' }),
        ". The app will connect to our servers and download the Live TV, Movies, and Series catalogs. It may take a minute on the first launch."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)", marginTop: "var(--space-10)" }, children: "Troubleshooting" }),
      /* @__PURE__ */ jsxs("div", { style: { background: "var(--surface-container)", padding: "var(--space-6)", borderRadius: "var(--radius-md)" }, children: [
        /* @__PURE__ */ jsx("h3", { className: "title-md", style: { marginBottom: "var(--space-2)" }, children: '"Invalid Details" Error' }),
        /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: "Double-check your Username and Password. They are strictly case-sensitive. Ensure there are no spaces at the end of the server URL." }),
        /* @__PURE__ */ jsx("h3", { className: "title-md", style: { marginBottom: "var(--space-2)" }, children: "Blank Screen when Playing" }),
        /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)" }, children: 'Navigate to Settings inside Smarters Pro, go to Player Settings, and try toggling the "Hardware Decoder" on or off.' })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", style: { padding: "var(--space-6) 0 var(--space-12)" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: "Ready to unlock 22,000+ channels on Smarters Pro?" }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: "var(--space-4)", justifyContent: "center" }, children: /* @__PURE__ */ jsx(Link, { to: "/buy-iptv-subscription", className: "btn btn-primary", children: "Get Your Subscription" }) })
    ] }) })
  ] });
}
export {
  TutorialSmartersPage as default
};
