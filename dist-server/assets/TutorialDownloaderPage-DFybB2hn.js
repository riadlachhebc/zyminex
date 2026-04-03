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
function TutorialDownloaderPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Install Apps Using Downloader on Firestick",
    "description": "Learn how to easily sideload Forest IPTV Apps using the Downloader App on your Amazon Fire TV Stick.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enable Developer Options",
        "text": "Go to Settings > My Fire TV > Developer Options and turn on Apps from Unknown Sources for Downloader."
      },
      {
        "@type": "HowToStep",
        "name": "Get Downloader App",
        "text": "From the Home screen, find the Amazon App Store and search for 'Downloader'. Install and open it."
      },
      {
        "@type": "HowToStep",
        "name": "Enter Direct Code",
        "text": "Open Downloader, allow permissions, and enter the fast-download code provided by the Forest IPTV team."
      },
      {
        "@type": "HowToStep",
        "name": "Install App",
        "text": "Click Go, wait for the APK to download, and click Install. Then proceed to launch your IPTV app."
      }
    ]
  };
  return /* @__PURE__ */ jsxs("div", { className: "tutorial-page", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "How to Sideload Apps on Firestick using Downloader" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Step-by-step guide to sideloading the Forest IPTV Android app or TiviMate on Amazon Firestick via the Downloader App." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.forestiptv.pro/tutorials/how-to-set-up-downloader" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Firestick Sideloading Guide | Forest IPTV" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Learn how to sideload the Forest IPTV app on Amazon Firestick via Downloader." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://www.forestiptv.pro/og-image.png" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.forestiptv.pro/tutorials/how-to-set-up-downloader" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Firestick Setup Guide | Forest IPTV" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Step-by-step sideloading instructions for your Firestick." }),
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
            "name": "How to Setup Downloader",
            "item": "https://www.forestiptv.pro/tutorials/how-to-set-up-downloader"
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
          "How to Install Apps via Downloader ",
          /* @__PURE__ */ jsx("span", { className: "hero__title-accent", children: "(Firestick)" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "640px", margin: "var(--space-4) auto var(--space-6)" }, children: "The Amazon Fire TV Stick restricts non-Amazon apps by default. Learn how to bypass this and sideload our premium streaming client instantly." })
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
        /* @__PURE__ */ jsx("li", { children: "An Amazon Firestick connected to your TV." }),
        /* @__PURE__ */ jsx("li", { children: "An active Amazon account signed in to the Firestick." }),
        /* @__PURE__ */ jsx("li", { children: "The numerical Downloader code given in your Forest IPTV portal." })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)" }, children: "Step 1: Prep Your Firestick Settings" }),
      /* @__PURE__ */ jsxs("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: [
        "On your Firestick home screen, go to the ",
        /* @__PURE__ */ jsx("strong", { children: "Settings" }),
        " icon on the far right.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        "Select ",
        /* @__PURE__ */ jsx("strong", { children: "My Fire TV" }),
        " > ",
        /* @__PURE__ */ jsx("strong", { children: "Developer Options" }),
        '. Make sure "ADB Debugging" is turned ON, and under "Install Unknown Apps", turn it ON for Downloader (you might need to install Downloader first before seeing this exact menu, see Step 2).'
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)" }, children: "Step 2: Get the Downloader App" }),
      /* @__PURE__ */ jsxs("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: [
        'Press the Home button to return to the main screen. Click on "Find" and then "Search".',
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        `Type "Downloader". The app should look like a prominent orange icon. Download and install it. If you couldn't enable Developer Options in Step 1, do so now.`
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)" }, children: "Step 3: Enter the Direct Code" }),
      /* @__PURE__ */ jsxs("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: [
        "Open the Downloader app. Allow access to photos/media if prompted. Click OK on the welcome pop-up.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        "On the Home tab of Downloader, select the URL box where it says ",
        /* @__PURE__ */ jsx("code", { children: "http://" }),
        ". Clear it out and enter the ",
        /* @__PURE__ */ jsx("strong", { children: "numerical code" }),
        " provided by our team (for example: ",
        /* @__PURE__ */ jsx("code", { children: "123456" }),
        ") and click Go."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)" }, children: "Step 4: Install and Delete APK" }),
      /* @__PURE__ */ jsxs("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: [
        "The APK file will download automatically. When prompted, select ",
        /* @__PURE__ */ jsx("strong", { children: '"Install"' }),
        ".",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        'After successful installation, select "Done". You will return to the Downloader app. Now, choose "Delete" to remove the APK file to free up storage space on your Firestick. You can now launch the newly installed player from the main menu!'
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "headline-md", style: { marginBottom: "var(--space-4)", marginTop: "var(--space-10)" }, children: "Troubleshooting" }),
      /* @__PURE__ */ jsxs("div", { style: { background: "var(--surface-container)", padding: "var(--space-6)", borderRadius: "var(--radius-md)" }, children: [
        /* @__PURE__ */ jsx("h3", { className: "title-md", style: { marginBottom: "var(--space-2)" }, children: "Developer Options Missing" }),
        /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: "Amazon has hidden Developer Options on newer updates. Go to Settings > My Fire TV > About. Click on your Fire TV Stick name exactly 7 times to reveal Developer Options." }),
        /* @__PURE__ */ jsx("h3", { className: "title-md", style: { marginBottom: "var(--space-2)" }, children: '"Forbidden" Error or Failed Download' }),
        /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)" }, children: "Ensure you have disabled any ISP shield blocks online or ensure your VPN isn't blocking the download link." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", style: { padding: "var(--space-6) 0 var(--space-12)" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-4)" }, children: "Firestick ready to go?" }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: "var(--space-4)", justifyContent: "center" }, children: /* @__PURE__ */ jsx(Link, { to: "/buy-iptv-subscription", className: "btn btn-primary", children: "Grab Your Subscription" }) })
    ] }) })
  ] });
}
export {
  TutorialDownloaderPage as default
};
