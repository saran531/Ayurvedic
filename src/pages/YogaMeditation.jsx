import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  ChevronRight,
  Calendar,
  ArrowRight,
  Leaf,
  Flower2,
  Wind,
  Sparkles,
  Sun,
  Activity,
  Apple,
  TreePine,
  Users,
  HelpCircle,
  Plus,
  Minus,
  Link2,
  HeartPulse
} from 'lucide-react';
import './YogaMeditation.css';

// High-resolution image assets extracted from reference screenshot
import heroYogaImg from '../assets/images/yoga-meditation/hero-yoga-meditation.png';
import everydayYogaImg from '../assets/images/yoga-meditation/everyday-wellness-yoga.png';
import meditationImg from '../assets/images/yoga-meditation/meditation-relaxation.png';
import cardFoundationalImg from '../assets/images/yoga-meditation/program-foundational-yoga.png';
import cardBreathingImg from '../assets/images/yoga-meditation/program-breathing.png';
import cardGuidedImg from '../assets/images/yoga-meditation/program-guided-meditation.png';
import cardMindfulnessImg from '../assets/images/yoga-meditation/program-mindfulness.png';
import cardGentleImg from '../assets/images/yoga-meditation/program-gentle-movement.png';
import cardLifestyleImg from '../assets/images/yoga-meditation/program-lifestyle.png';
import cardRetreatImg from '../assets/images/yoga-meditation/program-retreat-camps.png';
import startingPointImg from '../assets/images/yoga-meditation/personalised-starting-point.png';
import bannerStonesImg from '../assets/images/yoga-meditation/yoga-banner-stones.png';
import ctaLotusImg from '../assets/images/yoga-meditation/cta-lotus.png';

function YogaMeditation() {
  const [activeFaq, setActiveFaq] = useState(-1);

  const faqData = [
    {
      question: 'Do I need previous yoga experience?',
      answer:
        'No prior experience is necessary. Our certified yoga instructors adapt sessions to accommodate complete beginners as well as experienced practitioners, focusing on foundational alignment, breath awareness, and comfort.'
    },
    {
      question: 'Is meditation the same as yoga?',
      answer:
        'Meditation (Dhyana) is an integral limb of classical yoga. While yoga asanas focus on body postures and pranayama on breath regulation, meditation focuses on training mindful awareness and mental stillness.'
    },
    {
      question: 'Can I join if I have a health condition?',
      answer:
        'Yes, provided you share relevant medical history, joint pain, or physical limitations beforehand. Our practitioners provide customized modifications and recommend gentle restorative practices tailored to your comfort and safety.'
    }
  ];

  const programCards = [
    {
      img: cardFoundationalImg,
      icon: <Flower2 size={20} className="yoga-program-card-icon" />,
      title: 'Foundational yoga practices'
    },
    {
      img: cardBreathingImg,
      icon: <Wind size={20} className="yoga-program-card-icon" />,
      title: 'Breathing and relaxation practices'
    },
    {
      img: cardGuidedImg,
      icon: <Sparkles size={20} className="yoga-program-card-icon" />,
      title: 'Guided meditation'
    },
    {
      img: cardMindfulnessImg,
      icon: <Sun size={20} className="yoga-program-card-icon" />,
      title: 'Mindfulness-oriented sessions'
    },
    {
      img: cardGentleImg,
      icon: <Activity size={20} className="yoga-program-card-icon" />,
      title: 'Gentle movement according to ability'
    },
    {
      img: cardLifestyleImg,
      icon: <Apple size={20} className="yoga-program-card-icon" />,
      title: 'Lifestyle-awareness discussions'
    }
  ];

  return (
    <div className="yoga-page">
      <div className="container">
        {/* ==================================================================
            SECTION 1: BREADCRUMB
            ================================================================== */}
        <nav className="yoga-breadcrumb-bar" aria-label="Breadcrumb">
          <ol className="yoga-breadcrumb-list">
            <li className="yoga-breadcrumb-item">
              <Link to="/">
                <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="yoga-breadcrumb-separator">
              <ChevronRight size={14} />
            </li>
            <li className="yoga-breadcrumb-item">
              <span className="yoga-breadcrumb-current" aria-current="page">
                Yoga & Meditation
              </span>
            </li>
          </ol>
        </nav>

        {/* ==================================================================
            SECTION 2: HERO SECTION
            ================================================================== */}
        <section className="yoga-hero-section">
          <div className="yoga-hero-grid">
            <div className="yoga-hero-content">
              <h1 className="yoga-hero-title">
                Yoga & <span className="yoga-hero-title-accent">Meditation</span>
              </h1>
              <div className="yoga-hero-divider">
                <Leaf size={18} />
              </div>
              <Link to="/book-consultation" className="yoga-hero-cta">
                <Calendar size={17} />
                <span>Book a Consultation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="yoga-hero-image-wrap">
              <div className="yoga-hero-frame">
                <img
                  src={heroYogaImg}
                  alt="Woman in peaceful outdoor yoga meditation posture at RBN AYUSH Health Care"
                  className="yoga-hero-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: YOGA AS PART OF EVERYDAY WELLNESS
            ================================================================== */}
        <section className="yoga-everyday-section">
          <div className="yoga-everyday-grid">
            <div className="yoga-everyday-content">
              <div className="yoga-section-header">
                <h2 className="yoga-section-title">
                  <Leaf size={22} className="yoga-section-title-icon" />
                  <span>Yoga as Part of <span className="yoga-section-title-accent">Everyday Wellness</span></span>
                </h2>
                <span className="yoga-section-gold-line"></span>
              </div>
              <p className="yoga-everyday-text">
                Yoga can be approached as more than a fitness activity. Depending on the style and the individual's needs, a yoga session may bring together physical postures, controlled movement, breathing, relaxation and mindful attention. At RBN, yoga can form part of a broader wellness routine alongside lifestyle guidance and other appropriate services.
              </p>
            </div>
            <div className="yoga-everyday-visual">
              <div className="yoga-everyday-frame">
                <img
                  src={everydayYogaImg}
                  alt="Group practicing yoga asanas and controlled movement outdoors in nature"
                  className="yoga-everyday-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 4: MEDITATION & RELAXATION
            ================================================================== */}
        <section className="yoga-meditation-section">
          <div className="yoga-meditation-grid">
            <div className="yoga-meditation-image-wrap">
              <div className="yoga-meditation-pill-frame">
                <img
                  src={meditationImg}
                  alt="Woman experiencing mindful stillness and outdoor meditation at sunset"
                  className="yoga-meditation-img"
                />
              </div>
            </div>
            <div className="yoga-meditation-content">
              <div className="yoga-section-header">
                <h2 className="yoga-section-title">
                  <Flower2 size={22} className="yoga-section-title-icon" />
                  <span>Meditation & Relaxation</span>
                </h2>
                <span className="yoga-section-gold-line"></span>
              </div>
              <p className="yoga-meditation-text">
                Meditation practices encourage focused attention and intentional periods of mental stillness or observation. For many people, the practical value lies in creating regular time to slow down, notice patterns and develop a more consistent relaxation routine.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 5: PROGRAMS MAY INCLUDE (3x2 Grid + Centered Wide Card)
            ================================================================== */}
        <section className="yoga-programs-section">
          <div className="yoga-centered-title-wrap">
            <span className="yoga-centered-title-line"></span>
            <h2 className="yoga-centered-title">
              <span>Programs May Include</span>
            </h2>
            <span className="yoga-centered-title-line"></span>
          </div>

          <div className="yoga-programs-grid">
            {programCards.map((card, idx) => (
              <div key={idx} className="yoga-program-card">
                <div className="yoga-program-card-image-wrap">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="yoga-program-card-img"
                  />
                </div>
                <div className="yoga-program-card-body">
                  {card.icon}
                  <h3 className="yoga-program-card-title">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Wide Card */}
          <div className="yoga-program-wide-card-wrap">
            <div className="yoga-program-wide-card">
              <div className="yoga-program-wide-image-wrap">
                <img
                  src={cardRetreatImg}
                  alt="Sirumalai retreat cottages and nature wellness camps"
                  className="yoga-program-wide-img"
                />
              </div>
              <div className="yoga-program-wide-body">
                <TreePine size={22} className="yoga-program-card-icon" />
                <h3 className="yoga-program-wide-title">
                  Yoga sessions within wellness camps and Sirumalai retreats
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 6: A PERSONALISED STARTING POINT
            ================================================================== */}
        <section className="yoga-starting-section">
          <div className="yoga-starting-grid">
            <div className="yoga-starting-image-wrap">
              <div className="yoga-starting-pill-frame">
                <img
                  src={startingPointImg}
                  alt="Yoga instructor providing personalized posture adjustment and gentle guidance"
                  className="yoga-starting-img"
                />
              </div>
            </div>
            <div className="yoga-starting-content">
              <div className="yoga-section-header">
                <h2 className="yoga-section-title">
                  <Users size={22} className="yoga-section-title-icon" />
                  <span>A Personalised Starting Point</span>
                </h2>
              </div>
              <p className="yoga-starting-text">
                Age, mobility, pain, pregnancy, cardiovascular concerns, recent surgery and other health factors can affect which movements or breathing practices are appropriate. Participants should inform the instructor about relevant concerns and should not force postures or techniques beyond their ability.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 7: YOGA WITHIN RBN PROGRAMS BANNER
            ================================================================== */}
        <section className="yoga-rbn-banner-section">
          <div className="yoga-rbn-banner">
            <div className="yoga-rbn-icon-wrap">
              <Flower2 size={32} />
            </div>
            <h3 className="yoga-rbn-title">
              Yoga Within<br />
              RBN Programs
            </h3>
            <div className="yoga-rbn-divider"></div>
            <p className="yoga-rbn-text">
              Yoga can support RBN's metabolic wellness, lifestyle modification, gut wellness, camps and retreat programs by giving participants a structured movement and relaxation practice. The website should describe yoga as a component of wellness support rather than making disease-cure claims.
            </p>
            <div className="yoga-rbn-stones-wrap">
              <img
                src={bannerStonesImg}
                alt="Stacked zen pebbles with plumeria flower and vibrant leaves"
                className="yoga-rbn-stones-img"
              />
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 8: FAQ & ENQUIRE ABOUT YOGA & MEDITATION CTA
            ================================================================== */}
        <section className="yoga-faq-cta-section">
          <div className="yoga-faq-cta-grid">
            {/* FAQ Column */}
            <div className="yoga-faq-column">
              <div className="yoga-faq-header">
                <h2 className="yoga-faq-title">
                  <HelpCircle size={22} className="yoga-faq-title-icon" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <span className="yoga-faq-header-line"></span>
              </div>

              <div className="yoga-faq-list">
                {faqData.map((item, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`yoga-faq-item ${isOpen ? 'active' : ''}`}
                    >
                      <button
                        type="button"
                        className="yoga-faq-question"
                        onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <span className="yoga-faq-toggle-icon">
                          {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="yoga-faq-answer">{item.answer}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Column */}
            <div className="yoga-cta-column">
              <div className="yoga-cta-banner-card">
                <div className="yoga-cta-lotus-wrap">
                  <img
                    src={ctaLotusImg}
                    alt="Pink lotus blooming peacefully on water lily pad"
                    className="yoga-cta-lotus-img"
                  />
                </div>
                <div className="yoga-cta-text-wrap">
                  <h3 className="yoga-cta-heading">
                    Enquire About<br />
                    Yoga & Meditation
                  </h3>
                </div>
                <Link
                  to="/book-consultation"
                  className="yoga-cta-arrow-btn"
                  aria-label="Enquire About Yoga & Meditation"
                >
                  <ArrowRight size={22} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 9: RECOMMENDED INTERNAL LINKS (4 Buttons)
            ================================================================== */}
        <section className="yoga-links-section">
          <div className="yoga-links-header">
            <span className="yoga-links-line"></span>
            <h2 className="yoga-links-title">
              <Link2 size={20} className="yoga-links-icon" />
              <span>Recommended Internal Links</span>
            </h2>
            <span className="yoga-links-line"></span>
          </div>

          <div className="yoga-links-row">
            <Link to="/lifestyle-modification" className="yoga-link-pill">
              <Leaf size={18} className="yoga-link-pill-icon" />
              <span>Lifestyle Modification</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/metabolic-wellness" className="yoga-link-pill">
              <HeartPulse size={18} className="yoga-link-pill-icon" />
              <span>Metabolic Wellness</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/wellness-camps" className="yoga-link-pill">
              <Users size={18} className="yoga-link-pill-icon" />
              <span>Wellness Camps</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/sirumalai-retreat" className="yoga-link-pill">
              <TreePine size={18} className="yoga-link-pill-icon" />
              <span>Sirumalai Wellness Retreat</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default YogaMeditation;
