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
const IptvMultipleConnectionsMultiRoomGuide = lazy(() => import('./pages/blog/iptv-multiple-connections-multi-room-guide'))
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
const PortableIptvStreamingTravelGuide2026 = lazy(() => import('./pages/blog/PortableIptvStreamingTravelGuide2026'))
const InstallIptvSamsungLgSmartTv2026 = lazy(() => import('./pages/blog/InstallIptvSamsungLgSmartTv2026'))
const StopIspThrottlingIptv2026 = lazy(() => import('./pages/blog/StopIspThrottlingIptv2026'))
const IptvCableReplacementUsa2026 = lazy(() => import('./pages/blog/IptvCableReplacementUsa2026'))
const BuyIptvWithCryptoSafe2026 = lazy(() => import('./pages/blog/BuyIptvWithCryptoSafe2026'))
const BypassMlbBlackoutIptv2026Guide = lazy(() => import('./pages/blog/BypassMlbBlackoutIptv2026Guide'))
const FixBrokenIptvPlaylist2026 = lazy(() => import('./pages/blog/FixBrokenIptvPlaylist2026'))
const WatchChampionsLeagueFinal20264k = lazy(() => import('./pages/blog/watch-champions-league-final-2026-4k'))
const ReplaceCableAndNetflix2026 = lazy(() => import('./pages/blog/replace-cable-and-netflix-2026'))
const IptvCatchUpSports2026Guide = lazy(() => import('./pages/blog/iptv-catch-up-sports-2026-guide'))
const SetupFirestickForSportsSeason2026Guide = lazy(() => import('./pages/blog/setup-firestick-for-sports-season-2026-guide'))
const StreamCollegeFootballNoCable = lazy(() => import('./pages/blog/StreamCollegeFootballNoCable'))
const StreamBoxOfficePpvCheapUk = lazy(() => import('./pages/blog/StreamBoxOfficePpvCheapUk'))
const CheapNflSundayTicketAlternative = lazy(() => import('./pages/blog/CheapNflSundayTicketAlternative'))
const TivimateMultiScreenSportsSetup = lazy(() => import('./pages/blog/TivimateMultiScreenSportsSetup'))
const FixThursdayNightFootballLag2026 = lazy(() => import('./pages/blog/FixThursdayNightFootballLag2026'))

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
            background: '#0d0f14',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '3px solid rgba(255,255,255,0.1)',
              borderTop: '3px solid #6aabff',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite'
            }}></div>
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
            <Route path="/blog/iptv-multiple-connections-multi-room-guide" element={<IptvMultipleConnectionsMultiRoomGuide />} />
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
            <Route path="/blog/portable-iptv-streaming-travel-guide-2026" element={<PortableIptvStreamingTravelGuide2026 />} />
            <Route path="/blog/install-iptv-samsung-lg-smart-tv-2026" element={<InstallIptvSamsungLgSmartTv2026 />} />
            <Route path="/blog/stop-isp-throttling-iptv-2026" element={<StopIspThrottlingIptv2026 />} />
            <Route path="/blog/iptv-cable-replacement-usa-2026-guide" element={<IptvCableReplacementUsa2026 />} />
            <Route path="/blog/buy-iptv-with-crypto-safe-2026-guide" element={<BuyIptvWithCryptoSafe2026 />} />
            <Route path="/blog/bypass-mlb-blackout-iptv-2026-guide" element={<BypassMlbBlackoutIptv2026Guide />} />
            <Route path="/blog/fix-broken-iptv-playlist-dead-m3u-links-2026" element={<FixBrokenIptvPlaylist2026 />} />
            <Route path="/blog/watch-champions-league-final-2026-4k" element={<WatchChampionsLeagueFinal20264k />} />
            <Route path="/blog/replace-cable-and-netflix-2026" element={<ReplaceCableAndNetflix2026 />} />
            <Route path="/blog/iptv-catch-up-sports-2026-guide" element={<IptvCatchUpSports2026Guide />} />
            <Route path="/blog/setup-firestick-for-sports-season-2026-guide" element={<SetupFirestickForSportsSeason2026Guide />} />
            <Route path="/blog/stream-college-football-no-cable" element={<StreamCollegeFootballNoCable />} />
            <Route path="/blog/stream-box-office-ppv-cheap-uk" element={<StreamBoxOfficePpvCheapUk />} />
            <Route path="/blog/cheap-nfl-sunday-ticket-alternative" element={<CheapNflSundayTicketAlternative />} />
            <Route path="/blog/tivimate-multi-screen-sports-setup" element={<TivimateMultiScreenSportsSetup />} />
            <Route path="/blog/fix-thursday-night-football-lag-2026" element={<FixThursdayNightFootballLag2026 />} />
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

