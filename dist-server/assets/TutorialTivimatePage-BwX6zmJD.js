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
function TutorialTivimatePage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Set Up Forest IPTV on TiviMate",
    "description": "Learn how to easily install and configure the TiviMate app with your Forest IPTV subscription using Xtream Codes.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Install TiviMate",
        "text": "Download TiviMate directly from the Google Play Store on your Android TV or use Downloader on Firestick to install the APK."
      },
      {
        "@type": "HowToStep",
        "name": "Add Playlist via Xtream Codes",
        "text": "Open TiviMate, go to 'Add Playlist', and select 'Xtream Codes Login'."
      },
      {
        "@type": "HowToStep",
        "name": "Enter Details",
        "text": "Input the Server URL, Username, and Password provided in your Forest IPTV welcome email, then click Next."
      },
      {
        "@type": "HowToStep",
        "name": "Wait for EPG Download",
        "text": "Allow a few minutes for the TV Guide and channel list to process. The app is now ready to use."
      }
    ]
  };
  return /* @__PURE__ */ jsxs("div", { className: "tutorial-page", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "How to Set Up Forest IPTV on TiviMate (2026 Guide)" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Follow our step-by-step guide to configure Forest IPTV on TiviMate using Xtream Codes API or M3U playlist." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.forestiptv.pro/tutorials/how-to-setup-tivimate" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Forest IPTV: TiviMate Setup Guide" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Configure Forest IPTV on TiviMate in minutes using Xtream Codes API or M3U." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://www.forestiptv.pro/og-image.png" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.forestiptv.pro/tutorials/how-to-setup-tivimate" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "TiviMate Setup | Forest IPTV" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Step-by-step configuration for the TiviMate app." }),
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
            "name": "How to Setup TiviMate",
            "item": "https://www.forestiptv.pro/tutorials/how-to-setup-tivimate"
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
          "How to Set Up Forest IPTV on TiviMate ",
          /* @__PURE__ */ jsx("span", { className: "hero__title-accent", children: "(Step-by-Step)" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "640px", margin: "var(--space-4) auto var(--space-6)" }, children: "TiviMate offers the most premium, cable-like viewing experience. Follow this simple guide to deploy your streaming line." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", style: { padding: "var(--space-6) 0" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: "Don't have a playlist yet?" }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "var(--space-4)", justifyContent: "center" }, children: [
        /* @__PURE__ */ jsx(Link, { to: "/buy-iptv-subscription", className: "btn btn-primary", children: "Get Your Subscription" }),
        /* @__PURE__ */ jsx("span", { style: { color: "var(--outline)", alignSelf: "center" }, children: "or" }),
        /* @__PURE__ */ jsx(Link, { to: "/iptv-free-trial", className: "btn btn-secondary", children: "Try a Free Trial" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "800px", margin: "0 auto", background: "var(--surface-container-low)", padding: "var(--space-8)", borderRadius: "var(--radius-xl)" }, children: [
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)", color: "var(--primary)" }, children: "What You Need Before Starting" }),
      /* @__PURE__ */ jsxs("ul", { style: { listStyleType: "disc", listStylePosition: "inside", color: "var(--on-surface)", marginBottom: "var(--space-8)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }, children: [
        /* @__PURE__ */ jsx("li", { children: "An Android TV Box, Nvidia Shield, or Amazon Firestick." }),
        /* @__PURE__ */ jsx("li", { children: "Your Forest IPTV subscription email (containing your Server URL, Username, and Password)." }),
        /* @__PURE__ */ jsx("li", { children: "An active internet connection." })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)" }, children: "Step 1: Download and Install TiviMate" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: 'If you are on an Android TV device, search for "TiviMate IPTV Player" in the Google Play Store and click Install. If you are using a Firestick, open your Downloader app and enter the shortcode for TiviMate.' }),
      /* @__PURE__ */ jsx("div", { style: { width: "100%", height: "300px", background: "var(--surface-container-highest)", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--outline)", marginBottom: "var(--space-8)" }, children: "[Screenshot: TiviMate App Icon in App Store]" }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)" }, children: "Step 2: Login via Xtream Codes API" }),
      /* @__PURE__ */ jsxs("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: [
        "Open the TiviMate app. Select ",
        /* @__PURE__ */ jsx("strong", { children: '"Add Playlist"' }),
        ". From the options provided, choose ",
        /* @__PURE__ */ jsx("strong", { children: '"Xtream Codes login"' }),
        ". This is highly recommended over M3U links."
      ] }),
      /* @__PURE__ */ jsx("div", { style: { width: "100%", height: "300px", background: "var(--surface-container-highest)", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--outline)", marginBottom: "var(--space-8)" }, children: "[Screenshot: Selecting Xtream Codes Login screen]" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: 'Enter the Server Address, Username, and Password exactly as they appear in your welcome email. Make sure "Include VOD" is enabled.' }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)" }, children: "Step 3: Configuring the EPG (TV Guide)" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: 'Click "Next" or "Process". TiviMate will connect to the server, download the latest channel list, and import the Electronic Program Guide (EPG). Depending on your internet connection, this may take 1-3 minutes.' }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)", marginTop: "var(--space-10)" }, children: "Troubleshooting Common TiviMate Issues" }),
      /* @__PURE__ */ jsxs("div", { style: { background: "var(--surface-container)", padding: "var(--space-6)", borderRadius: "var(--radius-md)" }, children: [
        /* @__PURE__ */ jsx("h3", { className: "title-md", style: { marginBottom: "var(--space-2)" }, children: '"Playlist Could Not Be Updated"' }),
        /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: "This usually means there is a typo in your server URL or credentials. Double-check for extra spaces." }),
        /* @__PURE__ */ jsx("h3", { className: "title-md", style: { marginBottom: "var(--space-2)" }, children: "No EPG Data" }),
        /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)" }, children: "Navigate to Settings > EPG > Update EPG manually. If it still fails, contact support to reset your line." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", style: { padding: "var(--space-6) 0 var(--space-12)" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: "Ready to unlock TiviMate's full potential?" }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: "var(--space-4)", justifyContent: "center" }, children: /* @__PURE__ */ jsx(Link, { to: "/buy-iptv-subscription", className: "btn btn-primary", children: "Get Your Subscription" }) })
    ] }) })
  ] });
}
export {
  TutorialTivimatePage as default
};
