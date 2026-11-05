import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  ChevronRight,
  Calendar,
  ArrowRight,
  Leaf,
  Flower2,
  Droplets,
  ShieldCheck,
  Mountain,
  HelpCircle,
  Plus,
  Minus,
  Link2,
  Phone
} from 'lucide-react';
import './ShirodharaRejuvenation.css';

// High-resolution image assets extracted from reference screenshot
import heroShirodharaImg from '../assets/images/shirodhara-rejuvenation/hero-shirodhara.png';
import restRejuvenationImg from '../assets/images/shirodhara-rejuvenation/rest-rejuvenation.png';
import whatIsShirodharaImg from '../assets/images/shirodhara-rejuvenation/what-is-shirodhara.png';
import massageRejuvenationImg from '../assets/images/shirodhara-rejuvenation/massage-rejuvenation.png';
import treatmentRoomImg from '../assets/images/shirodhara-rejuvenation/treatment-room.png';
import retreatRejuvImg from '../assets/images/shirodhara-rejuvenation/sirumalai-retreat-rejuv.png';
import ctaOilHerbsImg from '../assets/images/shirodhara-rejuvenation/cta-oil-herbs.png';

function ShirodharaRejuvenation() {
  const [activeFaq, setActiveFaq] = useState(-1);

  const faqData = [
    {
      question: 'Is Shirodhara suitable for everyone?',
      answer:
        'While deeply calming, Shirodhara may not be recommended for individuals with acute fever, severe neck injury, active scalp infections, or certain cardiovascular conditions. Our practitioners evaluate suitability prior to every session.'
    },
    {
      question: 'Can I book rejuvenation without joining a program?',
      answer:
        'Yes. Standalone relaxation and rejuvenation therapies are available by appointment following an initial wellness consultation to ensure the chosen oils and techniques are appropriate for you.'
    }
  ];

  return (
    <div className="shiro-page">
      <div className="container">
        {/* ==================================================================
            BREADCRUMB
            ================================================================== */}
        <nav className="shiro-breadcrumb-bar" aria-label="Breadcrumb">
          <ol className="shiro-breadcrumb-list">
            <li className="shiro-breadcrumb-item">
              <Link to="/">
                <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="shiro-breadcrumb-separator">
              <ChevronRight size={14} />
            </li>
            <li className="shiro-breadcrumb-item">
              <span className="shiro-breadcrumb-current" aria-current="page">
                Shirodhara & Rejuvenation
              </span>
            </li>
          </ol>
        </nav>

        {/* ==================================================================
            HERO SECTION
            ================================================================== */}
        <section className="shiro-hero-section">
          <div className="shiro-hero-grid">
            <div className="shiro-hero-content">
              <h1 className="shiro-hero-title">
                Shirodhara &<br />
                Rejuvenation
              </h1>
              <div className="shiro-hero-divider">
                <Leaf size={18} />
              </div>
              <Link to="/book-consultation" className="shiro-hero-cta">
                <Calendar size={17} />
                <span>Book a Consultation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="shiro-hero-image-wrap">
              <div className="shiro-hero-frame">
                <img
                  src={heroShirodharaImg}
                  alt="Shirodhara oil pouring treatment for serene rejuvenation at RBN AYUSH Health Care"
                  className="shiro-hero-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 1: CREATE SPACE FOR REST AND REJUVENATION
            ================================================================== */}
        <section className="shiro-rest-section">
          <div className="shiro-rest-grid">
            <div className="shiro-rest-content">
              <div className="shiro-section-header">
                <h2 className="shiro-section-title">
                  <Leaf size={22} className="shiro-section-icon" />
                  <span>Create Space for Rest and Rejuvenation</span>
                </h2>
              </div>
              <p className="shiro-section-text">
                Busy routines can leave little room for intentional rest. RBN's rejuvenation services are designed as structured wellness experiences that encourage relaxation and time away from everyday demands. They may be offered independently or incorporated into selected wellness programs and retreats.
              </p>
            </div>
            <div className="shiro-rest-visual">
              <div className="shiro-pill-frame">
                <img
                  src={restRejuvenationImg}
                  alt="Wellness towel, white plumeria flower, and bottles of medicated herbal oils"
                  className="shiro-pill-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 2: WHAT IS SHIRODHARA?
            ================================================================== */}
        <section className="shiro-whatis-section">
          <div className="shiro-whatis-grid">
            <div className="shiro-whatis-visual">
              <div className="shiro-pill-frame">
                <img
                  src={whatIsShirodharaImg}
                  alt="Traditional Ayurvedic Shirodhara oil stream streaming onto forehead"
                  className="shiro-pill-img"
                />
              </div>
            </div>
            <div className="shiro-whatis-content">
              <div className="shiro-section-header">
                <h2 className="shiro-section-title">
                  <Flower2 size={22} className="shiro-section-icon" />
                  <span>What Is Shirodhara?</span>
                </h2>
                <span className="shiro-section-gold-line"></span>
              </div>
              <p className="shiro-section-text">
                Shirodhara is a traditional practice in which a controlled stream of liquid is directed over the forehead for a defined period. It is commonly experienced as a relaxation-oriented practice. The exact liquid, duration and suitability should be determined by the responsible practitioner.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: MASSAGE & BODY REJUVENATION
            ================================================================== */}
        <section className="shiro-massage-section">
          <div className="shiro-massage-grid">
            <div className="shiro-massage-content">
              <div className="shiro-section-header">
                <h2 className="shiro-section-title">
                  <Droplets size={22} className="shiro-section-icon" />
                  <span>Massage & Body Rejuvenation</span>
                </h2>
              </div>
              <p className="shiro-section-text">
                Massage can be adapted in pressure, duration and technique according to the individual's comfort and relevant health considerations. RBN should explain whether a session is intended primarily for relaxation, traditional wellness or another defined purpose.
              </p>
            </div>
            <div className="shiro-massage-visual">
              <div className="shiro-pill-frame">
                <img
                  src={massageRejuvenationImg}
                  alt="Gentle relaxing full-body massage therapy with herbal oils"
                  className="shiro-pill-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 4: A CALM, PROFESSIONAL EXPERIENCE PANEL
            ================================================================== */}
        <section className="shiro-panel-section">
          <div className="shiro-panel-box">
            <div className="shiro-panel-image-wrap">
              <div className="shiro-panel-pill-frame">
                <img
                  src={treatmentRoomImg}
                  alt="Tranquil Ayurvedic therapy room with massage table and plants"
                  className="shiro-panel-img"
                />
              </div>
            </div>
            <div className="shiro-panel-content">
              <div className="shiro-section-header">
                <h2 className="shiro-section-title">
                  <ShieldCheck size={28} className="shiro-shield-icon" />
                  <span>A Calm, Professional Experience</span>
                </h2>
              </div>
              <p className="shiro-section-text">
                The website should communicate privacy, hygiene, informed consent and professional boundaries. Visitors should know what to expect, what clothing or preparation is required and whether there are reasons to postpone or avoid a session.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 5: REJUVENATION WITHIN CAMPS & RETREATS
            ================================================================== */}
        <section className="shiro-retreat-section">
          <div className="shiro-retreat-grid">
            <div className="shiro-retreat-content">
              <div className="shiro-section-header">
                <h2 className="shiro-section-title">
                  <Mountain size={22} className="shiro-section-icon" />
                  <span>Rejuvenation Within Camps & Retreats</span>
                </h2>
              </div>
              <p className="shiro-section-text">
                Selected rejuvenation therapies can complement RBN's wellness camps and Sirumalai retreat experiences, giving participants dedicated time for relaxation alongside yoga, meditation, nature and wellness education.
              </p>
            </div>
            <div className="shiro-retreat-visual">
              <div className="shiro-pill-frame">
                <img
                  src={retreatRejuvImg}
                  alt="Sirumalai natural wellness retreat cottages amidst misty mountains"
                  className="shiro-pill-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 6: FAQ & ENQUIRE ABOUT SHIRODHARA CTA
            ================================================================== */}
        <section className="shiro-faq-cta-section">
          <div className="shiro-faq-cta-grid">
            {/* FAQ Column */}
            <div className="shiro-faq-column">
              <div className="shiro-faq-header">
                <h2 className="shiro-faq-title">
                  <HelpCircle size={22} className="shiro-faq-title-icon" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <span className="shiro-faq-header-line"></span>
              </div>

              <div className="shiro-faq-list">
                {faqData.map((item, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`shiro-faq-item ${isOpen ? 'active' : ''}`}
                    >
                      <button
                        type="button"
                        className="shiro-faq-question"
                        onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <span className="shiro-faq-toggle-icon">
                          {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="shiro-faq-answer">{item.answer}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Column */}
            <div className="shiro-cta-column">
              <div className="shiro-cta-banner-card">
                <div className="shiro-cta-image-wrap">
                  <img
                    src={ctaOilHerbsImg}
                    alt="Ayurvedic medicated oils and fresh leaves"
                    className="shiro-cta-img"
                  />
                </div>
                <div className="shiro-cta-text-wrap">
                  <h3 className="shiro-cta-heading">
                    Enquire About<br />
                    Shirodhara &<br />
                    Rejuvenation
                  </h3>
                </div>
                <Link
                  to="/book-consultation"
                  className="shiro-cta-arrow-btn"
                  aria-label="Enquire About Shirodhara & Rejuvenation"
                >
                  <ArrowRight size={22} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 7: RECOMMENDED INTERNAL LINKS (3 Buttons)
            ================================================================== */}
        <section className="shiro-links-section">
          <div className="shiro-links-header">
            <span className="shiro-links-line"></span>
            <h2 className="shiro-links-title">
              <Link2 size={20} className="shiro-links-icon" />
              <span>Recommended Internal Links</span>
            </h2>
            <span className="shiro-links-line"></span>
          </div>

          <div className="shiro-links-row">
            <Link to="/naturopathy" className="shiro-link-pill">
              <Leaf size={18} className="shiro-link-pill-icon" />
              <span>Naturopathy</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/sirumalai-retreat" className="shiro-link-pill">
              <Mountain size={18} className="shiro-link-pill-icon" />
              <span>Sirumalai Wellness Retreat</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="shiro-link-pill">
              <Phone size={18} className="shiro-link-pill-icon" />
              <span>Contact</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ShirodharaRejuvenation;
