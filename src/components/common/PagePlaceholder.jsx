import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

/**
 * Reusable Page Placeholder Component
 * Used across all 20 pages during initial routing & page architecture setup.
 */
function PagePlaceholder({
  pageNumber = '01',
  title,
  subtitle,
  category = 'Integrated AYUSH Healthcare',
  route,
  breadcrumbs = [],
  highlights = []
}) {
  return (
    <div className="page-wrapper">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs items={breadcrumbs.length > 0 ? breadcrumbs : [{ label: title }]} />

      {/* Hero Section */}
      <section className="page-placeholder-hero">
        <div className="container">
          <div className="page-hero-meta">
            <span className="badge badge-sage">
              <Sparkles size={12} />
              Page {pageNumber} • {category}
            </span>
            <span className="badge badge-gold">
              <ShieldCheck size={12} />
              Route: {route}
            </span>
          </div>
          
          <h1 className="page-hero-title">{title}</h1>
          <p className="page-hero-subtitle">
            {subtitle || 'RBN AYUSH HEALTH CARE — Madurai, Tamil Nadu. Dedicated to natural healing, preventive care, and personalised wellness therapies.'}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="page-placeholder-content">
        <div className="container">
          <div className="placeholder-grid">
            {/* Primary Content Card */}
            <div className="placeholder-main-card">
              <div className="placeholder-status-banner">
                <CheckCircle2 size={24} />
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--dark-green)' }}>
                    Active Route & Component Verified
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--secondary-text)', margin: 0 }}>
                    This component is connected to the router and ready. The detailed UI design and approved content for this section will be implemented in the next phase.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                  Section Overview
                </h3>
                <p style={{ color: 'var(--secondary-text)', lineHeight: '1.7' }}>
                  Welcome to the <strong>{title}</strong> section of RBN AYUSH HEALTH CARE. Rooted in authentic AYUSH principles, natural therapies, and modern holistic wellness, our centre provides compassionate, evidence-based care in Madurai.
                </p>
              </div>

              {highlights && highlights.length > 0 && (
                <div style={{ marginTop: '2rem' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--dark-green)' }}>
                    Key Focus Areas
                  </h4>
                  <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                    {highlights.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--dark-text)', fontSize: '0.92rem' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--muted-gold)' }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Route Metadata */}
              <div className="placeholder-details-list">
                <div className="placeholder-detail-item">
                  <span className="placeholder-detail-label">Page Title</span>
                  <span className="placeholder-detail-value">{title}</span>
                </div>
                <div className="placeholder-detail-item">
                  <span className="placeholder-detail-label">Active Route</span>
                  <span className="placeholder-detail-value">{route}</span>
                </div>
                <div className="placeholder-detail-item">
                  <span className="placeholder-detail-label">Service Category</span>
                  <span className="placeholder-detail-value">{category}</span>
                </div>
                <div className="placeholder-detail-item">
                  <span className="placeholder-detail-label">Implementation Status</span>
                  <span className="placeholder-detail-value" style={{ color: 'var(--success-color)' }}>
                    Route Linked & Operational
                  </span>
                </div>
              </div>
            </div>

            {/* Sidebar / Quick Actions */}
            <aside className="placeholder-sidebar">
              <div className="placeholder-card">
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--dark-green)' }}>
                  Consultation & Enquiry
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--secondary-text)', marginBottom: '1.25rem' }}>
                  Have questions regarding our therapies or programs? Connect with our senior wellness doctors.
                </p>
                <Link to="/contact" className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                  <Calendar size={14} />
                  Book Consultation
                </Link>
              </div>

              <div className="placeholder-card">
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--dark-green)' }}>
                  Explore Other Pages
                </h4>
                <nav className="placeholder-quicknav-list">
                  <Link to="/ayush-integrated-healthcare" className="placeholder-quicknav-item">
                    <span>AYUSH Integrated Healthcare</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link to="/naturopathy" className="placeholder-quicknav-item">
                    <span>Naturopathy Therapies</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link to="/sirumalai-retreat" className="placeholder-quicknav-item">
                    <span>Sirumalai Wellness Retreat</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link to="/metabolic-wellness" className="placeholder-quicknav-item">
                    <span>Metabolic Wellness</span>
                    <ArrowRight size={14} />
                  </Link>
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PagePlaceholder;

