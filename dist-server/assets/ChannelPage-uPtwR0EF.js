import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { H as Helmet, L as Link } from "../entry-server.js";
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "react-dom";
const categories = ["All", "Sports", "Movies", "News", "Kids", "International", "Latino"];
const channelsData = [
  // Sports
  ...["ESPN", "ESPN2", "ESPN3", "Fox Sports 1", "Fox Sports 2", "NBC Sports", "NFL Network", "NBA TV", "MLB Network", "NHL Network", "beIN Sports", "Sky Sports Premier League", "Sky Sports Football", "BT Sport 1", "Eurosport 1", "Eurosport 2", "CBS Sports", "TNT Sports", "DAZN", "Bally Sports"].map((name, i) => ({ id: `s-${i}`, name, category: "Sports" })),
  // Movies
  ...["HBO", "HBO2", "Showtime", "Cinemax", "Starz", "AMC", "FX", "FXX", "TNT", "TBS", "USA Network", "Syfy", "Bravo", "E!", "Lifetime", "Hallmark", "Discovery", "History Channel", "National Geographic", "Animal Planet"].map((name, i) => ({ id: `m-${i}`, name, category: "Movies" })),
  // News
  ...["CNN", "CNN International", "Fox News", "MSNBC", "BBC News", "BBC World News", "Al Jazeera English", "Sky News", "CNBC", "Bloomberg", "France 24", "DW News", "Euronews", "NBC News", "ABC News"].map((name, i) => ({ id: `n-${i}`, name, category: "News" })),
  // Kids
  ...["Disney Channel", "Disney Junior", "Cartoon Network", "Nickelodeon", "Nick Jr", "Boomerang", "Disney XD", "PBS Kids", "Universal Kids", "Toon Disney"].map((name, i) => ({ id: `k-${i}`, name, category: "Kids" })),
  // International
  ...["TV5Monde", "RAI 1", "RAI 2", "Antena 3", "TVE", "ARD", "ZDF", "M6", "TF1", "Canal+", "MBC", "beIN Arabic", "MBC Drama", "Zee TV", "Sony Entertainment", "Star Plus", "TV Azteca", "Univision", "Telemundo", "CGTN"].map((name, i) => ({ id: `i-${i}`, name, category: "International" })),
  // Latino
  ...["Univision", "Telemundo", "Galavisión", "Univision Deportes", "ESPN Deportes", "Fox Deportes", "TeleFormula", "Azteca 7", "Canal de las Estrellas", "NBC Universo"].map((name, i) => ({ id: `l-${i}`, name, category: "Latino" }))
];
function ChannelPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showBanner, setShowBanner] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 5e3);
    return () => clearTimeout(timer);
  }, []);
  const filteredChannels = useMemo(() => {
    return channelsData.filter((col) => {
      const matchCategory = activeCategory === "All" || col.category === activeCategory;
      const matchSearch = col.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchTerm]);
  return /* @__PURE__ */ jsxs("div", { className: "channel-page", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Forest IPTV Channel List — 22,000+ Live Channels USA & International" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Explore the massive Forest IPTV channel list. Stream live sports, international TV, and 4K movies with the best premium IPTV service. Get a free trial to test our channels today!" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.forestiptv.pro/channel-list" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Forest IPTV Channel List — 22,000+ Live Channels" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Explore the massive Forest IPTV channel list. Stream live sports, international TV, and 4K movies with the best premium IPTV service." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://www.forestiptv.pro/og-image.png" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.forestiptv.pro/channel-list" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Forest IPTV Channel List — 22,000+ Channels" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Explore our massive 4K channel lineup. Live sports, world news, and premium movies." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://www.forestiptv.pro/og-image.png" })
    ] }),
    showBanner && /* @__PURE__ */ jsxs("div", { className: "channel-banner", children: [
      /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "18px" }, children: "info" }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Showing sample channels — subscribe to access all ",
        /* @__PURE__ */ jsx("strong", { children: "22,000+" }),
        " channels in our live lineup!"
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "channel-header", children: /* @__PURE__ */ jsxs("div", { className: "container", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("h1", { className: "display-md", style: { marginBottom: "var(--space-4)" }, children: "Discover the Ultimate Forest IPTV Channel List: 20,000+ Live Streams & VODs" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "800px", margin: "0 auto var(--space-8)" }, children: "Tired of scrolling through limited cable packages with nothing good to watch? Welcome to the Forest IPTV channels guide, your portal to unlimited global entertainment. When you make the switch to our platform, you unlock a universe of live television, blockbuster movies, and exclusive sports coverage from around the world. We have meticulously curated a massive, high-quality library designed to replace your expensive cable bill without sacrificing the shows you love. Dive into our extensive offerings below and see why thousands of viewers have chosen us as their ultimate home entertainment hub." }),
      /* @__PURE__ */ jsxs("div", { className: "channel-stats", children: [
        /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { color: "var(--primary)", fontSize: "28px" }, children: "live_tv" }),
        /* @__PURE__ */ jsx("span", { className: "title-lg", children: "22,000+ Channels Available" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", id: "channel-browser", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { textAlign: "center", color: "var(--on-surface-variant)", marginBottom: "var(--space-8)" }, children: "Below is a sample of our most popular channels. Our full list includes 22,000+ live channels across Sports, Movies, News, Kids, Music and International categories — all available instantly after activation." }),
      /* @__PURE__ */ jsxs("div", { className: "channel-controls", children: [
        /* @__PURE__ */ jsxs("div", { className: "channel-search", children: [
          /* @__PURE__ */ jsx("span", { className: "material-icons-outlined search-icon", children: "search" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              className: "input-field",
              placeholder: "Search channel name (e.g., ESPN, HBO)",
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "channel-filters", children: categories.map((cat) => /* @__PURE__ */ jsx(
          "button",
          {
            className: `channel-filter-btn ${activeCategory === cat ? "active" : ""}`,
            onClick: () => setActiveCategory(cat),
            children: cat
          },
          cat
        )) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "channels-grid", children: filteredChannels.length > 0 ? filteredChannels.map((channel) => /* @__PURE__ */ jsxs("div", { className: "channel-card", children: [
        /* @__PURE__ */ jsx("div", { className: "channel-card__logo", children: /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", children: "tv" }) }),
        /* @__PURE__ */ jsxs("div", { className: "channel-card__info", children: [
          /* @__PURE__ */ jsx("h3", { className: "channel-card__name", children: channel.name }),
          /* @__PURE__ */ jsx("span", { className: "channel-card__badge", children: channel.category })
        ] })
      ] }, channel.id)) : /* @__PURE__ */ jsxs("div", { className: "channel-empty-state", children: [
        /* @__PURE__ */ jsx("span", { className: "material-icons-outlined", style: { fontSize: "48px", color: "var(--outline)", marginBottom: "var(--space-4)" }, children: "search_off" }),
        /* @__PURE__ */ jsx("h3", { className: "title-lg", children: "No channels found" }),
        /* @__PURE__ */ jsx("p", { className: "body-md", style: { color: "var(--on-surface-variant)" }, children: "Try adjusting your search or category filter." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", id: "channel-info", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { style: { marginBottom: "var(--space-12)" }, children: [
        /* @__PURE__ */ jsx("h2", { className: "display-sm", style: { marginBottom: "var(--space-4)" }, children: "⚽ Sports Channels" }),
        /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)" }, children: "Never miss a game-winning moment again. Widely rated as the best IPTV for live sports, Forest IPTV gives you exclusive access to all major global networks, including NFL Sunday Ticket, NBA League Pass, Premier League soccer, NHL, and MLB. Enjoy VIP access to live PPV events, UFC fights, and international racing—all streamed in stunning HD and 4K. Thanks to our advanced anti-freezing IPTV service technology, you can finally watch high-stakes matches with zero lag from a truly buffer-free IPTV provider." })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { marginBottom: "var(--space-12)" }, children: [
        /* @__PURE__ */ jsx("h2", { className: "display-sm", style: { marginBottom: "var(--space-4)" }, children: "🇺🇸 USA Channels" }),
        /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)" }, children: "Cut the cord without losing your favorite American television. Our massive Forest IPTV channel list includes all major US broadcast networks (ABC, CBS, NBC, FOX, ESPN) alongside premium cable favorites like HBO, AMC, Starz, and Showtime. Whether you are catching up on local news, binge-watching reality TV, or enjoying a family movie night with your 4K IPTV subscription, we deliver the ultimate US entertainment experience. Discover why we are the best premium IPTV service for replacing expensive cable packages." })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { marginBottom: "var(--space-12)" }, children: [
        /* @__PURE__ */ jsx("h2", { className: "display-sm", style: { marginBottom: "var(--space-4)" }, children: "🌍 International Channels" }),
        /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)" }, children: "Bring the world directly to your living room. A Forest IPTV subscription unlocks thousands of premium live channels from the UK, Canada, Latin America, Europe, the Middle East, Asia, and beyond. Perfect for expats and bilingual households, our diverse international lineup ensures you stay connected to your home country's local news, regional sports, and exclusive dramas. Ready to explore the globe? Claim your Forest IPTV free trial today to test our worldwide servers, or buy Forest IPTV to unlock instant global broadcasting." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section section-alt", id: "channel-cta", children: /* @__PURE__ */ jsxs("div", { className: "container", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("h2", { className: "display-sm", style: { marginBottom: "var(--space-4)" }, children: "Ready to access all 22,000+ channels?" }),
      /* @__PURE__ */ jsx("p", { className: "body-lg", style: { color: "var(--on-surface-variant)", maxWidth: "600px", margin: "0 auto var(--space-6)" }, children: "Start your free trial today — no commitment required." }),
      /* @__PURE__ */ jsx(Link, { to: "/iptv-free-trial", className: "btn btn-primary btn-lg", style: { padding: "var(--space-4) var(--space-8)" }, children: "Start Your Free Test Trial" })
    ] }) })
  ] });
}
export {
  ChannelPage as default
};
