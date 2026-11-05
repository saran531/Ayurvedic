import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  ChevronRight,
  Calendar,
  ArrowRight,
  Leaf,
  Flower2,
  BookOpen,
  Sparkles,
  Apple,
  Users,
  ClipboardCheck,
  CheckSquare,
  HelpCircle,
  Plus,
  Minus,
  Link2,
  Phone
} from 'lucide-react';
import './SirumalaiWellnessRetreat.css';

// High-resolution image assets extracted from reference screenshot
import heroRetreatMountainsImg from '../assets/images/sirumalai-retreat/hero-retreat-mountains.png';
import cardRetreatMorningYogaImg from '../assets/images/sirumalai-retreat/card-retreat-morning-yoga.png';
import cardRetreatMeditationImg from '../assets/images/sirumalai-retreat/card-retreat-meditation.png';
import cardRetreatNatureWalkImg from '../assets/images/sirumalai-retreat/card-retreat-nature-walk.png';
import cardRetreatEducationImg from '../assets/images/sirumalai-retreat/card-retreat-education.png';
import cardRetreatNaturopathyImg from '../assets/images/sirumalai-retreat/card-retreat-naturopathy.png';
import cardRetreatNutritionImg from '../assets/images/sirumalai-retreat/card-retreat-nutrition.png';
import sectionRetreatGroupImg from '../assets/images/sirumalai-retreat/section-retreat-group.png';
import ctaRetreatLandscapeImg from '../assets/images/sirumalai-retreat/cta-retreat-landscape.png';

function SirumalaiWellnessRetreat() {
  const [activeFaq, setActiveFaq] = useState(-1);

  const faqData = [
    {
      question: 'Is the retreat a medical treatment program?',
      answer:
        'No. The Sirumalai Wellness Retreat is an immersive lifestyle and relaxation experience, not a hospital admission or emergency medical facility.'
    },
    {
      question: 'Can beginners join yoga and meditation?',
      answer:
        'Yes. All movement, breathing, and meditation sessions are gently guided and adapted to accommodate beginners as well as experienced participants.'
    },
    {
      question: 'Are all therapies included?',
      answer:
        'Core group practices and scheduled educational sessions are included. Specialized individual naturopathic therapies depend on the specific retreat itinerary and prior assessment.'
    }
  ];

  const retreatCards = [
    {
      img: cardRetreatMorningYogaImg,
      icon: <Flower2 size={18} />,
      title: 'Morning Movement & Yoga',
      content:
        "Begin the day with guided movement and breathing adapted to the group's ability and the retreat format."
    },
    {
      img: cardRetreatMeditationImg,
      icon: <Flower2 size={18} />,
      title: 'Meditation & Quiet Time',
      content:
        'Create dedicated periods for relaxation, reflection and mindful awareness away from normal distractions.'
    },
    {
      img: cardRetreatNatureWalkImg,
      icon: <Leaf size={18} />,
      title: 'Nature Experiences',
      content:
        'Use the natural environment responsibly through walks, quiet observation or other appropriate activities, depending on weather and venue conditions.'
    },
    {
      img: cardRetreatEducationImg,
      icon: <BookOpen size={18} />,
      title: 'Wellness Education',
      content:
        'Short sessions can explore nutrition, sleep, stress, movement, routine and how to translate retreat practices into everyday life.'
    },
    {
      img: cardRetreatNaturopathyImg,
      icon: <Sparkles size={18} />,
      title: 'Naturopathy & Rejuvenation',
      content:
        'Selected therapies may be included according to the retreat plan, available facilities and individual suitability.'
    },
    {
      img: cardRetreatNutritionImg,
      icon: <Apple size={18} />,
      title: 'Mindful Nutrition',
      content:
        'Meals can support the retreat\'s wellness theme while remaining nutritionally appropriate and transparent about ingredients, allergies and dietary needs.'
    }
  ];

  return (
    <div className="retreat-page">
      {/* ==================================================================
          HERO SECTION (Full-Width Mountain Landscape Background)
          ================================================================== */}
      <section
        className="retreat-hero-section"
        style={{ backgroundImage: `url(${heroRetreatMountainsImg})` }}
      >
        <div className="retreat-hero-overlay"></div>
        <div className="container retreat-hero-container">
          <div className="retreat-hero-content">
            {/* Breadcrumb */}
            <nav className="retreat-breadcrumb-bar" aria-label="Breadcrumb">
              <ol className="retreat-breadcrumb-list">
                <li className="retreat-breadcrumb-item">
                  <Link to="/">
                    <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                    <span>Home</span>
                  </Link>
                </li>
                <li className="retreat-breadcrumb-separator">
                  <ChevronRight size={14} />
                </li>
                <li className="retreat-breadcrumb-item">
                  <span className="retreat-breadcrumb-current" aria-current="page">
                    Sirumalai Wellness Retreat
                  </span>
                </li>
              </ol>
            </nav>

            <h1 className="retreat-hero-title">
              Reconnect With Nature.<br />
              Reconnect With<br />
              Wellbeing.
            </h1>

            <p className="retreat-hero-desc">
              The Sirumalai Hills offer a setting that is naturally different from the pace of everyday city life.
              RBN's Sirumalai Wellness Retreat is designed as an immersive wellness experience where participants can
              spend intentional time on movement, rest, mindfulness, nature and healthier routines.
            </p>

            <p className="retreat-hero-desc">
              The retreat should not be marketed as a medical cure or an instant transformation. Its value lies in
              creating an environment where participants can experience a structured routine, learn practical wellness
              principles and return home with habits they can continue.
            </p>

            <Link to="/contact" className="retreat-hero-cta">
              <Calendar size={18} />
              <span>Enquire About the Retreat &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        {/* ==================================================================
            SECTION 1: A TYPICAL RETREAT EXPERIENCE (6 Cards in 3x2 Grid)
            ================================================================== */}
        <section className="retreat-experience-section">
          <div className="retreat-section-header">
            <div className="retreat-section-line" aria-hidden="true"></div>
            <h2 className="retreat-section-title">
              <Leaf size={24} className="retreat-section-icon" />
              <span>A Typical Retreat Experience</span>
            </h2>
            <div className="retreat-section-line" aria-hidden="true"></div>
          </div>

          <div className="retreat-cards-grid">
            {retreatCards.map((card, idx) => (
              <div key={idx} className="retreat-card">
                <div className="retreat-card-image-wrap">
                  <img src={card.img} alt={card.title} className="retreat-card-img" loading="lazy" />
                  <div className="retreat-card-badge">{card.icon}</div>
                </div>
                <div className="retreat-card-body">
                  <h3 className="retreat-card-title">{card.title}</h3>
                  <p className="retreat-card-desc">{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            SECTION 2: WHO IS THE RETREAT FOR?
            ================================================================== */}
        <section className="retreat-who-section">
          <div className="retreat-who-card">
            <div className="retreat-who-image-wrap">
              <img
                src={sectionRetreatGroupImg}
                alt="Group Walking Through a Green Forest"
                className="retreat-who-img"
                loading="lazy"
              />
            </div>

            <div className="retreat-who-content">
              <div className="retreat-who-header">
                <div className="retreat-who-icon-bubble">
                  <Users size={22} />
                </div>
                <h3 className="retreat-who-title">Who Is the Retreat For?</h3>
              </div>
              <p className="retreat-who-desc">
                The retreat may appeal to individuals, couples, groups, organisations and people who want dedicated
                time away from routine. Each retreat should specify age guidance, activity level, accommodation,
                medical limitations, accessibility and whether a pre-retreat consultation is required.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: BEFORE YOU BOOK SECTION
            ================================================================== */}
        <section className="retreat-booking-section">
          <div className="retreat-booking-card">
            {/* Left Dark Green Panel */}
            <div className="retreat-booking-left">
              <div className="retreat-booking-icon-wrap">
                <ClipboardCheck size={36} />
              </div>
              <h2 className="retreat-booking-title">
                Before<br />
                You Book
              </h2>
              <div className="retreat-booking-bg-leaves" aria-hidden="true">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
            </div>

            {/* Right Cream Checklist Panel */}
            <div className="retreat-booking-right">
              <div className="retreat-booking-column">
                <div className="retreat-booking-item">
                  <CheckSquare size={18} className="retreat-check-icon" />
                  <span>Confirm dates and exact Sirumalai venue</span>
                </div>
                <div className="retreat-booking-item">
                  <CheckSquare size={18} className="retreat-check-icon" />
                  <span>Review accommodation and room-sharing details</span>
                </div>
                <div className="retreat-booking-item">
                  <CheckSquare size={18} className="retreat-check-icon" />
                  <span>Check included meals and dietary options</span>
                </div>
              </div>

              <div className="retreat-booking-divider" aria-hidden="true"></div>

              <div className="retreat-booking-column">
                <div className="retreat-booking-item">
                  <CheckSquare size={18} className="retreat-check-icon" />
                  <span>Understand the activity schedule and physical requirements</span>
                </div>
                <div className="retreat-booking-item">
                  <CheckSquare size={18} className="retreat-check-icon" />
                  <span>Disclose relevant medical conditions where requested through an appropriate secure process</span>
                </div>
                <div className="retreat-booking-item">
                  <CheckSquare size={18} className="retreat-check-icon" />
                  <span>Review cancellation, weather and rescheduling terms</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 4: FAQ & RETREAT CTA ROW
            ================================================================== */}
        <section className="retreat-faq-cta-section">
          <div className="retreat-faq-cta-grid">
            {/* FAQ Accordions */}
            <div className="retreat-faq-column">
              <div className="retreat-faq-header">
                <HelpCircle size={22} className="retreat-faq-title-icon" />
                <h3 className="retreat-faq-title">Frequently Asked Questions</h3>
                <div className="retreat-faq-header-line" aria-hidden="true"></div>
              </div>

              <div className="retreat-faq-list">
                {faqData.map((item, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div key={idx} className={`retreat-faq-item ${isOpen ? 'active' : ''}`}>
                      <button
                        type="button"
                        className="retreat-faq-question"
                        onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <span className="retreat-faq-toggle-icon">
                          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                        </span>
                      </button>
                      {isOpen && <p className="retreat-faq-answer">{item.answer}</p>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Retreat CTA Banner Card */}
            <div className="retreat-cta-column">
              <div className="retreat-cta-banner-card">
                <div className="retreat-cta-image-wrap">
                  <img
                    src={ctaRetreatLandscapeImg}
                    alt="Scenic Sirumalai Mountain Landscape"
                    className="retreat-cta-img"
                    loading="lazy"
                  />
                </div>
                <div className="retreat-cta-text-wrap">
                  <h3 className="retreat-cta-heading">
                    Enquire About the<br />
                    Next Sirumalai<br />
                    Retreat
                  </h3>
                </div>
                <Link
                  to="/contact"
                  className="retreat-cta-arrow-btn"
                  aria-label="Enquire About the Next Sirumalai Retreat"
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
        <section className="retreat-links-section">
          <div className="retreat-links-header">
            <div className="retreat-links-line" aria-hidden="true"></div>
            <h3 className="retreat-links-title">
              <Link2 size={20} className="retreat-links-icon" />
              <span>Recommended Internal Links</span>
            </h3>
            <div className="retreat-links-line" aria-hidden="true"></div>
          </div>

          <div className="retreat-links-row">
            <Link to="/wellness-camps" className="retreat-link-pill">
              <Leaf size={16} className="retreat-link-pill-icon" />
              <span>Wellness Camps &rarr;</span>
            </Link>
            <Link to="/yoga-meditation" className="retreat-link-pill">
              <Flower2 size={16} className="retreat-link-pill-icon" />
              <span>Yoga & Meditation &rarr;</span>
            </Link>
            <Link to="/shirodhara-rejuvenation" className="retreat-link-pill">
              <Sparkles size={16} className="retreat-link-pill-icon" />
              <span>Shirodhara & Rejuvenation &rarr;</span>
            </Link>
            <Link to="/contact" className="retreat-link-pill">
              <Phone size={16} className="retreat-link-pill-icon" />
              <span>Contact &rarr;</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SirumalaiWellnessRetreat;
