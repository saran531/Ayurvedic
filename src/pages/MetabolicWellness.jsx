import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  ChevronRight,
  Calendar,
  ArrowRight,
  Leaf,
  Apple,
  Activity,
  Moon,
  Flower2,
  BarChart3,
  ShieldCheck,
  HelpCircle,
  Plus,
  Minus,
  Link2,
  BookOpen,
  Phone
} from 'lucide-react';
import './MetabolicWellness.css';

// High-resolution image assets extracted from reference screenshot
import heroMetabolicImg from '../assets/images/metabolic-wellness/hero-metabolic-wellness.png';
import nutritionBowlImg from '../assets/images/metabolic-wellness/lifestyle-nutrition-bowl.png';
import doctorRoutineImg from '../assets/images/metabolic-wellness/doctor-routine-consult.png';
import cardNutritionImg from '../assets/images/metabolic-wellness/card-nutrition.png';
import cardMovementImg from '../assets/images/metabolic-wellness/card-movement.png';
import cardSleepImg from '../assets/images/metabolic-wellness/card-sleep.png';
import cardStressImg from '../assets/images/metabolic-wellness/card-stress.png';
import progressNotebookImg from '../assets/images/metabolic-wellness/progress-notebook.png';
import bannerStonesImg from '../assets/images/metabolic-wellness/banner-stones-flower.png';
import ctaMortarImg from '../assets/images/metabolic-wellness/cta-mortar-metabolic.png';

function MetabolicWellness() {
  const [activeFaq, setActiveFaq] = useState(-1);

  const faqData = [
    {
      question: 'Is this a weight-loss program?',
      answer:
        'While healthy weight management is often a natural outcome of sustainable metabolic lifestyle changes, our focus is on comprehensive vitality, balanced blood chemistry, cellular energy, and long-term habits rather than rapid or restrictive weight loss.'
    },
    {
      question: 'Does the program guarantee reversal of diabetes or other metabolic disease?',
      answer:
        'No wellness program can guarantee disease reversal. We provide structured lifestyle guidance, therapeutic nutrition, and stress management designed to support metabolic health alongside your existing medical treatment.'
    },
    {
      question: 'Can yoga and naturopathy be included?',
      answer:
        'Yes. Therapeutic yoga, targeted breathing practices, and evidence-informed naturopathic hydro and cleansing therapies can be thoughtfully integrated into your personalized metabolic care plan.'
    }
  ];

  const lifestyleCards = [
    {
      img: cardNutritionImg,
      icon: <Apple size={20} className="meta-lifestyle-card-icon" />,
      title: 'Nutrition',
      content:
        "The focus should be on practical food habits that can be sustained. Guidance may consider meal patterns, food quality, portions, hydration and the participant's existing dietary preferences or restrictions."
    },
    {
      img: cardMovementImg,
      icon: <Activity size={20} className="meta-lifestyle-card-icon" />,
      title: 'Movement & Physical Activity',
      content:
        'Movement plans should reflect age, fitness, mobility and medical considerations. The aim is to make regular activity more achievable rather than to prescribe an unrealistic routine.'
    },
    {
      img: cardSleepImg,
      icon: <Moon size={20} className="meta-lifestyle-card-icon" />,
      title: 'Sleep & Recovery',
      content:
        'Sleep timing, duration, consistency and recovery can influence how a person feels and manages other habits. The program can encourage practical sleep routines while referring persistent or concerning sleep problems for appropriate medical evaluation.'
    },
    {
      img: cardStressImg,
      icon: <Flower2 size={20} className="meta-lifestyle-card-icon" />,
      title: 'Stress & Behavioural Routines',
      content:
        'Stress can affect eating, sleep, activity and motivation. Yoga, breathing, meditation, relaxation and routine planning may be used as supportive wellness tools where appropriate.'
    }
  ];

  return (
    <div className="meta-page">
      <div className="container">
        {/* ==================================================================
            BREADCRUMB
            ================================================================== */}
        <nav className="meta-breadcrumb-bar" aria-label="Breadcrumb">
          <ol className="meta-breadcrumb-list">
            <li className="meta-breadcrumb-item">
              <Link to="/">
                <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="meta-breadcrumb-separator">
              <ChevronRight size={14} />
            </li>
            <li className="meta-breadcrumb-item">
              <span className="meta-breadcrumb-current" aria-current="page">
                Metabolic Wellness Program
              </span>
            </li>
          </ol>
        </nav>

        {/* ==================================================================
            HERO SECTION
            ================================================================== */}
        <section className="meta-hero-section">
          <div className="meta-hero-grid">
            <div className="meta-hero-content">
              <h1 className="meta-hero-title">
                Metabolic<br />
                Wellness Program
              </h1>
              <div className="meta-hero-divider">
                <Leaf size={18} />
              </div>
              <Link to="/book-consultation" className="meta-hero-cta">
                <Calendar size={17} />
                <span>Book a Consultation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="meta-hero-image-wrap">
              <div className="meta-hero-frame">
                <img
                  src={heroMetabolicImg}
                  alt="Metabolic wellness and healthy lifestyle outdoor inspiration at RBN AYUSH Health Care"
                  className="meta-hero-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 1: LIFESTYLE-FOCUSED METABOLIC WELLBEING
            ================================================================== */}
        <section className="meta-lifestyle-section">
          <div className="meta-lifestyle-grid">
            <div className="meta-lifestyle-content">
              <div className="meta-section-header">
                <h2 className="meta-section-title">
                  <Leaf size={22} className="meta-section-icon" />
                  <span>A Lifestyle-Focused Approach to Metabolic Wellbeing</span>
                </h2>
                <span className="meta-section-gold-line"></span>
              </div>
              <p className="meta-section-text">
                Metabolic wellbeing is influenced by many interconnected factors, including food habits, physical activity, sleep, stress, body composition, medicines, medical conditions and genetics. RBN's Metabolic Wellness Program should therefore be positioned as structured lifestyle support rather than a promise of rapid reversal or a guaranteed medical outcome.
              </p>
            </div>
            <div className="meta-lifestyle-visual">
              <div className="meta-pill-frame">
                <img
                  src={nutritionBowlImg}
                  alt="Wholesome nutritious quinoa salad bowl and lemon water"
                  className="meta-pill-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 2: START WITH YOUR CURRENT ROUTINE
            ================================================================== */}
        <section className="meta-routine-section">
          <div className="meta-routine-grid">
            <div className="meta-routine-visual">
              <div className="meta-pill-frame">
                <img
                  src={doctorRoutineImg}
                  alt="Doctor consulting with patient regarding lifestyle and current routines"
                  className="meta-pill-img"
                />
              </div>
            </div>
            <div className="meta-routine-content">
              <div className="meta-section-header">
                <h2 className="meta-section-title">
                  <Calendar size={22} color="#D49A00" />
                  <span>Start With Your Current Routine</span>
                </h2>
                <span className="meta-section-gold-line"></span>
              </div>
              <p className="meta-section-text">
                The program begins by understanding what everyday life currently looks like. Instead of assuming that every participant needs the same diet or exercise routine, the team can identify realistic areas for improvement and discuss whether medical review is required for any existing condition.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: LIFESTYLE WELLNESS CARDS (4 Cards in 2x2 Grid)
            ================================================================== */}
        <section className="meta-cards-section">
          <div className="meta-cards-grid">
            {lifestyleCards.map((card, idx) => (
              <div key={idx} className="meta-lifestyle-card">
                <div className="meta-lifestyle-card-image-wrap">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="meta-lifestyle-card-img"
                  />
                </div>
                <div className="meta-lifestyle-card-body">
                  <div className="meta-lifestyle-card-header">
                    {card.icon}
                    <h3 className="meta-lifestyle-card-title">{card.title}</h3>
                  </div>
                  <p className="meta-lifestyle-card-text">{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            SECTION 4: HOW PROGRESS IS REVIEWED
            ================================================================== */}
        <section className="meta-progress-section">
          <div className="meta-progress-grid">
            <div className="meta-progress-visual">
              <div className="meta-pill-frame">
                <img
                  src={progressNotebookImg}
                  alt="Wellness Plan checklist notebook with review tracking"
                  className="meta-pill-img"
                />
              </div>
            </div>
            <div className="meta-progress-content">
              <div className="meta-section-header">
                <h2 className="meta-section-title">
                  <BarChart3 size={22} color="#D49A00" />
                  <span>How Progress Is Reviewed</span>
                </h2>
                <span className="meta-section-gold-line"></span>
              </div>
              <p className="meta-section-text">
                Progress should be discussed using realistic goals agreed with the participant. If measurements are used, RBN should explain what they mean and avoid implying that a single number defines overall health.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 5: MEDICAL GUIDANCE BANNER
            ================================================================== */}
        <section className="meta-banner-section">
          <div className="meta-guidance-banner">
            <div className="meta-banner-icon-wrap">
              <ShieldCheck size={32} />
            </div>
            <h3 className="meta-banner-title">
              Who Should Seek<br />
              Medical Guidance?
            </h3>
            <div className="meta-banner-divider"></div>
            <p className="meta-banner-text">
              People with diagnosed metabolic conditions, significant symptoms, pregnancy or prescription medicines should continue appropriate medical care. A wellness program should complement, not replace, necessary clinical management.
            </p>
            <div className="meta-banner-stones-wrap">
              <img
                src={bannerStonesImg}
                alt="Stacked pebbles with white plumeria flower"
                className="meta-banner-stones-img"
              />
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 6: FAQ & ENQUIRE CTA
            ================================================================== */}
        <section className="meta-faq-cta-section">
          <div className="meta-faq-cta-grid">
            {/* FAQ Column */}
            <div className="meta-faq-column">
              <div className="meta-faq-header">
                <h2 className="meta-faq-title">
                  <HelpCircle size={22} className="meta-faq-title-icon" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <span className="meta-faq-header-line"></span>
              </div>

              <div className="meta-faq-list">
                {faqData.map((item, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`meta-faq-item ${isOpen ? 'active' : ''}`}
                    >
                      <button
                        type="button"
                        className="meta-faq-question"
                        onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <span className="meta-faq-toggle-icon">
                          {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="meta-faq-answer">{item.answer}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Column */}
            <div className="meta-cta-column">
              <div className="meta-cta-banner-card">
                <div className="meta-cta-image-wrap">
                  <img
                    src={ctaMortarImg}
                    alt="Ayurvedic mortar and pestle with fresh healing leaves"
                    className="meta-cta-img"
                  />
                </div>
                <div className="meta-cta-text-wrap">
                  <h3 className="meta-cta-heading">
                    Enquire About the<br />
                    Metabolic Wellness<br />
                    Program
                  </h3>
                </div>
                <Link
                  to="/book-consultation"
                  className="meta-cta-arrow-btn"
                  aria-label="Enquire About the Metabolic Wellness Program"
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
        <section className="meta-links-section">
          <div className="meta-links-header">
            <span className="meta-links-line"></span>
            <h2 className="meta-links-title">
              <Link2 size={20} className="meta-links-icon" />
              <span>Recommended Internal Links</span>
            </h2>
            <span className="meta-links-line"></span>
          </div>

          <div className="meta-links-row">
            <Link to="/lifestyle-modification" className="meta-link-pill">
              <Leaf size={18} className="meta-link-pill-icon" />
              <span>Lifestyle Modification</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/yoga-meditation" className="meta-link-pill">
              <Flower2 size={18} className="meta-link-pill-icon" />
              <span>Yoga & Meditation</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/blog" className="meta-link-pill">
              <BookOpen size={18} className="meta-link-pill-icon" />
              <span>Health Library</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="meta-link-pill">
              <Phone size={18} className="meta-link-pill-icon" />
              <span>Contact</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MetabolicWellness;
