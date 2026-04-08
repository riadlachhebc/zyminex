import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { H as Helmet, L as Link } from "../entry-server.js";
/* empty css                     */
/* empty css                  */
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "react-dom";
const LogoMarquee = ({ items = [], direction = "left", variant = "poster" }) => {
  if (items.length === 0) return null;
  const totalItems = [...items, ...items, ...items, ...items];
  return /* @__PURE__ */ jsx("div", { className: `marquee-container variant-${variant}`, id: `marquee-${variant}-${direction}`, children: /* @__PURE__ */ jsx("div", { className: `marquee-content scroll-${direction}`, id: `marquee-content-${variant}-${direction}`, children: totalItems.map((item, index) => /* @__PURE__ */ jsx("div", { className: "marquee-item", children: item.src ? /* @__PURE__ */ jsx(
    "img",
    {
      src: item.src,
      alt: item.alt,
      className: "marquee-img",
      loading: "lazy",
      decoding: "async",
      width: variant === "poster" ? 189 : 221,
      height: variant === "poster" ? 284 : 39
    }
  ) : /* @__PURE__ */ jsxs("div", { className: "marquee-placeholder", style: { background: item.bg || "var(--surface-container-high)" }, children: [
    /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "2rem" }, children: item.icon || "tv" }),
    /* @__PURE__ */ jsx("span", { className: "label-md", children: item.label })
  ] }) }, index)) }) });
};
const bnaLogo = "/assets/bna-BRznUohG.webp";
const champLogo = "/assets/champ-vkSDrodq.webp";
const disnepLogo = "data:image/webp;base64,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";
const hboLogo = "data:image/webp;base64,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";
const inbeLogo = "/assets/inbe-Brca07in.webp";
const primeLogo = "data:image/webp;base64,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";
const ucfLogo = "/assets/ucf-DzHby-RK.webp";
const poster1 = "/assets/poster-1-CFhKlQot.webp";
const poster2 = "/assets/poster-2-C2mZLgHf.webp";
const poster3 = "/assets/poster-3-BzzXk99v.webp";
const poster4 = "/assets/poster-4-tWvN7VqK.webp";
const poster5 = "/assets/poster-5-BF-4BoQT.webp";
const poster6 = "/assets/poster-6-BE2q2XrJ.webp";
const features = [
  { icon: "hd", title: "4K Ultra HD Streaming", desc: "Experience every detail with breathtaking clarity. Optimized for high-bitrate streaming." },
  { icon: "speed", title: "Anti-Freezing Technology", desc: "Zero buffering. Our proprietary compression ensures smooth playback even on modest connections." },
  { icon: "live_tv", title: "20,000+ Channels", desc: "From local news to international blockbusters, your library is endless." },
  { icon: "support_agent", title: "24/7 Support", desc: "Our technicians ensure your stream never drops. Average response < 5 min." },
  { icon: "devices", title: "Multi-Device Compatible", desc: "Watch on Smart TV, Fire Stick, Android, iOS, tablets, and more." },
  { icon: "download", title: "Easy Setup", desc: "Download the app, log in, and start watching in under 5 minutes." }
];
const moviePosters = [
  { src: poster1, alt: "Premium Movie 1" },
  { src: poster2, alt: "Premium Movie 2" },
  { src: poster3, alt: "Premium Movie 3" },
  { src: poster4, alt: "Premium Movie 4" },
  { src: poster5, alt: "Premium Movie 5" },
  { src: poster6, alt: "Premium Movie 6" }
];
const channelLogos = [
  { src: inbeLogo, alt: "IN Sports" },
  { src: champLogo, alt: "League" },
  { src: hboLogo, alt: "Hobx" },
  { src: disnepLogo, alt: "Dis+" },
  { src: bnaLogo, alt: "NA" },
  { src: primeLogo, alt: "Amazrime" },
  { src: ucfLogo, alt: "UF" }
];
const categories = [
  { name: "Sports", icon: "sports_soccer" },
  { name: "Movies", icon: "movie" },
  { name: "Documentaries", icon: "nature_people" },
  { name: "Kids", icon: "child_care" },
  { name: "News", icon: "newspaper" },
  { name: "Music", icon: "music_note" }
];
const testimonials = [
  {
    quote: "The Anti-Freezing technology actually works! I switched from Kemo IPTV and the difference is night and day.",
    name: "David Chen",
    role: "Premium Subscriber"
  },
  {
    quote: "Setup was incredibly easy on my Firestick. I was watching 4K sports within 5 minutes.",
    name: "Sarah Jenkins",
    role: "Firestick User"
  },
  {
    quote: "Best IPTV service in 2026 without a doubt. The VOD library is huge and constantly updated.",
    name: "Maria Lopez",
    role: "12-Month Subscriber"
  }
];
const stats = [
  { value: "50,000+", label: "Active Users" },
  { value: "99.9%", label: "Uptime" },
  { value: "20,000+", label: "Channels" },
  { value: "<5 min", label: "Setup Time" }
];
const homeFaqs = [
  {
    q: "How fast is the delivery after I buy Forest IPTV?",
    a: "Delivery is instant! As soon as your payment is confirmed, your credentials and setup instructions are sent directly to your email inbox so you can start streaming immediately."
  },
  {
    q: "Can I use my subscription on multiple devices?",
    a: "Yes, depending on the plan you choose. While a standard package allows for one connection, you can easily upgrade your plan during checkout to include 2, 3, or more simultaneous connections for your entire household."
  },
  {
    q: "Do I need a VPN to use the service?",
    a: "While our platform is highly secure, we always recommend using a VPN if your local Internet Service Provider (ISP) is known for throttling streaming traffic. Our service is 100% VPN-friendly."
  },
  {
    q: "What happens if I need technical support?",
    a: "We offer 24/7 customer support. Whether you need help navigating the Forest IPTV login dashboard or configuring your apps, our dedicated support team is always just a message away."
  }
];
const plans = [
  {
    name: "3 Months",
    price: "29.99",
    period: "/ 3 months",
    perMonth: "~$10/mo",
    features: [
      "4K Quality",
      "20,000+ Channels",
      "All Devices",
      "VIP 24/7 Support",
      "Full VOD Library Access",
      "Live PPV Events Included"
    ],
    badge: null,
    highlighted: false
  },
  {
    name: "12 Months",
    price: "59.99",
    period: "/ year",
    perMonth: "~$5/mo",
    features: [
      "4K Quality",
      "20,000+ Channels",
      "All Devices",
      "VIP 24/7 Support",
      "Full VOD Library Access",
      "Live PPV Events Included"
    ],
    badge: "Best Value",
    highlighted: true
  },
  {
    name: "6 Months",
    price: "44.99",
    period: "/ 6 months",
    perMonth: "~$7.50/mo",
    features: [
      "4K Quality",
      "20,000+ Channels",
      "All Devices",
      "VIP 24/7 Support",
      "Full VOD Library Access",
      "Live PPV Events Included"
    ],
    badge: "Popular",
    highlighted: false
  }
];
const homeBlogPosts = [
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
function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Forest IPTV",
    "url": "https://www.forestiptv.pro",
    "logo": "https://www.forestiptv.pro/logo.png",
    "description": "Best Premium IPTV Service Provider offering 20,000+ live channels and 4K VODs."
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
  return /* @__PURE__ */ jsxs("div", { className: "home", id: "home-page", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Forest IPTV — Best 4K IPTV Subscription" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Get the best Forest IPTV subscription. 4K streaming, anti-freeze technology, 22,000+ channels & free trial. Works on Firestick, Android, Smart TV & more." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.forestiptv.pro/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Forest IPTV — Best 4K IPTV Subscription" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Get the best Forest IPTV subscription. 4K streaming, anti-freeze technology, 22,000+ channels & free trial." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://www.forestiptv.pro/og-image.png" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.forestiptv.pro/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Forest IPTV" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Forest IPTV — Best 4K IPTV Subscription" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Get the best Forest IPTV subscription. 4K streaming, anti-freeze technology, 22,000+ channels & free trial." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://www.forestiptv.pro/og-image.png" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(orgSchema) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(faqSchema) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "hero", id: "hero-section", children: [
      /* @__PURE__ */ jsxs("div", { className: "hero__bg-effects", children: [
        /* @__PURE__ */ jsx("div", { className: "hero__glow hero__glow--1" }),
        /* @__PURE__ */ jsx("div", { className: "hero__glow hero__glow--2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container hero__content", children: [
        /* @__PURE__ */ jsxs("div", { className: "hero__badge animate-fade-in-up", children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "14px" }, children: "bolt" }),
          "Anti-Freezing Technology Active"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "display-lg hero__title animate-fade-in-up stagger-1", children: [
          "Welcome to Forest IPTV:",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "hero__title-accent", children: "The Ultimate 4K Streaming Experience" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "body-lg hero__subtitle animate-fade-in-up stagger-2", children: "Are you tired of overpaying for restrictive cable packages and constantly switching between expensive streaming apps? Welcome to Forest IPTV, your all-in-one gateway to limitless global entertainment. We provide top-tier access to thousands of live TV channels, blockbuster movies, and exclusive pay-per-view events—all from the comfort of your living room or on the go. Whether you're a die-hard sports fan or a movie enthusiast, our platform is designed to deliver crystal-clear quality without the frustrating lag. Read on to discover why cutting the cord has never been easier." }),
        /* @__PURE__ */ jsxs("div", { className: "hero__actions animate-fade-in-up stagger-3", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/buy-iptv-subscription", className: "btn btn-primary btn-lg", children: [
            /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "rocket_launch" }),
            "View Plans"
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/iptv-free-trial", className: "btn btn-secondary btn-lg", children: [
            /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "play_circle" }),
            "Start Your Free Test Trial"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "trust-signals animate-fade-in-up stagger-4", style: { marginTop: "var(--space-6)", display: "flex", gap: "var(--space-4)", justifyContent: "center", color: "var(--on-surface-variant)" }, children: [
          /* @__PURE__ */ jsxs("span", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
            /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "verified_user" }),
            " Secure Payments"
          ] }),
          /* @__PURE__ */ jsxs("span", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
            /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "speed" }),
            " Zero Buffering"
          ] }),
          /* @__PURE__ */ jsxs("span", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
            /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "replay" }),
            " Money-Back Guarantee"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hero__stats animate-fade-in-up stagger-4", style: { marginTop: "var(--space-10)" }, children: stats.map((stat) => /* @__PURE__ */ jsxs("div", { className: "hero__stat", children: [
          /* @__PURE__ */ jsx("span", { className: "hero__stat-value", children: stat.value }),
          /* @__PURE__ */ jsx("span", { className: "hero__stat-label label-sm", children: stat.label })
        ] }, stat.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "pricing-trials", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-header", children: [
        /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Flexible Forest IPTV Pricing & Risk-Free Trials" }),
        /* @__PURE__ */ jsxs("div", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-3)" }, children: [
          /* @__PURE__ */ jsx("p", { children: "We believe in transparency. There are no hidden fees, no cancellation penalties, and no hardware rentals. Our Forest IPTV pricing is straightforward, offering massive discounts for longer commitments. You can securely buy Forest IPTV for a full year for maximum savings, or simply start with a flexible Forest IPTV 3 month plan to test the waters." }),
          /* @__PURE__ */ jsx("p", { children: "Not ready to commit your hard-earned money just yet? We completely understand. We want you to experience our premium quality risk-free. Simply request a Forest IPTV Free Test Trial today. Your Free Test Trial will give you full, unrestricted access to our complete channel list and VOD library so you can test our anti-freezing technology for yourself." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "plans-grid", style: { marginTop: "var(--space-10)" }, children: plans.map((plan) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `plan-card ${plan.highlighted ? "plan-card--highlighted" : ""}`,
          id: `plan-${plan.name.replace(/\s/g, "-").toLowerCase()}`,
          children: [
            plan.badge && /* @__PURE__ */ jsxs("div", { className: `plan-card__badge ${plan.highlighted ? "plan-card__badge--accent" : ""}`, children: [
              plan.highlighted && /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "14px" }, children: "stars" }),
              plan.badge
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "headline-md", children: plan.name }),
            /* @__PURE__ */ jsxs("div", { className: "plan-card__price", children: [
              /* @__PURE__ */ jsx("span", { className: "plan-card__currency", children: "$" }),
              /* @__PURE__ */ jsx("span", { className: "plan-card__amount", children: plan.price })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--outline)" }, children: plan.perMonth }),
            /* @__PURE__ */ jsx("ul", { className: "plan-card__features", children: plan.features.map((feat) => /* @__PURE__ */ jsxs("li", { className: "plan-card__feature", children: [
              /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "18px", color: "var(--primary)" }, children: "check_circle" }),
              /* @__PURE__ */ jsx("span", { className: "body-md", children: feat })
            ] }, feat)) }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `https://wa.me/212763569826?text=${encodeURIComponent(`Hello Forest IPTV, I am interested in ordering the ${plan.name} plan for $${plan.price}.`)}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: `btn btn-lg ${plan.highlighted ? "btn-primary" : "btn-secondary"}`,
                style: { width: "100%" },
                children: plan.highlighted ? "Get Best Value" : "Order Now"
              }
            )
          ]
        },
        plan.name
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt features-section", id: "features-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-header", children: [
        /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Why Choose a Forest IPTV Subscription Over Cable?" }),
        /* @__PURE__ */ jsxs("div", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-3)" }, children: [
          /* @__PURE__ */ jsx("p", { children: "The television landscape has changed, and a modern Forest IPTV subscription gives you ultimate control over what you watch and how much you pay. Recognized as the best premium IPTV service on the market, we offer a massive, frequently updated Forest IPTV channel list that includes local networks, international broadcasts, and a massive Video-on-Demand (VOD) library." }),
          /* @__PURE__ */ jsx("p", { children: "Instead of settling for standard definition, you can finally enjoy your favorite shows in stunning high resolution with our dedicated 4K IPTV subscription packages. Why pay hundreds of dollars a month for a fraction of the content when you can have it all in one place?" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "dual-marquee-wrapper", style: { marginTop: "var(--space-8)", marginBottom: "var(--space-12)" }, children: [
        /* @__PURE__ */ jsx(LogoMarquee, { items: moviePosters, direction: "left", variant: "poster" }),
        /* @__PURE__ */ jsx(LogoMarquee, { items: channelLogos, direction: "right", variant: "16-9" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "features-grid", children: features.map((f, i) => /* @__PURE__ */ jsxs("div", { className: "card feature-card", children: [
        /* @__PURE__ */ jsx("div", { className: "feature-card__icon", children: /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: f.icon }) }),
        /* @__PURE__ */ jsx("h3", { className: "title-md", children: f.title }),
        /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)" }, children: f.desc })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section categories-section", id: "categories-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-header", children: [
        /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "A Buffer-Free IPTV Provider Built for Live Sports & Entertainment" }),
        /* @__PURE__ */ jsxs("div", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-3)" }, children: [
          /* @__PURE__ */ jsx("p", { children: "There is nothing worse than your screen freezing right before a game-winning touchdown or a crucial movie scene. We know that stability is the most important factor for our users. That’s why we operate as a strictly buffer-free IPTV provider, utilizing advanced anti-freezing IPTV service technology and premium global servers to ensure 100% uptime." }),
          /* @__PURE__ */ jsx("p", { children: "Because of our high-speed server network, we are widely considered the best IPTV for live sports, offering seamless streams of football, basketball, MMA, and international racing events. If you are tired of your current lagging provider, making the switch to us is the perfect upgrade. In fact, our service is so reliable that users tell us they never even have to search for a Forest IPTV alternative once they experience our streaming quality." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "categories-grid", children: categories.map((cat) => /* @__PURE__ */ jsxs("div", { className: "category-card", children: [
        /* @__PURE__ */ jsx("span", { className: "material-icons-outlined category-card__icon", style: { fontSize: "3.5rem" }, children: cat.icon }),
        /* @__PURE__ */ jsx("span", { className: "title-md", style: { marginTop: "0.5rem", fontWeight: "bold" }, children: cat.name })
      ] }, cat.name)) }),
      /* @__PURE__ */ jsx("div", { style: { textAlign: "center", marginTop: "var(--space-8)" }, children: /* @__PURE__ */ jsx(Link, { to: "/buy-iptv-subscription", className: "btn btn-primary", children: "Unlock Full Library" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", id: "devices-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-header", children: [
        /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Seamless Device Compatibility: Watch Anywhere" }),
        /* @__PURE__ */ jsxs("div", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-3)" }, children: [
          /* @__PURE__ */ jsx("p", { children: "We believe your entertainment should fit your lifestyle, not the other way around. Our service is highly versatile and compatible with almost any smart device in your home." }),
          /* @__PURE__ */ jsx("p", { children: "If you prefer watching on a television, our service is perfectly optimized as the premier Forest IPTV for Firestick solution, and it also stands out as the best IPTV for Android TV boxes. Prefer to watch on your computer while working? Simply access the Forest IPTV login portal and stream directly through our convenient Forest IPTV web player—no extra downloads required." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "setup-steps", children: [
        /* @__PURE__ */ jsxs("div", { className: "setup-step", children: [
          /* @__PURE__ */ jsx("div", { className: "setup-step__icon", children: /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "settings_remote" }) }),
          /* @__PURE__ */ jsx("h3", { className: "title-md", children: "Amazon Firestick" }),
          /* @__PURE__ */ jsx(Link, { to: "/iptv-for-firestick", className: "btn btn-sm btn-secondary", style: { marginTop: "var(--space-2)" }, children: "View Guide" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "setup-step", children: [
          /* @__PURE__ */ jsx("div", { className: "setup-step__icon", children: /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "tv" }) }),
          /* @__PURE__ */ jsx("h3", { className: "title-md", children: "Smart TVs" }),
          /* @__PURE__ */ jsx(Link, { to: "/setup-guides", className: "btn btn-sm btn-secondary", style: { marginTop: "var(--space-2)" }, children: "View Guide" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "setup-step", children: [
          /* @__PURE__ */ jsx("div", { className: "setup-step__icon", children: /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "smartphone" }) }),
          /* @__PURE__ */ jsx("h3", { className: "title-md", children: "Mobile & Tablets" }),
          /* @__PURE__ */ jsx(Link, { to: "/setup-guides", className: "btn btn-sm btn-secondary", style: { marginTop: "var(--space-2)" }, children: "View Guide" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { textAlign: "center", marginTop: "var(--space-8)" }, children: /* @__PURE__ */ jsx(Link, { to: "/setup-guides", className: "btn btn-secondary", children: "See All Setup Tutorials" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "setup-instructions", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "section-header", children: [
      /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Simple Setup and Easy-to-Use Applications" }),
      /* @__PURE__ */ jsxs("div", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-3)" }, children: [
        /* @__PURE__ */ jsx("p", { children: "Getting started is incredibly easy, even if you aren't tech-savvy. We provide a comprehensive Forest IPTV setup guide that walks you through exactly how to connect your devices in minutes." }),
        /* @__PURE__ */ jsx("p", { children: "Our servers integrate flawlessly with the most popular streaming players on the market. Whether you need a quick Forest IPTV Smarters Pro setup tutorial or you prefer customizing your TV guide layout using Forest IPTV TiviMate, our step-by-step instructions make installation a breeze." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", id: "subscription-banner", children: /* @__PURE__ */ jsxs("div", { className: "container", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("h3", { className: "display-sm", children: "Ready to Transform Your TV Experience?" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "800px", margin: "var(--space-4) auto var(--space-6)" }, children: "Stop overpaying for cable and say goodbye to buffering screens. Join thousands of satisfied customers who have already made the switch to the ultimate entertainment hub." }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsx(Link, { to: "/iptv-free-trial", className: "btn btn-primary btn-lg", children: "Start Free Test 🎁" }),
        /* @__PURE__ */ jsx(Link, { to: "/buy-iptv-subscription", className: "btn btn-secondary btn-lg", children: "View Our Premium Pricing Plans" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", marginTop: "var(--space-4)", fontWeight: "bold" }, children: "...and start streaming in 4K today!" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section testimonials-section", id: "testimonials-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-header", children: [
        /* @__PURE__ */ jsx("span", { className: "label-md", style: { color: "var(--primary)" }, children: "Real Reviews" }),
        /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Trusted by Thousands" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "testimonials-grid", children: testimonials.map((t, i) => /* @__PURE__ */ jsxs("div", { className: "testimonial-card", children: [
        /* @__PURE__ */ jsxs("div", { className: "testimonial-card__stars", children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)", fontSize: "18px" }, children: "star" }),
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)", fontSize: "18px" }, children: "star" }),
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)", fontSize: "18px" }, children: "star" }),
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)", fontSize: "18px" }, children: "star" }),
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)", fontSize: "18px" }, children: "star" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "body-lg testimonial-card__quote", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "testimonial-card__author", children: [
          /* @__PURE__ */ jsx("div", { className: "testimonial-card__avatar", children: t.name.charAt(0) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "label-lg", children: t.name }),
            /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--outline)" }, children: t.role })
          ] })
        ] })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", id: "home-faq", children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "760px" }, children: [
      /* @__PURE__ */ jsx("div", { className: "section-header", children: /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Frequently Asked Questions" }) }),
      /* @__PURE__ */ jsx("div", { className: "home-faq-list", children: homeFaqs.map((faq, idx) => /* @__PURE__ */ jsxs("div", { className: `faq-item ${openFaq === idx ? "faq-item--open" : ""}`, style: { marginBottom: "var(--space-3)" }, children: [
        /* @__PURE__ */ jsxs("button", { className: "faq-item__trigger", onClick: () => toggleFaq(idx), style: { width: "100%", display: "flex", justifyContent: "space-between", padding: "var(--space-5)", background: "var(--surface-container-low)", color: "var(--on-surface)", border: "none", borderRadius: "var(--radius-lg)", cursor: "pointer", textAlign: "left" }, children: [
          /* @__PURE__ */ jsx("h3", { className: "title-md", children: faq.q }),
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: openFaq === idx ? "var(--primary)" : "var(--outline)" }, children: openFaq === idx ? "expand_less" : "expand_more" })
        ] }),
        openFaq === idx && /* @__PURE__ */ jsx("div", { style: { padding: "var(--space-4) var(--space-5)", background: "var(--surface-container-low)", color: "var(--on-surface-variant)", borderBottomLeftRadius: "var(--radius-lg)", borderBottomRightRadius: "var(--radius-lg)", marginTop: "-8px" }, children: /* @__PURE__ */ jsx("p", { className: "body-lg", children: faq.a }) })
      ] }, idx)) }),
      /* @__PURE__ */ jsx("div", { style: { textAlign: "center", marginTop: "var(--space-6)" }, children: /* @__PURE__ */ jsx(Link, { to: "/faq", className: "btn btn-secondary", children: "Read Full FAQ" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "home-articles", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("div", { className: "section-header", children: /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Latest Guides & Insights" }) }),
      /* @__PURE__ */ jsx("div", { className: "blog-grid", style: { marginTop: "var(--space-8)" }, children: homeBlogPosts.map((post) => /* @__PURE__ */ jsxs("article", { className: "blog-card card", children: [
        /* @__PURE__ */ jsxs("div", { className: "blog-card__image-container", children: [
          /* @__PURE__ */ jsx("img", { src: post.image, alt: post.title, className: "blog-card__image", loading: "lazy" }),
          /* @__PURE__ */ jsx("span", { className: "blog-card__category", children: post.category })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "blog-card__content", children: [
          /* @__PURE__ */ jsx("span", { className: "label-sm", style: { color: "var(--outline)" }, children: post.date }),
          /* @__PURE__ */ jsx("h2", { className: "title-lg blog-card__title", children: /* @__PURE__ */ jsx(Link, { to: post.path, children: post.title }) }),
          /* @__PURE__ */ jsx("p", { className: "body-md blog-card__excerpt", style: { color: "var(--on-surface-variant)" }, children: post.excerpt }),
          /* @__PURE__ */ jsxs(Link, { to: post.path, className: "blog-card__read-more", children: [
            "Read Article ",
            /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "16px" }, children: "arrow_forward" })
          ] })
        ] })
      ] }, post.id)) }),
      /* @__PURE__ */ jsx("div", { style: { textAlign: "center", marginTop: "var(--space-8)" }, children: /* @__PURE__ */ jsx(Link, { to: "/blog", className: "btn btn-secondary btn-lg", children: "View All Articles" }) })
    ] }) })
  ] });
}
export {
  HomePage as default
};
