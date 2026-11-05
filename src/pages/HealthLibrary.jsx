import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  ChevronRight,
  BookOpen,
  ArrowRight,
  Leaf,
  Flower2,
  Activity,
  Apple,
  Heart,
  Mountain,
  Search,
  ShieldCheck,
  Users,
  ClipboardCheck,
  CheckSquare,
  Link2,
  Phone
} from 'lucide-react';
import './HealthLibrary.css';

// High-resolution image assets extracted from reference screenshot
import heroLibraryWomanImg from '../assets/images/health-library/hero-library-woman.png';
import topicNaturopathyImg from '../assets/images/health-library/topic-1-naturopathy.png';
import topicYogaImg from '../assets/images/health-library/topic-2-yoga.png';
import topicLifestyleImg from '../assets/images/health-library/topic-3-lifestyle.png';
import topicNutritionImg from '../assets/images/health-library/topic-4-nutrition.png';
import topicMetabolicImg from '../assets/images/health-library/topic-5-metabolic.png';
import topicGutImg from '../assets/images/health-library/topic-6-gut.png';
import topicTherapiesImg from '../assets/images/health-library/topic-7-therapies.png';
import topicRetreatsImg from '../assets/images/health-library/topic-8-retreats.png';
import articleFeatMainImg from '../assets/images/health-library/article-feat-main.png';
import articleFeatHydroImg from '../assets/images/health-library/article-feat-hydro.png';
import articleFeatYogaDiffImg from '../assets/images/health-library/article-feat-yoga-diff.png';
import directoryLaptopImg from '../assets/images/health-library/directory-laptop.png';
import sectionAeoLaptopImg from '../assets/images/health-library/section-aeo-laptop.png';
import ctaLibraryBookImg from '../assets/images/health-library/cta-library-book.png';

function HealthLibrary() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const topics = [
    { title: 'Naturopathy', img: topicNaturopathyImg, icon: <Leaf size={16} />, path: '/naturopathy' },
    { title: 'Yoga & Meditation', img: topicYogaImg, icon: <Flower2 size={16} />, path: '/yoga-meditation' },
    { title: 'Lifestyle Wellness', img: topicLifestyleImg, icon: <Activity size={16} />, path: '/lifestyle-modification' },
    { title: 'Nutrition', img: topicNutritionImg, icon: <Apple size={16} />, path: '/metabolic-wellness' },
    { title: 'Metabolic Wellness', img: topicMetabolicImg, icon: <Heart size={16} />, path: '/metabolic-wellness' },
    { title: 'Gut Wellness', img: topicGutImg, icon: <Activity size={16} />, path: '/gut-health-detox' },
    { title: 'Wellness Therapies', img: topicTherapiesImg, icon: <Leaf size={16} />, path: '/hydrotherapy-natural-therapies' },
    { title: 'Camps, Retreats & Healthy Living', img: topicRetreatsImg, icon: <Mountain size={16} />, path: '/wellness-camps' }
  ];

  const categories = [
    'All',
    'Naturopathy',
    'Yoga & Meditation',
    'Lifestyle Wellness',
    'Nutrition',
    'Metabolic Wellness',
    'Gut Wellness',
    'Wellness Therapies',
    'Camps, Retreats & Healthy Living'
  ];

  const articlesCol1 = [
    { num: '01', title: "What Is Naturopathy? A Beginner's Guide" },
    { num: '02', title: 'What Happens During a Naturopathy Consultation?' },
    { num: '03', title: 'What Is Hydrotherapy?' },
    { num: '04', title: 'What Is Mud Therapy?' },
    { num: '05', title: 'What Is a Plantain Leaf Bath?' },
    { num: '06', title: 'What Is Shirodhara?' },
    { num: '07', title: "Yoga vs Meditation: What's the Difference?" },
    { num: '08', title: 'What Is Ozone Therapy?' },
    { num: '09', title: 'Questions to Ask Before Considering Ozone Therapy?' },
    { num: '10', title: 'What Is IV Nutrition?' }
  ];

  const articlesCol2 = [
    { num: '11', title: 'What Is Lifestyle Modification?' },
    { num: '12', title: 'Everyday Habits That Support Metabolic Wellness' },
    { num: '13', title: 'Understanding Gut Wellness' },
    { num: '14', title: 'Sleep and Overall Wellbeing' },
    { num: '15', title: 'Stress Management Through Lifestyle Practices' },
    { num: '16', title: 'What Happens at a Wellness Retreat?' },
    { num: '17', title: 'How to Prepare for a Wellness Retreat' },
    { num: '18', title: 'What Happens at a One-Day Wellness Camp?' },
    { num: '19', title: 'How Yoga Fits Into a Healthy Lifestyle' },
    { num: '20', title: 'Building Sustainable Healthy Habits' }
  ];

  const structureItemsLeft = [
    "Clear H1 matching the reader's question",
    '40-60 word direct answer',
    'Key points / summary',
    'Detailed explanation',
    'What a person may experience or expect'
  ];

  const structureItemsRight = [
    'Safety, limitations or when medical care is needed',
    'Relevant FAQs',
    'Sources / references where appropriate',
    'Reviewed-by block',
    'Related RBN service and related articles'
  ];

  return (
    <div className="library-page">
      <div className="container">
        {/* ==================================================================
            BREADCRUMB
            ================================================================== */}
        <nav className="library-breadcrumb-bar" aria-label="Breadcrumb">
          <ol className="library-breadcrumb-list">
            <li className="library-breadcrumb-item">
              <Link to="/">
                <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="library-breadcrumb-separator">
              <ChevronRight size={14} />
            </li>
            <li className="library-breadcrumb-item">
              <span className="library-breadcrumb-current" aria-current="page">
                Health Library
              </span>
            </li>
          </ol>
        </nav>

        {/* ==================================================================
            HERO SECTION
            ================================================================== */}
        <section className="library-hero-section">
          <div className="library-hero-grid">
            <div className="library-hero-content">
              <h1 className="library-hero-title">
                Understand Your Wellbeing.<br />
                Make Informed Choices.
              </h1>

              {/* Decorative Gold Leaf Underline */}
              <div className="library-hero-divider" aria-hidden="true">
                <Leaf size={18} />
              </div>

              <p className="library-hero-desc">
                The RBN Health Library should become the website's long-term educational and topical-authority hub.
                Its purpose is not to publish hundreds of short keyword articles. It should answer real questions in
                clear language, distinguish wellness information from medical advice and connect readers to relevant
                RBN services only when appropriate.
              </p>

              <a href="#find-articles" className="library-hero-cta">
                <BookOpen size={18} />
                <span>Explore the Health Library &rarr;</span>
              </a>
            </div>

            <div className="library-hero-image-wrap">
              <div className="library-hero-frame">
                <img
                  src={heroLibraryWomanImg}
                  alt="Woman Reading a Wellness Book in a Natural Green Environment"
                  className="library-hero-img"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 1: EXPLORE BY TOPIC (8 Cards in 4x2 Grid)
            ================================================================== */}
        <section className="library-topics-section">
          <div className="library-section-header">
            <div className="library-section-line" aria-hidden="true"></div>
            <h2 className="library-section-title">
              <Leaf size={24} className="library-section-icon" />
              <span>Explore by Topic</span>
            </h2>
            <div className="library-section-line" aria-hidden="true"></div>
          </div>

          <div className="library-topics-grid">
            {topics.map((t, idx) => (
              <Link key={idx} to={t.path} className="library-topic-card">
                <div className="library-topic-img-wrap">
                  <img src={t.img} alt={t.title} className="library-topic-img" loading="lazy" />
                  <div className="library-topic-badge">{t.icon}</div>
                </div>
                <div className="library-topic-footer">
                  <span className="library-topic-title">{t.title}</span>
                  <span className="library-topic-arrow">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ==================================================================
            SECTION 2: FEATURED EDUCATIONAL ARTICLES
            ================================================================== */}
        <section className="library-featured-section">
          <div className="library-section-header">
            <div className="library-section-line" aria-hidden="true"></div>
            <h2 className="library-section-title">
              <BookOpen size={24} className="library-section-icon" />
              <span>Featured Educational Articles</span>
            </h2>
            <div className="library-section-line" aria-hidden="true"></div>
          </div>

          <div className="library-featured-grid">
            {/* Main Featured Article (Left) */}
            <div className="library-featured-main-card">
              <div className="library-featured-main-img-wrap">
                <img
                  src={articleFeatMainImg}
                  alt="What Is Naturopathy? A Beginner's Guide"
                  className="library-featured-main-img"
                  loading="lazy"
                />
              </div>
              <div className="library-featured-main-content">
                <h3 className="library-featured-main-title">
                  What Is Naturopathy?<br />
                  A Beginner's Guide
                </h3>
                <Link to="/naturopathy" className="library-pill-btn">
                  <span>Read Article &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Two Stacked Side Articles (Right) */}
            <div className="library-featured-side-list">
              <div className="library-featured-side-card">
                <div className="library-featured-side-img-wrap">
                  <img
                    src={articleFeatHydroImg}
                    alt="What Is Hydrotherapy?"
                    className="library-featured-side-img"
                    loading="lazy"
                  />
                </div>
                <div className="library-featured-side-content">
                  <h4 className="library-featured-side-title">What Is Hydrotherapy?</h4>
                  <Link to="/hydrotherapy-natural-therapies" className="library-pill-btn">
                    <span>Read Article &rarr;</span>
                  </Link>
                </div>
              </div>

              <div className="library-featured-side-card">
                <div className="library-featured-side-img-wrap">
                  <img
                    src={articleFeatYogaDiffImg}
                    alt="Yoga vs Meditation: What's the Difference?"
                    className="library-featured-side-img"
                    loading="lazy"
                  />
                </div>
                <div className="library-featured-side-content">
                  <h4 className="library-featured-side-title">Yoga vs Meditation: What's the Difference?</h4>
                  <Link to="/yoga-meditation" className="library-pill-btn">
                    <span>Read Article &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: FIND ARTICLES & DIRECTORY
            ================================================================== */}
        <section id="find-articles" className="library-find-section">
          <div className="library-section-header">
            <div className="library-section-line" aria-hidden="true"></div>
            <h2 className="library-section-title">
              <Search size={22} className="library-section-icon" />
              <span>Find Articles</span>
            </h2>
            <div className="library-section-line" aria-hidden="true"></div>
          </div>

          {/* Search + Category Filter Bar */}
          <div className="library-search-filters-row">
            <div className="library-search-box-wrap">
              <form className="library-search-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="library-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="library-search-btn" aria-label="Search">
                  <Search size={18} />
                </button>
              </form>
            </div>

            <div className="library-filters-wrap">
              <span className="library-filters-label">Filter by Category:</span>
              <div className="library-filters-pills">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`library-filter-pill ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Article Directory Card */}
          <div className="library-directory-card">
            <div className="library-directory-img-wrap">
              <img
                src={directoryLaptopImg}
                alt="Health Articles Displayed on Laptop"
                className="library-directory-img"
                loading="lazy"
              />
            </div>

            <div className="library-directory-columns">
              <div className="library-directory-column">
                {articlesCol1.map((art, idx) => (
                  <div key={idx} className="library-directory-item">
                    <span className="library-directory-num">{art.num}</span>
                    <span className="library-directory-text">{art.title}</span>
                  </div>
                ))}
              </div>

              <div className="library-directory-column">
                {articlesCol2.map((art, idx) => (
                  <div key={idx} className="library-directory-item">
                    <span className="library-directory-num">{art.num}</span>
                    <span className="library-directory-text">{art.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 4: ARTICLE QUALITY AND EDITORIAL GUIDELINES
            ================================================================== */}
        <section className="library-guidelines-section">
          <div className="library-guidelines-grid">
            {/* Card 1: Article Quality Standard */}
            <div className="library-guideline-card">
              <div className="library-guideline-header">
                <ShieldCheck size={24} className="library-guideline-icon" />
                <h3 className="library-guideline-title">Article Quality Standard</h3>
              </div>
              <p className="library-guideline-desc">
                Each article should begin with a concise answer, then explain the topic in more depth. Where health
                claims are involved, use reliable sources and have the article reviewed by an appropriately qualified
                professional.
              </p>
            </div>

            {/* Card 2: Author & Reviewer Transparency */}
            <div className="library-guideline-card">
              <div className="library-guideline-header">
                <Users size={24} className="library-guideline-icon" />
                <h3 className="library-guideline-title">Author & Reviewer Transparency</h3>
              </div>
              <p className="library-guideline-desc">
                Display the writer's name, qualified reviewer where appropriate, publication date and meaningful
                update date. Link practitioner names to their verified profile or About section.
              </p>
            </div>

            {/* Card 3: Recommended Article Structure */}
            <div className="library-guideline-card">
              <div className="library-guideline-header">
                <ClipboardCheck size={24} className="library-guideline-icon" />
                <h3 className="library-guideline-title">Recommended Article Structure</h3>
              </div>
              <div className="library-structure-checklist">
                <div className="library-structure-col">
                  {structureItemsLeft.map((item, idx) => (
                    <div key={idx} className="library-structure-item">
                      <CheckSquare size={14} className="library-check-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="library-structure-col">
                  {structureItemsRight.map((item, idx) => (
                    <div key={idx} className="library-structure-item">
                      <CheckSquare size={14} className="library-check-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 5: AEO & GEO WRITING RULE
            ================================================================== */}
        <section className="library-aeo-section">
          <div className="library-aeo-card">
            <div className="library-aeo-img-wrap">
              <img
                src={sectionAeoLaptopImg}
                alt="Laptop with Analytics Growth Chart and Natural Elements"
                className="library-aeo-img"
                loading="lazy"
              />
            </div>

            <div className="library-aeo-content">
              <h3 className="library-aeo-title">AEO & GEO Writing Rule</h3>
              <p className="library-aeo-desc">
                Use question-led headings where they naturally match user intent, answer them directly and keep entity
                facts explicit: who RBN is, where it is located, what verified services it offers and which qualified
                professional reviewed the information. Do not add repetitive 'best in Madurai' language.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 6: EXPLORE THE HEALTH LIBRARY CTA BANNER
            ================================================================== */}
        <section className="library-banner-section">
          <div className="library-full-banner">
            <div className="library-banner-left-wrap">
              <img
                src={ctaLibraryBookImg}
                alt="Open Hardbound Wellness Book"
                className="library-banner-thumb-img"
                loading="lazy"
              />
            </div>

            <div className="library-banner-divider" aria-hidden="true"></div>

            <div className="library-banner-center">
              <h3 className="library-banner-heading">Explore the Health Library</h3>
              <a
                href="#find-articles"
                className="library-banner-arrow-btn"
                aria-label="Explore the Health Library"
              >
                <ArrowRight size={22} />
              </a>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 7: RECOMMENDED INTERNAL LINKS (5 Buttons)
            ================================================================== */}
        <section className="library-links-section">
          <div className="library-links-header">
            <div className="library-links-line" aria-hidden="true"></div>
            <h3 className="library-links-title">
              <Link2 size={20} className="library-links-icon" />
              <span>Recommended Internal Links</span>
            </h3>
            <div className="library-links-line" aria-hidden="true"></div>
          </div>

          <div className="library-links-row">
            <Link to="/lifestyle-modification" className="library-link-pill">
              <Leaf size={16} className="library-link-pill-icon" />
              <span>Lifestyle Modification &rarr;</span>
            </Link>
            <Link to="/naturopathy" className="library-link-pill">
              <Flower2 size={16} className="library-link-pill-icon" />
              <span>Naturopathy &rarr;</span>
            </Link>
            <Link to="/metabolic-wellness" className="library-link-pill">
              <Activity size={16} className="library-link-pill-icon" />
              <span>Metabolic Wellness &rarr;</span>
            </Link>
            <Link to="/gut-health-detox" className="library-link-pill">
              <Apple size={16} className="library-link-pill-icon" />
              <span>Gut Wellness &rarr;</span>
            </Link>
            <Link to="/contact" className="library-link-pill">
              <Phone size={16} className="library-link-pill-icon" />
              <span>Contact &rarr;</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HealthLibrary;
