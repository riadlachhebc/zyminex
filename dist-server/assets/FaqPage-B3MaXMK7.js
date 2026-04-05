import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { H as Helmet } from "../entry-server.js";
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "react-dom";
const faqs = [
  {
    category: "General IPTV Questions",
    items: [
      {
        q: "What is IPTV and how does it work?",
        a: "IPTV stands for Internet Protocol Television. Unlike traditional television that relies on satellite signals or physical cable lines, IPTV delivers live television programming and video-on-demand (VOD) content directly through your broadband internet connection. When you select a channel or movie, the media is streamed in real-time from secure servers directly to your device, allowing for instant, high-definition viewing without the need for a physical cable box."
      },
      {
        q: "What is the difference between IPTV and cable TV?",
        a: "The main differences are cost, flexibility, and content availability. Cable TV forces you into rigid, expensive contracts with limited local channels. IPTV is significantly more affordable, operates on a flexible month-to-month basis, and offers a global library of content. Furthermore, cable requires professional installation and hardware rentals, whereas internet television can be set up in minutes on devices you already own."
      },
      {
        q: "Is IPTV legal in the United States?",
        a: "Yes, the technology itself is 100% legal in the United States and worldwide. It is simply a method of delivering video content over the internet—the exact same technology used by mainstream platforms like Netflix, Hulu, and YouTube TV."
      },
      {
        q: "How many channels does a typical IPTV service offer?",
        a: "A high-quality provider will offer a massive library that dwarfs traditional cable. A premium service typically provides anywhere from 10,000 to 20,000+ live global channels. This includes local networks, international broadcasts, 24/7 movie networks, and dedicated live sports streams."
      }
    ]
  },
  {
    category: "Technical Questions",
    items: [
      {
        q: "What internet speed do I need for IPTV streaming?",
        a: "Because live video requires continuous data transfer, a stable internet connection is crucial. For standard definition (SD) streaming, a minimum of 10 Mbps is recommended. For high definition (HD) and 1080p, you should have at least 15–25 Mbps. If you want to stream ultra-high-definition content through a 4K subscription, a stable connection of 50 Mbps or higher is highly recommended to prevent buffering."
      },
      {
        q: "What is anti-freeze IPTV technology?",
        a: "Anti-freezing technology refers to the advanced server architecture used by a premium, buffer-free IPTV provider. It utilizes load-balancing and global Content Delivery Networks (CDNs) to route your video stream through the fastest, least-congested servers available. This anti-freezing IPTV service infrastructure ensures that your stream remains stable and uninterrupted, which is especially important during high-traffic events like live PPV sports."
      },
      {
        q: "Can I use a VPN with IPTV?",
        a: "Yes, and it is often highly recommended. Some Internet Service Providers (ISPs) intentionally slow down (throttle) heavy streaming traffic. Using a Virtual Private Network (VPN) encrypts your internet connection, preventing your ISP from seeing what you are streaming, which ensures you get maximum speeds and unrestricted access to global servers."
      },
      {
        q: "What is an M3U playlist and how does it work?",
        a: "An M3U playlist is a simple text file format that contains the URLs of all the live TV channels and VODs provided by your subscription. When you load this M3U link into a media player app, the app reads the file, organizes the links into categories, and allows you to click and play the streams seamlessly."
      },
      {
        q: "What is EPG in IPTV?",
        a: 'EPG stands for Electronic Program Guide. It is the digital, on-screen TV guide menu that displays the schedule of current and upcoming broadcast programming. A high-quality EPG makes navigating tens of thousands of channels effortless, giving you a traditional "cable-like" browsing experience.'
      }
    ]
  },
  {
    category: "Device Questions",
    items: [
      {
        q: "What devices are compatible with IPTV?",
        a: "The technology is universally compatible with almost any internet-connected screen. You can stream on Smart TVs (Samsung, LG), streaming sticks (Amazon Firestick, Roku), Android TV boxes, Apple TV, smartphones (iOS and Android), and even through a web browser on your PC or Mac."
      },
      {
        q: "What is the best IPTV player app?",
        a: 'The "best" app depends on your device, but top-rated options include TiviMate (widely considered the absolute best for Android devices due to its sleek EPG), IPTV Smarters Pro (excellent for Firesticks and cross-platform use), and GSE Smart IPTV (great for Apple devices).'
      },
      {
        q: "Can I use IPTV on multiple devices at the same time?",
        a: 'Yes, but this depends entirely on the specific plan you purchase. A standard subscription typically includes one "connection," meaning you can install the service on multiple devices, but only watch on one screen at a time. Many premium providers allow you to purchase additional simultaneous connections at checkout so the whole family can watch different channels at once.'
      }
    ]
  },
  {
    category: "Subscription Questions",
    items: [
      {
        q: "What is included in an IPTV subscription?",
        a: "A standard subscription acts as an all-in-one entertainment package. It includes live television channels, a massive Video on Demand (VOD) library featuring thousands of movies and TV series, and access to premium networks, including the best IPTV for live sports and pay-per-view events."
      },
      {
        q: "How do I receive my IPTV credentials after subscribing?",
        a: "Delivery is almost always digital and instant. Immediately after your payment is processed securely, the provider will send an automated email containing your username, password, M3U playlist URL, and a link to a setup guide so you can start streaming within minutes."
      },
      {
        q: "Can I try IPTV before buying?",
        a: "Absolutely. Reputable providers want you to test their server stability before committing. You can usually request a 24-hour IPTV trial or a free trial period. This allows you to install the apps, browse the channels, and test the streaming quality risk-free."
      },
      {
        q: "What payment methods are accepted?",
        a: "Premium services prioritize user security and anonymity. Accepted payment methods typically include major credit and debit cards via secure gateways, PayPal, and increasingly, cryptocurrencies like Bitcoin and Ethereum for maximum privacy."
      }
    ]
  }
];
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: `faq-item ${open ? "faq-item--open" : ""}`, children: [
    /* @__PURE__ */ jsxs("button", { className: "faq-item__trigger", onClick: () => setOpen(!open), children: [
      /* @__PURE__ */ jsx("span", { className: "title-md", children: q }),
      /* @__PURE__ */ jsx("span", { className: "material-icons-outlined faq-item__chevron", children: "expand_more" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "faq-item__content", children: /* @__PURE__ */ jsx("p", { className: "body-lg", children: a }) })
  ] });
}
function FaqPage() {
  return /* @__PURE__ */ jsxs("div", { className: "faq-page", id: "faq-page", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Forest IPTV FAQ — Common Questions About IPTV Streaming" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "New to IPTV? Read our complete FAQ guide to learn how internet television works, how to set up your devices, and what to look for in a premium subscription." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.forestiptv.pro/faq" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Forest IPTV FAQ — All Your Questions Answered" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "New to IPTV? Read our complete FAQ guide to learn how internet television works and how to set up your devices." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://www.forestiptv.pro/og-image.png" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.forestiptv.pro/faq" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Forest IPTV FAQ — Streaming Support" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Learn how internet television works and how to set up your devices with our complete FAQ." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://www.forestiptv.pro/og-image.png" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.flatMap((group) => group.items).map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "faq-hero", id: "faq-hero", children: [
      /* @__PURE__ */ jsx("div", { className: "faq-hero__glow" }),
      /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("span", { className: "label-md", style: { color: "var(--primary)" }, children: "Help Center" }),
        /* @__PURE__ */ jsx("h1", { className: "display-lg", style: { marginTop: "var(--space-3)" }, children: "Frequently Asked Questions About IPTV" }),
        /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "640px", margin: "var(--space-4) auto 0" }, children: "Everything you need to know about IPTV streaming — how it works, what devices it supports, and what to expect from a premium service." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "faq-content", children: /* @__PURE__ */ jsx("div", { className: "container faq-container", children: faqs.map((group) => /* @__PURE__ */ jsxs("div", { className: "faq-group", children: [
      /* @__PURE__ */ jsxs("h2", { className: "headline-md faq-group__title", children: [
        /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)", fontSize: "1.25rem" }, children: group.category === "General IPTV Questions" ? "info" : group.category === "Technical Questions" ? "settings" : group.category === "Device Questions" ? "devices" : "payments" }),
        group.category
      ] }),
      group.items.map((item) => /* @__PURE__ */ jsx(FaqItem, { q: item.q, a: item.a }, item.q))
    ] }, group.category)) }) })
  ] });
}
export {
  FaqPage as default
};
