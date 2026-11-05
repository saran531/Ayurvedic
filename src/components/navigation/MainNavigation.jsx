import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { serviceLinks, programLinks, campsRetreatsLinks } from './navData';

function MainNavigation() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const currentPath = location.pathname;
  const navRef = useRef(null);

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  // Dynamic active state calculations
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

  return (
    <nav className="main-nav" ref={navRef} aria-label="Main Navigation">
      {/* 1. Home */}
      <div className="nav-item">
        <NavLink
          to="/"
          className={`nav-link ${isHomeActive ? 'active' : ''}`}
          onClick={() => setOpenDropdown(null)}
          end
        >
          Home
        </NavLink>
      </div>

      {/* 2. About */}
      <div className="nav-item">
        <NavLink
          to="/about"
          className={`nav-link ${isAboutActive ? 'active' : ''}`}
          onClick={() => setOpenDropdown(null)}
        >
          About
        </NavLink>
      </div>

      {/* 3. Services Dropdown (8 Sub-pages) */}
      <div
        className="nav-item"
        onMouseEnter={() => setOpenDropdown('services')}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <span
          className={`nav-link dropdown-trigger ${isServicesActive ? 'active' : ''}`}
          tabIndex={0}
          role="button"
          aria-haspopup="true"
          aria-expanded={openDropdown === 'services'}
          onClick={() => toggleDropdown('services')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleDropdown('services');
            }
          }}
        >
          Services <ChevronDown size={13} />
        </span>
        <div className={`dropdown-menu ${openDropdown === 'services' ? 'show' : ''}`}>
          {serviceLinks.map((service) => (
            <NavLink
              key={service.path}
              to={service.path}
              className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
              onClick={() => setOpenDropdown(null)}
            >
              <span className="dropdown-item-dot"></span>
              {service.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* 4. Programs Dropdown (5 Sub-pages) */}
      <div
        className="nav-item"
        onMouseEnter={() => setOpenDropdown('programs')}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <span
          className={`nav-link dropdown-trigger ${isProgramsActive ? 'active' : ''}`}
          tabIndex={0}
          role="button"
          aria-haspopup="true"
          aria-expanded={openDropdown === 'programs'}
          onClick={() => toggleDropdown('programs')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleDropdown('programs');
            }
          }}
        >
          Programs <ChevronDown size={13} />
        </span>
        <div className={`dropdown-menu ${openDropdown === 'programs' ? 'show' : ''}`}>
          {programLinks.map((program) => (
            <NavLink
              key={program.path}
              to={program.path}
              className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
              onClick={() => setOpenDropdown(null)}
            >
              <span className="dropdown-item-dot"></span>
              {program.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* 5. Camps & Retreats Dropdown (3 Sub-pages) */}
      <div
        className="nav-item"
        onMouseEnter={() => setOpenDropdown('campsRetreats')}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <span
          className={`nav-link dropdown-trigger ${isCampsRetreatsActive ? 'active' : ''}`}
          tabIndex={0}
          role="button"
          aria-haspopup="true"
          aria-expanded={openDropdown === 'campsRetreats'}
          onClick={() => toggleDropdown('campsRetreats')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleDropdown('campsRetreats');
            }
          }}
        >
          Camps & Retreats <ChevronDown size={13} />
        </span>
        <div className={`dropdown-menu ${openDropdown === 'campsRetreats' ? 'show' : ''}`}>
          {campsRetreatsLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
              onClick={() => setOpenDropdown(null)}
            >
              <span className="dropdown-item-dot"></span>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* 6. Health Library */}
      <div className="nav-item">
        <NavLink
          to="/health-library"
          className={`nav-link ${isHealthLibraryActive ? 'active' : ''}`}
          onClick={() => setOpenDropdown(null)}
        >
          Health Library
        </NavLink>
      </div>

      {/* 7. Contact */}
      <div className="nav-item">
        <NavLink
          to="/contact"
          className={`nav-link ${isContactActive ? 'active' : ''}`}
          onClick={() => setOpenDropdown(null)}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default MainNavigation;
