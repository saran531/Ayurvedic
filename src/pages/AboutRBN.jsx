import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  ChevronRight,
  Leaf,
  MessageSquare,
  ClipboardCheck,
  Sprout,
  BookOpen,
  Heart,
  Target,
  Compass,
  Users,
  GraduationCap,
  ShieldCheck,
  Briefcase,
  Shield
} from 'lucide-react';
import './AboutRBN.css';

// Exact image assets extracted from approved reference screenshot
import heroHerbsImg from '../assets/images/about/about-hero-herbs.png';
import visionStonesImg from '../assets/images/about/vision-stones.png';
import missionMeditationImg from '../assets/images/about/mission-meditation.png';
import doctor1Img from '../assets/images/about/team-doctor-1.png';
import doctor2Img from '../assets/images/about/team-doctor-2.png';
import doctor3Img from '../assets/images/about/team-doctor-3.png';
import commitmentHerbsImg from '../assets/images/about/commitment-herbs.png';

function AboutRBN() {
  return (
    <div className="about-page">
      <div className="container">
        {/* ==================================================================
            SECTION 1: BREADCRUMB NAVIGATION
            ================================================================== */}
        <nav className="about-breadcrumb-bar" aria-label="Breadcrumb">
          <ol className="about-breadcrumb-list">
            <li className="about-breadcrumb-item">
              <Link to="/">
                <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="about-breadcrumb-separator">
              <ChevronRight size={14} />
            </li>
            <li className="about-breadcrumb-item">
              <span className="about-breadcrumb-current" aria-current="page">About RBN</span>
            </li>
          </ol>
        </nav>

        {/* ==================================================================
            SECTION 2: ABOUT HERO SECTION
            ================================================================== */}
        <section className="about-hero-section">
          <div className="about-hero-grid">
            {/* Left Content */}
            <div className="about-hero-content">
              <div className="about-hero-eyebrow-wrap">
                <span className="about-hero-eyebrow">ABOUT RBN</span>
                <span className="about-hero-eyebrow-line"></span>
              </div>

              <h1 className="about-hero-title">
                Integrated Wellness.<br />
                Individual Attention.<br />
                <span className="about-hero-green">Healthier Living.</span>
              </h1>

              <p className="about-hero-text">
                RBN AYUSH HEALTH CARE is an integrated healthcare and wellness centre in Madurai
                created around a simple idea: wellbeing is influenced by the whole pattern of daily
                life, not only by a single symptom or a single appointment. Food habits, physical
                activity, sleep, stress, environment, work routines and personal health history can
                all shape how a person feels and functions.
              </p>

              <p className="about-hero-text">
                For that reason, RBN’s wellness approach brings together naturopathy, yoga,
                appropriate AYUSH wellness principles, selected advanced wellness services and
                lifestyle education. The aim is to help people understand their options, receive
                appropriate professional guidance and build practical routines that can support
                long-term wellbeing.
              </p>
            </div>

            {/* Right Arched Image */}
            <div className="about-hero-image-wrap">
              <div className="about-hero-arch-container">
                <img
                  src={heroHerbsImg}
                  alt="Ayurvedic mortar, herbal ingredients, natural oils and medicinal plants"
                  className="about-hero-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: OUR PHILOSOPHY SECTION
            ================================================================== */}
        <section className="about-philosophy-section">
          <div className="section-centered-header">
            <div className="philosophy-heading-wrap">
              <Leaf size={22} className="philosophy-leaf-icon" />
              <h2 className="philosophy-heading">Our Philosophy</h2>
              <span className="philosophy-heading-line"></span>
            </div>
            <p className="philosophy-desc">
              RBN believes responsible wellness care should begin with understanding. Before
              recommending a therapy or program, the team should first understand the individual's
              goals, relevant health information and lifestyle. This creates space for a more
              personalised conversation and helps avoid the assumption that one therapy is
              appropriate for everyone.
            </p>
          </div>

          {/* Five Philosophy Cards in Horizontal Flow */}
          <div className="philosophy-cards-row">
            {/* Card 1: Understand */}
            <div className="philosophy-card-container">
              <div className="philosophy-card">
                <div className="philosophy-card-icon-wrap">
                  <MessageSquare size={22} />
                </div>
                <h3 className="philosophy-card-title">Understand</h3>
                <p className="philosophy-card-text">
                  Listen to the person's concerns, routines, expectations and wellness goals.
                </p>
              </div>
              <span className="philosophy-arrow-indicator">→</span>
            </div>

            {/* Card 2: Assess */}
            <div className="philosophy-card-container">
              <div className="philosophy-card">
                <div className="philosophy-card-icon-wrap">
                  <ClipboardCheck size={22} />
                </div>
                <h3 className="philosophy-card-title">Assess</h3>
                <p className="philosophy-card-text">
                  Consider relevant health history, current medications, lifestyle factors and suitability for the service being discussed.
                </p>
              </div>
              <span className="philosophy-arrow-indicator">→</span>
            </div>

            {/* Card 3: Personalise */}
            <div className="philosophy-card-container">
              <div className="philosophy-card">
                <div className="philosophy-card-icon-wrap">
                  <Sprout size={22} />
                </div>
                <h3 className="philosophy-card-title">Personalise</h3>
                <p className="philosophy-card-text">
                  Recommend an appropriate pathway rather than automatically offering the same package to every visitor.
                </p>
              </div>
              <span className="philosophy-arrow-indicator">→</span>
            </div>

            {/* Card 4: Educate */}
            <div className="philosophy-card-container">
              <div className="philosophy-card">
                <div className="philosophy-card-icon-wrap">
                  <BookOpen size={22} />
                </div>
                <h3 className="philosophy-card-title">Educate</h3>
                <p className="philosophy-card-text">
                  Help people understand why nutrition, movement, sleep, stress management and consistency matter in everyday wellbeing.
                </p>
              </div>
              <span className="philosophy-arrow-indicator">→</span>
            </div>

            {/* Card 5: Support */}
            <div className="philosophy-card-container">
              <div className="philosophy-card">
                <div className="philosophy-card-icon-wrap">
                  <Heart size={22} />
                </div>
                <h3 className="philosophy-card-title">Support</h3>
                <p className="philosophy-card-text">
                  Review progress where appropriate and encourage realistic habits that can continue outside the centre.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 4: OUR VISION AND OUR MISSION
            ================================================================== */}
        <section className="about-vm-section">
          <div className="about-vm-grid">
            {/* Our Vision Card */}
            <div className="vm-card-vision">
              <div className="vm-image-wrap-left">
                <img
                  src={visionStonesImg}
                  alt="Stacked balanced stones with fresh green sprout"
                  className="vm-img-left"
                />
              </div>
              <div className="vm-content">
                <div className="vm-title-wrap">
                  <Target size={22} className="vm-title-icon" />
                  <h3 className="vm-title">Our Vision</h3>
                </div>
                <p className="vm-desc">
                  To promote a more informed, balanced and sustainable approach to wellbeing by
                  integrating appropriate traditional wellness practices, nature-based approaches,
                  lifestyle education and responsible professional guidance.
                </p>
              </div>
            </div>

            {/* Our Mission Card */}
            <div className="vm-card-mission">
              <div className="vm-content">
                <div className="vm-title-wrap">
                  <Compass size={22} className="vm-title-icon" />
                  <h3 className="vm-title">Our Mission</h3>
                </div>
                <p className="vm-desc">
                  To provide accessible and individual-focused wellness support in Madurai while
                  encouraging healthier routines within individuals, families, workplaces and
                  communities.
                </p>
              </div>
              <div className="vm-image-wrap-right">
                <img
                  src={missionMeditationImg}
                  alt="Person meditating outdoors during sunset"
                  className="vm-img-right"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 5: OUR TEAM & CLINICAL TRUST
            ================================================================== */}
        <section className="about-team-section">
          <div className="section-centered-header">
            <div className="team-heading-wrap">
              <span className="team-heading-line"></span>
              <Users size={22} className="team-heading-icon" />
              <h2 className="team-heading">Our Team & Clinical Trust</h2>
              <span className="team-heading-line"></span>
            </div>
            <p className="team-desc">
              For a health-related website, visitors should be able to understand who is responsible
              for the services and educational information they are reading. This page should therefore
              feature the professionals involved in RBN's services with verified names, qualifications,
              relevant professional registrations, areas of practice and experience.
            </p>
          </div>

          {/* Three Team Cards */}
          <div className="team-cards-grid">
            {/* Team Card 1 */}
            <div className="team-card">
              <div className="team-card-avatar-wrap">
                <img
                  src={doctor1Img}
                  alt="Doctor profile"
                  className="team-card-avatar"
                />
              </div>
              <div className="team-card-info">
                <h3 className="team-card-name">[Full Name]</h3>
                <div className="team-card-detail-item">
                  <GraduationCap size={14} className="team-card-detail-icon" />
                  <span>[Qualification]</span>
                </div>
                <div className="team-card-detail-item">
                  <ShieldCheck size={14} className="team-card-detail-icon" />
                  <span>[Registration if applicable]</span>
                </div>
                <div className="team-card-detail-item">
                  <Briefcase size={14} className="team-card-detail-icon" />
                  <span>[Years of Experience]</span>
                </div>
                <div className="team-card-detail-item">
                  <Target size={14} className="team-card-detail-icon" />
                  <span>[Areas of Practice]</span>
                </div>
                <p className="team-card-bio">[Short Biography]</p>
              </div>
            </div>

            {/* Team Card 2 */}
            <div className="team-card">
              <div className="team-card-avatar-wrap">
                <img
                  src={doctor2Img}
                  alt="Doctor profile"
                  className="team-card-avatar"
                />
              </div>
              <div className="team-card-info">
                <h3 className="team-card-name">[Full Name]</h3>
                <div className="team-card-detail-item">
                  <GraduationCap size={14} className="team-card-detail-icon" />
                  <span>[Qualification]</span>
                </div>
                <div className="team-card-detail-item">
                  <ShieldCheck size={14} className="team-card-detail-icon" />
                  <span>[Registration if applicable]</span>
                </div>
                <div className="team-card-detail-item">
                  <Briefcase size={14} className="team-card-detail-icon" />
                  <span>[Years of Experience]</span>
                </div>
                <div className="team-card-detail-item">
                  <Target size={14} className="team-card-detail-icon" />
                  <span>[Areas of Practice]</span>
                </div>
                <p className="team-card-bio">[Short Biography]</p>
              </div>
            </div>

            {/* Team Card 3 */}
            <div className="team-card">
              <div className="team-card-avatar-wrap">
                <img
                  src={doctor3Img}
                  alt="Doctor profile"
                  className="team-card-avatar"
                />
              </div>
              <div className="team-card-info">
                <h3 className="team-card-name">[Full Name]</h3>
                <div className="team-card-detail-item">
                  <GraduationCap size={14} className="team-card-detail-icon" />
                  <span>[Qualification]</span>
                </div>
                <div className="team-card-detail-item">
                  <ShieldCheck size={14} className="team-card-detail-icon" />
                  <span>[Registration if applicable]</span>
                </div>
                <div className="team-card-detail-item">
                  <Briefcase size={14} className="team-card-detail-icon" />
                  <span>[Years of Experience]</span>
                </div>
                <div className="team-card-detail-item">
                  <Target size={14} className="team-card-detail-icon" />
                  <span>[Areas of Practice]</span>
                </div>
                <p className="team-card-bio">[Short Biography]</p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 6: RESPONSIBLE COMMUNICATION SECTION
            ================================================================== */}
        <section className="about-commitment-section">
          <div className="commitment-banner">
            {/* Left: Shield & Heading */}
            <div className="commitment-left">
              <div className="commitment-shield-icon-wrap">
                <Shield size={28} />
              </div>
              <h2 className="commitment-title">
                Our Commitment to<br />
                Responsible Communication
              </h2>
            </div>

            {/* Middle Vertical Separator */}
            <div className="commitment-divider"></div>

            {/* Middle Description */}
            <p className="commitment-text">
              RBN's website should explain services clearly without promising guaranteed outcomes.
              Wellness therapies may be useful in different ways for different people, and the
              strength of clinical evidence can vary by therapy and purpose. Where a service
              requires medical or professional assessment, that requirement should be stated clearly.
            </p>

            {/* Right Ayurvedic herbs image */}
            <div className="commitment-img-wrap">
              <img
                src={commitmentHerbsImg}
                alt="Ayurvedic herbs and natural remedies"
                className="commitment-img"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutRBN;
