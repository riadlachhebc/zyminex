import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'

// Standard Lazy loaded pages
const PricingPage = lazy(() => import('./pages/PricingPage'))
const FaqPage = lazy(() => import('./pages/FaqPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const FreeTrialPage = lazy(() => import('./pages/FreeTrialPage'))
const InstallationPage = lazy(() => import('./pages/InstallationPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const RefundPage = lazy(() => import('./pages/RefundPage'))
const FirestickPage = lazy(() => import('./pages/FirestickPage'))
const ResellerPage = lazy(() => import('./pages/ResellerPage'))
const CompetitorPage = lazy(() => import('./pages/CompetitorPage'))
const TutorialTivimatePage = lazy(() => import('./pages/TutorialTivimatePage'))
const TutorialSmartersPage = lazy(() => import('./pages/TutorialSmartersPage'))
const TutorialIBOPage = lazy(() => import('./pages/TutorialIBOPage'))
const TutorialDownloaderPage = lazy(() => import('./pages/TutorialDownloaderPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const TivimateVsSmartersPage = lazy(() => import('./pages/articles/TivimateVsSmartersPage'))
const BestIptvService2026 = lazy(() => import('./pages/blog/best-iptv-service-2026'))
const BestIptvApps2026 = lazy(() => import('./pages/blog/best-iptv-apps-2026'))
const IptvFirestickSetupGuide = lazy(() => import('./pages/blog/iptv-firestick-setup-guide'))
const WatchSportsIptv = lazy(() => import('./pages/blog/watch-sports-iptv'))
const AntiFreezeIptvExplained = lazy(() => import('./pages/blog/anti-freeze-iptv-explained'))
const IptvFreeTrialGuide = lazy(() => import('./pages/blog/iptv-free-trial-guide'))
const IptvCrackdown2026 = lazy(() => import('./pages/blog/iptv-crackdown-2026'))
const IptvFreeTrialChecklist2026 = lazy(() => import('./pages/blog/iptv-free-trial-checklist-2026'))
const IptvVsCableCordCutting2026 = lazy(() => import('./pages/blog/iptv-vs-cable-cord-cutting-2026'))
const YoutubeTvVsPremiumIptv2026 = lazy(() => import('./pages/blog/youtube-tv-vs-premium-iptv-2026'))
const BestLatinoIptvUsa2026 = lazy(() => import('./pages/blog/best-latino-iptv-usa-2026'))
const SkyTvAlternativesEurope2026 = lazy(() => import('./pages/blog/SkyTvAlternativesEurope2026'))
const StreamNflDraft2026NoCable = lazy(() => import('./pages/blog/StreamNflDraft2026NoCable'))

const ChannelPage = lazy(() => import('./pages/ChannelPage'))


function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={
          <div style={{
            minHeight: '100vh',
            background: '#0a0a0f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
          }}>
            Loading...
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/buy-iptv-subscription" element={<PricingPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/iptv-free-trial" element={<FreeTrialPage />} />
            <Route path="/setup-guides" element={<InstallationPage />} />
            <Route path="/iptv-for-firestick" element={<FirestickPage />} />
            <Route path="/iptv-reseller-panel" element={<ResellerPage />} />
            <Route path="/imax-iptv-alternative" element={<CompetitorPage />} />
            <Route path="/tutorials/how-to-setup-tivimate" element={<TutorialTivimatePage />} />
            <Route path="/tutorials/how-to-setup-smarters-pro" element={<TutorialSmartersPage />} />
            <Route path="/tutorials/how-to-setup-ibo-player" element={<TutorialIBOPage />} />
            <Route path="/tutorials/how-to-set-up-downloader" element={<TutorialDownloaderPage />} />
            <Route path="/channel-list" element={<ChannelPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/best-iptv-service-2026" element={<BestIptvService2026 />} />
            <Route path="/blog/best-iptv-apps-2026" element={<BestIptvApps2026 />} />
            <Route path="/blog/iptv-firestick-setup-guide" element={<IptvFirestickSetupGuide />} />
            <Route path="/blog/watch-sports-iptv" element={<WatchSportsIptv />} />
            <Route path="/blog/anti-freeze-iptv-explained" element={<AntiFreezeIptvExplained />} />
            <Route path="/blog/iptv-free-trial-guide" element={<IptvFreeTrialGuide />} />
            <Route path="/blog/iptv-crackdown-2026" element={<IptvCrackdown2026 />} />
            <Route path="/blog/iptv-free-trial-checklist-2026" element={<IptvFreeTrialChecklist2026 />} />
            <Route path="/blog/iptv-vs-cable-cord-cutting-2026" element={<IptvVsCableCordCutting2026 />} />
            <Route path="/blog/youtube-tv-vs-premium-iptv-2026" element={<YoutubeTvVsPremiumIptv2026 />} />
            <Route path="/blog/best-latino-iptv-usa-2026" element={<BestLatinoIptvUsa2026 />} />
            <Route path="/blog/sky-tv-alternatives-europe-2026" element={<SkyTvAlternativesEurope2026 />} />
            <Route path="/blog/stream-nfl-draft-2026-no-cable" element={<StreamNflDraft2026NoCable />} />
            <Route path="/tivimate-vs-iptv-smarters-pro-best-player-2026" element={<TivimateVsSmartersPage />} />

            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/refund" element={<RefundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}

export default App

