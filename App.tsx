
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AuthBootstrap from './components/AuthBootstrap';
import GoogleAnalytics from './components/GoogleAnalytics';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import WhyZenith from './pages/WhyZenith';
import ServicesOverview from './pages/ServicesOverview';
import UnderwritingClaims from './pages/Services/UnderwritingClaims';
import CaptiveIntegration from './pages/Services/CaptiveIntegration';
import ApolloHealthPlan from './pages/Services/ApolloHealthPlan';
import ConsultingStrategy from './pages/Services/ConsultingStrategy';
import ForBrokers from './pages/ForBrokers';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Events from './pages/Events';
import ConferenceSeries from './pages/ConferenceSeries';
import Careers from './pages/Careers';
import Speakers from './pages/Speakers';
import Media from './pages/Media';
import ContentDetail from './pages/ContentDetail';
import Admin from './pages/Admin';
import HolidayInvitation from './pages/HolidayInvitation';

const App: React.FC = () => {
  // A standalone entry keeps the invitation URL clean and avoids analytics.
  if (window.location.pathname === '/invite' || window.location.pathname.startsWith('/invite/')) {
    const invitationKey = window.location.pathname.match(/^\/invite\/([A-Za-z0-9_-]+)\/?$/)?.[1] || '';
    return <Router>
      <header className="bg-white border-b border-slate-200 px-6 py-6">
        <a href="/" aria-label="Zenith Risk Strategies home" className="block max-w-7xl mx-auto">
          <img src="/images/zenith-original-logo.webp" alt="Zenith Risk Strategies" width={1500} height={470} style={{ width: 180, height: 'auto' }} />
        </a>
      </header>
      <main><HolidayInvitation invitationKey={invitationKey} /></main>
    </Router>;
  }
  return (
    <>
      <AuthBootstrap />
      <Router>
        <GoogleAnalytics />
        <ScrollToTop />
        <Layout>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-zenith" element={<WhyZenith />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/underwriting-claims" element={<UnderwritingClaims />} />
          <Route path="/services/captive-integration" element={<CaptiveIntegration />} />
          <Route path="/services/apollo-health-plan" element={<ApolloHealthPlan />} />
          <Route path="/services/consulting-strategy" element={<ConsultingStrategy />} />
          <Route path="/for-brokers" element={<ForBrokers />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/:slug" element={<ContentDetail section="media" />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ContentDetail section="resource" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/holiday-invitation" element={<HolidayInvitation />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<ContentDetail section="event" />} />
          <Route path="/conference-series" element={<ConferenceSeries />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/events/speakers" element={<Speakers />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/admin" element={<Admin />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
