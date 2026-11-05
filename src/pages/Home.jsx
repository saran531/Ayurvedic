import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  MessageCircle,
  Phone,
  MapPin,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Users,
  ShieldCheck,
  Heart,
  Droplets,
  Scale,
  RefreshCw,
  FileText,
  Stethoscope,
  Star,
  Activity
} from 'lucide-react';
import './Home.css';

// Exact image assets cropped from reference screenshot
import heroImg from '../assets/images/home/hero-meditation.jpg';
import ayurvedaImg from '../assets/images/home/therapy-ayurveda.jpg';
import naturopathyImg from '../assets/images/home/therapy-naturopathy.jpg';
import yogaImg from '../assets/images/home/therapy-yoga.jpg';
import ivNutritionImg from '../assets/images/home/therapy-iv-nutrition.jpg';
import ozoneImg from '../assets/images/home/therapy-ozone.jpg';
import shirodharaImg from '../assets/images/home/therapy-shirodhara.jpg';
import journeyImg from '../assets/images/home/journey-herbs.jpg';
import sirumalaiImg from '../assets/images/home/sirumalai-retreat.jpg';
import avatarLakshmi from '../assets/images/home/avatar-lakshmi.jpg';
import insightAyurveda from '../assets/images/home/insight-ayurveda.jpg';
import insightYoga from '../assets/images/home/insight-yoga.jpg';
import insightNutrition from '../assets/images/home/insight-nutrition.jpg';

function Home() {
  // State for FAQ accordion
  const [activeFaq, setActiveFaq] = useState(0);

  // FAQ Items
  const faqData = [
    {
      question: 'What is AYUSH and how is it different from allopathy?',
      answer:
        'AYUSH represents Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homoeopathy. Unlike conventional allopathy which often focuses primarily on acute symptoms, AYUSH emphasizes holistic healing, identifying root causes, strengthening the body’s innate restorative capacity, and maintaining balance.'
    },
    {
      question: 'Which therapy is right for me?',
      answer:
        'During your comprehensive clinical consultation, our senior practitioners assess your physical constitution, metabolic state, health history, and individual goals to design a personalized combination of therapies tailored specifically to your needs.'
    },
    {
      question: 'Do you offer online consultations?',
      answer:
        'Yes. We provide scheduled online consultations for evaluation, diet guidance, lifestyle recommendations, and post-therapy follow-ups for clients who cannot visit our Madurai centre in person.'
    },
    {
      question: 'Is Sirumalai retreat suitable for families?',
      answer:
        'Yes. Our Sirumalai Wellness Retreat welcomes individuals, couples, and family members seeking a tranquil natural sanctuary for restorative detox, stress relief, healthy dining, and mindfulness in the hills.'
    },
    {
      question: 'Are the treatments safe?',
      answer:
        'All procedures and natural therapies at RBN AYUSH HEALTH CARE are evidence-informed, administered by qualified practitioners, and strictly follow established clinical safety guidelines.'
    }
  ];

  return (
    <div className="home-page">
      {/* ====================================================================
          SECTION 3: HERO SECTION
          ==================================================================== */}
      <section className="hero-section">
        <div className="container hero-grid">
          {/* Left Column Content */}
          <div className="hero-content">
            <span className="hero-eyebrow">
              NATURAL HEALING • BALANCED LIVING • BETTER TOMORROW
            </span>

            <h1 className="hero-heading">
              Holistic Healing<br />
              for a <span className="hero-heading-highlight">Healthier, Happier</span> You
            </h1>

            <p className="hero-description">
              RBN AYUSH HEALTH CARE is a trusted AYUSH wellness centre in Madurai offering
              Ayurveda, Naturopathy, Yoga, Ozone Therapy, IV Nutrition, Acupuncture,
              Hydrotherapy and personalized wellness programs.
            </p>

            {/* CTA Group */}
            <div className="hero-cta-group">
              <Link to="/contact" className="btn-hero-primary">
                <Calendar size={16} />
                <span>Book a Consultation</span>
              </Link>

              <a
                href="https://wa.me/919944425201"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-outline"
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </a>

              <a href="tel:+919944425201" className="btn-hero-outline">
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Location Link */}
            <div>
              <a
                href="https://maps.google.com/?q=Madurai"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-location-link"
              >
                <MapPin size={15} />
                <span>Get Directions</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column Image */}
          <div className="hero-image-col">
            <div className="hero-image-wrapper">
              <img
                src={heroImg}
                alt="Woman meditating in peaceful natural wellness environment"
                className="hero-main-img"
              />
              <div className="hero-overlay-badge">
                <div className="hero-badge-title">Ancient Wisdom</div>
                <div className="hero-badge-sub">for Modern Wellness</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4: TRUST AND BENEFIT STRIP
          ==================================================================== */}
      <section className="benefit-strip-section">
        <div className="container">
          <div className="benefit-strip-card">
            {/* Card 1 */}
            <div className="benefit-strip-item">
              <div className="benefit-strip-icon">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="benefit-strip-title">Integrative<br />AYUSH Therapies</h3>
                <p className="benefit-strip-sub">Traditional wisdom with modern care</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="benefit-strip-item">
              <div className="benefit-strip-icon">
                <Users size={20} />
              </div>
              <div>
                <h3 className="benefit-strip-title">Personalized<br />Wellness Plans</h3>
                <p className="benefit-strip-sub">For every age and lifestyle</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="benefit-strip-item">
              <div className="benefit-strip-icon">
                <Activity size={20} />
              </div>
              <div>
                <h3 className="benefit-strip-title">Experienced<br />Care Team</h3>
                <p className="benefit-strip-sub">Safe, evidence-informed approach</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="benefit-strip-item">
              <div className="benefit-strip-icon">
                <Heart size={20} />
              </div>
              <div>
                <h3 className="benefit-strip-title">Trusted by<br />5,000+ Families</h3>
                <p className="benefit-strip-sub">In and around Madurai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 5: OUR THERAPIES
          ==================================================================== */}
      <section className="therapies-section">
        <div className="container">
          {/* Header Row */}
          <div className="section-header-flex">
            <div>
              <span className="section-eyebrow">OUR THERAPIES</span>
              <h2 className="section-title">Natural Therapies for Whole-Person Wellness</h2>
              <p className="section-subtitle">
                Evidence-informed AYUSH therapies to help you restore balance, build immunity
                and live a healthier, more energetic life.
              </p>
            </div>
            <div>
              <Link to="/ayush-integrated-healthcare" className="btn-view-all">
                <span>View All Therapies</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* 6 Therapy Cards Grid */}
          <div className="therapies-grid">
            {/* Card 1: Ayurveda */}
            <div className="therapy-card">
              <div className="therapy-card-thumb">
                <img src={ayurvedaImg} alt="Ayurveda herbs and natural healing" className="therapy-card-img" />
                <div className="therapy-card-icon-badge">
                  <Sparkles size={14} />
                </div>
              </div>
              <div className="therapy-card-body">
                <h3 className="therapy-card-title">Ayurveda</h3>
                <p className="therapy-card-desc">Restore balance with natural healing</p>
                <Link to="/ayush-integrated-healthcare" className="therapy-card-link">
                  <span>Learn more</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Card 2: Naturopathy */}
            <div className="therapy-card">
              <div className="therapy-card-thumb">
                <img src={naturopathyImg} alt="Naturopathy healing flowers" className="therapy-card-img" />
                <div className="therapy-card-icon-badge">
                  <Droplets size={14} />
                </div>
              </div>
              <div className="therapy-card-body">
                <h3 className="therapy-card-title">Naturopathy</h3>
                <p className="therapy-card-desc">Heal naturally through nature's elements</p>
                <Link to="/naturopathy" className="therapy-card-link">
                  <span>Learn more</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Card 3: Yoga */}
            <div className="therapy-card">
              <div className="therapy-card-thumb">
                <img src={yogaImg} alt="Yoga meditation at sunrise" className="therapy-card-img" />
                <div className="therapy-card-icon-badge">
                  <Heart size={14} />
                </div>
              </div>
              <div className="therapy-card-body">
                <h3 className="therapy-card-title">Yoga</h3>
                <p className="therapy-card-desc">Strengthen body, calm the mind</p>
                <Link to="/yoga-meditation" className="therapy-card-link">
                  <span>Learn more</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Card 4: IV Nutrition */}
            <div className="therapy-card">
              <div className="therapy-card-thumb">
                <img src={ivNutritionImg} alt="IV Nutrition bottles" className="therapy-card-img" />
                <div className="therapy-card-icon-badge">
                  <Activity size={14} />
                </div>
              </div>
              <div className="therapy-card-body">
                <h3 className="therapy-card-title">IV Nutrition</h3>
                <p className="therapy-card-desc">Boost immunity and energy</p>
                <Link to="/iv-nutrition-wellness" className="therapy-card-link">
                  <span>Learn more</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Card 5: Ozone Therapy */}
            <div className="therapy-card">
              <div className="therapy-card-thumb">
                <img src={ozoneImg} alt="Ozone therapy cellular wellness" className="therapy-card-img" />
                <div className="therapy-card-icon-badge">
                  <ShieldCheck size={14} />
                </div>
              </div>
              <div className="therapy-card-body">
                <h3 className="therapy-card-title">Ozone Therapy</h3>
                <p className="therapy-card-desc">Support cellular wellness</p>
                <Link to="/ozone-therapy" className="therapy-card-link">
                  <span>Learn more</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Card 6: Shirodhara */}
            <div className="therapy-card">
              <div className="therapy-card-thumb">
                <img src={shirodharaImg} alt="Shirodhara relaxation oil therapy" className="therapy-card-img" />
                <div className="therapy-card-icon-badge">
                  <Sparkles size={14} />
                </div>
              </div>
              <div className="therapy-card-body">
                <h3 className="therapy-card-title">Shirodhara</h3>
                <p className="therapy-card-desc">Deep relaxation for mind and body</p>
                <Link to="/shirodhara-rejuvenation" className="therapy-card-link">
                  <span>Learn more</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 6: HOW YOUR WELLNESS JOURNEY WORKS
          ==================================================================== */}
      <section className="journey-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-eyebrow">SIMPLE • PERSONALIZED • SUPPORTIVE</span>
            <h2 className="section-title">How Your Wellness Journey Works</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A simple and supportive process to help you achieve your health goals naturally.
            </p>
          </div>

          <div className="journey-grid">
            {/* Left Image */}
            <div className="journey-image-col">
              <img
                src={journeyImg}
                alt="Natural herbal remedies and ingredients"
                className="journey-left-img"
              />
            </div>

            {/* Right Steps Progression */}
            <div className="journey-steps-row">
              {/* Step 1 */}
              <div className="journey-step-card">
                <div className="journey-step-badge-wrap">
                  <div className="journey-step-number">1</div>
                  <div className="journey-step-icon">
                    <Calendar size={18} />
                  </div>
                </div>
                <div className="journey-step-arrow">→</div>
                <h3 className="journey-step-title">Book a Consultation</h3>
                <p className="journey-step-desc">Choose a convenient time, in-clinic or online.</p>
              </div>

              {/* Step 2 */}
              <div className="journey-step-card">
                <div className="journey-step-badge-wrap">
                  <div className="journey-step-number">2</div>
                  <div className="journey-step-icon">
                    <Stethoscope size={18} />
                  </div>
                </div>
                <div className="journey-step-arrow">→</div>
                <h3 className="journey-step-title">Assessment</h3>
                <p className="journey-step-desc">Detailed discussion and wellness evaluation.</p>
              </div>

              {/* Step 3 */}
              <div className="journey-step-card">
                <div className="journey-step-badge-wrap">
                  <div className="journey-step-number">3</div>
                  <div className="journey-step-icon">
                    <FileText size={18} />
                  </div>
                </div>
                <div className="journey-step-arrow">→</div>
                <h3 className="journey-step-title">Personalized Plan</h3>
                <p className="journey-step-desc">Tailored therapies, diet and lifestyle guidance.</p>
              </div>

              {/* Step 4 */}
              <div className="journey-step-card">
                <div className="journey-step-badge-wrap">
                  <div className="journey-step-number">4</div>
                  <div className="journey-step-icon">
                    <Heart size={18} />
                  </div>
                </div>
                <h3 className="journey-step-title">Begin Your Journey</h3>
                <p className="journey-step-desc">Regular follow-ups and continuous support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 7: SIRUMALAI WELLNESS RETREAT BANNER
          ==================================================================== */}
      <section className="retreat-section">
        <div className="container">
          <div className="retreat-banner">
            {/* Left Image with Badge */}
            <div className="retreat-banner-image-wrap">
              <img
                src={sirumalaiImg}
                alt="Sirumalai hills and wellness cottages"
                className="retreat-banner-img"
              />
              <div className="retreat-badge-emblem">
                <Sparkles size={14} />
                <span>RBN</span>
              </div>
            </div>

            {/* Right Content & Benefits */}
            <div className="retreat-banner-content">
              <div>
                <span className="section-eyebrow" style={{ color: '#e5c16e' }}>
                  SIRUMALAI WELLNESS RETREAT
                </span>
                <h2 className="retreat-banner-heading">Rejuvenate in the Lap of Nature</h2>
                <p className="retreat-banner-desc">
                  Experience our exclusive wellness retreat at Sirumalai – a peaceful hill destination
                  for deep healing, detox and holistic rejuvenation.
                </p>

                <div className="retreat-banner-btn-group">
                  <Link to="/sirumalai-retreat" className="btn-retreat-white">
                    Explore Sirumalai Retreat
                  </Link>
                  <Link to="/wellness-camps" className="btn-retreat-outline">
                    View Programs
                  </Link>
                </div>
              </div>

              {/* Benefits Column */}
              <div className="retreat-benefits-list">
                <div className="retreat-benefit-item">
                  <Droplets size={18} />
                  <span>Detox Programs</span>
                </div>
                <div className="retreat-benefit-item">
                  <Scale size={18} />
                  <span>Weight Management</span>
                </div>
                <div className="retreat-benefit-item">
                  <Heart size={18} />
                  <span>Stress Relief</span>
                </div>
                <div className="retreat-benefit-item">
                  <RefreshCw size={18} />
                  <span>Lifestyle Reset</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 8: WHY CHOOSE RBN AYUSH HEALTH CARE?
          ==================================================================== */}
      <section className="why-choose-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-eyebrow">WHY CHOOSE RBN AYUSH HEALTH CARE?</span>
            <h2 className="section-title">
              More than Treatment – A Partner in Your Wellness Journey
            </h2>
          </div>

          <div className="why-choose-grid">
            {/* Card 1 */}
            <div className="why-card">
              <div className="why-card-icon">
                <Sparkles size={20} />
              </div>
              <h3 className="why-card-title">Integrative Approach</h3>
              <p className="why-card-desc">
                Blend of Ayurveda, Naturopathy, Yoga and modern wellness therapies.
              </p>
            </div>

            {/* Card 2 */}
            <div className="why-card">
              <div className="why-card-icon">
                <Heart size={20} />
              </div>
              <h3 className="why-card-title">Personalized Care</h3>
              <p className="why-card-desc">
                Tailored plans for your unique health needs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="why-card">
              <div className="why-card-icon">
                <Users size={20} />
              </div>
              <h3 className="why-card-title">Experienced Team</h3>
              <p className="why-card-desc">
                Qualified and compassionate AYUSH practitioners.
              </p>
            </div>

            {/* Card 4 */}
            <div className="why-card">
              <div className="why-card-icon">
                <ShieldCheck size={20} />
              </div>
              <h3 className="why-card-title">Safe & Natural</h3>
              <p className="why-card-desc">
                Evidence-informed, natural and preventive care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 9: TESTIMONIAL & CONSULTATION FORM
          ==================================================================== */}
      <section className="social-proof-section">
        <div className="container social-proof-grid">
          {/* Left Column: Testimonial */}
          <div className="testimonial-card-wrap">
            <span className="section-eyebrow">WHAT OUR CLIENTS SAY</span>
            <h2 className="section-title">Trusted by Families, Inspired by Results</h2>

            <div className="testimonial-card">
              <div className="testimonial-quote-mark">“</div>
              <p className="testimonial-text">
                RBN AYUSH helped me manage my stress and improve my overall health naturally.
                The doctors were very caring and explain everything clearly. Highly recommended!
              </p>

              <div className="testimonial-user-row">
                <div className="testimonial-user-info">
                  <img
                    src={avatarLakshmi}
                    alt="Mrs. Lakshmi"
                    className="testimonial-avatar"
                  />
                  <div>
                    <div className="testimonial-name">Mrs. Lakshmi</div>
                    <div className="testimonial-location">Madurai</div>
                    <div className="testimonial-rating" aria-label="5 stars rating">
                      <Star size={13} fill="#dfaa30" stroke="#dfaa30" style={{ display: 'inline' }} />
                      <Star size={13} fill="#dfaa30" stroke="#dfaa30" style={{ display: 'inline', marginLeft: '2px' }} />
                      <Star size={13} fill="#dfaa30" stroke="#dfaa30" style={{ display: 'inline', marginLeft: '2px' }} />
                      <Star size={13} fill="#dfaa30" stroke="#dfaa30" style={{ display: 'inline', marginLeft: '2px' }} />
                      <Star size={13} fill="#dfaa30" stroke="#dfaa30" style={{ display: 'inline', marginLeft: '2px' }} />
                    </div>
                  </div>
                </div>

                <div className="testimonial-nav-arrows">
                  <button type="button" className="testimonial-nav-btn" aria-label="Previous testimonial">
                    ←
                  </button>
                  <span>• • •</span>
                  <button type="button" className="testimonial-nav-btn" aria-label="Next testimonial">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Consultation Form */}
          <div className="consultation-form-card">
            <h2 className="form-heading">Book a Free Consultation</h2>
            <p className="form-subtext">Take the first step towards a healthier, happier you.</p>

            <form className="consult-form" onSubmit={(e) => e.preventDefault()}>
              {/* Row 1: 3 Columns */}
              <div className="form-row-3col">
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">Full Name*</label>
                  <input
                    type="text"
                    id="fullName"
                    className="form-input"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-input"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="preferredDate">Preferred Date</label>
                  <input
                    type="text"
                    id="preferredDate"
                    className="form-input"
                    placeholder="Select date"
                  />
                </div>
              </div>

              {/* Row 2: Message Field */}
              <div className="form-group">
                <label className="form-label" htmlFor="concern">Concern / Message</label>
                <input
                  type="text"
                  id="concern"
                  className="form-input"
                  placeholder="Tell us about your health concern"
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-form-submit">
                <span>Book My Consultation</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 10 & 11: LATEST INSIGHTS & FAQ SPLIT SECTION
          ==================================================================== */}
      <section className="insights-faq-section">
        <div className="container insights-faq-grid">
          {/* Left Column: Latest Insights */}
          <div>
            <div className="section-header-flex" style={{ marginBottom: '1.25rem' }}>
              <div>
                <span className="section-eyebrow">LATEST INSIGHTS</span>
                <h2 className="section-title">Health Tips & Wellness Updates</h2>
                <p className="section-subtitle" style={{ marginBottom: 0 }}>
                  Simple tips, insights and updates to help you live a healthier life.
                </p>
              </div>
              <div>
                <Link to="/health-library" className="btn-view-all">
                  <span>View All Articles</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            <div className="insights-cards-col">
              {/* Article 1 */}
              <div className="insight-card-h">
                <div className="insight-thumb">
                  <img src={insightAyurveda} alt="Natural Ayurvedic herbs" className="insight-img" />
                </div>
                <div>
                  <span className="insight-tag tag-ayurveda">AYURVEDA</span>
                  <h3 className="insight-title">5 Daily Habits for a Stronger Immune System</h3>
                  <Link to="/health-library" className="insight-link">
                    <span>Read More</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Article 2 */}
              <div className="insight-card-h">
                <div className="insight-thumb">
                  <img src={insightYoga} alt="Yoga meditation" className="insight-img" />
                </div>
                <div>
                  <span className="insight-tag tag-yoga">YOGA</span>
                  <h3 className="insight-title">How Yoga Helps Reduce Stress and Improve Sleep</h3>
                  <Link to="/health-library" className="insight-link">
                    <span>Read More</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Article 3 */}
              <div className="insight-card-h">
                <div className="insight-thumb">
                  <img src={insightNutrition} alt="Healthy natural food ingredients" className="insight-img" />
                </div>
                <div>
                  <span className="insight-tag tag-nutrition">NUTRITION</span>
                  <h3 className="insight-title">Natural Ways to Improve Digestive Health</h3>
                  <Link to="/health-library" className="insight-link">
                    <span>Read More</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div>
            <span className="section-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-title">Your Questions, Answered</h2>
            <p className="section-subtitle" style={{ marginBottom: '1.25rem' }}>
              Common queries regarding our centre, treatment protocols, and therapies.
            </p>

            <div className="faq-accordion">
              {faqData.map((item, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <ChevronDown size={17} className="faq-icon-arrow" />
                    </button>
                    {isOpen && (
                      <div className="faq-answer-panel">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
