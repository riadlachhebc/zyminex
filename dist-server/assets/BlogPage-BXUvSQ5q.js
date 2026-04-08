import { jsxs, jsx } from "react/jsx-runtime";
import { H as Helmet, L as Link } from "../entry-server.js";
/* empty css                  */
import "react";
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "react-dom";
const blogPosts = [
  {
    id: "isp-blocking-iptv",
    path: "/isp-blocking-iptv-how-to-bypass",
    image: "https://i.ibb.co/ns6wHhfV/Glowing-Wi-Fi-router-202604082313.jpg",
    category: "Troubleshooting & Tech Guides",
    date: "Apr 8, 2026",
    title: "Is Your ISP Blocking Your IPTV? (How to Bypass the April 2026 Network Blocks)",
    excerpt: "Is your IPTV showing a connection error on Wi-Fi but working perfectly on your mobile data? Your Internet Service Provider (ISP) is actively blocking your stream. Learn how to diagnose ISP throttling and bypass the April 2026 live network blocks in minutes."
  },
  {
    id: "iptv-guide-blank-fix",
    path: "/iptv-guide-blank-buffering-fix-2026",
    image: "https://i.ibb.co/Y7cTG0pC/A-frustrated-user-202604052301.jpg",
    category: "Troubleshooting & Tech Guides",
    date: "Apr 5, 2026",
    title: "Why Your IPTV Guide Is Blank & Buffering (April 2026 Fix)",
    excerpt: "Is your TV guide suddenly blank, or does your stream freeze during live sports? Discover the hidden hardware and network issues plaguing IPTV in April 2026."
  },
  {
    id: "iptv-crackdown-2026",
    path: "/2026-iptv-crackdown-dodgy-firestick-safety",
    image: "https://i.ibb.co/zzfBBp2/Padlock-over-TV-202604030125.jpg",
    category: "Industry News & Security",
    date: "Apr 3, 2026",
    title: 'The 2026 IPTV Crackdown: Are "Dodgy Firesticks" Safe? (Security Guide)',
    excerpt: 'Authorities are launching massive crackdowns on "dodgy Firesticks" and cheap IPTV providers. Discover if your data is safe and how to secure your setup.'
  },
  {
    id: "iptv-buffering-fixes",
    path: "/why-is-my-iptv-buffering-5-easy-fixes-to-stop-freezing-in-2026",
    image: "https://i.ibb.co/zVTFYS9T/IPTV-buffering-blog-202604020446.jpg",
    category: "Guides & Fixes",
    date: "Apr 2, 2026",
    title: "Why Is My IPTV Buffering? (5 Easy Fixes to Stop Freezing in 2026)",
    excerpt: "Tired of your screen freezing right before the big game? Discover the top 5 reasons your IPTV keeps buffering and learn how to fix it instantly in 2026."
  },
  {
    id: "firestick-setup",
    path: "/how-to-setup-iptv-on-amazon-firestick-2026-guide",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    category: "Tutorials & Guides",
    date: "Apr 2, 2026",
    title: "How to Setup IPTV on Amazon Firestick (2026 Guide)",
    excerpt: "Learn how to quickly step up and install IPTV on your Amazon Firestick for smooth 4K streaming."
  },
  {
    id: "cutting-cord",
    path: "/top-5-benefits-cutting-the-cord-premium-iptv",
    image: "https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?auto=format&fit=crop&w=800&q=80",
    category: "Industry Insights",
    date: "Apr 2, 2026",
    title: "Top 5 Benefits of Cutting the Cord Using Premium IPTV",
    excerpt: "Discover why millions are cutting cable and how premium IPTV can save you thousands of dollars while offering a massive catalog of content."
  }
];
function BlogPage() {
  return /* @__PURE__ */ jsxs("div", { className: "blog-page", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Forest IPTV Blog | Latest News & Streaming Guides" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Stay updated with the latest IPTV news, setup tutorials, and streaming tips from Forest IPTV. Discover how to enhance your entertainment." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.forestiptv.pro/blog" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Forest IPTV Blog — News & Streaming Guides" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Stay updated with the latest IPTV news, setup tutorials, and streaming tips." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://www.forestiptv.pro/og-image.png" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.forestiptv.pro/blog" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Forest IPTV Blog | News & Tutorials" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Discover how to enhance your entertainment with our latest IPTV guides." }),
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
            "name": "Blog",
            "item": "https://www.forestiptv.pro/blog"
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "blog-hero", children: [
      /* @__PURE__ */ jsx("div", { className: "blog-hero__glow" }),
      /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("span", { className: "label-md", style: { color: "var(--primary)" }, children: "Official Blog" }),
        /* @__PURE__ */ jsx("h1", { className: "display-lg", style: { marginTop: "var(--space-3)" }, children: "Insights & Updates" }),
        /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "600px", margin: "var(--space-4) auto 0" }, children: "Everything you need to know about cutting the cord, optimizing your streaming setup, and getting the most out of Forest IPTV." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "blog-grid", children: blogPosts.length > 0 ? blogPosts.map((post) => /* @__PURE__ */ jsxs("article", { className: "blog-card card", children: [
      /* @__PURE__ */ jsxs("div", { className: "blog-card__image-container", children: [
        /* @__PURE__ */ jsx("img", { src: post.image, alt: post.title, className: "blog-card__image", loading: "lazy" }),
        /* @__PURE__ */ jsx("span", { className: "blog-card__category", children: post.category })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "blog-card__content", children: [
        /* @__PURE__ */ jsx("span", { className: "label-sm", style: { color: "var(--outline)" }, children: post.date }),
        /* @__PURE__ */ jsx("h2", { className: "title-lg blog-card__title", children: /* @__PURE__ */ jsx(Link, { to: post.path || `/blog/${post.id}`, children: post.title }) }),
        /* @__PURE__ */ jsx("p", { className: "body-md blog-card__excerpt", style: { color: "var(--on-surface-variant)" }, children: post.excerpt }),
        /* @__PURE__ */ jsxs(Link, { to: post.path || `/blog/${post.id}`, className: "blog-card__read-more", children: [
          "Read Article ",
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "16px" }, children: "arrow_forward" })
        ] })
      ] })
    ] }, post.id)) : /* @__PURE__ */ jsxs("div", { className: "blog-empty-state", style: { gridColumn: "1 / -1", textAlign: "center", padding: "var(--space-12) 0" }, children: [
      /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "64px", color: "var(--primary)", marginBottom: "var(--space-4)" }, children: "edit_note" }),
      /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "New Articles Coming Soon" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "500px", margin: "var(--space-2) auto" }, children: "We are currently preparing high-quality guides and tutorials to help you master your IPTV experience. Stay tuned!" })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", children: /* @__PURE__ */ jsxs("div", { className: "container", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Ready to Experience Zero Buffering?" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "600px", margin: "var(--space-4) auto var(--space-6)" }, children: "Join thousands of satisfied users who have permanently cut the cord." }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsx(Link, { to: "/iptv-free-trial", className: "btn btn-primary btn-lg", children: "Free Test Trial" }),
        /* @__PURE__ */ jsx(Link, { to: "/buy-iptv-subscription", className: "btn btn-secondary btn-lg", children: "View Plans" })
      ] })
    ] }) })
  ] });
}
export {
  BlogPage as default
};
