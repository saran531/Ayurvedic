import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  ShieldCheck,
  Users,
  Leaf,
  HeartPulse,
  Sparkles,
  Calendar,
  Menu
} from 'lucide-react';
import MainNavigation from '../navigation/MainNavigation';
import MobileNavigation from '../navigation/MobileNavigation';

const FacebookIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <polygon points="10 15 15 12 10 9 10 15" fill="#073B25"/>
  </svg>
);

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      {/* Top Information Bar */}
      <div className="topbar">
        <div className="container topbar-container">
          <div className="topbar-badges">
            <span className="topbar-badge-item">
              <ShieldCheck size={13} />
              <span>Valid AYUSH Centre</span>
            </span>
            <span className="topbar-separator">|</span>
            <span className="topbar-badge-item badge-item-hide-sm">
              <Users size={13} />
              <span>Trusted by 5,000+ Families</span>
            </span>
            <span className="topbar-separator badge-item-hide-sm">|</span>
            <span className="topbar-badge-item badge-item-hide-sm">
              <Leaf size={13} />
              <span>Natural Healing</span>
            </span>
            <span className="topbar-separator badge-item-hide-sm">|</span>
            <span className="topbar-badge-item badge-item-hide-sm">
              <HeartPulse size={13} />
              <span>Preventive Care</span>
            </span>
            <span className="topbar-separator badge-item-hide-sm">|</span>
            <span className="topbar-badge-item badge-item-hide-sm">
              <Sparkles size={13} />
              <span>Holistic Wellness</span>
            </span>
          </div>

          <div className="topbar-right">
            <div className="topbar-socials" aria-label="Social Links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="topbar-social-link" aria-label="Facebook">
                <FacebookIcon size={12} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="topbar-social-link" aria-label="Instagram">
                <InstagramIcon size={12} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="topbar-social-link" aria-label="YouTube">
                <YoutubeIcon size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="container header-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" aria-label="RBN AYUSH HEALTH CARE Home">
          <div className="brand-logo-img-wrapper">
            <div className="brand-icon-wrapper">
              <Leaf size={20} />
            </div>
          </div>
          <div className="brand-text">
            <span className="brand-title">RBN</span>
            <span className="brand-subtitle-line">AYUSH HEALTH CARE</span>
            <span className="brand-tagline-sub">Madurai | Ayurveda • Naturopathy • Yoga</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <MainNavigation />

        {/* Header Action CTA & Mobile Toggle */}
        <div className="header-actions">
          <NavLink to="/contact" className="btn btn-primary btn-sm header-cta-btn">
            <Calendar size={14} />
            <span>Book Consultation</span>
          </NavLink>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}

export default Header;
