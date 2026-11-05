import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  ChevronRight,
  Leaf,
  Calendar,
  ArrowRight,
  Droplets,
  Heart,
  Sparkles,
  MessageSquare,
  ClipboardCheck,
  Search,
  Shield,
  HelpCircle,
  Sprout,
  Phone,
  Waves,
  Bath,
  Flower2,
  Users
} from 'lucide-react';
import './Naturopathy.css';

// Exact image assets extracted from reference screenshot
import heroNaturopathyImg from '../assets/images/naturopathy/hero-naturopathy.png';
import whatIsNaturopathyImg from '../assets/images/naturopathy/what-is-naturopathy.png';
import mudTherapyImg from '../assets/images/naturopathy/service-mud-therapy.png';
import hydrotherapyImg from '../assets/images/naturopathy/service-hydrotherapy.png';
import steamBathImg from '../assets/images/naturopathy/service-steam-bath.png';
import hipBathImg from '../assets/images/naturopathy/service-hip-bath.png';
import plantainLeafImg from '../assets/images/naturopathy/service-plantain-leaf.png';
import massageImg from '../assets/images/naturopathy/service-massage.png';
import kriyasJalanetiImg from '../assets/images/naturopathy/service-kriyas-jalaneti.png';
import lifestyleImg from '../assets/images/naturopathy/naturopathy-lifestyle.png';
import ctaStonesImg from '../assets/images/naturopathy/cta-stones-banner.png';

function Naturopathy() {
  const [activeFaq, setActiveFaq] = useState(-1);

  const faqData = [
    {
      question: 'Do I need a consultation before naturopathy therapy?',
      answer:
        'Yes. A consultation ensures the therapies selected match your current metabolic and physical condition, avoiding any contraindications and designing an individualized protocol.'
    },
    {
      question: 'Can naturopathy replace my prescribed medicines?',
      answer:
        'No. Naturopathy is offered as an integrated natural wellness discipline to build vitality and healthy habits, not as an unguided substitute for vital prescribed medicines.'
    },
    {
      question: 'Can naturopathy be combined with yoga?',
      answer:
        'Yes. Therapeutic yoga, pranayama, and naturopathic hydro/mud therapies work synergistically together to support physiological cleansing, circulation, and nervous system relaxation.'
    },
    {
      question: 'How do I know which naturopathy therapy is right for me?',
      answer:
        'During the consultation, our qualified practitioners evaluate your vital constitution, daily habits, and health goals to determine the most effective therapies for your body.'
    }
  ];

  return (
    <div className="naturopathy-page">
      <div className="container">
        {/* ==================================================================
            SECTION 1: BREADCRUMB
            ================================================================== */}
        <nav className="naturopathy-breadcrumb-bar" aria-label="Breadcrumb">
          <ol className="naturopathy-breadcrumb-list">
            <li className="naturopathy-breadcrumb-item">
              <Link to="/">
                <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="naturopathy-breadcrumb-separator">
              <ChevronRight size={14} />
            </li>
            <li className="naturopathy-breadcrumb-item">
              <span className="naturopathy-breadcrumb-current" aria-current="page">
                Naturopathy
              </span>
            </li>
          </ol>
        </nav>

        {/* ==================================================================
            SECTION 2: NATUROPATHY HERO
            ================================================================== */}
        <section className="naturopathy-hero-section">
          <div className="naturopathy-hero-grid">
            <div className="naturopathy-hero-content">
              <h1 className="naturopathy-hero-title">Naturopathy</h1>
              <div className="naturopathy-hero-decor">
                <Leaf size={22} />
              </div>
            </div>

            <div className="naturopathy-hero-image-wrap">
              <div className="naturopathy-hero-frame">
                <img
                  src={heroNaturopathyImg}
                  alt="Natural wellness ingredients, oils, and frangipani flower"
                  className="naturopathy-hero-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: WHAT IS NATUROPATHY?
            ================================================================== */}
        <section className="naturopathy-what-section">
          <div className="naturopathy-section-header">
            <Leaf size={22} className="naturopathy-header-leaf" />
            <h2 className="naturopathy-section-title">What Is Naturopathy?</h2>
            <span className="naturopathy-header-line"></span>
          </div>

          <div className="naturopathy-what-grid">
            <div className="naturopathy-what-image-wrap">
              <img
                src={whatIsNaturopathyImg}
                alt="Stacked black stones, turmeric spices, and green leaves"
                className="naturopathy-what-img"
              />
            </div>

            <div className="naturopathy-what-text">
              <p>
                Naturopathy is a broad wellness approach that emphasises natural practices, lifestyle
                habits and the relationship between everyday routines and wellbeing. At RBN AYUSH HEALTH
                CARE in Madurai, naturopathy is presented as part of an integrated wellness model rather
                than as a blanket replacement for necessary medical care.
              </p>
              <p>
                A naturopathy plan may draw on selected water-based therapies, mud applications, heat
                or steam, relaxation practices, massage, yoga-related practices and lifestyle guidance.
                The appropriate choice depends on the individual, the purpose of the visit and
                professional assessment.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 4: NATUROPATHY SERVICES AVAILABLE AT RBN
            ================================================================== */}
        <section className="naturopathy-services-section">
          <div className="naturopathy-section-header">
            <Leaf size={22} className="naturopathy-header-leaf" />
            <h2 className="naturopathy-section-title">Naturopathy Services Available at RBN</h2>
            <span className="naturopathy-header-line"></span>
          </div>

          {/* 6 Grid Cards */}
          <div className="services-cards-grid">
            {/* Card 1: Mud Therapy */}
            <div className="service-card">
              <div className="service-thumb-wrap">
                <img src={mudTherapyImg} alt="Mud Therapy and Herbal Mud Packs" className="service-thumb" />
              </div>
              <div className="service-info">
                <div className="service-title-wrap">
                  <Leaf size={16} className="service-title-icon" />
                  <h3 className="service-title">Mud Therapy / Herbal Mud Packs</h3>
                </div>
                <p className="service-desc">
                  Selected mud or herbal mud applications may be used as part of a naturopathy
                  wellness experience. The area of application, duration and suitability should be
                  determined by the practitioner.
                </p>
              </div>
            </div>

            {/* Card 2: Hydrotherapy */}
            <div className="service-card">
              <div className="service-thumb-wrap">
                <img src={hydrotherapyImg} alt="Hydrotherapy natural water application" className="service-thumb" />
              </div>
              <div className="service-info">
                <div className="service-title-wrap">
                  <Droplets size={16} className="service-title-icon" />
                  <h3 className="service-title">Hydrotherapy</h3>
                </div>
                <p className="service-desc">
                  Hydrotherapy uses water in selected forms and temperatures within a structured
                  wellness practice. RBN may incorporate appropriate water-based applications depending
                  on the program and individual suitability.
                </p>
              </div>
            </div>

            {/* Card 3: Steam Bath */}
            <div className="service-card">
              <div className="service-thumb-wrap">
                <img src={steamBathImg} alt="Steam Bath wellness room" className="service-thumb" />
              </div>
              <div className="service-info">
                <div className="service-title-wrap">
                  <Waves size={16} className="service-title-icon" />
                  <h3 className="service-title">Steam Bath</h3>
                </div>
                <p className="service-desc">
                  Steam-based wellness sessions may be included for relaxation or as part of selected
                  naturopathy routines. Heat exposure is not appropriate for everyone, so relevant
                  medical history should be discussed first.
                </p>
              </div>
            </div>

            {/* Card 4: Hip Bath */}
            <div className="service-card">
              <div className="service-thumb-wrap">
                <img src={hipBathImg} alt="Hip Bath traditional tub" className="service-thumb" />
              </div>
              <div className="service-info">
                <div className="service-title-wrap">
                  <Bath size={16} className="service-title-icon" />
                  <h3 className="service-title">Hip Bath</h3>
                </div>
                <p className="service-desc">
                  A hip bath is a traditional water-based naturopathy practice. The method and purpose
                  should be explained by the practitioner before the session.
                </p>
              </div>
            </div>

            {/* Card 5: Plantain Leaf Bath */}
            <div className="service-card">
              <div className="service-thumb-wrap">
                <img src={plantainLeafImg} alt="Plantain Leaf Bath nature cure" className="service-thumb" />
              </div>
              <div className="service-info">
                <div className="service-title-wrap">
                  <Sprout size={16} className="service-title-icon" />
                  <h3 className="service-title">Plantain Leaf Bath</h3>
                </div>
                <p className="service-desc">
                  Plantain leaf bath is a traditional nature-cure practice offered within selected
                  programs. Visitors should be informed about what the experience involves and any
                  relevant precautions.
                </p>
              </div>
            </div>

            {/* Card 6: Massage & Body Rejuvenation */}
            <div className="service-card">
              <div className="service-thumb-wrap">
                <img src={massageImg} alt="Massage and Body Rejuvenation" className="service-thumb" />
              </div>
              <div className="service-info">
                <div className="service-title-wrap">
                  <Flower2 size={16} className="service-title-icon" />
                  <h3 className="service-title">Massage & Body Rejuvenation</h3>
                </div>
                <p className="service-desc">
                  Massage and body therapies can be incorporated into relaxation and rejuvenation-focused
                  wellness plans. Pressure, duration and technique should be adapted to the individual.
                </p>
              </div>
            </div>
          </div>

          {/* Full-width Card 7: Kriyas & Jalaneti */}
          <div className="service-card-full">
            <div className="service-full-thumb-wrap">
              <img src={kriyasJalanetiImg} alt="Kriyas and Jalaneti yogic cleansing" className="service-full-thumb" />
            </div>
            <div className="service-info">
              <div className="service-title-wrap">
                <Sparkles size={16} className="service-title-icon" />
                <h3 className="service-title">Kriyas & Jalaneti</h3>
              </div>
              <p className="service-desc">
                Selected yogic cleansing practices should be taught with appropriate instruction.
                They should not be attempted simply because they are described online, particularly
                when a person has relevant medical concerns.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 5: WHAT HAPPENS FOR A NATUROPATHY CONSULTATION?
            ================================================================== */}
        <section className="naturopathy-consult-section">
          <div className="naturopathy-section-header">
            <Calendar size={22} className="naturopathy-header-leaf" />
            <h2 className="naturopathy-section-title">What Happens for a Naturopathy Consultation?</h2>
            <span className="naturopathy-header-line"></span>
          </div>

          <p className="consult-intro-text">
            A useful first consultation should explore why the person is visiting, what they hope
            to improve, relevant health history, current medications, daily routines and any previous
            experience with naturopathy. The practitioner can then explain which approaches may be
            suitable, what each involves and what realistic expectations should be.
          </p>

          <div className="consult-steps-row-4">
            {/* Step 1 */}
            <div className="consult-step-card-wrap-4">
              <div className="consult-step-card-4">
                <div className="consult-step-header-4">
                  <span className="consult-step-num-4">1</span>
                  <div className="consult-step-icon-4">
                    <MessageSquare size={18} />
                  </div>
                </div>
                <p className="consult-step-text-4">
                  Discuss the reason for the visit and the person's wellness goals.
                </p>
              </div>
              <span className="consult-step-arrow-4">→</span>
            </div>

            {/* Step 2 */}
            <div className="consult-step-card-wrap-4">
              <div className="consult-step-card-4">
                <div className="consult-step-header-4">
                  <span className="consult-step-num-4">2</span>
                  <div className="consult-step-icon-4">
                    <ClipboardCheck size={18} />
                  </div>
                </div>
                <p className="consult-step-text-4">
                  Review relevant health history, medications and lifestyle information.
                </p>
              </div>
              <span className="consult-step-arrow-4">→</span>
            </div>

            {/* Step 3 */}
            <div className="consult-step-card-wrap-4">
              <div className="consult-step-card-4">
                <div className="consult-step-header-4">
                  <span className="consult-step-num-4">3</span>
                  <div className="consult-step-icon-4">
                    <Search size={18} />
                  </div>
                </div>
                <p className="consult-step-text-4">
                  Identify which services are appropriate to discuss and which may not be suitable.
                </p>
              </div>
              <span className="consult-step-arrow-4">→</span>
            </div>

            {/* Step 4 */}
            <div className="consult-step-card-wrap-4">
              <div className="consult-step-card-4">
                <div className="consult-step-header-4">
                  <span className="consult-step-num-4">4</span>
                  <div className="consult-step-icon-4">
                    <Leaf size={18} />
                  </div>
                </div>
                <p className="consult-step-text-4">
                  Explain the proposed wellness pathway in understandable language.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 6: NATUROPATHY AS PART OF A LIFESTYLE PLAN
            ================================================================== */}
        <section className="naturopathy-lifestyle-section">
          <div className="naturopathy-lifestyle-grid">
            <div className="naturopathy-lifestyle-image-wrap">
              <img
                src={lifestyleImg}
                alt="Yoga mat, healthy fresh fruits and green smoothie"
                className="naturopathy-lifestyle-img"
              />
            </div>

            <div className="naturopathy-lifestyle-content">
              <div className="naturopathy-lifestyle-title-wrap">
                <Leaf size={22} className="naturopathy-header-leaf" />
                <h2 className="naturopathy-lifestyle-title">Naturopathy as Part of a Lifestyle Plan</h2>
              </div>
              <p className="naturopathy-lifestyle-desc">
                The value of a naturopathy program should not depend only on what happens during a
                session. RBN can use the consultation to connect therapies with practical discussions
                around food habits, movement, sleep, hydration and routine. This gives visitors a clearer
                pathway for maintaining healthier habits after they leave the centre.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 7: SAFETY & SUITABILITY
            ================================================================== */}
        <section className="naturopathy-safety-section">
          <div className="safety-banner">
            <div className="safety-shield-wrap">
              <Shield size={28} />
            </div>

            <h2 className="safety-title">Safety & Suitability</h2>

            <div className="safety-divider"></div>

            <p className="safety-text">
              Natural does not automatically mean suitable for everyone. Pregnancy, cardiovascular
              concerns, diabetes, kidney conditions, skin conditions, recent surgery, medications
              and other factors may affect whether a particular heat, water, fasting, cleansing or
              body therapy is appropriate. Visitors should disclose relevant information and seek
              appropriate medical advice when needed.
            </p>
          </div>
        </section>

        {/* ==================================================================
            SECTION 8 & 9: FAQ & CONSULTATION CTA
            ================================================================== */}
        <section className="naturopathy-faq-cta-section">
          <div className="faq-cta-grid">
            {/* FAQ Column */}
            <div>
              <div className="naturopathy-faq-title-wrap">
                <HelpCircle size={22} style={{ color: '#C58A00' }} />
                <h2 className="naturopathy-faq-title">Frequently Asked Questions</h2>
                <span className="naturopathy-faq-line"></span>
              </div>

              <div className="naturopathy-accordion">
                {faqData.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div key={idx} className={`naturopathy-accordion-item ${isOpen ? 'active' : ''}`}>
                      <button
                        type="button"
                        className="naturopathy-accordion-btn"
                        onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <span className="naturopathy-accordion-symbol">{isOpen ? '−' : '+'}</span>
                      </button>
                      {isOpen && (
                        <div className="naturopathy-accordion-content">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Consultation CTA Banner */}
            <Link to="/contact" className="naturopathy-cta-card" style={{ textDecoration: 'none' }}>
              <div className="cta-card-left">
                <img
                  src={ctaStonesImg}
                  alt="Stacked black stones"
                  className="cta-stones-left-decor"
                />

                <div className="cta-card-title-group">
                  <div className="cta-card-cal-icon">
                    <Calendar size={26} />
                  </div>
                  <h3 className="cta-card-title">
                    Book a<br />
                    Naturopathy<br />
                    Consultation
                  </h3>
                </div>
              </div>

              <div className="cta-card-arrow-btn" aria-hidden="true">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
        </section>

        {/* ==================================================================
            SECTION 10: RECOMMENDED INTERNAL LINKS
            ================================================================== */}
        <section className="naturopathy-links-section">
          <div className="naturopathy-links-card">
            <h3 className="naturopathy-links-title">Recommended Internal Links</h3>
            <div className="naturopathy-links-row">
              <Link to="/hydrotherapy-natural-therapies" className="pill-link-btn-naturopathy">
                <Droplets size={14} className="pill-icon" style={{ color: '#C58A00' }} />
                <span>Hydrotherapy & Natural Therapies</span>
                <ArrowRight size={13} />
              </Link>

              <Link to="/yoga-meditation" className="pill-link-btn-naturopathy">
                <Heart size={14} className="pill-icon" style={{ color: '#C58A00' }} />
                <span>Yoga & Meditation</span>
                <ArrowRight size={13} />
              </Link>

              <Link to="/lifestyle-modification" className="pill-link-btn-naturopathy">
                <Sprout size={14} className="pill-icon" style={{ color: '#C58A00' }} />
                <span>Lifestyle Modification</span>
                <ArrowRight size={13} />
              </Link>

              <Link to="/wellness-camps" className="pill-link-btn-naturopathy">
                <Users size={14} className="pill-icon" style={{ color: '#C58A00' }} />
                <span>Wellness Camps</span>
                <ArrowRight size={13} />
              </Link>

              <Link to="/contact" className="pill-link-btn-naturopathy">
                <Phone size={14} className="pill-icon" style={{ color: '#C58A00' }} />
                <span>Contact</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Naturopathy;
