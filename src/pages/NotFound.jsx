import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Headphones, Leaf, Heart, Flower2, Users, ArrowRight } from 'lucide-react';
import './NotFound.css';

// Clean landscape 404 illustration (zero ghost text)
import notfoundLandscapeImg from '../assets/images/not-found/notfound-landscape-404.png';

/**
 * Custom 404 Not Found Page for RBN AYUSH HEALTH CARE
 * Exact UI recreation matching approved reference:
 * - 100% full-width page layout without side gaps or horizontal overflow
 * - Two-column responsive layout (hero text left, 404 illustration right)
 * - Clean, non-distorted heading without forced or broken word wraps
 * - Perfectly aligned action buttons and support link
 * - Equal-spaced trust indicators row
 * - Automatic 3-second redirect countdown to Homepage with cleanup on unmount
 */
function NotFound() {
  const [secondsLeft, setSecondsLeft] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    // 1-second interval to update remaining seconds
    const intervalId = setInterval(() => {
      setSecondsLeft((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1000);

    // Exact 3-second redirect to Homepage
    const timeoutId = setTimeout(() => {
      navigate('/');
    }, 3000);

    // Cleanup timers on component unmount
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <div className="notfound-page">
      <div className="notfound-container">
        <div className="notfound-grid">
          {/* Left Column: Heading, Description, CTAs, Support, Trust Indicators */}
          <div className="notfound-content">
            {/* Eyebrow */}
            <div className="notfound-eyebrow">
              <span>OOPS! YOU&apos;VE TAKEN A WRONG TURN</span>
              <span className="notfound-eyebrow-line" aria-hidden="true"></span>
            </div>

            {/* Main Heading */}
            <h1 className="notfound-heading">
              Looks Like This Path Hasn&apos;t Bloomed Yet.
              <span className="notfound-heading-leaf" aria-hidden="true">
                <Leaf size={26} />
              </span>
            </h1>

            {/* Description */}
            <p className="notfound-description">
              The page you&apos;re looking for may have moved, changed its name, or no longer exists.
              Don&apos;t worry—let&apos;s help you find your way back to better wellbeing.
            </p>

            {/* Auto-redirect countdown notice */}
            <div className="notfound-redirect-timer" role="status" aria-live="polite">
              <span className="notfound-timer-pulse" aria-hidden="true"></span>
              <span>
                Redirecting to homepage in <strong>{secondsLeft}s</strong>...
              </span>
            </div>

            {/* Action Buttons Row */}
            <div className="notfound-actions">
              <Link to="/" className="notfound-btn-primary">
                <span>Return to Homepage</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/ayush-integrated-healthcare" className="notfound-btn-secondary">
                <span>Explore Our Therapies</span>
              </Link>
            </div>

            {/* Support Link */}
            <div className="notfound-support">
              <span className="notfound-support-icon" aria-hidden="true">
                <Headphones size={18} />
              </span>
              <span>
                Need help?{' '}
                <Link to="/contact" className="notfound-support-link">
                  Contact our team &rarr;
                </Link>
              </span>
            </div>

            {/* Trust Indicators Row */}
            <div className="notfound-trust-row">
              <div className="notfound-trust-item">
                <Leaf size={22} className="notfound-trust-icon" aria-hidden="true" />
                <span className="notfound-trust-title">5,000+</span>
                <span className="notfound-trust-subtitle">Happy Families</span>
              </div>
              <div className="notfound-trust-item">
                <Heart size={22} className="notfound-trust-icon" aria-hidden="true" />
                <span className="notfound-trust-title">Trusted</span>
                <span className="notfound-trust-subtitle">Care</span>
              </div>
              <div className="notfound-trust-item">
                <Flower2 size={22} className="notfound-trust-icon" aria-hidden="true" />
                <span className="notfound-trust-title">Natural</span>
                <span className="notfound-trust-subtitle">Healing</span>
              </div>
              <div className="notfound-trust-item">
                <Users size={22} className="notfound-trust-icon" aria-hidden="true" />
                <span className="notfound-trust-title">Holistic</span>
                <span className="notfound-trust-subtitle">Wellness</span>
              </div>
            </div>
          </div>

          {/* Right Column: 404 Nature Landscape Artwork */}
          <div className="notfound-visual-wrap">
            <div className="notfound-visual-frame">
              <img
                src={notfoundLandscapeImg}
                alt="404 - Serene nature landscape with ivy-covered stone numbers along a botanical path"
                className="notfound-visual-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
