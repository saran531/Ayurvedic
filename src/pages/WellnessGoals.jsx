import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  ChevronRight,
  Calendar,
  ArrowRight,
  Leaf,
  Activity,
  Apple,
  Heart,
  ShieldCheck,
  Mountain,
  Link2,
  Flower2,
  Phone
} from 'lucide-react';
import './WellnessGoals.css';

// High-resolution image assets extracted from reference screenshot
import heroGoalsWomanImg from '../assets/images/wellness-goals/hero-goals-woman.png';
import cardHabitsYogaImg from '../assets/images/wellness-goals/card-habits-yoga.png';
import cardMetabolicWalkingImg from '../assets/images/wellness-goals/card-metabolic-walking.png';
import cardGutBowlImg from '../assets/images/wellness-goals/card-gut-bowl.png';
import cardTherapiesHerbsImg from '../assets/images/wellness-goals/card-therapies-herbs.png';
import cardRelaxationWomanImg from '../assets/images/wellness-goals/card-relaxation-woman.png';
import cardOzoneConsultImg from '../assets/images/wellness-goals/card-ozone-consult.png';
import sectionMountainRetreatImg from '../assets/images/wellness-goals/section-mountain-retreat.png';
import ctaGoalsMortarImg from '../assets/images/wellness-goals/cta-goals-mortar.png';

function WellnessGoals() {
  const goalCards = [
    {
      img: cardHabitsYogaImg,
      icon: <Leaf size={18} />,
      title: (
        <>
          I Want to Build<br />
          Healthier Daily Habits
        </>
      ),
      content:
        'If your main goal is to improve routine, start with Lifestyle Modification. This pathway looks at nutrition, movement, sleep, stress, hydration and consistency and can connect you with other appropriate RBN services.',
      buttons: [{ label: 'Lifestyle Modification', path: '/lifestyle-modification' }]
    },
    {
      img: cardMetabolicWalkingImg,
      icon: <Activity size={18} />,
      title: (
        <>
          I Want Support for<br />
          Metabolic Wellbeing
        </>
      ),
      content:
        'Explore the Metabolic Wellness Program for a structured lifestyle-focused approach involving food habits, activity, sleep, stress and sustainable routines. Existing medical conditions still require appropriate clinical care.',
      buttons: [{ label: 'Metabolic Wellness Program', path: '/metabolic-wellness' }]
    },
    {
      img: cardGutBowlImg,
      icon: <Apple size={18} />,
      title: (
        <>
          I Want to Focus on<br />
          Digestive & Gut Wellness
        </>
      ),
      content:
        'The Gut Health & Detox Wellness Program focuses on nutrition, hydration, sleep, stress and healthier routines. Persistent or concerning digestive symptoms should be medically evaluated.',
      buttons: [{ label: 'Gut Health & Detox Wellness Program', path: '/gut-health-detox' }]
    },
    {
      img: cardTherapiesHerbsImg,
      icon: <Leaf size={18} />,
      title: (
        <>
          I Want Natural<br />
          Wellness Therapies
        </>
      ),
      content:
        'Explore Naturopathy and Hydrotherapy & Natural Therapies for information about mud applications, water-based therapies, steam, hip bath, plantain leaf bath and related practices.',
      buttons: [
        { label: 'Naturopathy', path: '/naturopathy' },
        { label: 'Hydrotherapy & Natural Therapies', path: '/hydrotherapy-natural-therapies' }
      ]
    },
    {
      img: cardRelaxationWomanImg,
      icon: <Heart size={18} />,
      title: (
        <>
          I Want More<br />
          Relaxation
        </>
      ),
      content:
        'Yoga & Meditation and Shirodhara & Rejuvenation are the most relevant starting points for people primarily interested in relaxation-oriented wellness experiences.',
      buttons: [
        { label: 'Yoga & Meditation', path: '/yoga-meditation' },
        { label: 'Shirodhara & Rejuvenation', path: '/shirodhara-rejuvenation' }
      ]
    },
    {
      img: cardOzoneConsultImg,
      icon: <ShieldCheck size={18} />,
      title: (
        <>
          I Am Interested in<br />
          Ozone-Based Wellness
        </>
      ),
      content:
        'Read the Ozone Therapy page first and book a consultation rather than selecting a procedure solely from online information.',
      buttons: [{ label: 'Ozone Therapy', path: '/ozone-therapy' }]
    }
  ];

  return (
    <div className="goals-page">
      <div className="container">
        {/* ==================================================================
            BREADCRUMB
            ================================================================== */}
        <nav className="goals-breadcrumb-bar" aria-label="Breadcrumb">
          <ol className="goals-breadcrumb-list">
            <li className="goals-breadcrumb-item">
              <Link to="/">
                <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="goals-breadcrumb-separator">
              <ChevronRight size={14} />
            </li>
            <li className="goals-breadcrumb-item">
              <span className="goals-breadcrumb-current" aria-current="page">
                Wellness Goals
              </span>
            </li>
          </ol>
        </nav>

        {/* ==================================================================
            HERO SECTION
            ================================================================== */}
        <section className="goals-hero-section">
          <div className="goals-hero-grid">
            <div className="goals-hero-content">
              <h1 className="goals-hero-title">
                Start With Your Goal,<br />
                Not a Therapy Menu
              </h1>

              {/* Decorative Gold Leaf Underline */}
              <div className="goals-hero-divider" aria-hidden="true">
                <Leaf size={18} />
              </div>

              <p className="goals-hero-desc">
                It is normal to be unsure which wellness service to choose. A person may know that their routine feels
                unbalanced, that they want more structured support or that they are interested in natural wellness
                without knowing whether they need yoga, naturopathy, lifestyle consultation or another service. This
                page helps visitors navigate by goal while keeping the final decision consultation-led.
              </p>

              <Link to="/book-consultation" className="goals-hero-cta">
                <Calendar size={18} />
                <span>Book a Consultation &rarr;</span>
              </Link>
            </div>

            <div className="goals-hero-image-wrap">
              <div className="goals-hero-frame">
                <img
                  src={heroGoalsWomanImg}
                  alt="Woman Reviewing Her Goals Beside My Wellness Goals Checklist Board"
                  className="goals-hero-img"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 1: EXPLORE YOUR WELLNESS GOALS (6 Cards in 3x2 Grid)
            ================================================================== */}
        <section className="goals-explore-section">
          <div className="goals-section-header">
            <div className="goals-section-line" aria-hidden="true"></div>
            <h2 className="goals-section-title">
              <Leaf size={24} className="goals-section-icon" />
              <span>Explore Your Wellness Goals</span>
            </h2>
            <div className="goals-section-line" aria-hidden="true"></div>
          </div>

          <div className="goals-cards-grid">
            {goalCards.map((card, idx) => (
              <div key={idx} className="goals-card">
                <div className="goals-card-image-wrap">
                  <img src={card.img} alt="" className="goals-card-img" loading="lazy" />
                  <div className="goals-card-badge">{card.icon}</div>
                </div>
                <div className="goals-card-body">
                  <h3 className="goals-card-title">{card.title}</h3>
                  <p className="goals-card-desc">{card.content}</p>
                  <div className="goals-card-actions">
                    {card.buttons.map((btn, bIdx) => (
                      <Link key={bIdx} to={btn.path} className="goals-card-pill-btn">
                        <span>{btn.label} &rarr;</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            SECTION 2: IMMERSIVE WELLNESS EXPERIENCE SECTION
            ================================================================== */}
        <section className="goals-immersive-section">
          <div className="goals-immersive-card">
            <div className="goals-immersive-image-wrap">
              <img
                src={sectionMountainRetreatImg}
                alt="People Walking Through Scenic Mountain and Forest Retreat"
                className="goals-immersive-img"
                loading="lazy"
              />
            </div>

            <div className="goals-immersive-content">
              <div className="goals-immersive-header">
                <div className="goals-immersive-icon-bubble">
                  <Mountain size={22} />
                </div>
                <h3 className="goals-immersive-title">I Want an Immersive Wellness Experience</h3>
              </div>
              <p className="goals-immersive-desc">
                Explore Wellness Camps or the Sirumalai Wellness Retreat for structured experiences that combine
                education, movement, relaxation and selected wellness activities.
              </p>
              <div className="goals-immersive-actions">
                <Link to="/wellness-camps" className="goals-card-pill-btn">
                  <span>Wellness Camps &rarr;</span>
                </Link>
                <Link to="/sirumalai-retreat" className="goals-card-pill-btn">
                  <span>Sirumalai Wellness Retreat &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: MAIN CTA BANNER
            ================================================================== */}
        <section className="goals-banner-section">
          <div className="goals-full-banner">
            <div className="goals-banner-left-wrap">
              <img
                src={ctaGoalsMortarImg}
                alt="Herbal Mortar and Pestle with Fresh Leaves"
                className="goals-banner-thumb-img"
                loading="lazy"
              />
            </div>

            <div className="goals-banner-divider" aria-hidden="true"></div>

            <div className="goals-banner-center">
              <h3 className="goals-banner-heading">I Still Don’t Know Where to Start</h3>
              <p className="goals-banner-text">
                Book a general consultation and explain your goals. RBN can guide you toward the most appropriate next
                conversation without requiring you to diagnose yourself or choose a therapy in advance.
              </p>
            </div>

            <Link
              to="/book-consultation"
              className="goals-banner-cta-btn"
              aria-label="Help Me Choose Starting Point"
            >
              <Calendar size={22} />
              <div>
                Help Me Choose<br />
                Starting Point
              </div>
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* ==================================================================
            SECTION 4: RECOMMENDED INTERNAL LINKS (5 Buttons)
            ================================================================== */}
        <section className="goals-links-section">
          <div className="goals-links-header">
            <div className="goals-links-line" aria-hidden="true"></div>
            <h3 className="goals-links-title">
              <Link2 size={20} className="goals-links-icon" />
              <span>Recommended Internal Links</span>
            </h3>
            <div className="goals-links-line" aria-hidden="true"></div>
          </div>

          <div className="goals-links-row">
            <Link to="/lifestyle-modification" className="goals-link-pill">
              <Leaf size={16} className="goals-link-pill-icon" />
              <span>Lifestyle Modification &rarr;</span>
            </Link>
            <Link to="/naturopathy" className="goals-link-pill">
              <Flower2 size={16} className="goals-link-pill-icon" />
              <span>Naturopathy &rarr;</span>
            </Link>
            <Link to="/metabolic-wellness" className="goals-link-pill">
              <Activity size={16} className="goals-link-pill-icon" />
              <span>Metabolic Wellness &rarr;</span>
            </Link>
            <Link to="/gut-health-detox" className="goals-link-pill">
              <Apple size={16} className="goals-link-pill-icon" />
              <span>Gut Wellness &rarr;</span>
            </Link>
            <Link to="/contact" className="goals-link-pill">
              <Phone size={16} className="goals-link-pill-icon" />
              <span>Contact &rarr;</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WellnessGoals;
