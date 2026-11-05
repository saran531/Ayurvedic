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
  ClipboardList,
  MessageSquare,
  ClipboardCheck,
  Search,
  MessageCircle,
  Target,
  TrendingUp,
  Users,
  HelpCircle,
  Sprout,
  Phone
} from 'lucide-react';
import './AYUSHIntegratedHealthcare.css';

// Exact image assets extracted from approved screenshot
import heroHerbsImg from '../assets/images/ayush-integrated-healthcare/hero-herbs-mortar.png';
import approachHerbsImg from '../assets/images/ayush-integrated-healthcare/integrated-approach-herbs.png';
import naturopathyImg from '../assets/images/ayush-integrated-healthcare/discipline-naturopathy.png';
import yogaImg from '../assets/images/ayush-integrated-healthcare/discipline-yoga.png';
import siddhaAyurvedaImg from '../assets/images/ayush-integrated-healthcare/discipline-siddha-ayurveda.png';
import lifestyleImg from '../assets/images/ayush-integrated-healthcare/discipline-lifestyle.png';
import usefulConsultImg from '../assets/images/ayush-integrated-healthcare/useful-consultation.png';
import ctaStonesImg from '../assets/images/ayush-integrated-healthcare/cta-stacked-stones.png';

function AYUSHIntegratedHealthcare() {
  const [activeFaq, setActiveFaq] = useState(-1);

  const faqData = [
    {
      question: 'Is AYUSH one single treatment?',
      answer:
        'No. AYUSH is an umbrella term representing distinct traditional healthcare and wellness systems—Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homoeopathy. Each modality maintains its own unique principles, diagnostic frameworks, and therapies.'
    },
    {
      question: 'Will every visitor receive multiple therapies?',
      answer:
        'No. Integration means thoughtful, evidence-informed selection rather than combining every therapy for every visitor. Recommendations depend on your individual assessment, suitability, and wellness goals.'
    },
    {
      question: 'Can I continue my regular medical care?',
      answer:
        'Yes. Our integrated wellness guidance and natural therapies are designed to support and complement ongoing healthcare routines. We encourage transparency regarding any active conventional medical treatments.'
    }
  ];

  return (
    <div className="ayush-page">
      <div className="container">
        {/* ==================================================================
            SECTION 1: BREADCRUMB
            ================================================================== */}
        <nav className="ayush-breadcrumb-bar" aria-label="Breadcrumb">
          <ol className="ayush-breadcrumb-list">
            <li className="ayush-breadcrumb-item">
              <Link to="/">
                <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="ayush-breadcrumb-separator">
              <ChevronRight size={14} />
            </li>
            <li className="ayush-breadcrumb-item">
              <span className="ayush-breadcrumb-current" aria-current="page">
                AYUSH Integrated Healthcare
              </span>
            </li>
          </ol>
        </nav>

        {/* ==================================================================
            SECTION 2: HERO SECTION
            ================================================================== */}
        <section className="ayush-hero-section">
          <div className="ayush-hero-grid">
            {/* Left Content */}
            <div className="ayush-hero-content">
              <div className="ayush-hero-eyebrow-wrap">
                <span className="ayush-hero-eyebrow">AYUSH INTEGRATED HEALTHCARE</span>
                <span className="ayush-hero-eyebrow-line"></span>
              </div>

              <h1 className="ayush-hero-title">
                AYUSH Integrated<br />
                <span className="ayush-hero-title-green">Healthcare</span>
              </h1>

              <p className="ayush-hero-desc">
                An integrated AYUSH wellness approach considers more than one relevant system or
                wellness discipline while keeping the individual's needs at the centre of the discussion.
              </p>

              <div>
                <Link to="/contact" className="btn-ayush-hero">
                  <Calendar size={16} />
                  <span>Book a Consultation</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right Arched Image */}
            <div className="ayush-hero-image-wrap">
              <div className="ayush-hero-arch-container">
                <img
                  src={heroHerbsImg}
                  alt="Ayurvedic mortar, herbal ingredients, oils and medicinal plants"
                  className="ayush-hero-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: WHAT IS AN INTEGRATED AYUSH APPROACH?
            ================================================================== */}
        <section className="ayush-approach-section">
          <div className="ayush-section-header">
            <Leaf size={22} className="ayush-header-leaf" />
            <h2 className="ayush-section-title">What Is an Integrated AYUSH Approach?</h2>
            <span className="ayush-header-line"></span>
          </div>

          <div className="ayush-approach-grid">
            <div className="ayush-approach-text-col">
              <p>
                An integrated AYUSH wellness approach considers more than one relevant system or
                wellness discipline while keeping the individual's needs at the centre of the
                discussion. At RBN, this may include naturopathy, yoga, lifestyle guidance and
                appropriate traditional wellness support, depending on the qualifications of the
                professionals involved and the person's suitability.
              </p>
              <p>
                Integration should not mean combining every therapy for every person. It means
                selecting appropriate options thoughtfully, avoiding unnecessary duplication and
                helping the visitor understand why a particular approach is being considered.
              </p>
            </div>

            <div className="ayush-approach-image-wrap">
              <img
                src={approachHerbsImg}
                alt="Natural herbal ingredients, stacked stones, and white flower"
                className="ayush-approach-img"
              />
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 4: WELLNESS DISCIPLINES
            ================================================================== */}
        <section className="ayush-disciplines-section">
          <div className="ayush-section-header">
            <Leaf size={22} className="ayush-header-leaf" />
            <h2 className="ayush-section-title">Wellness Disciplines</h2>
            <span className="ayush-header-line"></span>
          </div>

          <div className="disciplines-cards-grid">
            {/* Card 1: Naturopathy */}
            <div className="discipline-card">
              <div className="discipline-thumb-wrap">
                <img
                  src={naturopathyImg}
                  alt="Naturopathy water-based wellness treatment"
                  className="discipline-thumb"
                />
                <div className="discipline-icon-badge">
                  <Droplets size={16} />
                </div>
              </div>
              <div className="discipline-body">
                <h3 className="discipline-title">Naturopathy</h3>
                <p className="discipline-desc">
                  Naturopathy emphasises natural approaches, healthy routines and lifestyle awareness.
                  At RBN, naturopathy may include selected water-based therapies, mud applications,
                  steam or hip bath, massage and rejuvenation practices, yoga-related techniques and
                  lifestyle guidance.
                </p>
              </div>
            </div>

            {/* Card 2: Yoga & Meditation */}
            <div className="discipline-card">
              <div className="discipline-thumb-wrap">
                <img
                  src={yogaImg}
                  alt="Woman meditating outdoors during sunset"
                  className="discipline-thumb"
                />
                <div className="discipline-icon-badge">
                  <Heart size={16} />
                </div>
              </div>
              <div className="discipline-body">
                <h3 className="discipline-title">Yoga & Meditation</h3>
                <p className="discipline-desc">
                  Yoga can contribute movement, breathing, relaxation and mindful awareness to a
                  broader wellness plan. Depending on the program, RBN may use yoga and meditation
                  as stand-alone wellness practices or as supportive components within camps, lifestyle
                  programs and retreats.
                </p>
              </div>
            </div>

            {/* Card 3: Siddha & Ayurveda Wellness Support */}
            <div className="discipline-card">
              <div className="discipline-thumb-wrap">
                <img
                  src={siddhaAyurvedaImg}
                  alt="Traditional Ayurvedic herbs and wellness ingredients"
                  className="discipline-thumb"
                />
                <div className="discipline-icon-badge">
                  <Sparkles size={16} />
                </div>
              </div>
              <div className="discipline-body">
                <h3 className="discipline-title">Siddha & Ayurveda Wellness Support</h3>
                <p className="discipline-desc">
                  Traditional Siddha and Ayurveda concepts may inform selected wellness guidance
                  where appropriate and where services are delivered by suitably qualified
                  professionals. The website should clearly identify the responsible practitioner's
                  qualification whenever a regulated or clinical service is offered.
                </p>
              </div>
            </div>

            {/* Card 4: Lifestyle Consultation */}
            <div className="discipline-card">
              <div className="discipline-thumb-wrap">
                <img
                  src={lifestyleImg}
                  alt="Healthcare professional consulting with a visitor"
                  className="discipline-thumb"
                />
                <div className="discipline-icon-badge">
                  <ClipboardList size={16} />
                </div>
              </div>
              <div className="discipline-body">
                <h3 className="discipline-title">Lifestyle Consultation</h3>
                <p className="discipline-desc">
                  Lifestyle consultation helps connect what happens at the centre with what happens
                  during the rest of the week. Discussion may include food patterns, physical
                  activity, sleep, stress, hydration, work routines and other everyday habits that
                  are relevant to the individual's wellness goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 5: HOW AN INTEGRATED CONSULTATION WORKS
            ================================================================== */}
        <section className="ayush-consult-works-section">
          <div className="ayush-section-header">
            <Calendar size={22} className="ayush-header-leaf" />
            <h2 className="ayush-section-title">How An Integrated Consultation Works</h2>
            <span className="ayush-header-line"></span>
          </div>

          <div className="consult-steps-row">
            {/* Step 1 */}
            <div className="consult-step-card-wrap">
              <div className="consult-step-card">
                <div className="consult-step-header">
                  <span className="consult-step-num">1</span>
                  <div className="consult-step-icon">
                    <MessageSquare size={18} />
                  </div>
                </div>
                <p className="consult-step-text">
                  Discuss the reason for the visit and the person's wellness goals.
                </p>
              </div>
              <span className="consult-step-arrow">→</span>
            </div>

            {/* Step 2 */}
            <div className="consult-step-card-wrap">
              <div className="consult-step-card">
                <div className="consult-step-header">
                  <span className="consult-step-num">2</span>
                  <div className="consult-step-icon">
                    <ClipboardCheck size={18} />
                  </div>
                </div>
                <p className="consult-step-text">
                  Review relevant health history, medications and lifestyle information.
                </p>
              </div>
              <span className="consult-step-arrow">→</span>
            </div>

            {/* Step 3 */}
            <div className="consult-step-card-wrap">
              <div className="consult-step-card">
                <div className="consult-step-header">
                  <span className="consult-step-num">3</span>
                  <div className="consult-step-icon">
                    <Search size={18} />
                  </div>
                </div>
                <p className="consult-step-text">
                  Identify which services are appropriate to discuss and which may not be suitable.
                </p>
              </div>
              <span className="consult-step-arrow">→</span>
            </div>

            {/* Step 4 */}
            <div className="consult-step-card-wrap">
              <div className="consult-step-card">
                <div className="consult-step-header">
                  <span className="consult-step-num">4</span>
                  <div className="consult-step-icon">
                    <MessageCircle size={18} />
                  </div>
                </div>
                <p className="consult-step-text">
                  Explain the proposed wellness pathway in understandable language.
                </p>
              </div>
              <span className="consult-step-arrow">→</span>
            </div>

            {/* Step 5 */}
            <div className="consult-step-card-wrap">
              <div className="consult-step-card">
                <div className="consult-step-header">
                  <span className="consult-step-num">5</span>
                  <div className="consult-step-icon">
                    <Target size={18} />
                  </div>
                </div>
                <p className="consult-step-text">
                  Set realistic expectations and clarify that outcomes vary by individual.
                </p>
              </div>
              <span className="consult-step-arrow">→</span>
            </div>

            {/* Step 6 */}
            <div className="consult-step-card-wrap">
              <div className="consult-step-card">
                <div className="consult-step-header">
                  <span className="consult-step-num">6</span>
                  <div className="consult-step-icon">
                    <TrendingUp size={18} />
                  </div>
                </div>
                <p className="consult-step-text">
                  Review progress and adjust the plan when appropriate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 6: WHO MAY FIND THIS APPROACH USEFUL?
            ================================================================== */}
        <section className="ayush-useful-section">
          <div className="useful-split-grid">
            <div className="useful-image-wrap">
              <img
                src={usefulConsultImg}
                alt="Healthcare professional discussing wellness with visitor"
                className="useful-img"
              />
            </div>

            <div className="useful-content">
              <div className="useful-title-wrap">
                <Users size={22} className="useful-title-icon" />
                <h2 className="useful-title">Who May Find This Approach Useful?</h2>
              </div>
              <p className="useful-desc">
                An integrated consultation may be useful for people who are interested in more than a
                single wellness session, are unsure which service to choose, want to understand how
                lifestyle factors connect with their wellness goals or are exploring a structured
                program. It is not a substitute for emergency care or specialist medical treatment
                when those are required.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 7 & 8: FAQ & SCHEDULE CONSULTATION BANNER
            ================================================================== */}
        <section className="ayush-faq-banner-section">
          <div className="faq-banner-grid">
            {/* FAQ Column */}
            <div className="ayush-faq-col">
              <div className="ayush-faq-title-wrap">
                <HelpCircle size={22} className="ayush-faq-icon" />
                <h2 className="ayush-faq-title">Frequently Asked Questions</h2>
                <span className="ayush-faq-line"></span>
              </div>

              <div className="ayush-accordion">
                {faqData.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div key={idx} className={`ayush-accordion-item ${isOpen ? 'active' : ''}`}>
                      <button
                        type="button"
                        className="ayush-accordion-btn"
                        onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <span className="ayush-accordion-symbol">{isOpen ? '−' : '+'}</span>
                      </button>
                      {isOpen && (
                        <div className="ayush-accordion-content">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Schedule Consultation Banner */}
            <Link to="/contact" className="ayush-cta-banner" style={{ textDecoration: 'none' }}>
              <div className="cta-banner-left">
                <div className="cta-calendar-icon-wrap">
                  <Calendar size={28} />
                </div>
                <h3 className="cta-banner-title">
                  Schedule an Integrated<br />
                  Wellness Consultation
                </h3>
              </div>

              <div className="cta-arrow-btn" aria-hidden="true">
                <ArrowRight size={20} />
              </div>

              <img
                src={ctaStonesImg}
                alt="Stacked stones decorative"
                className="cta-stones-decor"
              />
            </Link>
          </div>
        </section>

        {/* ==================================================================
            SECTION 9: RECOMMENDED INTERNAL LINKS
            ================================================================== */}
        <section className="ayush-links-section">
          <div className="ayush-links-card">
            <h3 className="ayush-links-title">Recommended Internal Links</h3>
            <div className="ayush-links-row">
              <Link to="/naturopathy" className="pill-link-btn">
                <Leaf size={14} className="pill-icon" />
                <span>Naturopathy</span>
                <ArrowRight size={13} />
              </Link>

              <Link to="/yoga-meditation" className="pill-link-btn">
                <Heart size={14} className="pill-icon" />
                <span>Yoga & Meditation</span>
                <ArrowRight size={13} />
              </Link>

              <Link to="/lifestyle-modification" className="pill-link-btn">
                <Sprout size={14} className="pill-icon" />
                <span>Lifestyle Modification</span>
                <ArrowRight size={13} />
              </Link>

              <Link to="/about" className="pill-link-btn">
                <Users size={14} className="pill-icon" />
                <span>About RBN</span>
                <ArrowRight size={13} />
              </Link>

              <Link to="/contact" className="pill-link-btn">
                <Phone size={14} className="pill-icon" />
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

export default AYUSHIntegratedHealthcare;
