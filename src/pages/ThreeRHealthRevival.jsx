import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  ChevronRight,
  Calendar,
  ArrowRight,
  Leaf,
  ClipboardCheck,
  Flower2,
  Sprout,
  Gem,
  HelpCircle,
  Plus,
  Minus,
  Link2,
  Activity,
  Phone
} from 'lucide-react';
import './ThreeRHealthRevival.css';

// High-resolution image assets extracted from reference screenshot
import hero3rBreathingImg from '../assets/images/three-r-health-revival/hero-3r-breathing.png';
import doctorConsult3rImg from '../assets/images/three-r-health-revival/doctor-consult-3r.png';
import stage1ChecklistImg from '../assets/images/three-r-health-revival/stage-1-review-checklist.png';
import stage2MealImg from '../assets/images/three-r-health-revival/stage-2-reset-meal.png';
import stage3BreathingImg from '../assets/images/three-r-health-revival/stage-3-revive-breathing.png';
import banner3rStonesImg from '../assets/images/three-r-health-revival/banner-3r-stones.png';
import ctaMortar3rImg from '../assets/images/three-r-health-revival/cta-mortar-3r.png';

function ThreeRHealthRevival() {
  const [activeFaq, setActiveFaq] = useState(-1);

  const faqData = [
    {
      question: 'How long is the 3R program?',
      answer:
        "Program duration is typically tailored to the individual's schedule and goals, ranging from structured single-week residential immersions to multi-week outpatient programs."
    },
    {
      question: 'Does every participant receive the same therapies?',
      answer:
        'No. While the 3R framework (Review, Reset, Revive) remains consistent, specific nutritional guidance, therapies, yoga, and lifestyle prescriptions are personalized following initial assessment.'
    },
    {
      question: 'Is 3R a medical treatment program?',
      answer:
        '3R Health Revival is a holistic wellness and lifestyle program. It works synergistically with medical care but is not intended to replace medical diagnosis or emergency treatment.'
    }
  ];

  const stages = [
    {
      number: '01',
      title: 'Stage 1 - Review',
      icon: <ClipboardCheck size={20} color="#07552F" />,
      img: stage1ChecklistImg,
      alt: 'Stage 1 Review Lifestyle Checklist on Clipboard',
      desc:
        "The first stage looks at the participant's current routine, goals and relevant wellness concerns. Areas may include nutrition, movement, sleep, stress, hydration, work patterns and previous wellness practices. Relevant medical conditions and medicines should also be disclosed so the team can identify when medical guidance is needed."
    },
    {
      number: '02',
      title: 'Stage 2 - Reset',
      icon: <Flower2 size={20} color="#D49A00" />,
      img: stage2MealImg,
      alt: 'Stage 2 Reset Healthy Meal Bowl Fruits and Green Juice',
      desc:
        'The second stage introduces practical changes. Depending on the participant, this may involve meal and hydration awareness, yoga, relaxation, selected naturopathy experiences, sleep-routine changes or other appropriate wellness support. The objective is not an extreme reset; it is to create is manageable structure.'
    },
    {
      number: '03',
      title: 'Stage 3 - Revive',
      icon: <Sprout size={20} color="#07552F" />,
      img: stage3BreathingImg,
      alt: 'Stage 3 Revive Woman Mindful Breathing Outdoors',
      desc:
        'The final stage focuses on continuation. Participants review what worked, what was difficult and which habits can realistically be maintained. Where follow-up is appropriate, RBN can help the participant refine the routine rather than returning immediately to old patterns.'
    }
  ];

  return (
    <div className="three-r-page">
      <div className="container">
        {/* ==================================================================
            BREADCRUMB
            ================================================================== */}
        <nav className="three-r-breadcrumb-bar" aria-label="Breadcrumb">
          <ol className="three-r-breadcrumb-list">
            <li className="three-r-breadcrumb-item">
              <Link to="/">
                <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="three-r-breadcrumb-separator">
              <ChevronRight size={14} />
            </li>
            <li className="three-r-breadcrumb-item">
              <span className="three-r-breadcrumb-current" aria-current="page">
                3R Health Revival
              </span>
            </li>
          </ol>
        </nav>

        {/* ==================================================================
            HERO SECTION
            ================================================================== */}
        <section className="three-r-hero-section">
          <div className="three-r-hero-grid">
            <div className="three-r-hero-content">
              <h1 className="three-r-hero-title">
                3R Health<br />
                Revival
              </h1>

              {/* Decorative Gold Leaf Underline */}
              <div className="three-r-hero-divider" aria-hidden="true">
                <Leaf size={18} />
              </div>

              <Link to="/book-consultation" className="three-r-hero-cta">
                <Calendar size={18} />
                <span>Book a Consultation &rarr;</span>
              </Link>
            </div>

            <div className="three-r-hero-image-wrap">
              <div className="three-r-hero-frame">
                <img
                  src={hero3rBreathingImg}
                  alt="3R Health Revival Mindful Breathing in Nature"
                  className="three-r-hero-img"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 1: A STRUCTURED RBN WELLNESS JOURNEY
            ================================================================== */}
        <section className="three-r-journey-section">
          <div className="three-r-journey-grid">
            <div className="three-r-journey-text-wrap">
              <div className="three-r-section-header">
                <Leaf size={22} className="three-r-section-icon" />
                <h2 className="three-r-section-title">A Structured RBN Wellness Journey</h2>
                <div className="three-r-section-gold-line" aria-hidden="true"></div>
              </div>
              <p className="three-r-section-text">
                3R Health Revival is intended to give RBN a recognisable framework for people who want a more structured
                wellness journey rather than an isolated therapy session. The program can connect assessment, lifestyle
                education, selected wellness practices and follow-up within one clear pathway.
              </p>
            </div>

            <div className="three-r-journey-image-wrap">
              <div className="three-r-pill-frame">
                <img
                  src={doctorConsult3rImg}
                  alt="Doctor Consultation for 3R Structured Wellness Journey"
                  className="three-r-pill-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 2: THREE WELLNESS STAGES
            ================================================================== */}
        <section className="three-r-stages-section">
          <div className="three-r-stages-grid">
            {stages.map((stage, idx) => (
              <div key={idx} className="three-r-stage-card">
                <div className="three-r-badge">{stage.number}</div>
                <div className="three-r-stage-image-wrap">
                  <img src={stage.img} alt={stage.alt} className="three-r-stage-img" loading="lazy" />
                </div>
                <div className="three-r-stage-body">
                  <div className="three-r-stage-header">
                    <span className="three-r-stage-icon-wrap">{stage.icon}</span>
                    <h3 className="three-r-stage-title">{stage.title}</h3>
                  </div>
                  <p className="three-r-stage-desc">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: WHAT MAKES 3R DIFFERENT? (Horizontal Banner)
            ================================================================== */}
        <section className="three-r-banner-section">
          <div className="three-r-banner-card">
            <div className="three-r-banner-image-wrap">
              <img
                src={banner3rStonesImg}
                alt="Stacked Stones 3R and Botanical Leaves"
                className="three-r-banner-img"
                loading="lazy"
              />
            </div>
            <div className="three-r-banner-divider" aria-hidden="true"></div>
            <div className="three-r-banner-content">
              <div className="three-r-banner-header">
                <Gem size={22} className="three-r-banner-icon" />
                <h3 className="three-r-banner-title">What Makes 3R Different?</h3>
              </div>
              <p className="three-r-banner-text">
                The program should be presented as an RBN framework that brings multiple wellness elements into a
                guided journey. Its strongest value will come from clear program duration, inclusions, practitioner
                involvement, participant eligibility and follow-up - all of which should be confirmed before launch.
              </p>
            </div>
            <div className="three-r-banner-leaves-wrap" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 4: FAQ & ASK ABOUT 3R CTA ROW
            ================================================================== */}
        <section className="three-r-faq-cta-section">
          <div className="three-r-faq-cta-grid">
            {/* FAQ Accordions */}
            <div className="three-r-faq-column">
              <div className="three-r-faq-header">
                <HelpCircle size={22} className="three-r-faq-title-icon" />
                <h3 className="three-r-faq-title">Frequently Asked Questions</h3>
                <div className="three-r-faq-header-line" aria-hidden="true"></div>
              </div>

              <div className="three-r-faq-list">
                {faqData.map((item, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div key={idx} className={`three-r-faq-item ${isOpen ? 'active' : ''}`}>
                      <button
                        type="button"
                        className="three-r-faq-question"
                        onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <span className="three-r-faq-toggle-icon">
                          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                        </span>
                      </button>
                      {isOpen && <p className="three-r-faq-answer">{item.answer}</p>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Ask About 3R CTA Banner Card */}
            <div className="three-r-cta-column">
              <div className="three-r-cta-banner-card">
                <div className="three-r-cta-image-wrap">
                  <img
                    src={ctaMortar3rImg}
                    alt="Herbal Bowl Mortar and Botanical Leaves"
                    className="three-r-cta-img"
                    loading="lazy"
                  />
                </div>
                <div className="three-r-cta-text-wrap">
                  <h3 className="three-r-cta-heading">
                    Ask About<br />
                    3R Health<br />
                    Revival
                  </h3>
                </div>
                <Link
                  to="/book-consultation"
                  className="three-r-cta-arrow-btn"
                  aria-label="Ask About 3R Health Revival Consultation"
                >
                  <ArrowRight size={22} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 5: RECOMMENDED INTERNAL LINKS (4 Buttons)
            ================================================================== */}
        <section className="three-r-links-section">
          <div className="three-r-links-header">
            <div className="three-r-links-line" aria-hidden="true"></div>
            <h3 className="three-r-links-title">
              <Link2 size={20} className="three-r-links-icon" />
              <span>Recommended Internal Links</span>
            </h3>
            <div className="three-r-links-line" aria-hidden="true"></div>
          </div>

          <div className="three-r-links-row">
            <Link to="/lifestyle-modification" className="three-r-link-pill">
              <Leaf size={16} className="three-r-link-pill-icon" />
              <span>Lifestyle Modification &rarr;</span>
            </Link>
            <Link to="/metabolic-wellness" className="three-r-link-pill">
              <Activity size={16} className="three-r-link-pill-icon" />
              <span>Metabolic Wellness &rarr;</span>
            </Link>
            <Link to="/naturopathy" className="three-r-link-pill">
              <Flower2 size={16} className="three-r-link-pill-icon" />
              <span>Naturopathy &rarr;</span>
            </Link>
            <Link to="/contact" className="three-r-link-pill">
              <Phone size={16} className="three-r-link-pill-icon" />
              <span>Contact &rarr;</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ThreeRHealthRevival;
