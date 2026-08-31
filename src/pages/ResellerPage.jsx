import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function ResellerPage() {
  return (
    <div className="reseller-page" id="reseller-page">
      <Helmet>
        <title>IPTV Reseller Panel — Start Your Own IPTV Business | Zyminex</title>
        <meta name="description" content="Join the Zyminex reseller program. Get access to the best IPTV reseller panel with 4K streaming and 24/7 technical support." />
        <link rel="canonical" href="https://www.zyminex.pro/iptv-reseller-panel" />
        
        <meta property="og:site_name" content="Zyminex" />
        <meta property="og:title" content="Zyminex — IPTV Reseller Panel — Start Your Own IPTV Business" />
        <meta property="og:description" content="Join the Zyminex reseller program. Get access to the best IPTV reseller panel with 4K streaming and 24/7 technical support." />
        <meta property="og:image" content="https://www.zyminex.pro/og-image.png" />
        <meta property="og:url" content="https://www.zyminex.pro/iptv-reseller-panel" />
        <meta property="og:type" content="website" />

        <meta name="twitter:site" content="@zyminex" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zyminex — IPTV Reseller Panel — Start Your Own IPTV Business" />
        <meta name="twitter:description" content="Join the Zyminex reseller program. Get access to the best IPTV reseller panel with 4K streaming and 24/7 technical support." />
        <meta name="twitter:image" content="https://www.zyminex.pro/og-image.png" />
      </Helmet>

      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh', paddingBottom: 'var(--space-12)' }}>
        <div className="hero__bg-effects">
          <div className="hero__glow hero__glow--1"></div>
        </div>
        <div className="container hero__content" style={{ textAlign: 'center' }}>
          <span className="label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--space-4)', display: 'inline-block' }}>B2B Program</span>
          <h1 className="display-lg hero__title">
            Become a <span className="hero__title-accent">Zyminex Reseller</span><br/>Bring Premium TV to the World
          </h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '800px', margin: 'var(--space-4) auto 0' }}>
            By joining as a IPTV Zyminex reseller, you'll have the opportunity to offer your customers the latest in premium entertainment — while building a profitable business of your own. Our user-friendly platform, backed by 24/7 dedicated support, makes it simple to manage your clients, grow your sales, and deliver unbeatable value every step of the way.
          </p>
        </div>
      </section>

      {/* How To Become */}
      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-sm" style={{ marginBottom: 'var(--space-2)' }}>How To Become a Zyminex Reseller?</h2>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-10)' }}>Start your own IPTV business with Zyminex TV — resell premium TV services and earn money!</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
            <div className="card card-elevated">
              <div style={{ width: '64px', height: '64px', margin: '0 auto var(--space-4)', background: 'rgba(18, 117, 226, 0.1)', color: 'var(--primary)', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-icons-outlined" style={{ fontSize: '32px' }}>diamond</span>
              </div>
              <h3 className="title-md">1. Choose your Reseller Plan!</h3>
            </div>
            <div className="card card-elevated">
              <div style={{ width: '64px', height: '64px', margin: '0 auto var(--space-4)', background: 'rgba(18, 117, 226, 0.1)', color: 'var(--primary)', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-icons-outlined" style={{ fontSize: '32px' }}>credit_card</span>
              </div>
              <h3 className="title-md">2. Get Invoice and Pay!</h3>
            </div>
            <div className="card card-elevated">
              <div style={{ width: '64px', height: '64px', margin: '0 auto var(--space-4)', background: 'rgba(18, 117, 226, 0.1)', color: 'var(--primary)', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-icons-outlined" style={{ fontSize: '32px' }}>check_box</span>
              </div>
              <h3 className="title-md">3. Start selling to your clients</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Pricing Text */}
      <section className="section">
        <div className="container" style={{ maxWidth: '850px' }}>
          <h2 className="display-sm" style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>Zyminex Reseller Panel Credit Pricing</h2>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
            As a reseller, you can use credits on Zyminex reseller panel to create IPTV subscriptions tailored to your customers' needs:
          </p>
          <ul className="body-lg" style={{ color: 'var(--on-surface-variant)', paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-4)', listStyleType: 'disc' }}>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong>0.1 Credit</strong> = 1-Month Subscription</li>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong>0.3 Credits</strong> = 3-Month Subscription</li>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong>0.6 Credits</strong> = 6-Month Subscription</li>
            <li><strong>1 Credit</strong> = 12-Month (1-Year) Subscription</li>
          </ul>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)' }}>
            This flexible system allows you to offer subscriptions of any duration, giving your customers exactly what they need while maximizing your earning potential.
          </p>
        </div>
      </section>

      {/* Choose your Reseller Plan */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="display-sm" style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>Choose your Reseller Plan</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
            {/* 10 Credits */}
            <div className="card card-elevated" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ textAlign: 'center' }}>
                <h3 className="display-sm" style={{ marginBottom: 'var(--space-2)' }}>10 Credits</h3>
                <p className="label-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>Reseller Panel</p>
                <div className="display-lg" style={{ color: 'var(--primary)', marginBottom: 'var(--space-6)' }}>€250</div>
              </div>
              
              <hr className="ghost-border" style={{ marginBottom: 'var(--space-6)' }} />
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)', flex: 1 }}>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> Credits never expire
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> Your own reseller panel
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> Access to full range of channels
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> Brand your service as your own
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> Flexible pricing options
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> All Devices are supported
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> Instant Activation
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> 24/7 Support
                </li>
              </ul>
              
              <a href="https://wa.me/212763569826?text=I%20want%20to%20buy%20the%2010%20Credits%20Reseller%20Plan" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                Get started
              </a>
            </div>

            {/* 25 Credits */}
            <div className="card card-elevated" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ textAlign: 'center' }}>
                <h3 className="display-sm" style={{ marginBottom: 'var(--space-2)' }}>25 Credits</h3>
                <p className="label-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>Reseller Panel</p>
                <div className="display-lg" style={{ color: 'var(--primary)', marginBottom: 'var(--space-6)' }}>€500</div>
              </div>
              
              <hr className="ghost-border" style={{ marginBottom: 'var(--space-6)' }} />
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)', flex: 1 }}>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> Credits never expire
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> Your own reseller panel
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> Access to full range of channels
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> Brand your service as your own
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> Flexible pricing options
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> All Devices are supported
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> Instant Activation
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> 24/7 Support
                </li>
              </ul>
              
              <a href="https://wa.me/212763569826?text=I%20want%20to%20buy%20the%2025%20Credits%20Reseller%20Plan" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                Get started
              </a>
            </div>

            {/* 50 Credits */}
            <div className="card card-elevated" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ textAlign: 'center' }}>
                <h3 className="display-sm" style={{ marginBottom: 'var(--space-2)' }}>50 Credits</h3>
                <p className="label-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>Reseller Panel</p>
                <div className="display-lg" style={{ color: 'var(--primary)', marginBottom: 'var(--space-6)' }}>€900</div>
              </div>
              
              <hr className="ghost-border" style={{ marginBottom: 'var(--space-6)' }} />
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)', flex: 1 }}>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> Credits never expire
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> Your own reseller panel
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> Access to full range of channels
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> Brand your service as your own
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> Flexible pricing options
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> All Devices are supported
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> Instant Activation
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span className="material-icons-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>check_circle</span> 24/7 Support
                </li>
              </ul>
              
              <a href="https://wa.me/212763569826?text=I%20want%20to%20buy%20the%2050%20Credits%20Reseller%20Plan" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Start Selling */}
      <section className="section">
        <div className="container" style={{ maxWidth: '950px' }}>
          <div className="card" style={{ padding: 'var(--space-8)' }}>
            <h2 className="display-sm" style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>Start Selling Zyminex TV Services</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
              Join Zyminex TV and turn your passion for entertainment into profit. When you make your first sale, you can receive a <strong style={{ color: 'var(--on-surface)' }}>15% discount</strong> coupon — simply <strong style={{ color: 'var(--on-surface)' }}>contact us</strong> to claim it!
            </p>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
              You'll have your own Zyminex Reseller Panel, allowing you to create and manage subscriptions with full control.
            </p>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
              Enjoy a stable, high-performance server built to support your business needs. If any issue arises, we've got you covered with free backup servers and alternative panels to keep your customers connected without interruption.
            </p>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)' }}>
              Choose from a wide range of panels with unique features and quality levels tailored to your goals. Just fill out the form below and start growing your business — earn money confidently with the trusted support of Zyminex TV.
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="section section-alt" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <h2 className="display-sm" style={{ marginBottom: 'var(--space-4)' }}>You're Not Alone - We're Here to Help!</h2>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-8)' }}>
            Have a question or need assistance? Our support team is always ready to help. Feel free to contact us anytime, we'll make sure you get the answers and support you need.
          </p>
          <a href="https://wa.me/212763569826" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
            Get Help
          </a>
        </div>
      </section>

    </div>
  )
}
