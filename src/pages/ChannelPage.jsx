import { useState, useMemo, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './ChannelPage.css'

const categories = ['All', 'Sports', 'Movies', 'News', 'Kids', 'International', 'Latino']

const channelsData = [
  // Sports
  ...['ESPN', 'ESPN2', 'ESPN3', 'Fox Sports 1', 'Fox Sports 2', 'NBC Sports', 'NFL Network', 'NBA TV', 'MLB Network', 'NHL Network', 'beIN Sports', 'Sky Sports Premier League', 'Sky Sports Football', 'BT Sport 1', 'Eurosport 1', 'Eurosport 2', 'CBS Sports', 'TNT Sports', 'DAZN', 'Bally Sports'].map((name, i) => ({ id: `s-${i}`, name, category: 'Sports' })),
  
  // Movies
  ...['HBO', 'HBO2', 'Showtime', 'Cinemax', 'Starz', 'AMC', 'FX', 'FXX', 'TNT', 'TBS', 'USA Network', 'Syfy', 'Bravo', 'E!', 'Lifetime', 'Hallmark', 'Discovery', 'History Channel', 'National Geographic', 'Animal Planet'].map((name, i) => ({ id: `m-${i}`, name, category: 'Movies' })),
  
  // News
  ...['CNN', 'CNN International', 'Fox News', 'MSNBC', 'BBC News', 'BBC World News', 'Al Jazeera English', 'Sky News', 'CNBC', 'Bloomberg', 'France 24', 'DW News', 'Euronews', 'NBC News', 'ABC News'].map((name, i) => ({ id: `n-${i}`, name, category: 'News' })),
  
  // Kids
  ...['Disney Channel', 'Disney Junior', 'Cartoon Network', 'Nickelodeon', 'Nick Jr', 'Boomerang', 'Disney XD', 'PBS Kids', 'Universal Kids', 'Toon Disney'].map((name, i) => ({ id: `k-${i}`, name, category: 'Kids' })),
  
  // International
  ...['TV5Monde', 'RAI 1', 'RAI 2', 'Antena 3', 'TVE', 'ARD', 'ZDF', 'M6', 'TF1', 'Canal+', 'MBC', 'beIN Arabic', 'MBC Drama', 'Zee TV', 'Sony Entertainment', 'Star Plus', 'TV Azteca', 'Univision', 'Telemundo', 'CGTN'].map((name, i) => ({ id: `i-${i}`, name, category: 'International' })),
  
  // Latino
  ...['Univision', 'Telemundo', 'Galavisión', 'Univision Deportes', 'ESPN Deportes', 'Fox Deportes', 'TeleFormula', 'Azteca 7', 'Canal de las Estrellas', 'NBC Universo'].map((name, i) => ({ id: `l-${i}`, name, category: 'Latino' })),
]

export default function ChannelPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const filteredChannels = useMemo(() => {
    return channelsData.filter((col) => {
      const matchCategory = activeCategory === 'All' || col.category === activeCategory
      const matchSearch = col.name.toLowerCase().includes(searchTerm.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [activeCategory, searchTerm])

  return (
    <div className="channel-page">
      <Helmet>
        <title>Forest IPTV Channel List — 22,000+ Live Channels USA & International</title>
        <meta name="description" content="Explore the massive Forest IPTV channel list. Stream live sports, international TV, and 4K movies with the best premium IPTV service. Get a free trial to test our channels today!" />
        <link rel="canonical" href="https://www.forestiptv.pro/channel-list" />
        <meta property="og:title" content="Forest IPTV Channel List — 22,000+ Live Channels" />
        <meta property="og:description" content="Explore the massive Forest IPTV channel list. Stream live sports, international TV, and 4K movies with the best premium IPTV service." />
        <meta property="og:image" content="https://www.forestiptv.pro/og-image.png" />
        <meta property="og:url" content="https://www.forestiptv.pro/channel-list" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Forest IPTV Channel List — 22,000+ Channels" />
        <meta name="twitter:description" content="Explore our massive 4K channel lineup. Live sports, world news, and premium movies." />
        <meta name="twitter:image" content="https://www.forestiptv.pro/og-image.png" />
      </Helmet>

      {/* Banner */}
      {showBanner && (
        <div className="channel-banner">
          <span className="material-icons-outlined" style={{ fontSize: '18px' }}>info</span>
          <span>Showing sample channels — subscribe to access all <strong>22,000+</strong> channels in our live lineup!</span>
        </div>
      )}

      <section className="section" id="channel-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="display-md" style={{ marginBottom: 'var(--space-4)' }}>Discover the Ultimate Forest IPTV Channel List: 20,000+ Live Streams & VODs</h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '800px', margin: '0 auto var(--space-8)' }}>
            Tired of scrolling through limited cable packages with nothing good to watch? Welcome to the Forest IPTV channels guide, your portal to unlimited global entertainment. When you make the switch to our platform, you unlock a universe of live television, blockbuster movies, and exclusive sports coverage from around the world. We have meticulously curated a massive, high-quality library designed to replace your expensive cable bill without sacrificing the shows you love. Dive into our extensive offerings below and see why thousands of viewers have chosen us as their ultimate home entertainment hub.
          </p>

          <div className="channel-stats">
            <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '28px' }}>live_tv</span>
            <span className="title-lg">22,000+ Channels Available</span>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="channel-browser">
        <div className="container">
          <p className="body-lg" style={{ textAlign: 'center', color: 'var(--on-surface-variant)', marginBottom: 'var(--space-8)' }}>
            Below is a sample of our most popular channels. Our full list includes 22,000+ live channels across Sports, Movies, News, Kids, Music and International categories — all available instantly after activation.
          </p>
          {/* Controls */}
          <div className="channel-controls">
            <div className="channel-search">
              <span className="material-icons-outlined search-icon">search</span>
              <input
                type="text"
                className="input-field"
                placeholder="Search channel name (e.g., ESPN, HBO)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="channel-filters">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`channel-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="channels-grid">
            {filteredChannels.length > 0 ? (
              filteredChannels.map(channel => (
                <div key={channel.id} className="channel-card">
                  <div className="channel-card__logo">
                    <span className="material-icons-outlined">tv</span>
                  </div>
                  <div className="channel-card__info">
                    <h3 className="channel-card__name">{channel.name}</h3>
                    <span className="channel-card__badge">{channel.category}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="channel-empty-state">
                <span className="material-icons-outlined" style={{ fontSize: '48px', color: 'var(--outline)', marginBottom: 'var(--space-4)' }}>search_off</span>
                <h3 className="title-lg">No channels found</h3>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section" id="channel-info">
        <div className="container">
          {/* Sports Section */}
          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h2 className="display-sm" style={{ marginBottom: 'var(--space-4)' }}>⚽ Sports Channels</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)' }}>
              Never miss a game-winning moment again. Widely rated as the best IPTV for live sports, Forest IPTV gives you exclusive access to all major global networks, including NFL Sunday Ticket, NBA League Pass, Premier League soccer, NHL, and MLB. Enjoy VIP access to live PPV events, UFC fights, and international racing—all streamed in stunning HD and 4K. Thanks to our advanced anti-freezing IPTV service technology, you can finally watch high-stakes matches with zero lag from a truly buffer-free IPTV provider.
            </p>
          </div>

          {/* USA Section */}
          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h2 className="display-sm" style={{ marginBottom: 'var(--space-4)' }}>🇺🇸 USA Channels</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)' }}>
              Cut the cord without losing your favorite American television. Our massive Forest IPTV channel list includes all major US broadcast networks (ABC, CBS, NBC, FOX, ESPN) alongside premium cable favorites like HBO, AMC, Starz, and Showtime. Whether you are catching up on local news, binge-watching reality TV, or enjoying a family movie night with your 4K IPTV subscription, we deliver the ultimate US entertainment experience. Discover why we are the best premium IPTV service for replacing expensive cable packages.
            </p>
          </div>

          {/* International Section */}
          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h2 className="display-sm" style={{ marginBottom: 'var(--space-4)' }}>🌍 International Channels</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)' }}>
              Bring the world directly to your living room. A Forest IPTV subscription unlocks thousands of premium live channels from the UK, Canada, Latin America, Europe, the Middle East, Asia, and beyond. Perfect for expats and bilingual households, our diverse international lineup ensures you stay connected to your home country's local news, regional sports, and exclusive dramas. Ready to explore the globe? Claim your Forest IPTV free trial today to test our worldwide servers, or buy Forest IPTV to unlock instant global broadcasting.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="channel-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-sm" style={{ marginBottom: 'var(--space-4)' }}>Ready to access all 22,000+ channels?</h2>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: '0 auto var(--space-6)' }}>
            Start your free trial today — no commitment required.
          </p>
          <Link to="/iptv-free-trial" className="btn btn-primary btn-lg" style={{ padding: 'var(--space-4) var(--space-8)' }}>
            Start Your Free Test Trial
          </Link>
        </div>
      </section>
    </div>
  )
}
