import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Leaf, ArrowRight } from 'lucide-react';

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

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          {/* Column 1: Brand Info */}
          <div className="footer-brand">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
                <span className="footer-brand-icon">
                  <Leaf size={18} />
                </span>
                <div>
                  <span className="footer-brand-title">RBN</span>
                  <span className="footer-brand-sub">AYUSH HEALTH CARE</span>
                </div>
              </div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#D49A00', marginBottom: '0.65rem' }}>
                Integrated AYUSH • Naturopathy • Yoga • Wellness
              </div>
            </div>
            
            <p className="footer-desc">
              Supporting healthier living through personalised wellness guidance, natural therapies and lifestyle-focused programs.
            </p>

            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Facebook">
                <FacebookIcon size={14} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">
                <InstagramIcon size={14} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="YouTube">
                <YoutubeIcon size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Approved PDF sequence) */}
          <div>
            <h4 className="footer-column-title">Quick Links</h4>
            <nav className="footer-links-list" aria-label="Footer Quick Links">
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/ayush-integrated-healthcare" className="footer-link">Services</Link>
              <Link to="/metabolic-wellness" className="footer-link">Programs</Link>
              <Link to="/wellness-camps" className="footer-link">Camps</Link>
              <Link to="/sirumalai-retreat" className="footer-link">Retreats</Link>
              <Link to="/health-library" className="footer-link">Health Library</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </nav>
          </div>

          {/* Column 3: Our Therapies / Services */}
          <div>
            <h4 className="footer-column-title">Our Therapies</h4>
            <nav className="footer-links-list" aria-label="Footer Therapies">
              <Link to="/ayush-integrated-healthcare" className="footer-link">Ayurveda</Link>
              <Link to="/naturopathy" className="footer-link">Naturopathy</Link>
              <Link to="/yoga-meditation" className="footer-link">Yoga</Link>
              <Link to="/ozone-therapy" className="footer-link">Ozone Therapy</Link>
              <Link to="/iv-nutrition-wellness" className="footer-link">IV Nutrition</Link>
              <Link to="/acupuncture" className="footer-link">Acupuncture</Link>
              <Link to="/hydrotherapy-natural-therapies" className="footer-link">Hydrotherapy</Link>
              <Link to="/shirodhara-rejuvenation" className="footer-link">Shirodhara</Link>
            </nav>
          </div>

          {/* Column 4: Contact Us */}
          <div className="footer-contact-col">
            <h4 className="footer-column-title">Contact</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={15} />
                <span>Plot No. 557, 13th Street, Karpaga Nagar, Madurai - 625007</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={15} />
                <a href="tel:+919944425201" style={{ color: 'inherit' }}>
                  +91 99444 25201
                </a>
              </div>
              <div className="footer-contact-item">
                <Mail size={15} />
                <span style={{ color: 'inherit' }}>
                  [Official Email]
                </span>
              </div>
            </div>

            <div style={{ marginTop: '1.25rem' }}>
              <Link to="/contact" className="footer-directions-btn">
                <span>Get Directions</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Slogan Quote */}
            <div className="footer-quote-section">
              <div className="footer-quote-icon">
                <Leaf size={24} />
              </div>
              <div className="footer-quote-text">
                <em>Healing People</em><br />
                <em>Nurturing Lives</em><br />
                <em>A Healthier Tomorrow</em>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <div>
            © 2026 RBN AYUSH HEALTH CARE. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <span className="footer-legal-link">Privacy Policy</span>
            <span>|</span>
            <span className="footer-legal-link">Terms</span>
            <span>|</span>
            <span className="footer-legal-link">Medical Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
