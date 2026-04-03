import { jsxs, jsx } from "react/jsx-runtime";
import { H as Helmet, L as Link } from "../entry-server.js";
/* empty css                     */
import "react";
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "react-dom";
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
function PricingPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Forest IPTV Subscription",
    "description": "Premium 4K IPTV subscription featuring 20,000+ live channels, anti-freeze technology, and zero-buffering streaming. Compatible with Firestick, Smart TV, Android, and more.",
    "brand": {
      "@type": "Brand",
      "name": "Forest IPTV"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "29.99",
      "highPrice": "59.99",
      "priceCurrency": "USD",
      "offerCount": "3",
      "offers": plans.map((p) => ({
        "@type": "Offer",
        "name": `Forest IPTV ${p.name} Plan`,
        "price": p.price,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://www.forestiptv.pro/buy-iptv-subscription"
      }))
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "pricing-page", id: "pricing-page", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Forest IPTV Pricing | Buy the Best Premium IPTV Subscription" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Explore affordable Forest IPTV pricing plans. Buy your 4K IPTV subscription today and enjoy a buffer-free IPTV provider with massive channel lists and live sports. Get a free trial now!" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.forestiptv.pro/buy-iptv-subscription" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Forest IPTV Pricing | Best Premium 4K IPTV Plans" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Explore affordable Forest IPTV pricing plans. Buy your 4K IPTV subscription today and enjoy buffer-free streaming with 22,000+ channels." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://www.forestiptv.pro/og-image.png" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.forestiptv.pro/buy-iptv-subscription" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Forest IPTV Pricing | Premium 4K IPTV Subscription" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Explore affordable Forest IPTV pricing plans starting today. Massive channel lists and buffer-free streaming." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://www.forestiptv.pro/og-image.png" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(productSchema) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "pricing-hero", id: "pricing-hero", children: [
      /* @__PURE__ */ jsx("div", { className: "pricing-hero__glow" }),
      /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("span", { className: "label-md", style: { color: "var(--primary)" }, children: "Pricing Plans" }),
        /* @__PURE__ */ jsx("h1", { className: "display-lg", style: { marginTop: "var(--space-3)" }, children: "Affordable Forest IPTV Pricing: Choose Your Perfect Plan" }),
        /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "800px", margin: "var(--space-4) auto 0" }, children: "Are you tired of skyrocketing cable bills and restrictive, overpriced streaming bundles? You have finally found the ultimate solution. Welcome to the official Forest IPTV pricing page, where cutting the cord doesn’t mean cutting corners on quality. We believe that top-tier entertainment should be accessible and affordable for everyone. Whether you are a casual viewer looking to catch the evening news or a die-hard fan seeking global sports coverage, our transparent plans ensure you only pay for exactly what you need. Review our packages below and discover why so many users are ditching their old cable providers for the future of digital television." }),
        /* @__PURE__ */ jsx("div", { className: "plans-grid", style: { marginTop: "var(--space-12)" }, children: plans.map((plan) => /* @__PURE__ */ jsxs(
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
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "plans-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-header", children: [
        /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Flexible Forest IPTV Pricing for Every Budget" }),
        /* @__PURE__ */ jsxs("p", { className: "body-md", children: [
          "Finding the right entertainment package shouldn't be complicated. Our Forest IPTV pricing structure is completely straightforward—no hidden fees, no hardware rentals, and absolutely no surprise cancellation charges.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("br", {}),
          "When you choose to buy Forest IPTV, you unlock instant access to a massive library of global content. We offer flexible durations to suit your specific needs. You can start small with a Forest IPTV 1 month package to test the waters, or you can maximize your savings by locking in our heavily discounted 6-month or 12-month annual plans. No matter which tier you select, every single package qualifies as a full 4K IPTV subscription, ensuring you get the absolute highest resolution available without paying extra for premium quality."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "comparison-container", children: /* @__PURE__ */ jsx("div", { className: "table-wrapper", children: /* @__PURE__ */ jsxs("table", { className: "comparison-table", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Plan" }),
          /* @__PURE__ */ jsx("th", { children: "Total Price" }),
          /* @__PURE__ */ jsx("th", { children: "Per Month" }),
          /* @__PURE__ */ jsx("th", { children: "Savings vs 3-Month Rate" }),
          /* @__PURE__ */ jsx("th", { children: "Connections" }),
          /* @__PURE__ */ jsx("th", { children: "Best For" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "col-plan", children: "3 Months" }),
            /* @__PURE__ */ jsx("td", { className: "col-price", children: "$29.99" }),
            /* @__PURE__ */ jsx("td", { children: "~$10/mo" }),
            /* @__PURE__ */ jsx("td", { className: "col-savings", children: "— Baseline" }),
            /* @__PURE__ */ jsx("td", { children: "1" }),
            /* @__PURE__ */ jsx("td", { className: "col-best-for", children: "Short-term flexibility" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsxs("td", { className: "col-plan", children: [
              "6 Months ",
              /* @__PURE__ */ jsx("span", { className: "plan-icon", children: "⭐" })
            ] }),
            /* @__PURE__ */ jsx("td", { className: "col-price", children: "$44.99" }),
            /* @__PURE__ */ jsx("td", { children: "~$7.50/mo" }),
            /* @__PURE__ */ jsx("td", { className: "col-savings", children: "Save $15.00" }),
            /* @__PURE__ */ jsx("td", { children: "1" }),
            /* @__PURE__ */ jsx("td", { className: "col-best-for", children: "Best balance of price & value" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsxs("td", { className: "col-plan", children: [
              "12 Months ",
              /* @__PURE__ */ jsx("span", { className: "plan-icon", children: "🏆" })
            ] }),
            /* @__PURE__ */ jsx("td", { className: "col-price", children: "$59.99" }),
            /* @__PURE__ */ jsx("td", { children: "~$5/mo" }),
            /* @__PURE__ */ jsx("td", { className: "col-savings", children: "Save $60.00" }),
            /* @__PURE__ */ jsx("td", { children: "1" }),
            /* @__PURE__ */ jsx("td", { className: "col-best-for", children: "Maximum savings & value" })
          ] })
        ] })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", id: "multi-connection", children: /* @__PURE__ */ jsxs("div", { className: "container", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "What Makes Us the Best Premium IPTV Service?" }),
      /* @__PURE__ */ jsxs("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "800px", margin: "var(--space-4) auto var(--space-6)" }, children: [
        "It’s not just about affordability; it’s about unbeatable reliability. When you purchase a Forest IPTV subscription, you are investing in top-of-the-line server architecture. We have meticulously built our network to be a 100% buffer-free IPTV provider, meaning you can say goodbye to the endless loading screens that plague lesser services.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        "Thanks to our proprietary anti-freezing IPTV service technology, your streams remain stable even during peak viewing hours. This makes us the absolute best IPTV for live sports. You will never miss a crucial goal, a game-winning touchdown, or a highly anticipated pay-per-view fight again. Plus, your subscription grants you full access to our continuously updated Forest IPTV channel list, featuring tens of thousands of live global channels, blockbuster VODs, and complete TV series box sets."
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn btn-secondary", children: "Request Custom Package" })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "section", id: "pricing-trust", children: [
      /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("h2", { className: "display-sm", style: { textAlign: "center" }, children: "Seamless Setup on All Your Favorite Devices" }),
        /* @__PURE__ */ jsxs("p", { className: "body-md", style: { color: "var(--on-surface-variant)", maxWidth: "800px", margin: "var(--space-4) auto", textAlign: "center" }, children: [
          "We have made sure that accessing your content is as simple as turning on your television. Our service is incredibly versatile. If you prefer streaming on the big screen, you will find that we are the top-rated Forest IPTV for Firestick provider, and widely considered the best IPTV for Android TV boxes on the market.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("br", {}),
          "Setup is a breeze. After checkout, you will receive a comprehensive Forest IPTV setup guide directly to your email. This guide includes easy-to-follow instructions for popular applications, including a quick Forest IPTV Smarters Pro setup walkthrough and details on how to configure your playlist using Forest IPTV TiviMate."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pricing-trust-badges", style: { marginTop: "var(--space-8)" }, children: [
          /* @__PURE__ */ jsxs("div", { className: "pricing-trust-badge", children: [
            /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "verified_user" }),
            /* @__PURE__ */ jsx("span", { className: "label-lg", children: "99.9% Uptime Server" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pricing-trust-badge", children: [
            /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "timer" }),
            /* @__PURE__ */ jsx("span", { className: "label-lg", children: "Instant Activation" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pricing-trust-badge", children: [
            /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "tv" }),
            /* @__PURE__ */ jsxs("span", { className: "label-lg", children: [
              "All Device Guides (",
              /* @__PURE__ */ jsx(Link, { to: "/setup-guides", style: { color: "var(--primary)", textDecoration: "underline" }, children: "View" }),
              ")"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", marginTop: "var(--space-10)" }, children: [
        /* @__PURE__ */ jsx("h2", { className: "display-sm", children: "Not Ready to Commit? Try Before You Buy" }),
        /* @__PURE__ */ jsxs("p", { className: "body-md", style: { color: "var(--on-surface-variant)", marginTop: "var(--space-3)" }, children: [
          "We understand that you might have been burned by low-quality streaming providers in the past. If you are currently searching for a reliable Forest IPTV alternative because your last provider let you down, we want to prove our quality to you completely risk-free.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("br", {}),
          "Before you make a purchase, we invite you to claim a Forest IPTV free trial. This 24-hour IPTV trial gives you full, unrestricted access to our entire network. Test our sports channels, browse the VOD library, and experience our anti-buffering technology firsthand before you spend a single dime."
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { marginTop: "var(--space-6)" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "36px", margin: "0 10px", color: "var(--outline)" }, children: "credit_card" }),
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "36px", margin: "0 10px", color: "var(--outline)" }, children: "payments" }),
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "36px", margin: "0 10px", color: "var(--outline)" }, children: "currency_bitcoin" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "body-sm", style: { marginTop: "var(--space-12)", color: "var(--outline)" }, children: [
          "Still unsure? ",
          /* @__PURE__ */ jsx(Link, { to: "/iptv-free-trial", style: { color: "var(--primary)", textDecoration: "underline" }, children: "Grab a 24-hr trial here." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", id: "pricing-faq", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("h2", { className: "display-sm", style: { textAlign: "center", marginBottom: "var(--space-8)" }, children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { style: { maxWidth: "800px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { marginBottom: "var(--space-6)" }, children: [
          /* @__PURE__ */ jsx("h3", { className: "headline-sm", children: "Q1: Is it safe to buy Forest IPTV online?" }),
          /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)", marginTop: "var(--space-2)" }, children: "A: Absolutely. We use highly secure, encrypted payment gateways to ensure your personal and financial data is completely protected during checkout." })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { marginBottom: "var(--space-6)" }, children: [
          /* @__PURE__ */ jsx("h3", { className: "headline-sm", children: "Q2: What happens after I purchase my Forest IPTV 1 month or annual plan?" }),
          /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)", marginTop: "var(--space-2)" }, children: "A: Delivery is automated and instant! Within minutes of your payment being confirmed, you will receive an email containing your account credentials, playlist URLs, and a link to the Forest IPTV setup guide." })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { marginBottom: "var(--space-6)" }, children: [
          /* @__PURE__ */ jsx("h3", { className: "headline-sm", children: "Q3: Can I watch on multiple devices at the same time?" }),
          /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)", marginTop: "var(--space-2)" }, children: "A: Yes! While our standard Forest IPTV subscription comes with one connection, you have the option to add additional connections at checkout so your entire family can stream on different screens simultaneously." })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { marginBottom: "var(--space-6)" }, children: [
          /* @__PURE__ */ jsx("h3", { className: "headline-sm", children: "Q4: Does the Forest IPTV channel list change?" }),
          /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)", marginTop: "var(--space-2)" }, children: "A: We are constantly updating our library. Our team works daily to add new VODs, update television series episodes, and ensure that all live broadcasting links are fully functional." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "pricing-cta", children: /* @__PURE__ */ jsxs("div", { className: "container", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("h2", { className: "display-md", children: "Ready to Transform Your Entertainment Experience?" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "700px", margin: "var(--space-4) auto var(--space-8)" }, children: "The time to stop overpaying for subpar television is right now. Secure your access to the ultimate streaming hub and join thousands of satisfied cord-cutters worldwide." }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsx("a", { href: "https://wa.me/212763569826", target: "_blank", rel: "noopener noreferrer", className: "btn btn-primary btn-lg", children: "Buy Now" }),
        /* @__PURE__ */ jsx(Link, { to: "/iptv-free-trial", className: "btn btn-secondary btn-lg", children: "Start Free Test 🎁" })
      ] })
    ] }) })
  ] });
}
export {
  PricingPage as default
};
