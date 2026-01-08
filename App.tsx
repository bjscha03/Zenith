
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
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

const App: React.FC = () => {
  return (
    <Router>
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
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
