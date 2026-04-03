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
const blogPosts = [];
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
        /* @__PURE__ */ jsx("h2", { className: "title-lg blog-card__title", children: /* @__PURE__ */ jsx(Link, { to: `/blog/${post.id}`, children: post.title }) }),
        /* @__PURE__ */ jsx("p", { className: "body-md blog-card__excerpt", style: { color: "var(--on-surface-variant)" }, children: post.excerpt }),
        /* @__PURE__ */ jsxs(Link, { to: `/blog/${post.id}`, className: "blog-card__read-more", children: [
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
