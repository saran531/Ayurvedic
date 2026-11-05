import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  ChevronRight,
  Calendar,
  ArrowRight,
  Leaf,
  Sprout,
  ClipboardCheck,
  Stethoscope,
  Pill,
  Utensils,
  AlertTriangle,
  FlaskConical,
  HelpCircle,
  Plus,
  Minus,
  Link2,
  Phone,
  Users
} from 'lucide-react';
import './IVNutritionWellness.css';

// High-resolution image assets extracted from reference screenshot
import heroIvImg from '../assets/images/iv-nutrition/hero-iv-nutrition.png';
import whatIsIvImg from '../assets/images/iv-nutrition/what-is-iv-nutrition.png';
import individualisedImg from '../assets/images/iv-nutrition/individualised-support.png';
import duringAfterImg from '../assets/images/iv-nutrition/during-after-session.png';
import nutritionBeyondImg from '../assets/images/iv-nutrition/nutrition-beyond-iv.png';

function IVNutritionWellness() {
  const [activeFaq, setActiveFaq] = useState(-1);

  const faqData = [
    {
      question: 'Does everyone benefit from IV vitamins?',
      answer:
        'No. IV nutrient therapy is indicated only when there is an identified deficiency, clinical need, or specific physiological requirement that cannot be adequately addressed through oral nutrition. An individual assessment is essential before any infusion.'
    },
    {
      question: 'Can I choose an IV solely from a menu?',
      answer:
        'No. At RBN AYUSH HEALTH CARE, IV nutrition is treated as an individualized clinical procedure rather than an off-the-shelf menu service. Qualified practitioners determine suitability and formulate appropriate fluids based on your health history and metabolic needs.'
    },
    {
      question: 'Can IV nutrition replace a healthy diet?',
      answer:
        'No. Intravenous nutrients are designed for targeted supplemental or therapeutic support and cannot substitute for balanced whole-food nutrition, dietary fiber, and daily hydration habits essential for long-term health.'
    }
  ];

  const assessmentCards = [
    {
      icon: <ClipboardCheck size={28} className="iv-assessment-card-icon" />,
      text: 'Reason for seeking IV or nutrient support'
    },
    {
      icon: <Stethoscope size={28} className="iv-assessment-card-icon" />,
      text: 'Relevant medical history and allergies'
    },
    {
      icon: <Pill size={28} className="iv-assessment-card-icon" />,
      text: 'Current prescription medicines and supplements'
    },
    {
      icon: <Utensils size={28} className="iv-assessment-card-icon" />,
      text: 'Dietary patterns and hydration'
    },
    {
      icon: <AlertTriangle size={28} className="iv-assessment-card-icon" />,
      text: 'Previous reactions or IV-related concerns'
    },
    {
      icon: <FlaskConical size={28} className="iv-assessment-card-icon" />,
      text: 'Need for medical evaluation or laboratory testing where appropriate'
    }
  ];

  return (
    <div className="iv-nutrition-page">
      <div className="container">
        {/* ==================================================================
            SECTION 1: BREADCRUMB
            ================================================================== */}
        <nav className="iv-breadcrumb-bar" aria-label="Breadcrumb">
          <ol className="iv-breadcrumb-list">
            <li className="iv-breadcrumb-item">
              <Link to="/">
                <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="iv-breadcrumb-separator">
              <ChevronRight size={14} />
            </li>
            <li className="iv-breadcrumb-item">
              <span className="iv-breadcrumb-current" aria-current="page">
                IV Nutrition & Wellness
              </span>
            </li>
          </ol>
        </nav>

        {/* ==================================================================
            SECTION 2: HERO SECTION
            ================================================================== */}
        <section className="iv-hero-section">
          <div className="iv-hero-grid">
            <div className="iv-hero-content">
              <h1 className="iv-hero-title">
                IV Nutrition & <span className="iv-hero-title-accent">Wellness</span>
              </h1>
              <div className="iv-hero-divider">
                <Leaf size={18} />
              </div>
              <Link to="/book-consultation" className="iv-hero-cta">
                <Calendar size={17} />
                <span>Book a Consultation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="iv-hero-image-wrap">
              <div className="iv-hero-frame">
                <img
                  src={heroIvImg}
                  alt="IV Nutrition & Wellness therapeutic clinical setup at RBN AYUSH Health Care"
                  className="iv-hero-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: WHAT IS IV NUTRITION SUPPORT?
            ================================================================== */}
        <section className="iv-whatis-section">
          <div className="iv-whatis-grid">
            <div className="iv-whatis-content">
              <div className="iv-section-header">
                <h2 className="iv-section-title">
                  <Leaf size={22} className="iv-section-title-icon" />
                  <span>What Is IV Nutrition Support?</span>
                </h2>
                <span className="iv-section-gold-line"></span>
              </div>
              <div className="iv-whatis-body">
                <p className="iv-whatis-text">
                  <strong>IV nutrition</strong> refers to the administration of selected fluids or nutrients through an intravenous route. Because IV administration bypasses the digestive system and involves direct access to the bloodstream, it should be treated as a clinical procedure requiring appropriate assessment, qualified supervision, infection-control standards and a clear reason for use.
                </p>
                <p className="iv-whatis-text">
                  RBN's website should avoid presenting IV nutrition as a routine lifestyle shortcut. The appropriate professional should first understand the person's health history, current medicines, allergies, relevant laboratory information where clinically indicated, dietary intake and reason for seeking the service.
                </p>
              </div>
            </div>
            <div className="iv-whatis-visual">
              <div className="iv-whatis-frame">
                <img
                  src={whatIsIvImg}
                  alt="Wholesome fresh vegetable salad with avocado, citrus juice, and blueberries"
                  className="iv-whatis-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 4: INDIVIDUALISED NUTRIENT & WELLNESS SUPPORT
            ================================================================== */}
        <section className="iv-individual-section">
          <div className="iv-individual-grid">
            <div className="iv-individual-image-wrap">
              <div className="iv-individual-pill-frame">
                <img
                  src={individualisedImg}
                  alt="Doctor consulting with patient regarding individualised nutrient and wellness support"
                  className="iv-individual-img"
                />
              </div>
            </div>
            <div className="iv-individual-content">
              <h2 className="iv-individual-title">
                <Sprout size={22} className="iv-individual-icon" />
                <span>Individualised Nutrient & Wellness Support</span>
              </h2>
              <p className="iv-individual-text">
                Not everyone needs the same vitamins, minerals or fluids. Individualisation means avoiding a fixed 'one drip for everyone' approach and instead discussing whether a nutrient intervention is appropriate at all, what route is suitable and whether oral nutrition, dietary changes or medical evaluation may be more appropriate.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 5: WHAT THE ASSESSMENT MAY COVER (3x2 Grid)
            ================================================================== */}
        <section className="iv-assessment-section">
          <div className="iv-centered-title-wrap">
            <span className="iv-centered-title-line"></span>
            <h2 className="iv-centered-title">
              <Calendar size={20} color="#C58A00" />
              <span>What the Assessment May Cover</span>
            </h2>
            <span className="iv-centered-title-line"></span>
          </div>

          <div className="iv-assessment-grid">
            {assessmentCards.map((card, idx) => (
              <div key={idx} className="iv-assessment-card">
                {card.icon}
                <p className="iv-assessment-card-text">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            SECTION 6: DURING AND AFTER A SESSION
            ================================================================== */}
        <section className="iv-during-section">
          <div className="iv-during-grid">
            <div className="iv-during-image-wrap">
              <div className="iv-during-pill-frame">
                <img
                  src={duringAfterImg}
                  alt="Clinical infusion setup during an IV nutrition therapy session"
                  className="iv-during-img"
                />
              </div>
            </div>
            <div className="iv-during-content">
              <div className="iv-section-header">
                <h2 className="iv-section-title">
                  <Calendar size={20} color="#C58A00" />
                  <span>During and After a Session</span>
                </h2>
                <span className="iv-section-gold-line"></span>
              </div>
              <p className="iv-during-text">
                If an IV service is considered appropriate, the qualified professional should explain what is being administered, expected duration, monitoring, possible adverse effects and when to seek medical attention. The centre should maintain appropriate hygiene, clinical waste and emergency-response procedures for any invasive service.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 7: NUTRITION BEYOND AN IV
            ================================================================== */}
        <section className="iv-beyond-section">
          <div className="iv-beyond-grid">
            <div className="iv-beyond-content">
              <div className="iv-section-header">
                <h2 className="iv-section-title">
                  <Leaf size={22} className="iv-section-title-icon" />
                  <span>Nutrition Beyond an IV</span>
                </h2>
                <span className="iv-section-gold-line"></span>
              </div>
              <p className="iv-beyond-text">
                Long-term nutritional wellbeing depends on everyday food patterns, hydration and overall lifestyle. Where appropriate, RBN can connect nutrient support with practical nutrition and lifestyle guidance rather than positioning an IV session as a replacement for balanced nutrition.
              </p>
            </div>
            <div className="iv-beyond-image-wrap">
              <div className="iv-beyond-pill-frame">
                <img
                  src={nutritionBeyondImg}
                  alt="Fresh wholesome vegetables, broccoli, bell peppers, blueberries, carrots, almonds and lemon water"
                  className="iv-beyond-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 8: FAQ & BOOK AN IV NUTRITION ASSESSMENT CTA
            ================================================================== */}
        <section className="iv-faq-cta-section">
          <div className="iv-faq-cta-grid">
            {/* FAQ Column */}
            <div className="iv-faq-column">
              <div className="iv-faq-header">
                <h2 className="iv-faq-title">
                  <HelpCircle size={22} className="iv-faq-title-icon" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <span className="iv-faq-header-line"></span>
              </div>

              <div className="iv-faq-list">
                {faqData.map((item, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`iv-faq-item ${isOpen ? 'active' : ''}`}
                    >
                      <button
                        type="button"
                        className="iv-faq-question"
                        onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <span className="iv-faq-toggle-icon">
                          {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="iv-faq-answer">{item.answer}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Column */}
            <div className="iv-cta-column">
              <div className="iv-cta-banner-card">
                <div className="iv-cta-icon-wrap">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4" />
                    <rect x="7" y="6" width="10" height="12" rx="3" />
                    <path d="M10 11h4" />
                    <path d="M12 18v4" />
                    <circle cx="12" cy="14" r="1" fill="currentColor" />
                  </svg>
                </div>
                <div className="iv-cta-text-wrap">
                  <h3 className="iv-cta-heading">
                    Book an IV<br />
                    Nutrition<br />
                    Assessment
                  </h3>
                </div>
                <Link
                  to="/book-consultation"
                  className="iv-cta-arrow-btn"
                  aria-label="Book an IV Nutrition Assessment"
                >
                  <ArrowRight size={22} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 9: RECOMMENDED INTERNAL LINKS
            ================================================================== */}
        <section className="iv-links-section">
          <div className="iv-links-header">
            <span className="iv-links-line"></span>
            <h2 className="iv-links-title">
              <Link2 size={20} className="iv-links-icon" />
              <span>Recommended Internal Links</span>
            </h2>
            <span className="iv-links-line"></span>
          </div>

          <div className="iv-links-row">
            <Link to="/lifestyle-modification" className="iv-link-pill">
              <Leaf size={18} className="iv-link-pill-icon" />
              <span>Lifestyle Modification</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="iv-link-pill">
              <Phone size={18} className="iv-link-pill-icon" />
              <span>Contact</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/about-rbn" className="iv-link-pill">
              <Users size={18} className="iv-link-pill-icon" />
              <span>About RBN</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default IVNutritionWellness;
