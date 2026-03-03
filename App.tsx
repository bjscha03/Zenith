
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
import Events from './pages/Events';
import Careers from './pages/Careers';

const App: React.FC = () => {
  return (
                                           ayo                                                                      ayo                        ze                                                                                     ayo    w                                se                                         erwritingClaims />} />
          <Route path="/services/captive-integration" element={<CaptiveIntegration />} />
          <Route          <Route          <Route          <Route          <Route    />          <Route          <Route          <Route          <Route<C          <Route          <Route          <Route          <Route    t=          <Route          <Route          </a          <Route          <Route             <Route          <Route         so          <Route          <Route     co          <Route          <Route          <Route pa          <Route          <Route          <    <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path          <Route path       se                  <Route path="/careers" element={<Careers />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
