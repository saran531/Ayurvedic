import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  ChevronRight,
  Calendar,
  ArrowRight,
  Leaf,
  Users,
  Apple,
  Flower2,
  Briefcase,
  ClipboardCheck,
  CheckSquare,
  Link2,
  Phone
} from 'lucide-react';
import './HealthAwarenessPrograms.css';

// High-resolution image assets extracted from reference screenshot
import heroAwarenessDoctorImg from '../assets/images/health-awareness-programs/hero-awareness-doctor.png';
import cardAwarenessCampsImg from '../assets/images/health-awareness-programs/card-awareness-camps.png';
import cardNutritionLemonImg from '../assets/images/health-awareness-programs/card-nutrition-lemon.png';
import cardYogaWorkshopsImg from '../assets/images/health-awareness-programs/card-yoga-workshops.png';
import cardCorporateWellnessImg from '../assets/images/health-awareness-programs/card-corporate-wellness.png';
import cardCommunityProgramsImg from '../assets/images/health-awareness-programs/card-community-programs.png';
import ctaAwarenessMortarImg from '../assets/images/health-awareness-programs/cta-awareness-mortar.png';
import ctaAwarenessGroupImg from '../assets/images/health-awareness-programs/cta-awareness-group.png';

function HealthAwarenessPrograms() {
  const awarenessCards = [
    {
      img: cardAwarenessCampsImg,
      icon: <Users size={22} className="awareness-card-icon" />,
      title: 'Health Awareness Camps',
      content:
        'Awareness camps can focus on practical themes such as healthy routines, movement, sleep, stress, hydration and when to seek professional medical care. Screening or clinical activities should only be advertised when RBN confirms the responsible professionals, equipment and scope.'
    },
    {
      img: cardNutritionLemonImg,
      icon: <Apple size={22} className="awareness-card-icon" />,
      title: 'Nutrition & Lifestyle Sessions',
      content:
        'These sessions can translate broad wellness advice into realistic everyday actions. Topics may include balanced meal patterns, hydration, sedentary routines, sleep consistency, stress and building habits that are easier to sustain.'
    },
    {
      img: cardYogaWorkshopsImg,
      icon: <Flower2 size={22} className="awareness-card-icon" />,
      title: 'Yoga & Wellness Workshops',
      content:
        'Group yoga, breathing, relaxation and meditation sessions can be adapted to the audience, venue and available time. Corporate sessions should consider desk-based work patterns and varying fitness levels.'
    },
    {
      img: cardCorporateWellnessImg,
      icon: <Briefcase size={22} className="awareness-card-icon" />,
      title: 'Corporate Wellness',
      content:
        "For organisations, RBN can create modular programs rather than one generic package. Options may include awareness talks, yoga sessions, lifestyle workshops, wellness-day activities or recurring programs, depending on the client's needs and RBN's capacity."
    },
    {
      img: cardCommunityProgramsImg,
      icon: <Users size={22} className="awareness-card-icon" />,
      title: 'Community & Institutional Programs',
      content:
        'RBN may work with resident associations, educational institutions, clubs, community organisations and other groups. The content and activity level should be appropriate for the audience.'
    }
  ];

  return (
    <div className="awareness-page">
      <div className="container">
        {/* ==================================================================
            BREADCRUMB
            ================================================================== */}
        <nav className="awareness-breadcrumb-bar" aria-label="Breadcrumb">
          <ol className="awareness-breadcrumb-list">
            <li className="awareness-breadcrumb-item">
              <Link to="/">
                <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="awareness-breadcrumb-separator">
              <ChevronRight size={14} />
            </li>
            <li className="awareness-breadcrumb-item">
              <span className="awareness-breadcrumb-current" aria-current="page">
                Health Awareness & Community Programs
              </span>
            </li>
          </ol>
        </nav>

        {/* ==================================================================
            HERO SECTION
            ================================================================== */}
        <section className="awareness-hero-section">
          <div className="awareness-hero-grid">
            <div className="awareness-hero-content">
              <h1 className="awareness-hero-title">
                Taking Wellness<br />
                Education Beyond<br />
                the Centre
              </h1>

              {/* Decorative Gold Leaf Underline */}
              <div className="awareness-hero-divider" aria-hidden="true">
                <Leaf size={18} />
              </div>

              <p className="awareness-hero-desc">
                Health information is most useful when people can understand it and apply it. RBN's awareness and
                community programs can bring practical wellness education to workplaces, associations, educational
                institutions and community groups in and around Madurai.
              </p>

              <Link to="/contact" className="awareness-hero-cta">
                <Calendar size={18} />
                <span>Enquire About a Program &rarr;</span>
              </Link>
            </div>

            <div className="awareness-hero-image-wrap">
              <div className="awareness-hero-frame">
                <img
                  src={heroAwarenessDoctorImg}
                  alt="Doctor Explaining Healthy Lifestyle Topics to an Audience"
                  className="awareness-hero-img"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 1: WELLNESS PROGRAM CARDS (5 Cards in 2-Column Grid)
            ================================================================== */}
        <section className="awareness-cards-section">
          <div className="awareness-cards-grid">
            {awarenessCards.map((card, idx) => (
              <div key={idx} className="awareness-service-card">
                <div className="awareness-service-card-image-wrap">
                  <img src={card.img} alt={card.title} className="awareness-service-card-img" loading="lazy" />
                </div>
                <div className="awareness-service-card-body">
                  <div className="awareness-service-card-header">
                    {card.icon}
                    <h3 className="awareness-service-card-title">{card.title}</h3>
                  </div>
                  <p className="awareness-service-card-text">{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            SECTION 2: PLANNING A PROGRAM SECTION
            ================================================================== */}
        <section className="awareness-planning-section">
          <div className="awareness-planning-card">
            {/* Left Dark Green Panel */}
            <div className="awareness-planning-left">
              <div className="awareness-planning-icon-wrap">
                <ClipboardCheck size={36} />
              </div>
              <h2 className="awareness-planning-title">
                Planning<br />
                a Program
              </h2>
              <div className="awareness-planning-bg-leaves" aria-hidden="true">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
            </div>

            {/* Right Cream Checklist Panel */}
            <div className="awareness-planning-right">
              <div className="awareness-checklist-column">
                <div className="awareness-checklist-item">
                  <CheckSquare size={18} className="awareness-check-icon" />
                  <span>Organisation / group name</span>
                </div>
                <div className="awareness-checklist-item">
                  <CheckSquare size={18} className="awareness-check-icon" />
                  <span>Audience size and age group</span>
                </div>
                <div className="awareness-checklist-item">
                  <CheckSquare size={18} className="awareness-check-icon" />
                  <span>Preferred date and venue</span>
                </div>
                <div className="awareness-checklist-item">
                  <CheckSquare size={18} className="awareness-check-icon" />
                  <span>Primary wellness topic</span>
                </div>
              </div>

              <div className="awareness-checklist-divider" aria-hidden="true"></div>

              <div className="awareness-checklist-column">
                <div className="awareness-checklist-item">
                  <CheckSquare size={18} className="awareness-check-icon" />
                  <span>Session duration</span>
                </div>
                <div className="awareness-checklist-item">
                  <CheckSquare size={18} className="awareness-check-icon" />
                  <span>Need for yoga or practical activities</span>
                </div>
                <div className="awareness-checklist-item">
                  <CheckSquare size={18} className="awareness-check-icon" />
                  <span>Any accessibility requirements</span>
                </div>
                <div className="awareness-checklist-item">
                  <CheckSquare size={18} className="awareness-check-icon" />
                  <span>Whether clinical screening is requested</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: MAIN CTA BANNER
            ================================================================== */}
        <section className="awareness-banner-section">
          <div className="awareness-full-banner">
            <div className="awareness-banner-left-wrap">
              <img
                src={ctaAwarenessMortarImg}
                alt="Ayurvedic Herbal Mortar and Jasmine Flowers"
                className="awareness-banner-thumb-img"
                loading="lazy"
              />
            </div>

            <div className="awareness-banner-divider" aria-hidden="true"></div>

            <div className="awareness-banner-center">
              <h3 className="awareness-banner-heading">
                Organise a Wellness<br />
                Awareness Program
              </h3>

              <Link
                to="/contact"
                className="awareness-banner-arrow-btn"
                aria-label="Organise a Wellness Awareness Program"
              >
                <ArrowRight size={22} />
              </Link>
            </div>

            <div className="awareness-banner-right-wrap">
              <img
                src={ctaAwarenessGroupImg}
                alt="Wellness Group Practicing Yoga Outdoors"
                className="awareness-banner-thumb-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 4: RECOMMENDED INTERNAL LINKS (3 Buttons)
            ================================================================== */}
        <section className="awareness-links-section">
          <div className="awareness-links-header">
            <div className="awareness-links-line" aria-hidden="true"></div>
            <h3 className="awareness-links-title">
              <Link2 size={20} className="awareness-links-icon" />
              <span>Recommended Internal Links</span>
            </h3>
            <div className="awareness-links-line" aria-hidden="true"></div>
          </div>

          <div className="awareness-links-row">
            <Link to="/wellness-camps" className="awareness-link-pill">
              <Leaf size={16} className="awareness-link-pill-icon" />
              <span>Wellness Camps &rarr;</span>
            </Link>
            <Link to="/about" className="awareness-link-pill">
              <Flower2 size={16} className="awareness-link-pill-icon" />
              <span>About RBN &rarr;</span>
            </Link>
            <Link to="/contact" className="awareness-link-pill">
              <Phone size={16} className="awareness-link-pill-icon" />
              <span>Contact &rarr;</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HealthAwarenessPrograms;
