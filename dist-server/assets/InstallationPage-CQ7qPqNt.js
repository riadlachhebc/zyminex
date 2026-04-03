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
const guides = [
  {
    name: "TiviMate",
    icon: "smart_display",
    desc: "Best for Android TV and Firestick for a premium, cable-like TV guide experience.",
    link: "/tutorials/how-to-setup-tivimate",
    badge: "Recommended"
  },
  {
    name: "IPTV Smarters Pro",
    icon: "phone_android",
    desc: "Versatile player available on Android, iOS, Windows, Mac, and Samsung/LG Smart TVs.",
    link: "/tutorials/how-to-setup-smarters-pro",
    badge: null
  },
  {
    name: "GSE Smart IPTV",
    icon: "apple",
    desc: "The most popular and powerful advanced IPTV player for Apple TV and iOS devices.",
    link: "#",
    badge: null
  },
  {
    name: "Perfect Player",
    icon: "tv",
    desc: "A simple, fast, and lightweight player optimized for all Android-based devices.",
    link: "#",
    badge: null
  }
];
function InstallationPage() {
  return /* @__PURE__ */ jsxs("div", { className: "install-page", id: "install-page", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Forest IPTV Setup Guide | Easy Installation for All Devices" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Read our official setup guide for Forest IPTV. Learn how to install our premium 4K IPTV on Firestick, Android TV, and more." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.forestiptv.pro/setup-guides" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Forest IPTV Setup Guide — Easy Installation" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Learn how to install our premium 4K IPTV on Firestick, Android TV, and more." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://www.forestiptv.pro/og-image.png" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.forestiptv.pro/setup-guides" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Forest IPTV Setup Guides" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Step-by-step instructions for all your devices." }),
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
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "install-hero", id: "install-hero", children: [
      /* @__PURE__ */ jsx("div", { className: "install-hero__glow" }),
      /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("span", { className: "label-md", style: { color: "var(--primary)" }, children: "Setup Hub" }),
        /* @__PURE__ */ jsx("h1", { className: "display-lg", style: { marginTop: "var(--space-3)" }, children: "How to Install Forest IPTV — Complete Setup Guide" }),
        /* @__PURE__ */ jsxs("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "800px", margin: "var(--space-4) auto 0" }, children: [
          "Welcome to the official Forest IPTV setup guide. If you are ready to cut the cord and experience limitless entertainment, you are exactly in the right place. When you choose to buy Forest IPTV, you are upgrading to the best premium IPTV service available today, complete with thousands of live channels, blockbuster movies, and top-tier sports networks.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("br", {}),
          "We have engineered our platform to be incredibly user-friendly so that anyone can configure their new 4K IPTV subscription without needing a degree in computer science. Whether you want to watch on your big screen at home or stream on the go, our secure infrastructure acts as your ultimate buffer-free IPTV provider. Follow the simple, step-by-step instructions below to install our service on your preferred device and start streaming immediately."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "install-guides", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("h2", { className: "display-sm", style: { textAlign: "center", marginBottom: "var(--space-8)" }, children: "Recommended IPTV Players" }),
      /* @__PURE__ */ jsx("div", { className: "guides-grid", style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-6)" }, children: guides.map((guide, i) => /* @__PURE__ */ jsxs("div", { className: "device-card", style: { position: "relative", display: "flex", flexDirection: "column" }, children: [
        guide.badge && /* @__PURE__ */ jsx("span", { style: { position: "absolute", top: "var(--space-4)", right: "var(--space-4)", background: "var(--primary-container)", color: "var(--on-primary-container)", padding: "2px 8px", borderRadius: "var(--radius-full)", fontSize: "0.75rem", fontWeight: 600 }, children: guide.badge }),
        /* @__PURE__ */ jsx("div", { className: "device-card__icon", style: { marginBottom: "var(--space-4)" }, children: /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: guide.icon }) }),
        /* @__PURE__ */ jsx("h3", { className: "headline-md", style: { marginBottom: "var(--space-2)" }, children: guide.name }),
        /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)", flex: 1, marginBottom: "var(--space-6)" }, children: guide.desc }),
        guide.link !== "#" ? /* @__PURE__ */ jsx(Link, { to: guide.link, className: "btn btn-secondary", style: { width: "100%", justifyContent: "center" }, children: "View Tutorial" }) : /* @__PURE__ */ jsx("button", { className: "btn btn-secondary", disabled: true, style: { width: "100%", justifyContent: "center", opacity: 0.5, cursor: "not-allowed" }, children: "Tutorial Coming Soon" })
      ] }, guide.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", id: "firestick-setup", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("h2", { className: "display-sm", style: { marginBottom: "var(--space-4)" }, children: "How to Install Forest IPTV on Firestick" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-6)" }, children: "Amazon's streaming device is incredibly popular, making Forest IPTV for Firestick one of the most requested configurations by our users. Here is how to get started:" }),
      /* @__PURE__ */ jsxs("ul", { className: "body-lg", style: { color: "var(--on-surface-variant)", listStyle: "none", padding: 0 }, children: [
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Download the 'Downloader' App:" }),
            ' Go to the Firestick home screen, click the "Find" or "Search" icon, type in "Downloader," and install it.'
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Enable Unknown Sources:" }),
            ' Navigate to Firestick Settings > My Fire TV > Developer Options. Turn ON "Install Unknown Apps" for the Downloader app.'
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Download an IPTV Player:" }),
            " Open the Downloader app and enter the URL for your preferred player (we highly recommend doing a Forest IPTV Smarters Pro setup by typing in the official Smarters APK link provided in your welcome email)."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Log In:" }),
            ' Open the newly installed app, select "Login with Xtream Codes API," and enter the username, password, and portal URL sent to your email after purchase.'
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "roku-setup", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("h2", { className: "display-sm", style: { marginBottom: "var(--space-4)" }, children: "How to Install Forest IPTV on Roku" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-6)" }, children: "Roku operates a closed ecosystem, meaning traditional IPTV apps are often removed from their store. However, you can still easily enjoy your service using screen mirroring or our web platform." }),
      /* @__PURE__ */ jsxs("ul", { className: "body-lg", style: { color: "var(--on-surface-variant)", listStyle: "none", padding: 0 }, children: [
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Use Your Smartphone or PC:" }),
            " Ensure your Roku and your smartphone/PC are connected to the same Wi-Fi network."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Access the Web Player:" }),
            " Open the browser on your phone or computer and navigate to the Forest IPTV web player."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Enter Your Credentials:" }),
            " Use your secure Forest IPTV login details to access your dashboard."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Cast to Roku:" }),
            ' Use the "Screen Mirroring" or "Smart View" feature on your phone/PC to cast the stream directly to your Roku device for big-screen viewing.'
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", id: "apple-tv-setup", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("h2", { className: "display-sm", style: { marginBottom: "var(--space-4)" }, children: "How to Install Forest IPTV on Apple TV" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-6)" }, children: "Apple TV users can easily access our powerful anti-freezing IPTV service by utilizing third-party players available directly in the App Store." }),
      /* @__PURE__ */ jsxs("ul", { className: "body-lg", style: { color: "var(--on-surface-variant)", listStyle: "none", padding: 0 }, children: [
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Open the App Store:" }),
            " Navigate to the Apple TV home screen and launch the App Store."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Search for an App:" }),
            ' Search for "IPTV Smarters Player" or "GSE Smart IPTV" and download the app.'
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Launch and Configure:" }),
            " Open the app and accept the terms of service."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Enter Xtream Codes:" }),
            ' Select "Add User" and input your subscription name, username, password, and the server URL to instantly load the massive Forest IPTV channel list.'
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "android-tv-setup", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("h2", { className: "display-sm", style: { marginBottom: "var(--space-4)" }, children: "How to Install Forest IPTV on Android TV Box" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-6)" }, children: "Because Android offers an open platform, we are widely considered the best IPTV for Android TV. Setup is incredibly fast." }),
      /* @__PURE__ */ jsxs("ul", { className: "body-lg", style: { color: "var(--on-surface-variant)", listStyle: "none", padding: 0 }, children: [
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Open Google Play Store:" }),
            " From your Android TV home screen, launch the Play Store."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Search for Your Player:" }),
            " Search for your preferred app. We highly recommend configuring Forest IPTV TiviMate for the most premium, cable-like TV guide experience."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Install and Open:" }),
            " Download the app and open it."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Add Playlist:" }),
            ' Select "Add Playlist" and choose the "Xtream Codes API" login method. Input your secure credentials and enjoy the content!'
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", id: "smart-tv-setup", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("h2", { className: "display-sm", style: { marginBottom: "var(--space-4)" }, children: "How to Install Forest IPTV on Smart TV" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginBottom: "var(--space-6)" }, children: "Most modern LG and Samsung Smart TVs have built-in app stores that support IPTV players." }),
      /* @__PURE__ */ jsxs("ul", { className: "body-lg", style: { color: "var(--on-surface-variant)", listStyle: "none", padding: 0 }, children: [
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Visit Your TV's App Store:" }),
            ' Press the "Home" or "Smart Hub" button on your remote and open the app store.'
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Search for an IPTV App:" }),
            ' Search for apps like "IBO Player", "Duplex Play", or "Smart IPTV". Install your app of choice.'
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Locate Your MAC Address:" }),
            ' Open the app to find your TV’s unique "MAC Address" displayed on the screen.'
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { style: { marginBottom: "var(--space-3)", display: "flex", gap: "12px" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)" }, children: "check_circle" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Upload Your Playlist:" }),
            " Visit the app's official website on your computer or phone, enter your TV's MAC Address, and paste the M3U URL provided with your Forest IPTV subscription. Restart the TV app to load your channels."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "install-support", children: /* @__PURE__ */ jsxs("div", { className: "container", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Need help with installation?" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "600px", margin: "var(--space-4) auto var(--space-6)" }, children: "Contact our 24/7 support team via WhatsApp or Telegram. We will guide you through the setup step by step." }),
      /* @__PURE__ */ jsx("a", { href: "https://wa.me/212763569826", target: "_blank", rel: "noopener noreferrer", className: "btn btn-primary btn-lg", children: "Contact Support via WhatsApp" })
    ] }) })
  ] });
}
export {
  InstallationPage as default
};
