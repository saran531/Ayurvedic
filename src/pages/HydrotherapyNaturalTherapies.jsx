import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  ChevronRight,
  Calendar,
  ArrowRight,
  Leaf,
  Droplets,
  Sparkles,
  Wind,
  Bath,
  HelpCircle,
  Plus,
  Minus,
  Link2,
  Users,
  Phone
} from 'lucide-react';
import './HydrotherapyNaturalTherapies.css';

// High-resolution image assets extracted from reference screenshot
import heroHydrotherapyImg from '../assets/images/hydrotherapy-natural-therapies/hero-hydrotherapy.png';
import natureHerbsImg from '../assets/images/hydrotherapy-natural-therapies/nature-based-herbs.png';
import cardHydrotherapyImg from '../assets/images/hydrotherapy-natural-therapies/card-hydrotherapy.png';
import cardMudTherapyImg from '../assets/images/hydrotherapy-natural-therapies/card-mud-therapy.png';
import cardPlantainLeafImg from '../assets/images/hydrotherapy-natural-therapies/card-plantain-leaf.png';
import cardSteamBathImg from '../assets/images/hydrotherapy-natural-therapies/card-steam-bath.png';
import cardHipBathImg from '../assets/images/hydrotherapy-natural-therapies/card-hip-bath.png';
import howRbnChoosesImg from '../assets/images/hydrotherapy-natural-therapies/how-rbn-chooses.png';
import ctaMortarHerbsImg from '../assets/images/hydrotherapy-natural-therapies/cta-mortar-herbs.png';

function HydrotherapyNaturalTherapies() {
  const [activeFaq, setActiveFaq] = useState(-1);

  const faqData = [
    {
      question: 'Can I combine several natural therapies in one day?',
      answer:
        'Certain gentle therapies can be harmoniously paired, such as mud applications followed by hydrotherapy or a steam session. However, scheduling is customized based on individual vitality, cardiovascular tolerance, and clinical assessment to prevent fatigue.'
    },
    {
      question: 'Are natural therapies risk-free?',
      answer:
        'While natural and non-invasive, therapies involving intense heat, cold, or immersion carry physiological effects. Individuals with hypertension, skin allergies, pregnancy, or cardiovascular conditions must undergo prior clinical screening.'
    }
  ];

  const therapyCards = [
    {
      img: cardHydrotherapyImg,
      icon: <Droplets size={20} className="hydro-therapy-card-icon" />,
      title: 'Hydrotherapy',
      content:
        'Hydrotherapy refers to selected uses of water in a wellness or therapeutic context. Temperature, duration and method can change the physical experience considerably. The practitioner should select the approach based on the individual and explain what the session involves.'
    },
    {
      img: cardMudTherapyImg,
      icon: <Sparkles size={20} className="hydro-therapy-card-icon" />,
      title: 'Mud Therapy / Herbal Mud Packs',
      content:
        'Mud applications are used within some naturopathy traditions as a nature-based wellness practice. RBN may use selected mud or herbal mud packs depending on the program. Skin condition, allergies and individual comfort should be considered.'
    },
    {
      img: cardPlantainLeafImg,
      icon: <Leaf size={20} className="hydro-therapy-card-icon" />,
      title: 'Plantain Leaf Bath',
      content:
        'Plantain leaf bath is a traditional nature-cure practice that may be included in selected RBN programs. Visitors should receive clear preparation instructions and understand that heat-related or intensive practices may not be suitable for everyone.'
    },
    {
      img: cardSteamBathImg,
      icon: <Wind size={20} className="hydro-therapy-card-icon" />,
      title: 'Steam Bath',
      content:
        'Steam bathing exposes the body to a warm, humid environment and is commonly used for relaxation. People with certain cardiovascular, heat-sensitivity or other medical concerns should discuss suitability before participating.'
    },
    {
      img: cardHipBathImg,
      icon: <Bath size={20} className="hydro-therapy-card-icon" />,
      title: 'Hip Bath',
      content:
        'A hip bath is a traditional water-based practice in which the lower trunk is exposed to water under controlled conditions. The exact method should be selected and supervised by the practitioner.'
    }
  ];

  return (
    <div className="hydro-page">
      <div className="container">
        {/* ==================================================================
            SECTION 1: BREADCRUMB
            ================================================================== */}
        <nav className="hydro-breadcrumb-bar" aria-label="Breadcrumb">
          <ol className="hydro-breadcrumb-list">
            <li className="hydro-breadcrumb-item">
              <Link to="/">
                <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="hydro-breadcrumb-separator">
              <ChevronRight size={14} />
            </li>
            <li className="hydro-breadcrumb-item">
              <span className="hydro-breadcrumb-current" aria-current="page">
                Hydrotherapy & Natural Therapies
              </span>
            </li>
          </ol>
        </nav>

        {/* ==================================================================
            SECTION 2: HERO SECTION
            ================================================================== */}
        <section className="hydro-hero-section">
          <div className="hydro-hero-grid">
            <div className="hydro-hero-content">
              <h1 className="hydro-hero-title">
                Hydrotherapy &<br />
                Natural Therapies
              </h1>
              <div className="hydro-hero-divider">
                <Leaf size={18} />
              </div>
              <Link to="/book-consultation" className="hydro-hero-cta">
                <Calendar size={17} />
                <span>Book a Consultation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hydro-hero-image-wrap">
              <div className="hydro-hero-frame">
                <img
                  src={heroHydrotherapyImg}
                  alt="Therapeutic natural water flowing into pool with white flowers and wellness towel"
                  className="hydro-hero-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: NATURE-BASED THERAPIES AT RBN
            ================================================================== */}
        <section className="hydro-nature-section">
          <div className="hydro-nature-grid">
            <div className="hydro-nature-content">
              <div className="hydro-section-header">
                <h2 className="hydro-section-title">
                  <Leaf size={22} className="hydro-section-title-icon" />
                  <span>Nature-Based Therapies at RBN</span>
                </h2>
                <span className="hydro-section-gold-line"></span>
              </div>
              <div className="hydro-nature-body">
                <p className="hydro-nature-text">
                  Natural therapies are often associated with simplicity, but they still need appropriate selection and supervision.
                </p>
                <p className="hydro-nature-text">
                  RBN’s natural therapy services should be presented as structured wellness practices used within a broader naturopathy plan, not as automatic treatments for every health problem.
                </p>
              </div>
            </div>
            <div className="hydro-nature-visual">
              <div className="hydro-nature-frame">
                <img
                  src={natureHerbsImg}
                  alt="Wooden bowl with herbal powder, pink hibiscus flower, rolled towel and green leaves"
                  className="hydro-nature-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 4: NATURAL THERAPY SERVICE CARDS (5 Cards)
            ================================================================== */}
        <section className="hydro-cards-section">
          <div className="hydro-cards-grid">
            {therapyCards.map((card, idx) => (
              <div key={idx} className="hydro-therapy-card">
                <div className="hydro-therapy-card-image-wrap">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="hydro-therapy-card-img"
                  />
                </div>
                <div className="hydro-therapy-card-body">
                  <div className="hydro-therapy-card-header">
                    {card.icon}
                    <h3 className="hydro-therapy-card-title">{card.title}</h3>
                  </div>
                  <p className="hydro-therapy-card-text">{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            SECTION 5: HOW RBN CHOOSES A THERAPY
            ================================================================== */}
        <section className="hydro-chooses-section">
          <div className="hydro-chooses-grid">
            <div className="hydro-chooses-image-wrap">
              <div className="hydro-chooses-frame">
                <img
                  src={howRbnChoosesImg}
                  alt="Doctor consulting with visitor regarding individual health profile"
                  className="hydro-chooses-img"
                />
              </div>
            </div>
            <div className="hydro-chooses-content">
              <div className="hydro-section-header">
                <h2 className="hydro-section-title">
                  <Calendar size={22} color="#D49A00" />
                  <span>How RBN Chooses a Therapy</span>
                </h2>
              </div>
              <p className="hydro-chooses-text">
                The selection should begin with the purpose of the visit, relevant health information and the person's tolerance and preferences. A therapy should not be chosen only because it is popular or natural.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 6: FAQ & DISCUSS NATURAL THERAPY OPTIONS CTA
            ================================================================== */}
        <section className="hydro-faq-cta-section">
          <div className="hydro-faq-cta-grid">
            {/* FAQ Column */}
            <div className="hydro-faq-column">
              <div className="hydro-faq-header">
                <h2 className="hydro-faq-title">
                  <HelpCircle size={22} className="hydro-faq-title-icon" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <span className="hydro-faq-header-line"></span>
              </div>

              <div className="hydro-faq-list">
                {faqData.map((item, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`hydro-faq-item ${isOpen ? 'active' : ''}`}
                    >
                      <button
                        type="button"
                        className="hydro-faq-question"
                        onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <span className="hydro-faq-toggle-icon">
                          {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="hydro-faq-answer">{item.answer}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Column */}
            <div className="hydro-cta-column">
              <div className="hydro-cta-banner-card">
                <div className="hydro-cta-mortar-wrap">
                  <img
                    src={ctaMortarHerbsImg}
                    alt="Ayurvedic mortar and fresh herbal foliage"
                    className="hydro-cta-mortar-img"
                  />
                </div>
                <div className="hydro-cta-text-wrap">
                  <h3 className="hydro-cta-heading">
                    Discuss<br />
                    Natural Therapy<br />
                    Options
                  </h3>
                </div>
                <Link
                  to="/book-consultation"
                  className="hydro-cta-arrow-btn"
                  aria-label="Discuss Natural Therapy Options"
                >
                  <ArrowRight size={22} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 7: RECOMMENDED INTERNAL LINKS (3 Buttons)
            ================================================================== */}
        <section className="hydro-links-section">
          <div className="hydro-links-header">
            <span className="hydro-links-line"></span>
            <h2 className="hydro-links-title">
              <Link2 size={20} className="hydro-links-icon" />
              <span>Recommended Internal Links</span>
            </h2>
            <span className="hydro-links-line"></span>
          </div>

          <div className="hydro-links-row">
            <Link to="/naturopathy" className="hydro-link-pill">
              <Leaf size={18} className="hydro-link-pill-icon" />
              <span>Naturopathy</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/wellness-camps" className="hydro-link-pill">
              <Users size={18} className="hydro-link-pill-icon gold" />
              <span>Wellness Camps</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="hydro-link-pill">
              <Phone size={18} className="hydro-link-pill-icon" />
              <span>Contact</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HydrotherapyNaturalTherapies;
