import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  ChevronRight,
  Calendar,
  ArrowRight,
  Leaf,
  Flower2,
  Apple,
  Users,
  Tent,
  MapPin,
  Clock,
  List,
  ShieldCheck,
  ShoppingBag,
  Coins,
  MessageCircle,
  Link2,
  Activity,
  Phone
} from 'lucide-react';
import './WellnessCamps.css';

// High-resolution image assets extracted from reference screenshot
import heroCampsGroupImg from '../assets/images/wellness-camps/hero-camps-group.png';
import introCampsSessionImg from '../assets/images/wellness-camps/intro-camps-session.png';
import cardOneDayYogaImg from '../assets/images/wellness-camps/card-camps-oneday-yoga.png';
import cardThemeHerbsImg from '../assets/images/wellness-camps/card-camps-theme-herbs.png';
import cardMeditationWomanImg from '../assets/images/wellness-camps/card-camps-meditation-woman.png';
import cardShirodharaImg from '../assets/images/wellness-camps/card-camps-shirodhara.png';
import cardNutritionBowlImg from '../assets/images/wellness-camps/card-camps-nutrition-bowl.png';
import cardGroupWalkingImg from '../assets/images/wellness-camps/card-camps-group-walking.png';
import modulePavilionImg from '../assets/images/wellness-camps/module-camps-pavilion.png';
import ctaMortarImg from '../assets/images/wellness-camps/cta-camps-mortar.png';
import ctaSunsetImg from '../assets/images/wellness-camps/cta-camps-sunset.png';

function WellnessCamps() {
  const campCards = [
    {
      img: cardOneDayYogaImg,
      icon: <Calendar size={22} className="camps-card-icon" />,
      title: 'One-Day Wellness Camps',
      content:
        'A one-day format can introduce participants to yoga, relaxation, lifestyle education, mindful nutrition and selected naturopathy experiences without requiring a long stay. Each event page should clearly show the schedule, inclusions, eligibility, location and timing.'
    },
    {
      img: cardThemeHerbsImg,
      icon: <Leaf size={22} className="camps-card-icon" />,
      title: 'Special Theme Camps',
      content:
        'RBN can organise focused camps around lifestyle wellness, relaxation, healthy routines, yoga, nutrition awareness or other professionally appropriate themes. Avoid naming a camp as a guaranteed disease-reversal event.'
    },
    {
      img: cardMeditationWomanImg,
      icon: <Flower2 size={22} className="camps-card-icon" />,
      title: 'Yoga & Meditation Sessions',
      content:
        'Guided movement, breathing and meditation can provide a practical experience participants can continue at home. Sessions should be adapted to the group and relevant physical limitations.'
    },
    {
      img: cardShirodharaImg,
      icon: <Leaf size={22} className="camps-card-icon" />,
      title: 'Naturopathy Experiences',
      content:
        'Selected natural therapies may be included depending on the venue, camp format and participant suitability. RBN should communicate whether individual assessment is required before participation.'
    },
    {
      img: cardNutritionBowlImg,
      icon: <Apple size={22} className="camps-card-icon" />,
      title: 'Nutrition & Lifestyle Education',
      content:
        'Short educational sessions can help participants understand everyday food, hydration, sleep, movement and stress-management habits. Practical take-home guidance is more valuable than overwhelming participants with restrictive rules.'
    },
    {
      img: cardGroupWalkingImg,
      icon: <Users size={22} className="camps-card-icon" />,
      title: 'Who Can Attend?',
      content:
        'Eligibility should be defined for each camp. People with significant medical conditions, pregnancy, mobility limitations or other concerns may need to speak with the team before registering, especially when the program includes heat, fasting, intensive movement or other physically demanding activities.'
    }
  ];

  return (
    <div className="camps-page">
      <div className="container">
        {/* ==================================================================
            BREADCRUMB
            ================================================================== */}
        <nav className="camps-breadcrumb-bar" aria-label="Breadcrumb">
          <ol className="camps-breadcrumb-list">
            <li className="camps-breadcrumb-item">
              <Link to="/">
                <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="camps-breadcrumb-separator">
              <ChevronRight size={14} />
            </li>
            <li className="camps-breadcrumb-item">
              <span className="camps-breadcrumb-current" aria-current="page">
                Wellness Camps
              </span>
            </li>
          </ol>
        </nav>

        {/* ==================================================================
            HERO SECTION
            ================================================================== */}
        <section className="camps-hero-section">
          <div className="camps-hero-grid">
            <div className="camps-hero-content">
              <h1 className="camps-hero-title">
                Wellness Camps<br />
                in Madurai
              </h1>

              {/* Decorative Gold Leaf Underline */}
              <div className="camps-hero-divider" aria-hidden="true">
                <Leaf size={18} />
              </div>

              <Link to="/book-consultation" className="camps-hero-cta">
                <Calendar size={18} />
                <span>Book a Consultation &rarr;</span>
              </Link>
            </div>

            <div className="camps-hero-image-wrap">
              <div className="camps-hero-frame">
                <img
                  src={heroCampsGroupImg}
                  alt="Wellness Camps in Madurai - Outdoor Meditation Group"
                  className="camps-hero-img"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 1: INTRODUCTION (Take Focused Time for Your Wellbeing)
            ================================================================== */}
        <section className="camps-intro-section">
          <div className="camps-intro-grid">
            <div className="camps-intro-text-wrap">
              <div className="camps-section-header">
                <Leaf size={22} className="camps-section-icon" />
                <h2 className="camps-section-title">Take Focused Time for Your Wellbeing</h2>
                <div className="camps-section-gold-line" aria-hidden="true"></div>
              </div>
              <p className="camps-section-text">
                A wellness camp creates a dedicated space to step away from routine and experience healthier practices in
                a guided environment. RBN's camps can combine education with practical activities so participants do
                more than simply listen to a health talk.
              </p>
            </div>

            <div className="camps-intro-image-wrap">
              <div className="camps-pill-frame">
                <img
                  src={introCampsSessionImg}
                  alt="Wellness Camp Educational Session with Practitioner"
                  className="camps-pill-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 2: WELLNESS CAMP CARDS (6 Cards in 2 Columns x 3 Rows)
            ================================================================== */}
        <section className="camps-cards-section">
          <div className="camps-cards-grid">
            {campCards.map((card, idx) => (
              <div key={idx} className="camps-service-card">
                <div className="camps-service-card-image-wrap">
                  <img src={card.img} alt={card.title} className="camps-service-card-img" loading="lazy" />
                </div>
                <div className="camps-service-card-body">
                  <div className="camps-service-card-header">
                    {card.icon}
                    <h3 className="camps-service-card-title">{card.title}</h3>
                  </div>
                  <p className="camps-service-card-text">{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: UPCOMING CAMP MODULE
            ================================================================== */}
        <section className="camps-module-section">
          <div className="camps-module-container">
            <div className="camps-module-header">
              <Calendar size={22} className="camps-module-icon" />
              <h2 className="camps-module-title">Upcoming Camp Module</h2>
              <div className="camps-module-gold-line" aria-hidden="true"></div>
            </div>

            <div className="camps-module-grid">
              <div className="camps-module-image-wrap">
                <img
                  src={modulePavilionImg}
                  alt="Outdoor Wellness Camp Venue with Pavilion"
                  className="camps-module-img"
                  loading="lazy"
                />
              </div>

              <div className="camps-module-info-panel">
                <div className="camps-info-column">
                  <div className="camps-info-item">
                    <Tent size={18} className="camps-info-icon" />
                    <span>Camp title and theme</span>
                  </div>
                  <div className="camps-info-item">
                    <Calendar size={18} className="camps-info-icon" />
                    <span>Date and reporting time</span>
                  </div>
                  <div className="camps-info-item">
                    <MapPin size={18} className="camps-info-icon" />
                    <span>Venue and map</span>
                  </div>
                  <div className="camps-info-item">
                    <Clock size={18} className="camps-info-icon" />
                    <span>Duration</span>
                  </div>
                </div>

                <div className="camps-info-column">
                  <div className="camps-info-item">
                    <List size={18} className="camps-info-icon" />
                    <span>Program schedule</span>
                  </div>
                  <div className="camps-info-item">
                    <Leaf size={18} className="camps-info-icon" />
                    <span>Activities included</span>
                  </div>
                  <div className="camps-info-item">
                    <ShieldCheck size={18} className="camps-info-icon" />
                    <span>Eligibility / precautions</span>
                  </div>
                  <div className="camps-info-item">
                    <ShoppingBag size={18} className="camps-info-icon" />
                    <span>What to bring</span>
                  </div>
                  <div className="camps-info-item">
                    <Coins size={18} className="camps-info-icon" />
                    <span>Fee, if applicable</span>
                  </div>
                  <div className="camps-info-item">
                    <MessageCircle size={18} className="camps-info-icon" />
                    <span>Registration / WhatsApp CTA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 4: UPCOMING CAMPS CTA BANNER
            ================================================================== */}
        <section className="camps-banner-section">
          <div className="camps-full-banner">
            <div className="camps-banner-left-wrap">
              <img
                src={ctaMortarImg}
                alt="Ayurvedic Herbal Mortar and Jasmine Flowers"
                className="camps-banner-thumb-img"
                loading="lazy"
              />
            </div>

            <div className="camps-banner-divider" aria-hidden="true"></div>

            <div className="camps-banner-center">
              <h3 className="camps-banner-heading">
                View or Enquire About<br />
                Upcoming Camps
              </h3>

              <Link
                to="/book-consultation"
                className="camps-banner-arrow-btn"
                aria-label="View or Enquire About Upcoming Camps"
              >
                <ArrowRight size={22} />
              </Link>
            </div>

            <div className="camps-banner-right-wrap">
              <img
                src={ctaSunsetImg}
                alt="Meditation in Nature at Sunset"
                className="camps-banner-thumb-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 5: RECOMMENDED INTERNAL LINKS (4 Buttons)
            ================================================================== */}
        <section className="camps-links-section">
          <div className="camps-links-header">
            <div className="camps-links-line" aria-hidden="true"></div>
            <h3 className="camps-links-title">
              <Link2 size={20} className="camps-links-icon" />
              <span>Recommended Internal Links</span>
            </h3>
            <div className="camps-links-line" aria-hidden="true"></div>
          </div>

          <div className="camps-links-row">
            <Link to="/metabolic-wellness" className="camps-link-pill">
              <Activity size={16} className="camps-link-pill-icon" />
              <span>Metabolic Wellness &rarr;</span>
            </Link>
            <Link to="/gut-health-detox" className="camps-link-pill">
              <Leaf size={16} className="camps-link-pill-icon" />
              <span>Gut Health & Detox &rarr;</span>
            </Link>
            <Link to="/yoga-meditation" className="camps-link-pill">
              <Flower2 size={16} className="camps-link-pill-icon" />
              <span>Yoga & Meditation &rarr;</span>
            </Link>
            <Link to="/contact" className="camps-link-pill">
              <Phone size={16} className="camps-link-pill-icon" />
              <span>Contact &rarr;</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WellnessCamps;
