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
  Droplets,
  Settings,
  MessageSquare,
  ListChecks,
  Target,
  Sprout,
  ClipboardCheck,
  RotateCw,
  HelpCircle,
  Plus,
  Minus,
  Link2,
  Phone
} from 'lucide-react';
import './LifestyleModification.css';

// High-resolution image assets extracted from reference screenshot
import heroLifestyleWomanImg from '../assets/images/lifestyle-modification/hero-lifestyle-woman.png';
import introRoutineChecklistImg from '../assets/images/lifestyle-modification/intro-routine-checklist.png';
import cardNutritionBowlImg from '../assets/images/lifestyle-modification/card-nutrition-bowl.png';
import cardWalkingCoupleImg from '../assets/images/lifestyle-modification/card-walking-couple.png';
import cardSleepingWomanImg from '../assets/images/lifestyle-modification/card-sleeping-woman.png';
import cardWomanMeditatingImg from '../assets/images/lifestyle-modification/card-woman-meditating.png';
import sectionLemonWaterImg from '../assets/images/lifestyle-modification/section-lemon-water.png';
import ctaHerbalBowlImg from '../assets/images/lifestyle-modification/cta-herbal-bowl.png';

function LifestyleModification() {
  const [activeFaq, setActiveFaq] = useState(-1);

  const faqData = [
    {
      question: 'Do I need to change everything at once?',
      answer:
        'No. Sustainable lifestyle modification is built on small, progressive adjustments that fit naturally into your existing life rather than drastic overnight overhauls.'
    },
    {
      question: 'Is lifestyle support only for people with health problems?',
      answer:
        'Not at all. Lifestyle support is beneficial for anyone wishing to optimize energy, prevent metabolic imbalances, improve sleep, manage stress, or build healthier long-term routines.'
    }
  ];

  const lifestyleCards = [
    {
      img: cardNutritionBowlImg,
      icon: <Apple size={22} className="lifestyle-card-icon" />,
      title: 'Nutrition Habits',
      content:
        'Rather than relying on fad diets, the discussion can focus on meal patterns, food quality, portions, hydration, cultural preferences and consistency. People with diagnosed medical conditions or specialised dietary needs may require individual clinical nutrition advice.'
    },
    {
      img: cardWalkingCoupleImg,
      icon: <Activity size={22} className="lifestyle-card-icon" />,
      title: 'Movement',
      content:
        'Regular movement can take many forms. The right starting point depends on current activity level, mobility, health status and personal preference. RBN may incorporate yoga or other appropriate activity guidance within a broader program.'
    },
    {
      img: cardSleepingWomanImg,
      icon: <Moon size={22} className="lifestyle-card-icon" />,
      title: 'Sleep',
      content:
        'A lifestyle review can explore sleep timing, consistency, screen habits, work schedules and bedtime routines. Persistent insomnia, loud snoring with breathing pauses or other concerning sleep symptoms should be referred for appropriate medical evaluation.'
    },
    {
      img: cardWomanMeditatingImg,
      icon: <Flower2 size={22} className="lifestyle-card-icon" />,
      title: 'Stress & Relaxation',
      content:
        'Stress-management support may include breathing practices, meditation, yoga, time-management changes, relaxation and identifying routine triggers.'
    }
  ];

  const processSteps = [
    {
      icon: <MessageSquare size={22} />,
      text: 'Initial lifestyle conversation'
    },
    {
      icon: <ListChecks size={22} />,
      text: 'Identify the highest-priority habits'
    },
    {
      icon: <Target size={22} />,
      text: 'Set realistic goals'
    },
    {
      icon: <Sprout size={22} />,
      text: 'Add appropriate wellness practices'
    },
    {
      icon: <ClipboardCheck size={22} />,
      text: 'Review progress and barriers'
    },
    {
      icon: <RotateCw size={22} />,
      text: 'Adjust the plan for sustainability'
    }
  ];

  return (
    <div className="lifestyle-page">
      <div className="container">
        {/* ==================================================================
            BREADCRUMB
            ================================================================== */}
        <nav className="lifestyle-breadcrumb-bar" aria-label="Breadcrumb">
          <ol className="lifestyle-breadcrumb-list">
            <li className="lifestyle-breadcrumb-item">
              <Link to="/">
                <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="lifestyle-breadcrumb-separator">
              <ChevronRight size={14} />
            </li>
            <li className="lifestyle-breadcrumb-item">
              <span className="lifestyle-breadcrumb-current" aria-current="page">
                Lifestyle Modification
              </span>
            </li>
          </ol>
        </nav>

        {/* ==================================================================
            HERO SECTION
            ================================================================== */}
        <section className="lifestyle-hero-section">
          <div className="lifestyle-hero-grid">
            <div className="lifestyle-hero-content">
              <h1 className="lifestyle-hero-title">
                Lifestyle Modification &<br />
                Wellness Support
              </h1>

              {/* Decorative Gold Leaf Underline */}
              <div className="lifestyle-hero-divider" aria-hidden="true">
                <Leaf size={18} />
              </div>

              <Link to="/book-consultation" className="lifestyle-hero-cta">
                <Calendar size={18} />
                <span>Book a Consultation &rarr;</span>
              </Link>
            </div>

            <div className="lifestyle-hero-image-wrap">
              <div className="lifestyle-hero-frame">
                <img
                  src={heroLifestyleWomanImg}
                  alt="Lifestyle Modification and Wellness Support - Woman Breathing Mindfully in Nature"
                  className="lifestyle-hero-img"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 1: INTRODUCTION (Small Changes Can Shape the Bigger Routine)
            ================================================================== */}
        <section className="lifestyle-intro-section">
          <div className="lifestyle-intro-grid">
            <div className="lifestyle-intro-text-wrap">
              <div className="lifestyle-section-header">
                <Leaf size={22} className="lifestyle-section-icon" />
                <h2 className="lifestyle-section-title">Small Changes Can Shape the Bigger Routine</h2>
                <div className="lifestyle-section-gold-line" aria-hidden="true"></div>
              </div>
              <p className="lifestyle-section-text">
                Lifestyle modification is not about following a perfect routine for a few days. It is about understanding
                which everyday behaviours matter most for the individual and making changes that can realistically continue.
                RBN's lifestyle support can provide structure for people who feel overwhelmed by conflicting wellness
                advice.
              </p>
            </div>

            <div className="lifestyle-intro-image-wrap">
              <div className="lifestyle-pill-frame">
                <img
                  src={introRoutineChecklistImg}
                  alt="Healthy Routine Notepad Checklist"
                  className="lifestyle-pill-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 2: LIFESTYLE WELLNESS CARDS (4 Cards in 2x2 Grid)
            ================================================================== */}
        <section className="lifestyle-cards-section">
          <div className="lifestyle-cards-grid">
            {lifestyleCards.map((card, idx) => (
              <div key={idx} className="lifestyle-service-card">
                <div className="lifestyle-service-card-image-wrap">
                  <img src={card.img} alt={card.title} className="lifestyle-service-card-img" loading="lazy" />
                </div>
                <div className="lifestyle-service-card-body">
                  <div className="lifestyle-service-card-header">
                    {card.icon}
                    <h3 className="lifestyle-service-card-title">{card.title}</h3>
                  </div>
                  <p className="lifestyle-service-card-text">{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: HYDRATION & DAILY RHYTHM
            ================================================================== */}
        <section className="lifestyle-hydration-section">
          <div className="lifestyle-hydration-grid">
            <div className="lifestyle-hydration-image-wrap">
              <div className="lifestyle-pill-frame">
                <img
                  src={sectionLemonWaterImg}
                  alt="Hydration and Daily Rhythm - Lemon Water with Mint Leaves"
                  className="lifestyle-pill-img"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lifestyle-hydration-text-wrap">
              <div className="lifestyle-section-header">
                <Droplets size={22} className="lifestyle-section-icon" />
                <h2 className="lifestyle-section-title">Hydration & Daily Rhythm</h2>
                <div className="lifestyle-section-gold-line" aria-hidden="true"></div>
              </div>
              <p className="lifestyle-section-text">
                Simple factors such as hydration, long gaps between meals, sedentary work patterns and irregular
                schedules can affect how people feel. The goal is to identify realistic improvements without turning
                every daily choice into a rigid rule.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 4: HOW THE PROGRAM WORKS (6 Steps)
            ================================================================== */}
        <section className="lifestyle-process-section">
          <div className="lifestyle-process-container">
            <div className="lifestyle-process-header">
              <Settings size={22} className="lifestyle-process-icon" />
              <h2 className="lifestyle-process-title">How the Program Works</h2>
              <div className="lifestyle-process-gold-line" aria-hidden="true"></div>
            </div>

            <div className="lifestyle-process-steps-row">
              {processSteps.map((step, idx) => (
                <div key={idx} style={{ display: 'contents' }}>
                  <div className="lifestyle-step-card">
                    <div className="lifestyle-step-icon-bubble">{step.icon}</div>
                    <p className="lifestyle-step-text">{step.text}</p>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="lifestyle-step-separator" aria-hidden="true">
                      <ChevronRight size={18} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 5: FAQ & CONSULTATION CTA ROW
            ================================================================== */}
        <section className="lifestyle-faq-cta-section">
          <div className="lifestyle-faq-cta-grid">
            {/* FAQ Accordions */}
            <div className="lifestyle-faq-column">
              <div className="lifestyle-faq-header">
                <HelpCircle size={22} className="lifestyle-faq-title-icon" />
                <h3 className="lifestyle-faq-title">Frequently Asked Questions</h3>
                <div className="lifestyle-faq-header-line" aria-hidden="true"></div>
              </div>

              <div className="lifestyle-faq-list">
                {faqData.map((item, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div key={idx} className={`lifestyle-faq-item ${isOpen ? 'active' : ''}`}>
                      <button
                        type="button"
                        className="lifestyle-faq-question"
                        onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <span className="lifestyle-faq-toggle-icon">
                          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                        </span>
                      </button>
                      {isOpen && <p className="lifestyle-faq-answer">{item.answer}</p>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Lifestyle Consultation CTA Banner Card */}
            <div className="lifestyle-cta-column">
              <div className="lifestyle-cta-banner-card">
                <div className="lifestyle-cta-image-wrap">
                  <img
                    src={ctaHerbalBowlImg}
                    alt="Start a Lifestyle Consultation - Ayurvedic Herbal Bowl"
                    className="lifestyle-cta-img"
                    loading="lazy"
                  />
                </div>
                <div className="lifestyle-cta-text-wrap">
                  <h3 className="lifestyle-cta-heading">
                    Start a<br />
                    Lifestyle<br />
                    Consultation
                  </h3>
                </div>
                <Link
                  to="/book-consultation"
                  className="lifestyle-cta-arrow-btn"
                  aria-label="Start a Lifestyle Consultation"
                >
                  <ArrowRight size={22} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 6: RECOMMENDED INTERNAL LINKS (4 Buttons)
            ================================================================== */}
        <section className="lifestyle-links-section">
          <div className="lifestyle-links-header">
            <div className="lifestyle-links-line" aria-hidden="true"></div>
            <h3 className="lifestyle-links-title">
              <Link2 size={20} className="lifestyle-links-icon" />
              <span>Recommended Internal Links</span>
            </h3>
            <div className="lifestyle-links-line" aria-hidden="true"></div>
          </div>

          <div className="lifestyle-links-row">
            <Link to="/metabolic-wellness" className="lifestyle-link-pill">
              <Activity size={16} className="lifestyle-link-pill-icon" />
              <span>Metabolic Wellness &rarr;</span>
            </Link>
            <Link to="/gut-health-detox" className="lifestyle-link-pill">
              <Apple size={16} className="lifestyle-link-pill-icon" />
              <span>Gut Health & Detox &rarr;</span>
            </Link>
            <Link to="/yoga-meditation" className="lifestyle-link-pill">
              <Flower2 size={16} className="lifestyle-link-pill-icon" />
              <span>Yoga & Meditation &rarr;</span>
            </Link>
            <Link to="/contact" className="lifestyle-link-pill">
              <Phone size={16} className="lifestyle-link-pill-icon" />
              <span>Contact &rarr;</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LifestyleModification;
