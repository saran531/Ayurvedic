import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  ChevronRight,
  Leaf,
  Building2,
  MapPin,
  Phone,
  Clock,
  Mail,
  Calendar,
  Send,
  Lock,
  AlertTriangle,
  CheckCircle2,
  Users,
  ShieldCheck,
  Droplets,
  Flower2,
  Sparkles,
  Heart,
  RefreshCw,
  Mountain,
  ArrowRight,
  FileText
} from 'lucide-react';
import './ContactConsultation.css';

// Cropped images
import heroConsultationImg from '../assets/images/contact/hero-contact-consultation.png';
import buildingExteriorImg from '../assets/images/contact/building-exterior.png';
import topicsMortarStonesImg from '../assets/images/contact/contact-topics-mortar-stones.png';
import consultationPatientMaleImg from '../assets/images/contact/consultation-patient-male.png';
import beforeVisitChecklistImg from '../assets/images/contact/before-visit-checklist.png';
import ctaMortarImg from '../assets/images/contact/cta-contact-mortar.png';
import ctaStonesImg from '../assets/images/contact/cta-contact-stones.png';

// Inline WhatsApp SVG for authentic icon appearance
const WhatsAppIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

function ContactConsultation() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interestedIn: '',
    preferredContactMethod: '',
    message: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.consent) {
      alert('Please fill in all required fields and accept the consent notice.');
      return;
    }
    setSubmitted(true);
    // Smooth reset or retain feedback
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        interestedIn: '',
        preferredContactMethod: '',
        message: '',
        consent: false
      });
    }, 6000);
  };

  const scrollToForm = (e) => {
    e.preventDefault();
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="contact-page">
      {/* ====================================================================
          BREADCRUMB
          ==================================================================== */}
      <div className="contact-breadcrumb-bar">
        <div className="contact-container">
          <ul className="contact-breadcrumb-list" aria-label="Breadcrumb">
            <li className="contact-breadcrumb-item">
              <Link to="/">
                <Home size={14} />
                <span>Home</span>
              </Link>
            </li>
            <li className="contact-breadcrumb-separator" aria-hidden="true">
              <ChevronRight size={13} />
            </li>
            <li className="contact-breadcrumb-item">
              <span className="contact-breadcrumb-current">Contact & Consultation</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ====================================================================
          HERO SECTION
          ==================================================================== */}
      <section className="contact-hero-section">
        <div className="contact-container">
          <div className="contact-hero-grid">
            <div className="contact-hero-content">
              <h1 className="contact-hero-title">
                Start With a<br />Conversation
              </h1>
              <div className="contact-hero-ornament">
                <span className="contact-hero-ornament-line"></span>
                <Leaf size={16} />
                <span className="contact-hero-ornament-line"></span>
              </div>
              <p className="contact-hero-desc">
                If you know which service you are interested in, contact RBN to understand availability and whether an initial consultation is required. If you are unsure, simply explain your wellness goal and the team can guide you toward the most appropriate next step.
              </p>
            </div>
            <div className="contact-hero-image-wrap">
              <div className="contact-hero-image-frame">
                <img
                  src={heroConsultationImg}
                  alt="Doctor consulting with patient at RBN Ayush Health Care"
                  className="contact-hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CONTACT INFORMATION SECTION
          ==================================================================== */}
      <section className="contact-info-section">
        <div className="contact-container">
          <div className="contact-section-header">
            <span className="section-icon">
              <Leaf size={22} />
            </span>
            <h2>Contact Information</h2>
            <div className="header-gold-line"></div>
          </div>

          <div className="contact-info-grid">
            {/* Left: Info Card */}
            <div className="contact-details-card">
              <div className="contact-detail-row">
                <div className="contact-icon-badge">
                  <Building2 size={18} />
                </div>
                <div className="contact-detail-text">
                  <div className="contact-detail-title">RBN AYUSH HEALTH CARE</div>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-badge">
                  <MapPin size={18} />
                </div>
                <div className="contact-detail-text contact-detail-address">
                  Plot No. 557, 13th Street,<br />
                  Karpaga Nagar, Madurai, Tamil Nadu - 625007
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-badge">
                  <Phone size={18} />
                </div>
                <div className="contact-detail-text contact-detail-phone">
                  +91 99444 25201
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-badge">
                  <Clock size={18} />
                </div>
                <div className="contact-detail-text contact-detail-hours">
                  9:00 AM - 8:00 PM daily [CLIENT TO CONFIRM]
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-badge">
                  <Mail size={18} />
                </div>
                <div className="contact-detail-text contact-detail-email">
                  [CLIENT TO PROVIDE]
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-badge">
                  <WhatsAppIcon size={18} color="#FFFFFF" />
                </div>
                <div className="contact-detail-text contact-detail-whatsapp">
                  [CONFIRM NUMBER]
                </div>
              </div>
            </div>

            {/* Right: Building Card */}
            <div className="contact-building-card">
              <img
                src={buildingExteriorImg}
                alt="RBN Ayush Health Care Building Entrance"
                className="contact-building-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CONTACT ACTION BUTTONS (4 In A Row)
          ==================================================================== */}
      <section className="contact-actions-section">
        <div className="contact-container">
          <div className="contact-actions-row">
            <a href="tel:+919944425201" className="action-btn action-btn-solid">
              <Phone size={18} />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919944425201"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn action-btn-outline"
            >
              <WhatsAppIcon size={18} color="#07552F" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://maps.google.com/?q=Plot+No.+557,+13th+Street,+Karpaga+Nagar,+Madurai,+Tamil+Nadu+625007"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn action-btn-outline"
            >
              <MapPin size={18} />
              <span>Get Directions</span>
            </a>
            <a href="#contact-form" onClick={scrollToForm} className="action-btn action-btn-solid">
              <Calendar size={18} />
              <span>Book Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================================
          WHAT CAN I CONTACT RBN ABOUT?
          ==================================================================== */}
      <section className="contact-topics-section">
        <div className="contact-container">
          <div className="contact-section-header">
            <span className="section-icon">
              <Leaf size={22} />
            </span>
            <h2>What Can I Contact RBN About?</h2>
            <div className="header-gold-line"></div>
          </div>

          <div className="contact-topics-layout">
            <div className="contact-topics-grid">
              {/* Row 1 (4 items) */}
              <div className="contact-topics-row-4">
                <div className="contact-topic-card">
                  <div className="contact-topic-icon">
                    <Users size={18} />
                  </div>
                  <h3 className="contact-topic-title">General wellness consultation</h3>
                </div>
                <div className="contact-topic-card">
                  <div className="contact-topic-icon">
                    <Leaf size={18} />
                  </div>
                  <h3 className="contact-topic-title">Naturopathy and natural therapies</h3>
                </div>
                <div className="contact-topic-card">
                  <div className="contact-topic-icon">
                    <ShieldCheck size={18} />
                  </div>
                  <h3 className="contact-topic-title">Ozone-based wellness service enquiry</h3>
                </div>
                <div className="contact-topic-card">
                  <div className="contact-topic-icon">
                    <Droplets size={18} />
                  </div>
                  <h3 className="contact-topic-title">IV nutrition enquiry</h3>
                </div>
              </div>

              {/* Row 2 (4 items) */}
              <div className="contact-topics-row-4">
                <div className="contact-topic-card">
                  <div className="contact-topic-icon">
                    <Flower2 size={18} />
                  </div>
                  <h3 className="contact-topic-title">Yoga and meditation</h3>
                </div>
                <div className="contact-topic-card">
                  <div className="contact-topic-icon">
                    <Sparkles size={18} />
                  </div>
                  <h3 className="contact-topic-title">Acupuncture</h3>
                </div>
                <div className="contact-topic-card">
                  <div className="contact-topic-icon">
                    <Heart size={18} />
                  </div>
                  <h3 className="contact-topic-title">Metabolic or gut wellness programs</h3>
                </div>
                <div className="contact-topic-card">
                  <div className="contact-topic-icon">
                    <RefreshCw size={18} />
                  </div>
                  <h3 className="contact-topic-title">3R Health Revival</h3>
                </div>
              </div>

              {/* Row 3 (3 items) */}
              <div className="contact-topics-row-3">
                <div className="contact-topic-card">
                  <div className="contact-topic-icon">
                    <Users size={18} />
                  </div>
                  <h3 className="contact-topic-title">Wellness camps</h3>
                </div>
                <div className="contact-topic-card">
                  <div className="contact-topic-icon">
                    <Mountain size={18} />
                  </div>
                  <h3 className="contact-topic-title">Sirumalai retreat</h3>
                </div>
                <div className="contact-topic-card">
                  <div className="contact-topic-icon">
                    <Building2 size={18} />
                  </div>
                  <h3 className="contact-topic-title">Corporate / community wellness programs</h3>
                </div>
              </div>
            </div>

            <div className="contact-topics-graphic-wrap">
              <img
                src={topicsMortarStonesImg}
                alt="Ayurvedic herbs, mortar and pestle, zen stones"
                className="contact-topics-graphic"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CONTACT FORM SECTION
          ==================================================================== */}
      <section className="contact-form-section" id="contact-form">
        <div className="contact-container">
          <div className="contact-section-header">
            <span className="section-icon">
              <FileText size={22} />
            </span>
            <h2>Contact Form</h2>
            <div className="header-gold-line"></div>
          </div>

          <div className="contact-form-layout">
            {/* Left: Form Card */}
            <div className="contact-form-card">
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="contact-name">
                      Name<span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone">
                      Phone<span className="required-star">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="form-input"
                  />
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="contact-interested">Interested In</label>
                    <select
                      id="contact-interested"
                      name="interestedIn"
                      value={formData.interestedIn}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select a service</option>
                      <option value="General wellness consultation">General wellness consultation</option>
                      <option value="Naturopathy and natural therapies">Naturopathy and natural therapies</option>
                      <option value="Ozone-based wellness service enquiry">Ozone-based wellness service enquiry</option>
                      <option value="IV nutrition enquiry">IV nutrition enquiry</option>
                      <option value="Yoga and meditation">Yoga and meditation</option>
                      <option value="Acupuncture">Acupuncture</option>
                      <option value="Metabolic or gut wellness programs">Metabolic or gut wellness programs</option>
                      <option value="3R Health Revival">3R Health Revival</option>
                      <option value="Wellness camps">Wellness camps</option>
                      <option value="Sirumalai retreat">Sirumalai retreat</option>
                      <option value="Corporate / community wellness programs">Corporate / community wellness programs</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-method">Preferred Contact Method</label>
                    <select
                      id="contact-method"
                      name="preferredContactMethod"
                      value={formData.preferredContactMethod}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select contact method</option>
                      <option value="Phone Call">Phone Call</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                    className="form-textarea"
                  ></textarea>
                </div>

                <div className="consent-checkbox-wrap">
                  <input
                    type="checkbox"
                    id="contact-consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="contact-consent" className="consent-checkbox-text">
                    I understand that submitting this form does not constitute medical advice or establish an emergency medical service.
                  </label>
                </div>

                <button type="submit" className="contact-submit-btn">
                  <Send size={16} />
                  <span>Send Enquiry</span>
                </button>

                {submitted && (
                  <div className="form-success-banner" role="alert">
                    <CheckCircle2 size={18} />
                    <span>Thank you! Your enquiry has been received. Our team will contact you shortly.</span>
                  </div>
                )}
              </form>
            </div>

            {/* Middle: Consultation Photo */}
            <div className="contact-middle-photo-wrap">
              <img
                src={consultationPatientMaleImg}
                alt="Practitioner in consultation with male visitor"
                className="contact-middle-photo"
              />
            </div>

            {/* Right: Notices Stack */}
            <div className="contact-notices-stack">
              <div className="notice-card privacy-notice">
                <div className="notice-header">
                  <Lock size={18} className="notice-icon" />
                  <h3>Important Privacy Note</h3>
                </div>
                <p className="notice-body">
                  The standard website enquiry form should not ask visitors to upload detailed medical records or enter extensive medical history. If RBN needs health information before a clinical service, use an appropriate secure process and provide the required privacy information.
                </p>
              </div>

              <div className="notice-card emergency-notice">
                <div className="notice-header">
                  <AlertTriangle size={18} className="notice-icon" />
                  <h3>Emergency Notice</h3>
                </div>
                <p className="notice-body">
                  This website and its contact form are not emergency medical services. If you have severe or rapidly worsening symptoms or believe you may be experiencing a medical emergency, seek appropriate emergency medical care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          BEFORE YOUR VISIT SECTION
          ==================================================================== */}
      <section className="contact-before-visit-section">
        <div className="contact-container">
          <div className="before-visit-card">
            <div className="before-visit-img-wrap">
              <img
                src={beforeVisitChecklistImg}
                alt="Preparation checklist notepad"
                className="before-visit-img"
              />
            </div>
            <div className="before-visit-content">
              <div className="before-visit-header">
                <h3>Before Your Visit</h3>
                <div className="before-gold-line"></div>
              </div>
              <p className="before-visit-desc">
                If the team asks you to bring information to a consultation, prepare a current medication list and relevant medical information. Confirm whether fasting, special clothing or other preparation is actually required for the service you are attending.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          BOOK A CONSULTATION CTA BANNER
          ==================================================================== */}
      <section className="contact-cta-section">
        <div className="contact-container">
          <a href="#contact-form" onClick={scrollToForm} className="contact-cta-banner" aria-label="Book a Consultation">
            <img
              src={ctaMortarImg}
              alt="Ayurvedic herbs mortar and pestle"
              className="cta-banner-left-img"
            />
            <div className="cta-banner-center">
              <div className="cta-banner-divider"></div>
              <h2 className="cta-banner-title">Book a Consultation</h2>
              <div className="cta-circle-arrow-btn">
                <ArrowRight size={20} />
              </div>
            </div>
            <img
              src={ctaStonesImg}
              alt="Zen stacked balancing stones"
              className="cta-banner-right-img"
            />
          </a>
        </div>
      </section>

      {/* ====================================================================
          RECOMMENDED INTERNAL LINKS
          ==================================================================== */}
      <section className="contact-links-section">
        <div className="contact-container">
          <div className="contact-section-header">
            <span className="section-icon">
              <Leaf size={22} />
            </span>
            <h2>Recommended Internal Links</h2>
            <div className="header-gold-line"></div>
          </div>

          <div className="contact-links-row">
            <Link to="/about" className="contact-link-pill">
              <div className="link-pill-left">
                <span className="link-pill-icon">
                  <Users size={18} />
                </span>
                <span>About RBN</span>
              </div>
              <ArrowRight size={16} className="link-pill-arrow" />
            </Link>

            <Link to="/wellness-goals" className="contact-link-pill">
              <div className="link-pill-left">
                <span className="link-pill-icon">
                  <Leaf size={18} />
                </span>
                <span>Wellness Goals</span>
              </div>
              <ArrowRight size={16} className="link-pill-arrow" />
            </Link>

            <Link to="/" className="contact-link-pill">
              <div className="link-pill-left">
                <span className="link-pill-icon">
                  <Home size={18} />
                </span>
                <span>Home</span>
              </div>
              <ArrowRight size={16} className="link-pill-arrow" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactConsultation;
