import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { X, ChevronDown, ChevronUp, Sparkles, Calendar, Phone } from 'lucide-react';
import { serviceLinks, programLinks, campsRetreatsLinks } from './navData';

/**
 * MobileNavigation Drawer Component
 *
 * Provides a fully accessible, responsive mobile drawer navigation:
 * - Hamburger-triggered slide-in drawer with backdrop blur.
 * - Accordion dropdowns for Services (8 subpages), Programs (5 subpages),
 *   and Camps & Retreats (3 subpages).
 * - Auto-expands the active route's accordion when opened.
 * - Locks body scroll while open and restores upon close.
 * - Fully keyboard accessible with Enter/Space/Escape support and ARIA attributes.
 * - Automatically closes when any navigation link is selected.
 */
function MobileNavigation({ isOpen, onClose }) {
  const [userToggledServices, setUserToggledServices] = useState(null);
  const [userToggledPrograms, setUserToggledPrograms] = useState(null);
  const [userToggledCampsRetreats, setUserToggledCampsRetreats] = useState(null);
  const location = useLocation();
  const currentPath = location.pathname;

  const isHomeActive = currentPath === '/';
  const isAboutActive = currentPath === '/about';
  const isServicesActive = serviceLinks.some((link) => link.path === currentPath);
  const isProgramsActive = programLinks.some((link) => link.path === currentPath);
  const isCampsRetreatsActive =
    campsRetreatsLinks.some((link) => link.path === currentPath) ||
    currentPath === '/sirumalai-retreat';
  const isHealthLibraryActive =
    currentPath === '/health-library' ||
    currentPath === '/blog';
  const isContactActive = currentPath === '/contact';

  // Derived state: open by default if section is active, unless explicitly toggled by user
  const servicesOpen = userToggledServices !== null ? userToggledServices : isServicesActive;
  const programsOpen = userToggledPrograms !== null ? userToggledPrograms : isProgramsActive;
  const campsRetreatsOpen = userToggledCampsRetreats !== null ? userToggledCampsRetreats : isCampsRetreatsActive;

  // 1. Lock body scroll while mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  // 2. Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`mobile-nav-backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="mobile-nav-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--ivory)'
              }}
            >
              <Sparkles size={16} />
            </span>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                color: 'var(--dark-green)',
                fontSize: '1.1rem'
              }}
            >
              RBN AYUSH
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            style={{
              padding: '0.4rem',
              color: 'var(--dark-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-nav-body" aria-label="Mobile Site Navigation">
          {/* 1. Home */}
          <div className="mobile-nav-item">
            <NavLink
              to="/"
              className={`mobile-nav-link ${isHomeActive ? 'active' : ''}`}
              onClick={handleLinkClick}
              end
            >
              Home
            </NavLink>
          </div>

          {/* 2. About */}
          <div className="mobile-nav-item">
            <NavLink
              to="/about"
              className={`mobile-nav-link ${isAboutActive ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              About
            </NavLink>
          </div>

          {/* 3. Services Accordion (8 Subpages) */}
          <div className="mobile-nav-item">
            <button
              type="button"
              className={`mobile-nav-link mobile-nav-accordion-btn ${isServicesActive ? 'active' : ''}`}
              onClick={() => setUserToggledServices(!servicesOpen)}
              aria-expanded={servicesOpen}
              aria-controls="mobile-services-menu"
            >
              <span>Services</span>
              {servicesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {servicesOpen && (
              <div id="mobile-services-menu" className="mobile-submenu" role="region" aria-label="Services Submenu">
                {serviceLinks.map((service) => (
                  <NavLink
                    key={service.path}
                    to={service.path}
                    className={({ isActive }) => `mobile-subitem ${isActive ? 'active' : ''}`}
                    onClick={handleLinkClick}
                  >
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--muted-gold)'
                      }}
                    ></span>
                    {service.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* 4. Programs Accordion (5 Subpages) */}
          <div className="mobile-nav-item">
            <button
              type="button"
              className={`mobile-nav-link mobile-nav-accordion-btn ${isProgramsActive ? 'active' : ''}`}
              onClick={() => setUserToggledPrograms(!programsOpen)}
              aria-expanded={programsOpen}
              aria-controls="mobile-programs-menu"
            >
              <span>Programs</span>
              {programsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {programsOpen && (
              <div id="mobile-programs-menu" className="mobile-submenu" role="region" aria-label="Programs Submenu">
                {programLinks.map((program) => (
                  <NavLink
                    key={program.path}
                    to={program.path}
                    className={({ isActive }) => `mobile-subitem ${isActive ? 'active' : ''}`}
                    onClick={handleLinkClick}
                  >
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--muted-gold)'
                      }}
                    ></span>
                    {program.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* 5. Camps & Retreats Accordion (3 Subpages) */}
          <div className="mobile-nav-item">
            <button
              type="button"
              className={`mobile-nav-link mobile-nav-accordion-btn ${isCampsRetreatsActive ? 'active' : ''}`}
              onClick={() => setUserToggledCampsRetreats(!campsRetreatsOpen)}
              aria-expanded={campsRetreatsOpen}
              aria-controls="mobile-camps-menu"
            >
              <span>Camps & Retreats</span>
              {campsRetreatsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {campsRetreatsOpen && (
              <div id="mobile-camps-menu" className="mobile-submenu" role="region" aria-label="Camps and Retreats Submenu">
                {campsRetreatsLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `mobile-subitem ${isActive ? 'active' : ''}`}
                    onClick={handleLinkClick}
                  >
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--muted-gold)'
                      }}
                    ></span>
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* 6. Health Library */}
          <div className="mobile-nav-item">
            <NavLink
              to="/health-library"
              className={`mobile-nav-link ${isHealthLibraryActive ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Health Library
            </NavLink>
          </div>

          {/* 7. Contact */}
          <div className="mobile-nav-item">
            <NavLink
              to="/contact"
              className={`mobile-nav-link ${isContactActive ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Contact
            </NavLink>
          </div>
        </nav>

        {/* 8. Mobile Nav Footer / Book Consultation CTA */}
        <div className="mobile-nav-footer">
          <div
            style={{
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.88rem',
              color: 'var(--dark-green)'
            }}
          >
            <Phone size={16} color="var(--muted-gold)" />
            <a href="tel:+919944425201" style={{ color: 'inherit', fontWeight: 600 }}>
              +91 99444 25201
            </a>
          </div>
          <NavLink
            to="/contact"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={handleLinkClick}
          >
            <Calendar size={16} />
            <span>Book Consultation</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default MobileNavigation;
