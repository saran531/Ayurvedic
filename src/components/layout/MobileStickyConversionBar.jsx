import { Phone, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import './MobileStickyConversionBar.css';

const WhatsAppIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

function MobileStickyConversionBar() {
  return (
    <aside className="mobile-sticky-conversion-bar" aria-label="Quick contact actions">
      <a
        href="tel:+919944425201"
        className="mobile-sticky-item"
        aria-label="Call RBN Ayush Health Care"
      >
        <span className="mobile-sticky-icon">
          <Phone size={18} />
        </span>
        <span className="mobile-sticky-label">Call</span>
      </a>

      <a
        href="https://wa.me/919944425201"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-sticky-item"
        aria-label="Chat on WhatsApp"
      >
        <span className="mobile-sticky-icon">
          <WhatsAppIcon size={18} />
        </span>
        <span className="mobile-sticky-label">WhatsApp</span>
      </a>

      <a
        href="https://maps.google.com/?q=Plot+No.+557,+13th+Street,+Karpaga+Nagar,+Madurai,+Tamil+Nadu+625007"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-sticky-item"
        aria-label="Get directions to RBN Ayush Health Care"
      >
        <span className="mobile-sticky-icon">
          <MapPin size={18} />
        </span>
        <span className="mobile-sticky-label">Directions</span>
      </a>

      <Link
        to="/contact"
        className="mobile-sticky-item mobile-sticky-item-primary"
        aria-label="Book a Consultation"
      >
        <span className="mobile-sticky-icon">
          <Calendar size={18} />
        </span>
        <span className="mobile-sticky-label">Book</span>
      </Link>
    </aside>
  );
}

export default MobileStickyConversionBar;

