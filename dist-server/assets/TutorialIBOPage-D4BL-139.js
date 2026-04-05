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
function TutorialIBOPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Set Up Forest IPTV on IBO Player",
    "description": "Learn how to easily install and configure IBO Player on your Smart TV with your Forest IPTV subscription.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Download IBO Player",
        "text": "Find and install IBO Player from the LG Content Store or Samsung App Store."
      },
      {
        "@type": "HowToStep",
        "name": "Get Your MAC Address",
        "text": "Open IBO Player and note down the Device MAC address and Device Key displayed on screen."
      },
      {
        "@type": "HowToStep",
        "name": "Upload Playlist",
        "text": "Visit the official IBO Player website portal to upload your Forest IPTV M3U link using your MAC address."
      },
      {
        "@type": "HowToStep",
        "name": "Restart App",
        "text": "Close and reopen IBO Player on your TV to load the newly added channels."
      }
    ]
  };
  return /* @__PURE__ */ jsxs("div", { className: "tutorial-page", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "How to Set Up Forest IPTV on IBO Player (2026 Guide)" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Step-by-step guide to installing Forest IPTV on IBO Player for Samsung Tizen, LG webOS, and Android TVs." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.forestiptv.pro/tutorials/how-to-setup-ibo-player" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "IBO Player Setup Guide | Forest IPTV" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Learn how to install and configure Forest IPTV on IBO Player for Samsung and LG TVs." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://www.forestiptv.pro/og-image.png" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.forestiptv.pro/tutorials/how-to-setup-ibo-player" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "IBO Player Setup | Forest IPTV" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Step-by-step instructions for IBO Player on all Smart TVs." }),
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
            "name": "How to Setup IBO Player",
            "item": "https://www.forestiptv.pro/tutorials/how-to-setup-ibo-player"
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
          "How to Set Up Forest IPTV on IBO Player ",
          /* @__PURE__ */ jsx("span", { className: "hero__title-accent", children: "(Step-by-Step)" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "640px", margin: "var(--space-4) auto var(--space-6)" }, children: "IBO Player is widely considered the best choice for Samsung and LG Smart TVs. Learn how to configure your Forest IPTV playlist seamlessly." })
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
        /* @__PURE__ */ jsx("li", { children: "A Samsung Tizen or LG webOS Smart TV (or any Android TV)." }),
        /* @__PURE__ */ jsx("li", { children: "A mobile phone or computer to access the IBO Player website." }),
        /* @__PURE__ */ jsx("li", { children: "Your Forest IPTV M3U Playlist URL." })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)" }, children: "Step 1: Download IBO Player" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: 'Turn on your Smart TV, navigate to the App Store (LG Content Store or Samsung Apps), search for "IBO Player", and install it.' }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)" }, children: "Step 2: Obtain MAC Address" }),
      /* @__PURE__ */ jsxs("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: [
        "Open the app on your TV. The main screen will display your ",
        /* @__PURE__ */ jsx("strong", { children: "Device MAC Address" }),
        " and your ",
        /* @__PURE__ */ jsx("strong", { children: "Device Key" }),
        ". Keep these visible on your screen."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)" }, children: "Step 3: Upload Forest IPTV Playlist" }),
      /* @__PURE__ */ jsxs("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: [
        "On your phone or PC, go to the official IBO Player upload portal (website usually listed on the app screen).",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        'Enter the Device MAC Address and Device Key. Click on "Add Playlist". Give it a name (like Forest IPTV) and paste your long M3U playlist link provided in your welcome email. Save the playlist.'
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)" }, children: "Step 4: Restart App and Enjoy" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: "Return to your TV, close the IBO Player app entirely, and reopen it. Your Forest IPTV channels and VODs will now begin loading." }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)", marginTop: "var(--space-10)" }, children: "Troubleshooting" }),
      /* @__PURE__ */ jsxs("div", { style: { background: "var(--surface-container)", padding: "var(--space-6)", borderRadius: "var(--radius-md)" }, children: [
        /* @__PURE__ */ jsx("h3", { className: "title-md", style: { marginBottom: "var(--space-2)" }, children: "IBO Player Trial Expiration" }),
        /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: "Note that IBO Player is a premium app that requires a one-time activation fee (usually around €8) to the app developer after a 7-day trial. This is separate from your Forest IPTV subscription." }),
        /* @__PURE__ */ jsx("h3", { className: "title-md", style: { marginBottom: "var(--space-2)" }, children: "Playlist Missing" }),
        /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)" }, children: 'If your channels do not show up, press the "Reload" button on the TV remote within the app, or double-check that your MAC address was entered without typos on the upload portal.' })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", style: { padding: "var(--space-6) 0 var(--space-12)" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: "Ready to unlock amazing TV directly on your Smart screen?" }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: "var(--space-4)", justifyContent: "center" }, children: /* @__PURE__ */ jsx(Link, { to: "/buy-iptv-subscription", className: "btn btn-primary", children: "Get Your Subscription" }) })
    ] }) })
  ] });
}
export {
  TutorialIBOPage as default
};
