import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 *
 * Ensures that whenever navigation occurs anywhere in the application
 * (via navbar, dropdowns, buttons, cards, footer links, or mobile navigation),
 * the window and all layout containers are instantly and reliably reset to
 * scroll position 0 at the very top of the page.
 */
function ScrollToTop() {
  const { pathname, search, hash, key } = useLocation();

  // 1. Disable browser's automatic scroll restoration so page transitions always start at top
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // 2. Perform instant scroll reset before and after DOM paint
  useLayoutEffect(() => {
    // If navigating to an in-page hash anchor, allow smooth scroll to that element
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    const resetToTop = () => {
      // Temporarily set scrollBehavior to auto to ensure instant top jump
      const html = document.documentElement;
      const prevBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';

      window.scrollTo(0, 0);
      html.scrollTop = 0;
      document.body.scrollTop = 0;

      const siteLayout = document.getElementById('site-layout');
      if (siteLayout) siteLayout.scrollTop = 0;

      const mainContent = document.getElementById('main-content');
      if (mainContent) mainContent.scrollTop = 0;

      html.style.scrollBehavior = prevBehavior;
    };

    // Immediate execution before paint
    resetToTop();

    // Subsequent ticks to guarantee position 0 even after async image layout shifts
    const rafId = requestAnimationFrame(resetToTop);
    const timeoutId = setTimeout(resetToTop, 15);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [pathname, search, hash, key]);

  return null;
}

export default ScrollToTop;
