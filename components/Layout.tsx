
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CompassMark from './brand/CompassMark';
import { ZENITH_PEAK_IMAGE } from '../lib/brandAssets';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsInsightsOpen(false);
  }, [location.pathname]);

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Why Zenith', path: '/why-zenith' },
  ];

  const servicesLinks = [
    { name: 'Underwriting & Claims', path: '/services/underwriting-claims' },
    { name: 'Captive Integration', path: '/services/captive-integration' },
    { name: 'Apollo Health Plan', path: '/services/apollo-health-plan' },
    { name: 'Consulting & Strategy', path: '/services/consulting-strategy' },
  ];

  const secondaryLinks = [
    { name: 'For Brokers', path: '/for-brokers' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const insightsLinks = [
    { name: 'Media', path: '/media' },
    { name: 'Events', path: '/events' },
    { name: 'Resources', path: '/resources' },
  ];

  const LOGO_URL = "https://res.cloudinary.com/dtrxl120u/image/upload/v1766602212/Zenith_Primary_Logo-1_teruwz_urxbr0.webp";

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Top Navigation */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-[0_18px_45px_-35px_rgba(15,23,42,0.65)] py-2' : 'bg-white/95 backdrop-blur-lg py-4'
        } border-b border-slate-200/80`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src={LOGO_URL} 
                  alt="Zenith Risk Strategies" 
                  className="h-10 md:h-14 w-auto object-contain transition-transform hover:scale-[1.02]"
                  style={{ minWidth: '160px' }}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all relative py-2 ${
                    location.pathname === link.path 
                    ? 'text-zenith-blue after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-zenith-blue' 
                    : 'text-slate-500 hover:text-zenith-blue'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative group h-full flex items-center"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`flex items-center text-[11px] font-bold tracking-[0.2em] uppercase transition-colors py-2 ${
                    location.pathname.includes('/services') ? 'text-zenith-blue' : 'text-slate-500 hover:text-zenith-blue'
                  }`}
                >
                  Services
                  <svg className={`ml-1 w-3 h-3 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-xl shadow-[0_28px_70px_-32px_rgba(15,23,42,0.65)] border border-slate-200/80 py-4 rounded-b-2xl transition-all duration-200 origin-top ${
                  isServicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}>
                  {servicesLinks.map((subLink) => (
                    <Link
                      key={subLink.path}
                      to={subLink.path}
                      className="block px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-zenith-blue transition-colors"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Media, Events & Resources Dropdown */}
              <div
                className="relative group h-full flex items-center"
                onMouseEnter={() => setIsInsightsOpen(true)}
                onMouseLeave={() => setIsInsightsOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={isInsightsOpen}
                  onClick={() => setIsInsightsOpen(!isInsightsOpen)}
                  className={`flex items-center text-[11px] font-bold tracking-[0.2em] uppercase transition-colors py-2 ${
                    ['/media', '/events', '/resources'].some((path) => location.pathname.startsWith(path)) ? 'text-zenith-blue' : 'text-slate-500 hover:text-zenith-blue'
                  }`}
                >
                  Media
                  <svg className={`ml-1 w-3 h-3 transition-transform duration-200 ${isInsightsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white/95 backdrop-blur-xl shadow-[0_28px_70px_-32px_rgba(15,23,42,0.65)] border border-slate-200/80 py-4 rounded-b-2xl transition-all duration-200 origin-top ${isInsightsOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                  {insightsLinks.map((link) => <Link key={link.path} to={link.path} className="block px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-zenith-blue transition-colors">{link.name}</Link>)}
                </div>
              </div>

              {secondaryLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all relative py-2 ${
                    location.pathname === link.path 
                    ? 'text-zenith-blue after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-zenith-blue' 
                    : 'text-slate-500 hover:text-zenith-blue'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 p-2 hover:bg-slate-100 rounded-md transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`} style={{ top: '64px' }}>
          <div className="flex flex-col p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-64px)]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-bold text-zenith-navy uppercase tracking-widest border-b border-slate-50 pb-2"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="space-y-4">
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">Our Services</p>
              {servicesLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm font-semibold text-slate-600 hover:text-zenith-blue pl-4"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">Media & Insights</p>
              {insightsLinks.map((link) => (
                <Link key={link.path} to={link.path} className="block text-sm font-semibold text-slate-600 hover:text-zenith-blue pl-4">{link.name}</Link>
              ))}
            </div>

            {secondaryLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-bold text-zenith-navy uppercase tracking-widest border-b border-slate-50 pb-2"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-8">
              <Link 
                to="/contact" 
                className="block w-full text-center py-4 bg-zenith-blue text-white font-bold rounded uppercase tracking-[0.2em] text-xs"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="premium-dark-section text-white py-20 relative overflow-hidden">
        <img src={ZENITH_PEAK_IMAGE} alt="" aria-hidden="true" className="absolute left-0 bottom-0 w-[46%] h-full object-cover object-center opacity-[0.07] mix-blend-screen" />
        <CompassMark className="absolute -right-10 -bottom-16 w-80 h-80 opacity-[0.05]" imageClassName="brightness-0 invert" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
            <div className="md:col-span-5">
              <Link to="/" className="inline-block mb-8">
                <img 
                  src={LOGO_URL} 
                  alt="Zenith Risk Strategies" 
                  className="h-16 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-slate-400 max-w-sm leading-relaxed text-sm font-light">
                Engineering alignment in healthcare risk. A modern Medical Stop-Loss MGU built on underwriting discipline, clinical stewardship, and transparent performance.
              </p>
              <address className="mt-6 text-slate-400 text-sm leading-relaxed font-light not-italic">
                5004 Bee Creek Rd, Suite 620<br />
                Spicewood, TX 78669
              </address>
              <div className="mt-6">
                <a
                  href="https://www.linkedin.com/company/zenith-risk-strategies-llc/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Zenith Risk Strategies on LinkedIn"
                  className="inline-block text-slate-400 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-10">Quick Navigation</h3>
              <ul className="space-y-5">
                <li><Link to="/why-zenith" className="text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Why Zenith</Link></li>
                <li><Link to="/for-brokers" className="text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Broker Portal</Link></li>
                <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Our Story</Link></li>
                <li><Link to="/resources" className="text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Knowledge Base</Link></li>
                <li><Link to="/careers" className="text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Careers</Link></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-10">Strategic Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="space-y-5">
                  <li><Link to="/services/underwriting-claims" className="text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Underwriting</Link></li>
                  <li><Link to="/services/captive-integration" className="text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Captives</Link></li>
                </ul>
                <ul className="space-y-5">
                  <li><Link to="/services/apollo-health-plan" className="text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Apollo Plan</Link></li>
                  <li><Link to="/services/consulting-strategy" className="text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Consulting</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold space-y-4 md:space-y-0">
            <p>&copy; {new Date().getFullYear()} Zenith Risk Strategies. Precision Engineering for Healthcare Risk.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link to="/admin" className="hover:text-white transition-colors border border-slate-700 rounded px-3 py-1 -my-1">Admin Login</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
