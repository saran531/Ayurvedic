import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  ChevronRight,
  Calendar,
  ArrowRight,
  Leaf,
  Package,
  Droplets,
  Activity,
  Users,
  HelpCircle,
  Heart,
  UserCheck,
  ShieldCheck,
  Clock,
  Pill,
  Plus,
  Minus,
  Link2,
  Flower2,
  Phone,
  BookOpen,
  Sparkles
} from 'lucide-react';
import './OzoneTherapy.css';

// Exact image assets extracted from reference screenshot
import heroOzoneImg from '../assets/images/ozone-therapy/hero-ozone-consult.png';
import ozoneSphereImg from '../assets/images/ozone-therapy/ozone-sphere-o3.png';
import serviceOzoneTherapyImg from '../assets/images/ozone-therapy/service-ozone-therapy.png';
import serviceOzoneBaggingImg from '../assets/images/ozone-therapy/service-ozone-bagging.png';
import serviceOzoneSalineImg from '../assets/images/ozone-therapy/service-ozone-saline.png';
import serviceOtherOzoneImg from '../assets/images/ozone-therapy/service-other-ozone.png';
import whyConsultationImg from '../assets/images/ozone-therapy/why-consultation-matters.png';
import safetyHerbsImg from '../assets/images/ozone-therapy/safety-banner-herbs.png';
import ctaStonesImg from '../assets/images/ozone-therapy/cta-stones-ozone.png';

function OzoneTherapy() {
  const [activeFaq, setActiveFaq] = useState(-1);

  const faqData = [
    {
      question: 'Is ozone therapy suitable for everyone?',
      answer:
        'No. Suitability depends on individual health status, medical history, and specific contraindications such as severe anemia, hyperthyroidism, acute intoxication, or pregnancy. A prior clinical consultation is required.'
    },
    {
      question: 'Can I book an ozone procedure directly?',
      answer:
        'No. At RBN, all ozone-based wellness services require an initial evaluation by a qualified healthcare professional to determine safety, appropriateness, and recommended protocol.'
    },
    {
      question: 'Should I stop my regular medicines before ozone therapy?',
      answer:
        'Never discontinue or alter prescribed medications without explicit advice from your treating physician. Ozone services are supportive wellness modalities and do not replace essential medical treatments.'
    },
    {
      question: 'What should I bring to a consultation?',
      answer:
        'Please bring recent medical records, lab reports, current prescription details, and a summary of your health concerns and lifestyle habits to assist the practitioner in making an informed assessment.'
    }
  ];

  const questionCards = [
    {
      icon: <HelpCircle size={22} />,
      text: 'What exact ozone method is being proposed?'
    },
    {
      icon: <Heart size={22} />,
      text: 'Why is this method being considered for me?'
    },
    {
      icon: <UserCheck size={22} />,
      text: 'Who will administer or supervise it and what are their qualifications?'
    },
    {
      icon: <ShieldCheck size={22} />,
      text: 'What are the possible risks, contraindications and alternatives?'
    },
    {
      icon: <Clock size={22} />,
      text: 'What should I do before and after the session?'
    },
    {
      icon: <Pill size={22} />,
      text: 'Could this interact with my current treatment or medical condition?'
    }
  ];

  return (
    <div className="ozone-page">
      <div className="container">
        {/* ==================================================================
            SECTION 1: BREADCRUMB
            ================================================================== */}
        <nav className="ozone-breadcrumb-bar" aria-label="Breadcrumb">
          <ol className="ozone-breadcrumb-list">
            <li className="ozone-breadcrumb-item">
              <Link to="/">
                <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="ozone-breadcrumb-separator">
              <ChevronRight size={14} />
            </li>
            <li className="ozone-breadcrumb-item">
              <span className="ozone-breadcrumb-current" aria-current="page">
                Ozone Therapy
              </span>
            </li>
          </ol>
        </nav>

        {/* ==================================================================
            SECTION 2: OZONE THERAPY HERO
            ================================================================== */}
        <section className="ozone-hero-section">
          <div className="ozone-hero-grid">
            <div className="ozone-hero-content">
              <h1 className="ozone-hero-title">
                Ozone <span className="ozone-hero-title-accent">Therapy</span>
              </h1>
              <div className="ozone-hero-divider">
                <Leaf size={18} />
              </div>
              <Link to="/book-consultation" className="ozone-hero-cta">
                <Calendar size={17} />
                <span>Book a Consultation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="ozone-hero-image-wrap">
              <div className="ozone-hero-frame">
                <img
                  src={heroOzoneImg}
                  alt="Doctor consulting with patient about ozone therapy at RBN AYUSH Health Care"
                  className="ozone-hero-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: UNDERSTANDING OZONE-BASED WELLNESS SERVICES
            ================================================================== */}
        <section className="ozone-understanding-section">
          <div className="ozone-understanding-grid">
            <div className="ozone-understanding-content">
              <h2 className="ozone-understanding-heading">
                Understanding <span className="ozone-understanding-heading-accent">Ozone-Based Wellness Services</span>
              </h2>
              <div className="ozone-understanding-body">
                <p className="ozone-understanding-text">
                  Ozone therapy is a broad term used for professional applications involving a controlled oxygen-ozone mixture. Different methods are used in different settings, and the purpose, evidence base, risks and suitability can vary significantly between applications. For this reason, RBN should present ozone-based services as consultation-led services rather than as universal solutions.
                </p>
                <p className="ozone-understanding-text">
                  At RBN AYUSH HEALTH CARE in Madurai, visitors interested in ozone-based wellness services should first discuss why they are considering the service, relevant health history, medications, current medical care and any contraindications or precautions with the appropriate qualified professional.
                </p>
              </div>
            </div>
            <div className="ozone-understanding-visual">
              <div className="ozone-understanding-frame">
                <img
                  src={ozoneSphereImg}
                  alt="Controlled O3 ozone bubble sphere on natural green leaves"
                  className="ozone-understanding-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 4: OZONE SERVICES AT RBN
            ================================================================== */}
        <section className="ozone-services-section">
          <div className="ozone-section-title-wrap">
            <span className="ozone-section-title-line"></span>
            <h2 className="ozone-section-title">
              <Sparkles size={20} color="#C58A00" />
              <span>Ozone Services at RBN</span>
            </h2>
            <span className="ozone-section-title-line"></span>
          </div>

          <div className="ozone-services-grid">
            {/* Card 1: Ozone Therapy */}
            <div className="ozone-service-card">
              <div className="ozone-service-card-image-wrap">
                <img
                  src={serviceOzoneTherapyImg}
                  alt="Ozone Therapy"
                  className="ozone-service-card-img"
                />
              </div>
              <div className="ozone-service-card-body">
                <div className="ozone-service-card-header">
                  <div className="ozone-service-card-icon-badge">
                    <Leaf size={18} />
                  </div>
                  <h3 className="ozone-service-card-title">Ozone Therapy</h3>
                </div>
                <p className="ozone-service-card-text">
                  Selected ozone applications may be available following assessment. The practitioner should explain the specific method being proposed, its intended wellness purpose, alternatives, limitations and relevant risks before proceeding.
                </p>
              </div>
            </div>

            {/* Card 2: Ozone Bagging */}
            <div className="ozone-service-card">
              <div className="ozone-service-card-image-wrap">
                <img
                  src={serviceOzoneBaggingImg}
                  alt="Ozone Bagging"
                  className="ozone-service-card-img"
                />
              </div>
              <div className="ozone-service-card-body">
                <div className="ozone-service-card-header">
                  <div className="ozone-service-card-icon-badge">
                    <Package size={18} />
                  </div>
                  <h3 className="ozone-service-card-title">Ozone Bagging</h3>
                </div>
                <p className="ozone-service-card-text">
                  Ozone bagging is a localised application in which the relevant area is enclosed for controlled exposure. The website should avoid implying that local application is proven to treat every wound, infection or chronic condition.
                </p>
              </div>
            </div>

            {/* Card 3: Ozone Saline */}
            <div className="ozone-service-card">
              <div className="ozone-service-card-image-wrap">
                <img
                  src={serviceOzoneSalineImg}
                  alt="Ozone Saline"
                  className="ozone-service-card-img"
                />
              </div>
              <div className="ozone-service-card-body">
                <div className="ozone-service-card-header">
                  <div className="ozone-service-card-icon-badge">
                    <Droplets size={18} />
                  </div>
                  <h3 className="ozone-service-card-title">Ozone Saline</h3>
                </div>
                <p className="ozone-service-card-text">
                  If ozone saline is offered, the service description, route, clinical purpose, practitioner qualification, consent process and regulatory appropriateness should be verified by RBN before publication. It should only be described as available where professionally and legally appropriate.
                </p>
              </div>
            </div>

            {/* Card 4: Other Ozone Applications */}
            <div className="ozone-service-card">
              <div className="ozone-service-card-image-wrap">
                <img
                  src={serviceOtherOzoneImg}
                  alt="Other Ozone Applications"
                  className="ozone-service-card-img"
                />
              </div>
              <div className="ozone-service-card-body">
                <div className="ozone-service-card-header">
                  <div className="ozone-service-card-icon-badge">
                    <Activity size={18} />
                  </div>
                  <h3 className="ozone-service-card-title">Other Ozone Applications</h3>
                </div>
                <p className="ozone-service-card-text">
                  RBN may provide additional ozone-based applications. Each method should be listed only after the client confirms the exact procedure and the responsible qualified professional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 5: WHY CONSULTATION MATTERS
            ================================================================== */}
        <section className="ozone-consult-section">
          <div className="ozone-consult-grid">
            <div className="ozone-consult-image-wrap">
              <div className="ozone-consult-pill-frame">
                <img
                  src={whyConsultationImg}
                  alt="Doctor discussing health history and treatment options with patient"
                  className="ozone-consult-img"
                />
              </div>
            </div>
            <div className="ozone-consult-content">
              <div className="ozone-consult-header">
                <h2 className="ozone-consult-title">
                  <Users size={22} className="ozone-consult-icon" />
                  <span>Why Consultation Matters</span>
                </h2>
                <span className="ozone-consult-line"></span>
              </div>
              <p className="ozone-consult-text">
                A visitor may arrive after seeing strong claims about ozone therapy online. RBN's website should take a more responsible approach. The consultation should clarify what is known, what is uncertain, whether the service is suitable for the individual and whether conventional medical evaluation or treatment is required instead of, or alongside, a wellness service.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 6: WHAT TO ASK BEFORE PROCEEDING
            ================================================================== */}
        <section className="ozone-questions-section">
          <div className="ozone-section-title-wrap">
            <span className="ozone-section-title-line"></span>
            <h2 className="ozone-section-title">
              <Calendar size={20} color="#C58A00" />
              <span>What to Ask Before Proceeding</span>
            </h2>
            <span className="ozone-section-title-line"></span>
          </div>

          <div className="ozone-questions-grid">
            {questionCards.map((card, idx) => (
              <div key={idx} className="ozone-question-card">
                <div className="ozone-question-icon-wrap">
                  {card.icon}
                </div>
                <p className="ozone-question-text">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            SECTION 7: IMPORTANT SAFETY MESSAGE BANNER
            ================================================================== */}
        <section className="ozone-safety-section">
          <div className="ozone-safety-banner">
            <div className="ozone-safety-icon-wrap">
              <ShieldCheck size={32} />
            </div>
            <h3 className="ozone-safety-title">
              Important<br />Safety Message
            </h3>
            <div className="ozone-safety-divider"></div>
            <p className="ozone-safety-text">
              Ozone-based services should never be marketed as guaranteed cures for cancer, diabetes, infections or other diseases. Visitors should not delay urgent or evidence-based medical treatment because of a wellness claim. RBN should use informed consent and clear professional oversight for every relevant procedure.
            </p>
            <div className="ozone-safety-herbs-wrap">
              <img
                src={safetyHerbsImg}
                alt="Ayurvedic herbs and holistic wellness elements"
                className="ozone-safety-herbs-img"
              />
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 8: FAQ & ENQUIRE CTA ROW
            ================================================================== */}
        <section className="ozone-faq-cta-section">
          <div className="ozone-faq-cta-grid">
            {/* FAQ Column */}
            <div className="ozone-faq-column">
              <div className="ozone-faq-header">
                <h2 className="ozone-faq-title">
                  <HelpCircle size={22} className="ozone-faq-title-icon" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <span className="ozone-faq-header-line"></span>
              </div>

              <div className="ozone-faq-list">
                {faqData.map((item, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`ozone-faq-item ${isOpen ? 'active' : ''}`}
                    >
                      <button
                        type="button"
                        className="ozone-faq-question"
                        onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <span className="ozone-faq-toggle-icon">
                          {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="ozone-faq-answer">{item.answer}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Column */}
            <div className="ozone-cta-column">
              <div className="ozone-cta-banner-card">
                <div className="ozone-cta-stones-wrap">
                  <img
                    src={ctaStonesImg}
                    alt="Zen stones and green leaf"
                    className="ozone-cta-stones-img"
                  />
                </div>
                <div className="ozone-cta-text-wrap">
                  <h3 className="ozone-cta-heading">
                    Enquire About Ozone-Based Wellness Services
                  </h3>
                </div>
                <Link
                  to="/book-consultation"
                  className="ozone-cta-arrow-btn"
                  aria-label="Enquire About Ozone-Based Wellness Services"
                >
                  <ArrowRight size={22} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 9: RECOMMENDED INTERNAL LINKS
            ================================================================== */}
        <section className="ozone-links-section">
          <div className="ozone-links-header">
            <span className="ozone-links-line"></span>
            <h2 className="ozone-links-title">
              <Link2 size={20} className="ozone-links-icon" />
              <span>Recommended Internal Links</span>
            </h2>
            <span className="ozone-links-line"></span>
          </div>

          <div className="ozone-links-row">
            <Link to="/about-rbn" className="ozone-link-pill">
              <Flower2 size={18} className="ozone-link-pill-icon" />
              <span>About RBN</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="ozone-link-pill">
              <Phone size={18} className="ozone-link-pill-icon" />
              <span>Contact</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/blog" className="ozone-link-pill">
              <BookOpen size={18} className="ozone-link-pill-icon" />
              <span>Health Library</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OzoneTherapy;
