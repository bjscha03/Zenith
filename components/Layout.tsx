
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CompassMark from './brand/CompassMark';
import { ZENITH_PEAK_IMAGE } from '../lib/brandAssets';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuTop, setMobileMenuTop] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const wasMobileMenuOpen = useRef(false);
  const location = useLocation();
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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

  // Keep the drawer aligned to the real rendered header height, including tablet widths.
  useEffect(() => {
    const updateMenuTop = () => {
      const bottom = headerRef.current?.getBoundingClientRect().bottom;
      if (typeof bottom === 'number') setMobileMenuTop(Math.max(0, Math.round(bottom)));
    };
    updateMenuTop();
    const resizeObserver = typeof ResizeObserver !== 'undefined' && headerRef.current
      ? new ResizeObserver(updateMenuTop)
      : null;
    if (headerRef.current && resizeObserver) resizeObserver.observe(headerRef.current);
    window.addEventListener('resize', updateMenuTop);
    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updateMenuTop);
    };
  }, [isScrolled]);

  // Closing the mobile layout during a rotation/resize must also release the body scroll lock.
  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const closeAtDesktop = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) closeMobileMenu();
    };
    closeAtDesktop(desktopQuery);
    desktopQuery.addEventListener('change', closeAtDesktop);
    return () => desktopQuery.removeEventListener('change', closeAtDesktop);
  }, []);

  // Treat the open drawer as a true modal navigation surface for touch and keyboard users.
  useEffect(() => {
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    document.body.classList.toggle('mobile-menu-open', isMobileMenuOpen);

    if (!isMobileMenuOpen) {
      main?.removeAttribute('inert');
      footer?.removeAttribute('inert');
      if (wasMobileMenuOpen.current) mobileMenuButtonRef.current?.focus();
      wasMobileMenuOpen.current = false;
      return;
    }

    wasMobileMenuOpen.current = true;
    main?.setAttribute('inert', '');
    footer?.setAttribute('inert', '');

    const focusableElements = (): HTMLElement[] => {
      const elements = mobileNavRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const focusable: HTMLElement[] = [];
      elements?.forEach((element: HTMLElement) => {
        if (!element.hasAttribute('disabled')) focusable.push(element);
      });
      return focusable;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMobileMenu();
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = focusableElements();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const focusFrame = window.requestAnimationFrame(() => focusableElements()[0]?.focus());
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.classList.remove('mobile-menu-open');
      main?.removeAttribute('inert');
      footer?.removeAttribute('inert');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

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
        ref={headerRef}
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
                ref={mobileMenuButtonRef}
                className="text-slate-600 p-2 min-w-11 min-h-11 inline-flex items-center justify-center hover:bg-slate-100 rounded-md transition-colors"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
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
      </header>

      {/* Keep the drawer outside the backdrop-filtered sticky header so it is fixed to the viewport. */}
      <div
        ref={mobileNavRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal={isMobileMenuOpen}
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
        className={`mobile-nav-drawer lg:hidden ${isMobileMenuOpen ? 'mobile-nav-drawer--open' : ''}`}
        style={{ top: `${mobileMenuTop}px` }}
      >
        <div className="mobile-nav-scroll">
          <div className="max-w-lg mx-auto px-6 pt-7 pb-[calc(2rem+env(safe-area-inset-bottom))]">
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.32em] mb-4">Navigation</p>
            <div className="grid grid-cols-2 border-y border-slate-200 mb-7">
              {[...navLinks, ...secondaryLinks].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className="py-4 pr-3 text-[12px] font-black text-zenith-navy uppercase tracking-[0.13em] border-b border-slate-100 last:border-b-0"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-7 mb-8">
              <div>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.25em] mb-3">Expertise</p>
                <div className="space-y-1">
                  {servicesLinks.map((link) => (
                    <Link key={link.path} to={link.path} onClick={closeMobileMenu} className="block py-2.5 text-sm font-semibold leading-snug text-slate-600 hover:text-zenith-blue">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.25em] mb-3">Media & Insights</p>
                <div className="space-y-1">
                  {insightsLinks.map((link) => (
                    <Link key={link.path} to={link.path} onClick={closeMobileMenu} className="block py-2.5 text-sm font-semibold text-slate-600 hover:text-zenith-blue">{link.name}</Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="flex items-center justify-between w-full px-5 py-4 bg-zenith-blue text-white font-black rounded-lg uppercase tracking-[0.18em] text-[11px] shadow-lg shadow-blue-950/10"
            >
              <span>Start a Conversation</span>
              <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="site-footer text-white relative overflow-hidden">
        <img src={ZENITH_PEAK_IMAGE} alt="" aria-hidden="true" className="absolute left-0 bottom-0 w-[44%] h-full object-cover object-center opacity-[0.055] mix-blend-screen" />
        <CompassMark className="absolute -right-12 -bottom-20 w-72 h-72 opacity-[0.04]" imageClassName="brightness-0 invert" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-14 lg:py-16 grid lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-5">
              <Link to="/" className="inline-block mb-5">
                <img src={LOGO_URL} alt="Zenith Risk Strategies" className="h-12 w-auto brightness-0 invert" />
              </Link>
              <p className="text-slate-400 max-w-lg leading-relaxed text-sm">
                Engineering alignment in healthcare risk through underwriting discipline, clinical stewardship, and transparent performance.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row sm:items-end gap-5 sm:gap-8">
                <address className="text-slate-400 text-xs leading-relaxed not-italic">
                  5004 Bee Creek Rd, Suite 620<br />Spicewood, TX 78669
                </address>
                <div className="flex items-center gap-5 text-[10px] font-black uppercase tracking-[0.18em]">
                  <Link to="/contact" className="text-blue-300 hover:text-white transition-colors">Contact Zenith</Link>
                  <a href="https://www.linkedin.com/company/zenith-risk-strategies-llc/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-8">
              <div>
                <h3 className="footer-heading">Company</h3>
                <ul className="footer-links">
                  <li><Link to="/why-zenith">Why Zenith</Link></li>
                  <li><Link to="/about">Our Story</Link></li>
                  <li><Link to="/for-brokers">For Brokers</Link></li>
                  <li><Link to="/careers">Careers</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="footer-heading">Media & Insights</h3>
                <ul className="footer-links">
                  <li><Link to="/media">Media</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/resources">Resources</Link></li>
                  <li><Link to="/conference-series">Conference Series</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="footer-heading">Expertise</h3>
                <ul className="footer-links">
                  <li><Link to="/services/underwriting-claims">Underwriting</Link></li>
                  <li><Link to="/services/captive-integration">Captives</Link></li>
                  <li><Link to="/services/apollo-health-plan">Apollo Plan</Link></li>
                  <li><Link to="/services/consulting-strategy">Consulting</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="py-6 border-t border-white/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-[9px] text-slate-500 uppercase tracking-[0.17em] font-bold">
            <p>&copy; {new Date().getFullYear()} Zenith Risk Strategies. Precision Engineering for Healthcare Risk.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/admin" className="hover:text-white transition-colors border border-white/15 rounded-md px-3 py-1.5 -my-1.5">Admin Login</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
