import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  ChevronRight,
  Calendar,
  ArrowRight,
  Leaf,
  Apple,
  Droplets,
  Flower2,
  BarChart3,
  HelpCircle,
  Plus,
  Minus,
  Link2,
  BookOpen
} from 'lucide-react';
import './GutHealthDetox.css';

// High-resolution image assets extracted from reference screenshot
import heroGutDetoxImg from '../assets/images/gut-health-detox/hero-gut-detox.png';
import abdomenDigestiveImg from '../assets/images/gut-health-detox/abdomen-digestive.png';
import doctorConsultGutImg from '../assets/images/gut-health-detox/doctor-consult-gut.png';
import cardNutritionImg from '../assets/images/gut-health-detox/card-gut-nutrition.png';
import cardHydrationImg from '../assets/images/gut-health-detox/card-gut-hydration.png';
import cardStressImg from '../assets/images/gut-health-detox/card-gut-stress.png';
import cardNaturopathyImg from '../assets/images/gut-health-detox/card-gut-naturopathy.png';
import bannerMortarHerbsImg from '../assets/images/gut-health-detox/banner-mortar-herbs.png';
import progressChecklistImg from '../assets/images/gut-health-detox/progress-checklist-gut.png';
import ctaTeaHerbsImg from '../assets/images/gut-health-detox/cta-tea-herbs.png';

function GutHealthDetox() {
  const [activeFaq, setActiveFaq] = useState(-1);

  const faqData = [
    {
      question: 'Is a detox diet required?',
      answer:
        'No. A wellness program focuses on balanced nutrition, meal timing, and sustainable lifestyle practices rather than restrictive or extreme detox diets.'
    },
    {
      question: 'Can this program diagnose digestive disease?',
      answer:
        "No. RBN's wellness programs do not diagnose or treat medical conditions. Symptoms requiring medical evaluation are always directed to qualified medical professionals."
    },
    {
      question: 'Can I join if I take medication?',
      answer:
        'Yes, but you should continue taking all prescribed medicines. Our team works alongside your medical care, focusing strictly on supportive lifestyle and nutritional guidance.'
    }
  ];

  const serviceCards = [
    {
      img: cardNutritionImg,
      icon: <Apple size={22} className="gut-card-icon" />,
      title: 'Nutrition & Meal Awareness',
      content:
        'Participants can be guided to observe meal timing, food variety, hydration and individual tolerance. The program should avoid unnecessarily eliminating major food groups unless there is a clear professional reason.'
    },
    {
      img: cardHydrationImg,
      icon: <Droplets size={22} className="gut-card-icon" />,
      title: 'Hydration',
      content:
        'Adequate hydration is an important part of everyday wellbeing, but individual fluid needs can vary. People with kidney, heart or other conditions may require specific medical guidance.'
    },
    {
      img: cardStressImg,
      icon: <Flower2 size={22} className="gut-card-icon" />,
      title: 'Stress, Sleep & the Daily Routine',
      content:
        'Stress and irregular sleep can affect how people experience digestive symptoms and manage food choices. Relaxation, yoga, meditation and routine planning may therefore be included as supportive wellness practices.'
    },
    {
      img: cardNaturopathyImg,
      icon: <Leaf size={22} className="gut-card-icon" />,
      title: 'Appropriate Naturopathy Support',
      content:
        'Selected naturopathy therapies may be incorporated when the practitioner considers them suitable. They should not be described as proven methods for removing unspecified toxins or curing gastrointestinal disease.'
    }
  ];

  return (
    <div className="gut-page">
      <div className="container">
        {/* ==================================================================
            BREADCRUMB
            ================================================================== */}
        <nav className="gut-breadcrumb-bar" aria-label="Breadcrumb">
          <ol className="gut-breadcrumb-list">
            <li className="gut-breadcrumb-item">
              <Link to="/">
                <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="gut-breadcrumb-separator">
              <ChevronRight size={14} />
            </li>
            <li className="gut-breadcrumb-item">
              <span className="gut-breadcrumb-current" aria-current="page">
                Gut Health & Detox
              </span>
            </li>
          </ol>
        </nav>

        {/* ==================================================================
            HERO SECTION
            ================================================================== */}
        <section className="gut-hero-section">
          <div className="gut-hero-grid">
            <div className="gut-hero-content">
              <h1 className="gut-hero-title">
                Gut Health &<br />
                Detox
              </h1>

              {/* Decorative Gold Leaf Underline */}
              <div className="gut-hero-divider" aria-hidden="true">
                <Leaf size={18} />
              </div>

              <Link to="/book-consultation" className="gut-hero-cta">
                <Calendar size={18} />
                <span>Book a Consultation &rarr;</span>
              </Link>
            </div>

            <div className="gut-hero-image-wrap">
              <div className="gut-hero-frame">
                <img
                  src={heroGutDetoxImg}
                  alt="Gut Health & Detox Fresh Organic Foods and Lemon Infused Water"
                  className="gut-hero-img"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 1: UNDERSTANDING GUT WELLNESS
            ================================================================== */}
        <section className="gut-understanding-section">
          <div className="gut-understanding-grid">
            <div className="gut-understanding-text-wrap">
              <div className="gut-section-header">
                <Leaf size={22} className="gut-section-icon" />
                <h2 className="gut-section-title">Understanding Gut Wellness</h2>
                <div className="gut-section-gold-line" aria-hidden="true"></div>
              </div>
              <p className="gut-section-text">
                Digestive wellbeing can be influenced by food choices, meal patterns, hydration, stress, sleep, movement,
                medicines and underlying medical conditions. Because symptoms such as persistent pain, bleeding, unexplained
                weight loss, vomiting or major changes in bowel habits can require medical evaluation, a wellness program
                should never assume that every digestive concern is simply a lifestyle issue.
              </p>
            </div>

            <div className="gut-understanding-image-wrap">
              <div className="gut-pill-frame">
                <img
                  src={abdomenDigestiveImg}
                  alt="Understanding Digestive Wellness and Abdominal Balance"
                  className="gut-pill-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 2: RBN’S LIFESTYLE-FOCUSED APPROACH
            ================================================================== */}
        <section className="gut-approach-section">
          <div className="gut-approach-grid">
            <div className="gut-approach-image-wrap">
              <div className="gut-pill-frame">
                <img
                  src={doctorConsultGutImg}
                  alt="Doctor Consultation for Gut Health and Lifestyle Approach"
                  className="gut-pill-img"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="gut-approach-text-wrap">
              <div className="gut-section-header">
                <Calendar size={22} className="gut-section-icon" />
                <h2 className="gut-section-title">RBN’s Lifestyle-Focused Approach</h2>
                <div className="gut-section-gold-line" aria-hidden="true"></div>
              </div>
              <p className="gut-section-text">
                RBN’s Gut Health & Detox Wellness Program can help participants review everyday habits that may be
                relevant to digestive wellbeing. The emphasis should be on practical, sustainable routines rather than
                restrictive trends or unsupported cleansing claims.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: WELLNESS SERVICE CARDS (4 Cards in 2x2 Grid)
            ================================================================== */}
        <section className="gut-cards-section">
          <div className="gut-cards-grid">
            {serviceCards.map((card, idx) => (
              <div key={idx} className="gut-service-card">
                <div className="gut-service-card-image-wrap">
                  <img src={card.img} alt={card.title} className="gut-service-card-img" loading="lazy" />
                </div>
                <div className="gut-service-card-body">
                  <div className="gut-service-card-header">
                    {card.icon}
                    <h3 className="gut-service-card-title">{card.title}</h3>
                  </div>
                  <p className="gut-service-card-text">{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            SECTION 4: WHAT ‘DETOX’ MEANS ON THIS WEBSITE BANNER
            ================================================================== */}
        <section className="gut-banner-section">
          <div className="gut-detox-banner">
            <div className="gut-banner-image-wrap">
              <img
                src={bannerMortarHerbsImg}
                alt="Ayurvedic Natural Detox Herbs and Mortar"
                className="gut-banner-img"
                loading="lazy"
              />
            </div>
            <div className="gut-banner-divider" aria-hidden="true"></div>
            <div className="gut-banner-content">
              <h3 className="gut-banner-title">What ‘Detox’ Means on This Website</h3>
              <p className="gut-banner-text">
                RBN uses the term ‘detox’ only in a general wellness sense: stepping away from unhelpful routines and
                focusing on hydration, balanced food habits, rest, movement and mindful living. It should not be
                presented as a claim that a program removes named toxins from the body.
              </p>
            </div>
            <div className="gut-banner-leaves-wrap" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 5: HOW PROGRESS IS REVIEWED
            ================================================================== */}
        <section className="gut-progress-section">
          <div className="gut-progress-grid">
            <div className="gut-progress-image-wrap">
              <div className="gut-pill-frame">
                <img
                  src={progressChecklistImg}
                  alt="How Progress Is Reviewed - Wellness Progress Checklist"
                  className="gut-pill-img"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="gut-progress-text-wrap">
              <div className="gut-section-header">
                <BarChart3 size={22} className="gut-section-icon" />
                <h2 className="gut-section-title">How Progress Is Reviewed</h2>
                <div className="gut-section-gold-line" aria-hidden="true"></div>
              </div>
              <p className="gut-section-text">
                Progress should be discussed using realistic goals agreed with the participant. If measurements are used,
                RBN should explain what they mean and avoid implying that a single number defines overall health.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 6: FAQ & ENQUIRE CTA ROW
            ================================================================== */}
        <section className="gut-faq-cta-section">
          <div className="gut-faq-cta-grid">
            {/* FAQ Accordions */}
            <div className="gut-faq-column">
              <div className="gut-faq-header">
                <HelpCircle size={22} className="gut-faq-title-icon" />
                <h3 className="gut-faq-title">Frequently Asked Questions</h3>
                <div className="gut-faq-header-line" aria-hidden="true"></div>
              </div>

              <div className="gut-faq-list">
                {faqData.map((item, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div key={idx} className={`gut-faq-item ${isOpen ? 'active' : ''}`}>
                      <button
                        type="button"
                        className="gut-faq-question"
                        onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <span className="gut-faq-toggle-icon">
                          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                        </span>
                      </button>
                      {isOpen && <p className="gut-faq-answer">{item.answer}</p>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Enquire CTA Banner Card */}
            <div className="gut-cta-column">
              <div className="gut-cta-banner-card">
                <div className="gut-cta-image-wrap">
                  <img
                    src={ctaTeaHerbsImg}
                    alt="Herbal Tea Cup with Fresh Leaves"
                    className="gut-cta-img"
                    loading="lazy"
                  />
                </div>
                <div className="gut-cta-text-wrap">
                  <h3 className="gut-cta-heading">
                    Enquire About<br />
                    Gut Wellness
                  </h3>
                </div>
                <Link
                  to="/book-consultation"
                  className="gut-cta-arrow-btn"
                  aria-label="Enquire About Gut Wellness Consultation"
                >
                  <ArrowRight size={22} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 7: RECOMMENDED INTERNAL LINKS (4 Buttons)
            ================================================================== */}
        <section className="gut-links-section">
          <div className="gut-links-header">
            <div className="gut-links-line" aria-hidden="true"></div>
            <h3 className="gut-links-title">
              <Link2 size={20} className="gut-links-icon" />
              <span>Recommended Internal Links</span>
            </h3>
            <div className="gut-links-line" aria-hidden="true"></div>
          </div>

          <div className="gut-links-row">
            <Link to="/lifestyle-modification" className="gut-link-pill">
              <Leaf size={16} className="gut-link-pill-icon" />
              <span>Lifestyle Modification &rarr;</span>
            </Link>
            <Link to="/yoga-meditation" className="gut-link-pill">
              <Flower2 size={16} className="gut-link-pill-icon" />
              <span>Yoga & Meditation &rarr;</span>
            </Link>
            <Link to="/naturopathy" className="gut-link-pill">
              <Leaf size={16} className="gut-link-pill-icon" />
              <span>Naturopathy &rarr;</span>
            </Link>
            <Link to="/blog" className="gut-link-pill">
              <BookOpen size={16} className="gut-link-pill-icon" />
              <span>Health Library &rarr;</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default GutHealthDetox;
