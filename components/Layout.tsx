
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
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
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  const LOGO_URL = "https://res.cloudinary.com/dtrxl120u/image/upload/v1766602212/Zenith_Primary_Logo-1_teruwz_urxbr0.webp";

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Top Navigation */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
        } border-b border-slate-100`}
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
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-2xl border border-slate-100 py-4 rounded-b-xl transition-all duration-200 origin-top ${
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
      <footer className="bg-zenith-navy text-white py-20 relative overflow-hidden">

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
            <div className="flex space-x-10">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
