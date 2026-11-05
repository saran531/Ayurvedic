import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  ChevronRight,
  Calendar,
  ArrowRight,
  Leaf,
  Users,
  MessageSquare,
  Search,
  Flower2,
  ClipboardCheck,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Plus,
  Minus,
  Link2,
  Phone,
  Sparkles
} from 'lucide-react';
import './Acupuncture.css';

// High-resolution image assets extracted from reference screenshot
import heroAcupunctureImg from '../assets/images/acupuncture/hero-acupuncture.png';
import whatIsAcupunctureImg from '../assets/images/acupuncture/what-is-acupuncture.png';
import consultationApproachImg from '../assets/images/acupuncture/consultation-approach.png';
import integratedWellnessImg from '../assets/images/acupuncture/integrated-wellness.png';
import ctaLotusImg from '../assets/images/acupuncture/cta-lotus-acupuncture.png';

function Acupuncture() {
  const [activeFaq, setActiveFaq] = useState(-1);

  const faqData = [
    {
      question: 'How many sessions will I need?',
      answer:
        'The number of sessions depends on your specific wellness goals, duration of the condition, and individual responsiveness. A qualified practitioner will outline an estimated plan following your initial assessment.'
    },
    {
      question: 'Should I stop my regular treatment?',
      answer:
        'No. Acupuncture is intended to complement, not replace, conventional medical treatments or prescribed medications. Never alter or discontinue medical treatments without consulting your physician.'
    }
  ];

  const processCards = [
    {
      number: '1',
      icon: <MessageSquare size={24} />,
      title: 'Consultation',
      desc: 'Discuss your goal, relevant medical history, medications and previous experience.'
    },
    {
      number: '2',
      icon: <Search size={24} />,
      title: 'Assessment',
      desc: 'The practitioner determines whether acupuncture is appropriate and explains the planned approach.'
    },
    {
      number: '3',
      icon: <Flower2 size={24} />,
      title: 'Session',
      desc: 'The practitioner performs the selected technique using appropriate hygiene and professional standards.'
    },
    {
      number: '4',
      icon: <ClipboardCheck size={24} />,
      title: 'Follow-Up',
      desc: 'Where appropriate, the practitioner discusses response, further sessions or other wellness options.'
    }
  ];

  return (
    <div className="acu-page">
      <div className="container">
        {/* ==================================================================
            SECTION 1: BREADCRUMB
            ================================================================== */}
        <nav className="acu-breadcrumb-bar" aria-label="Breadcrumb">
          <ol className="acu-breadcrumb-list">
            <li className="acu-breadcrumb-item">
              <Link to="/">
                <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="acu-breadcrumb-separator">
              <ChevronRight size={14} />
            </li>
            <li className="acu-breadcrumb-item">
              <span className="acu-breadcrumb-current" aria-current="page">
                Acupuncture
              </span>
            </li>
          </ol>
        </nav>

        {/* ==================================================================
            SECTION 2: HERO SECTION
            ================================================================== */}
        <section className="acu-hero-section">
          <div className="acu-hero-grid">
            <div className="acu-hero-content">
              <h1 className="acu-hero-title">Acupuncture</h1>
              <div className="acu-hero-divider">
                <Leaf size={18} />
              </div>
              <Link to="/book-consultation" className="acu-hero-cta">
                <Calendar size={17} />
                <span>Book a Consultation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="acu-hero-image-wrap">
              <div className="acu-hero-frame">
                <img
                  src={heroAcupunctureImg}
                  alt="Ayurvedic wellness setting with zen stones, candles, and natural flora"
                  className="acu-hero-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: WHAT IS ACUPUNCTURE?
            ================================================================== */}
        <section className="acu-whatis-section">
          <div className="acu-whatis-grid">
            <div className="acu-whatis-image-wrap">
              <div className="acu-whatis-frame">
                <img
                  src={whatIsAcupunctureImg}
                  alt="Stacked stones, white flower and wellness towel"
                  className="acu-whatis-img"
                />
              </div>
            </div>
            <div className="acu-whatis-content">
              <div className="acu-section-header">
                <h2 className="acu-section-title">
                  <Leaf size={22} className="acu-section-title-icon" />
                  <span>What Is Acupuncture?</span>
                </h2>
                <span className="acu-section-gold-line"></span>
              </div>
              <p className="acu-whatis-text">
                Acupuncture is a practice involving stimulation of specific points on the body, commonly with fine needles. People may seek acupuncture for different reasons, but the appropriateness of the service, expected benefits and strength of evidence vary by condition and individual.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 4: RBN’S CONSULTATION-LED APPROACH
            ================================================================== */}
        <section className="acu-consult-section">
          <div className="acu-consult-grid">
            <div className="acu-consult-image-wrap">
              <div className="acu-consult-frame">
                <img
                  src={consultationApproachImg}
                  alt="Doctor consulting with patient about clinical wellness plan"
                  className="acu-consult-img"
                />
              </div>
            </div>
            <div className="acu-consult-content">
              <div className="acu-section-header">
                <h2 className="acu-section-title">
                  <Users size={22} className="acu-section-title-icon" />
                  <span>RBN’s Consultation-Led Approach</span>
                </h2>
                <span className="acu-section-gold-line"></span>
              </div>
              <p className="acu-consult-text">
                Before a session, the practitioner should understand why the person is seeking acupuncture and review relevant health information. This is particularly important for people who are pregnant, use blood-thinning medication, have bleeding disorders, have implanted devices where relevant to technique, have skin infections or have other medical concerns.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 5: WHAT TO EXPECT (4 Process Cards)
            ================================================================== */}
        <section className="acu-expect-section">
          <div className="acu-centered-title-wrap">
            <span className="acu-centered-title-line"></span>
            <h2 className="acu-centered-title">
              <Calendar size={20} color="#D49A00" />
              <span>What to Expect</span>
            </h2>
            <span className="acu-centered-title-line"></span>
          </div>

          <div className="acu-process-row">
            {processCards.map((card, idx) => (
              <div key={idx} className="acu-process-card-wrap">
                <div className="acu-process-card">
                  <div className="acu-process-number-badge">{card.number}</div>
                  <div className="acu-process-icon-wrap">
                    {card.icon}
                  </div>
                  <h3 className="acu-process-title">{card.title}</h3>
                  <p className="acu-process-desc">{card.desc}</p>
                </div>
                {idx < processCards.length - 1 && (
                  <span className="acu-process-arrow" aria-hidden="true">→</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            SECTION 6: SAFETY & HYGIENE BANNER
            ================================================================== */}
        <section className="acu-safety-section">
          <div className="acu-safety-banner">
            <div className="acu-safety-icon-wrap">
              <ShieldCheck size={32} />
            </div>
            <h3 className="acu-safety-title">
              Safety & Hygiene
            </h3>
            <div className="acu-safety-divider"></div>
            <div className="acu-safety-statements">
              <div className="acu-safety-statement-item">
                <CheckCircle2 size={18} className="acu-safety-check-icon" />
                <span>Needle-based acupuncture should use appropriate sterile, single-use equipment and safe disposal procedures.</span>
              </div>
              <div className="acu-safety-statement-item">
                <CheckCircle2 size={18} className="acu-safety-check-icon" />
                <span>Visitors should tell the practitioner if they feel faint, unwell or uncomfortable during a session.</span>
              </div>
            </div>
            <div className="acu-safety-deco-leaves">
              <Leaf size={40} />
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 7: ACUPUNCTURE WITHIN INTEGRATED WELLNESS
            ================================================================== */}
        <section className="acu-integrated-section">
          <div className="acu-integrated-grid">
            <div className="acu-integrated-image-wrap">
              <div className="acu-integrated-frame">
                <img
                  src={integratedWellnessImg}
                  alt="Smooth zen stones and green herbal foliage"
                  className="acu-integrated-img"
                />
              </div>
            </div>
            <div className="acu-integrated-content">
              <div className="acu-section-header">
                <h2 className="acu-section-title">
                  <Leaf size={22} className="acu-section-title-icon" />
                  <span>Acupuncture Within Integrated Wellness</span>
                </h2>
                <span className="acu-section-gold-line"></span>
              </div>
              <p className="acu-integrated-text">
                Where appropriate, acupuncture may be discussed alongside lifestyle guidance, yoga, naturopathy or other wellness services. Combining services should have a clear rationale and should not replace necessary medical evaluation.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 8: FAQ & BOOK AN ACUPUNCTURE CONSULTATION CTA
            ================================================================== */}
        <section className="acu-faq-cta-section">
          <div className="acu-faq-cta-grid">
            {/* FAQ Column */}
            <div className="acu-faq-column">
              <div className="acu-faq-header">
                <h2 className="acu-faq-title">
                  <HelpCircle size={22} className="acu-faq-title-icon" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <span className="acu-faq-header-line"></span>
              </div>

              <div className="acu-faq-list">
                {faqData.map((item, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`acu-faq-item ${isOpen ? 'active' : ''}`}
                    >
                      <button
                        type="button"
                        className="acu-faq-question"
                        onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <span className="acu-faq-toggle-icon">
                          {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="acu-faq-answer">{item.answer}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Column */}
            <div className="acu-cta-column">
              <div className="acu-cta-banner-card">
                <div className="acu-cta-lotus-wrap">
                  <img
                    src={ctaLotusImg}
                    alt="Lotus bloom on calm water surface"
                    className="acu-cta-lotus-img"
                  />
                </div>
                <div className="acu-cta-text-wrap">
                  <h3 className="acu-cta-heading">
                    Book an<br />
                    Acupuncture<br />
                    Consultation
                  </h3>
                </div>
                <Link
                  to="/book-consultation"
                  className="acu-cta-arrow-btn"
                  aria-label="Book an Acupuncture Consultation"
                >
                  <ArrowRight size={22} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 9: RECOMMENDED INTERNAL LINKS (3 Buttons)
            ================================================================== */}
        <section className="acu-links-section">
          <div className="acu-links-header">
            <span className="acu-links-line"></span>
            <h2 className="acu-links-title">
              <Link2 size={20} className="acu-links-icon" />
              <span>Recommended Internal Links</span>
            </h2>
            <span className="acu-links-line"></span>
          </div>

          <div className="acu-links-row">
            <Link to="/ayush-integrated-healthcare" className="acu-link-pill">
              <Leaf size={18} className="acu-link-pill-icon" />
              <span>AYUSH Integrated Healthcare</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/lifestyle-modification" className="acu-link-pill">
              <Sparkles size={18} className="acu-link-pill-icon" />
              <span>Lifestyle Modification</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="acu-link-pill">
              <Phone size={18} className="acu-link-pill-icon" />
              <span>Contact</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Acupuncture;
