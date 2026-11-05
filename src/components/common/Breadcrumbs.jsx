import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';

/**
 * Breadcrumbs Component
 * @param {Array} items - Array of breadcrumb objects [{ label: string, path?: string }]
 */
function Breadcrumbs({ items = [] }) {
  return (
    <nav className="breadcrumbs-bar" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumbs-list">
          <li className="breadcrumbs-item">
            <Link to="/" className="breadcrumbs-link" title="Home">
              <HomeIcon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className={`breadcrumbs-item ${isLast ? 'active' : ''}`}>
                <ChevronRight size={14} className="breadcrumbs-separator" />
                {item.path && !isLast ? (
                  <Link to={item.path} className="breadcrumbs-link">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current={isLast ? 'page' : undefined}>
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumbs;

