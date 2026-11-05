import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import MobileStickyConversionBar from './MobileStickyConversionBar';
import BotanicalRootAnimation from '../common/BotanicalRootAnimation';

/**
 * MainLayout provides the global layout shell for all pages:
 * - ScrollToTop handler on route transitions
 * - Global Header (with dynamic active states and dropdowns)
 * - BotanicalRootAnimation (running along the left side and extending to footer bottom)
 * - Main page container
 * - Global Footer (PDF approved Section 23 copy)
 * - Mobile Sticky Conversion Bar (Call | WhatsApp | Directions | Book)
 */
function MainLayout({ children }) {
  return (
    <div className="site-layout" id="site-layout">
      <ScrollToTop />
      <BotanicalRootAnimation />
      <Header />
      <main className="main-content" id="main-content">
        {children || <Outlet />}
      </main>
      <Footer />
      <MobileStickyConversionBar />
    </div>
  );
}

export default MainLayout;
