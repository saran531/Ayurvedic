import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BotanicalRootAnimation.css';

/**
 * BotanicalRootAnimation Component
 *
 * Implements a true scroll-progress-based botanical root growth animation
 * across all pages of the RBN AYUSH HEALTH CARE website:
 *
 * 1. Scroll-Driven Growth: At scrollY = 0 (page load), only the initial 35px sprout
 *    at the top edge is visible. The root NEVER appears fully grown on page load.
 * 2. Downward Growth: As the user scrolls down, the root grows progressively down
 *    the left margin gutter, sprouting leaves as the tip reaches each cluster.
 * 3. Reverse Retraction: When scrolling upward, the root retracts in exact reverse lockstep.
 *    Leaves and flowers shrink and disappear in reverse order, returning to the initial
 *    sprout when the user reaches the top.
 * 4. Dynamic Footer Extension: When the user scrolls into the footer, the root enters
 *    the footer, curves horizontally along the lower footer, and blooms 3 elegant Ayurvedic
 *    flower clusters (under Brand, Links, Contact) and a terminal sprout.
 * 5. Section Protection & Safe Layering: Root runs in outer left margin gutter at z-index: 2;
 *    zero branches cut across content sections, headings, paragraphs, cards, or buttons.
 *    All foreground content sits at z-index: 3+.
 */
function BotanicalRootAnimation() {
  const location = useLocation();

  // Root canvas & SVG path refs
  const canvasWrapRef = useRef(null);
  const mainRootRef = useRef(null);
  const barkVeinRef = useRef(null);
  const highlightVeinRef = useRef(null);
  const tipRef = useRef(null);

  // Dynamic refs for foliage and footer flower clusters
  const foliageRefs = useRef([]);
  const flowerRefs = useRef([]);
  const terminalSproutRef = useRef(null);

  // Animation & Measurement State
  const [dimensions, setDimensions] = useState({ width: 1200, height: 3500 });
  const [stemWidth, setStemWidth] = useState(14);
  const [pathData, setPathData] = useState({
    mainD: '',
    foliageClusters: [],
    footerFlowers: [],
    terminalSprout: null,
    flourishY: 3000,
    rootStopY: 3500
  });

  // Persistent registry holding accurate path geometry for frame-rate scroll rendering
  const registryRef = useRef({
    foliage: [],
    flowers: [],
    animating: false,
    rafId: null,
    totalLength: 3500,
    verticalLength: 3000,
    flourishY: 3000,
    footerTop: 3000,
    rootStopY: 3500
  });

  // 1. Measure layout & build continuous left-side root + footer branch
  useEffect(() => {
    const measureAndBuild = () => {
      const siteLayout = document.getElementById('site-layout') || document.body;
      const mainContent = document.getElementById('main-content');
      const footerEl = document.querySelector('footer.footer, footer');

      if (!siteLayout || !mainContent) return;

      const siteRect = siteLayout.getBoundingClientRect();
      const totalW = siteLayout.offsetWidth || window.innerWidth;
      const isMobile = totalW < 768;
      const isTablet = totalW >= 768 && totalW < 1024;
      const currentStemWidth = isMobile ? 8 : (isTablet ? 11 : 14);
      setStemWidth(currentStemWidth);

      // Measure Footer position dynamically relative to siteLayout
      let footerTop;
      let footerBottom;
      let footerBottomBarTop;

      if (footerEl) {
        const footerRect = footerEl.getBoundingClientRect();
        footerTop = Math.round(footerRect.top - siteRect.top);
        const footerHeight = footerEl.offsetHeight || 440;
        footerBottom = footerTop + footerHeight;

        const footerBottomBar = footerEl.querySelector('.footer-bottom');
        if (footerBottomBar) {
          footerBottomBarTop = Math.round(footerBottomBar.getBoundingClientRect().top - siteRect.top);
        } else {
          footerBottomBarTop = footerBottom - (isMobile ? 55 : 68);
        }
      } else {
        const mainH = mainContent.offsetHeight || 3000;
        footerTop = mainH;
        footerBottom = mainH + 450;
        footerBottomBarTop = footerBottom - 65;
      }

      // Measure content container to find left margin and width
      const sampleContainer = (footerEl && footerEl.querySelector('.container')) ||
        mainContent.querySelector('.container') ||
        mainContent;
      const containerRect = sampleContainer.getBoundingClientRect();
      const containerLeft = Math.max(isMobile ? 14 : 20, Math.round(containerRect.left - siteRect.left));
      const containerWidth = Math.round(containerRect.width) || (totalW - containerLeft * 2);
      const containerRight = containerLeft + containerWidth;

      // Stem base runs strictly in the outer left margin gutter
      const stemBaseX = isMobile ? 18 : Math.max(22, Math.min(36, containerLeft - 32));

      // The horizontal flourish runs in the open space above the footer bottom bar
      const flourishY = footerBottomBarTop - (isMobile ? 18 : 26);
      const rootStopY = footerBottom + 15;

      // Query semantic <section> elements in mainContent to generate subtle S-curves along left margin
      const sectionEls = Array.from(mainContent.querySelectorAll('section'));
      const curveWaypoints = [];

      if (sectionEls.length > 0) {
        sectionEls.forEach((sec, idx) => {
          const secRect = sec.getBoundingClientRect();
          const secTop = Math.round(secRect.top - siteRect.top);
          const secHeight = sec.offsetHeight || 450;
          const midY = secTop + secHeight * 0.5;
          const sway = Math.sin(idx * 1.5) * (isMobile ? 3 : 8);
          curveWaypoints.push({ x: stemBaseX + sway, y: midY });
        });
      } else {
        const step = 400;
        for (let y = 300; y < footerTop; y += step) {
          const sway = Math.sin((y / 400) * 1.5) * (isMobile ? 3 : 8);
          curveWaypoints.push({ x: stemBaseX + sway, y });
        }
      }

      // Add waypoints continuing through the footer down to the horizontal flourish
      const footerMidY = footerTop + (flourishY - footerTop) * 0.45;
      curveWaypoints.push({ x: stemBaseX + (isMobile ? 2 : 5), y: footerMidY });
      curveWaypoints.push({ x: stemBaseX, y: flourishY });

      // Build continuous SVG path: vertical trunk down left margin + horizontal footer branch
      let mainD = `M ${stemBaseX},0`;
      let prevY = 0;
      let prevX = stemBaseX;

      curveWaypoints.forEach((wp) => {
        const curY = wp.y;
        const curX = wp.x;
        const midY1 = prevY + (curY - prevY) * 0.35;
        const midY2 = prevY + (curY - prevY) * 0.70;

        mainD += ` C ${prevX + (curX - prevX) * 0.2},${midY1} ${curX - (curX - prevX) * 0.2},${midY2} ${curX},${curY}`;
        prevY = curY;
        prevX = curX;
      });

      // Smooth organic curve from vertical into the horizontal footer branch
      const cornerCtrlX1 = stemBaseX + (isMobile ? 10 : 20);
      const cornerCtrlY1 = flourishY + (isMobile ? 4 : 8);
      const cornerCtrlX2 = containerLeft - (isMobile ? 4 : 8);
      const cornerCtrlY2 = flourishY + 2;
      const p1X = containerLeft + Math.min(50, containerWidth * 0.10);
      const p1Y = flourishY;
      mainD += ` C ${cornerCtrlX1},${cornerCtrlY1} ${cornerCtrlX2},${cornerCtrlY2} ${p1X},${p1Y}`;

      // Column wave points across the footer
      const c1X = containerLeft + containerWidth * 0.22;
      const c1Y = flourishY - 6;

      const c2X = containerLeft + containerWidth * 0.52;
      const c2Y = flourishY + 6;

      const c3X = containerLeft + containerWidth * 0.78;
      const c3Y = flourishY - 5;

      const endX = isMobile
        ? Math.min(totalW - 20, containerRight - 10)
        : Math.min(totalW - 35, containerRight - 15);
      const endY = flourishY + 2;

      // S-curve waving across lower footer (under Brand, Links, Contact)
      mainD += ` Q ${containerLeft + containerWidth * 0.14},${flourishY - 3} ${c1X},${c1Y}`;
      mainD += ` Q ${containerLeft + containerWidth * 0.37},${flourishY + 11} ${c2X},${c2Y}`;
      mainD += ` Q ${containerLeft + containerWidth * 0.65},${flourishY - 13} ${c3X},${c3Y}`;
      mainD += ` Q ${containerLeft + containerWidth * 0.88},${flourishY + 7} ${endX},${endY}`;

      // 2. Regular alternating foliage clusters along the left margin gutter
      const foliageItems = [];
      const foliageStep = isMobile ? 240 : 190;
      let clusterIdx = 0;

      for (let y = 80; y < flourishY - 50; y += foliageStep) {
        const isRight = clusterIdx % 2 === 0;
        const progressY = y / flourishY;
        const currentSway = Math.sin(progressY * Math.PI * 4) * (isMobile ? 3 : 8);
        const currentStemX = stemBaseX + currentSway;

        const twigLength = isMobile ? 11 : 17;
        // Right twigs are strictly clamped outside the container; left twigs point to outer screen margin
        const twigEndX = isRight
          ? Math.min(containerLeft - 12, currentStemX + twigLength)
          : (currentStemX - twigLength);
        const twigEndY = y + 7;

        const twigD = isRight
          ? `M ${currentStemX},${y} C ${currentStemX + 6},${y - 2} ${twigEndX - 4},${twigEndY - 3} ${twigEndX},${twigEndY}`
          : `M ${currentStemX},${y} C ${currentStemX - 6},${y - 2} ${twigEndX + 4},${twigEndY - 3} ${twigEndX},${twigEndY}`;

        foliageItems.push({
          id: `foliage-${clusterIdx}`,
          y,
          stemX: currentStemX,
          twigEndX,
          twigEndY,
          isRight,
          twigD,
          anchorLength: 0
        });
        clusterIdx++;
      }

      // 3. Footer Flower Clusters (Matching user visual reference)
      // Desktop: 3 clusters under Brand, Links/Therapies, Contact + Terminal Sprout
      // Mobile: 2 clusters + Terminal Sprout for clean spacing
      const flowerConfigs = isMobile
        ? [
            {
              id: 'footer-flower-1',
              stemX: containerLeft + containerWidth * 0.32,
              stemY: flourishY,
              flowerX: containerLeft + containerWidth * 0.32 + 3,
              flowerY: flourishY - 20,
              scale: 0.78,
              budOffsetX: 13,
              budOffsetY: 7
            },
            {
              id: 'footer-flower-2',
              stemX: containerLeft + containerWidth * 0.72,
              stemY: flourishY,
              flowerX: containerLeft + containerWidth * 0.72 + 4,
              flowerY: flourishY - 22,
              scale: 0.82,
              budOffsetX: -14,
              budOffsetY: 6
            }
          ]
        : [
            {
              id: 'footer-flower-1',
              stemX: c1X,
              stemY: c1Y,
              flowerX: c1X + 4,
              flowerY: c1Y - 23,
              scale: 1.0,
              budOffsetX: 16,
              budOffsetY: 8
            },
            {
              id: 'footer-flower-2',
              stemX: c2X,
              stemY: c2Y,
              flowerX: c2X + 6,
              flowerY: c2Y - 25,
              scale: 1.05,
              budOffsetX: -16,
              budOffsetY: 6
            },
            {
              id: 'footer-flower-3',
              stemX: c3X,
              stemY: c3Y,
              flowerX: c3X + 5,
              flowerY: c3Y - 23,
              scale: 0.96,
              budOffsetX: 15,
              budOffsetY: 7
            }
          ];

      const footerFlowerItems = flowerConfigs.map((cfg) => {
        const offshootTwigD = `M ${cfg.stemX},${cfg.stemY} C ${cfg.stemX},${cfg.stemY - 8} ${cfg.flowerX - 2},${cfg.flowerY + 8} ${cfg.flowerX},${cfg.flowerY}`;
        return {
          ...cfg,
          offshootTwigD,
          anchorLength: 0
        };
      });

      // Terminal sprout at the end of the horizontal branch
      const terminalSprout = {
        endX,
        endY,
        scale: isMobile ? 0.75 : 0.95
      };

      // Update registry
      registryRef.current.foliage = foliageItems;
      registryRef.current.flowers = footerFlowerItems;
      registryRef.current.flourishY = flourishY;
      registryRef.current.footerTop = footerTop;
      registryRef.current.rootStopY = rootStopY;

      setDimensions({ width: totalW, height: rootStopY });
      setPathData({
        mainD,
        foliageClusters: foliageItems,
        footerFlowers: footerFlowerItems,
        terminalSprout,
        flourishY,
        rootStopY
      });
    };

    // Initial measurement
    const timer = setTimeout(measureAndBuild, 60);

    // ResizeObserver on site-layout, main-content, and footer to handle dynamic layout shifts
    const siteLayout = document.getElementById('site-layout');
    const mainContent = document.getElementById('main-content');
    const footerEl = document.querySelector('footer.footer, footer');
    let resizeObserver = null;

    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(() => {
        measureAndBuild();
      });
      if (siteLayout) resizeObserver.observe(siteLayout);
      if (mainContent) resizeObserver.observe(mainContent);
      if (footerEl) resizeObserver.observe(footerEl);
    }

    return () => {
      clearTimeout(timer);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [location.pathname]);

  // 2. Compute accurate anchor positions along the path & execute scroll animation
  useEffect(() => {
    const mainStem = mainRootRef.current;
    if (!mainStem) return;

    const len = mainStem.getTotalLength() || 3500;
    registryRef.current.totalLength = len;
    const flourishY = registryRef.current.flourishY || 3000;

    // 1. Binary search to find exact verticalLength where path reaches flourishY
    let low = 0;
    let high = len;
    for (let i = 0; i < 16; i++) {
      const mid = (low + high) / 2;
      const pt = mainStem.getPointAtLength(mid);
      if (pt.y < flourishY - 2) {
        low = mid;
      } else {
        high = mid;
      }
    }
    const verticalLength = low;
    registryRef.current.verticalLength = verticalLength;

    // 2. Binary search for each trunk foliage cluster anchor length along vertical path
    registryRef.current.foliage.forEach((cluster) => {
      let fLow = 0;
      let fHigh = verticalLength;
      for (let i = 0; i < 14; i++) {
        const fMid = (fLow + fHigh) / 2;
        const pt = mainStem.getPointAtLength(fMid);
        if (pt.y < cluster.y) {
          fLow = fMid;
        } else {
          fHigh = fMid;
        }
      }
      cluster.anchorLength = fLow;
    });

    // 3. Binary search for each footer flower cluster anchor length along horizontal branch
    registryRef.current.flowers.forEach((flower) => {
      let flLow = verticalLength;
      let flHigh = len;
      for (let i = 0; i < 14; i++) {
        const flMid = (flLow + flHigh) / 2;
        const pt = mainStem.getPointAtLength(flMid);
        if (pt.x < flower.stemX) {
          flLow = flMid;
        } else {
          flHigh = flMid;
        }
      }
      flower.anchorLength = flLow;
    });

    // Scroll rendering tick — calculates drawn length from current scroll and updates DOM
    const renderTick = () => {
      const reg = registryRef.current;
      const stem = mainRootRef.current;
      if (!stem) {
        reg.animating = false;
        return;
      }

      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        document.documentElement.offsetHeight,
        document.body.offsetHeight
      );
      const windowH = window.innerHeight || 800;
      const maxScroll = Math.max(1, docHeight - windowH);

      // Determine scroll threshold where footer enters viewport
      const footerTop = reg.footerTop || (docHeight - 480);
      const scrollAtFooterEnter = Math.max(1, Math.min(maxScroll - 40, footerTop - windowH));

      const totalLen = reg.totalLength || 3500;
      const vertLen = reg.verticalLength || (totalLen * 0.78);
      const initialLength = 35; // Start at top edge with small sprout

      let drawnLength = initialLength;

      if (scrollY <= 0) {
        // At page top: strictly at initial starting position
        drawnLength = initialLength;
      } else if (scrollY < scrollAtFooterEnter) {
        // Scrolling through main content sections above footer
        const contentProgress = Math.max(0, Math.min(1, scrollY / scrollAtFooterEnter));
        drawnLength = initialLength + contentProgress * (vertLen - initialLength);
      } else {
        // Scrolling into and through footer
        const footerProgress = Math.max(
          0,
          Math.min(1, (scrollY - scrollAtFooterEnter) / Math.max(1, maxScroll - scrollAtFooterEnter))
        );
        drawnLength = vertLen + footerProgress * (totalLen - vertLen);
      }

      const mainOffset = Math.max(0, totalLen - drawnLength);

      // 1. Update root stroke (draws down on scroll down; retracts in reverse on scroll up)
      stem.style.strokeDasharray = `${totalLen}`;
      stem.style.strokeDashoffset = `${mainOffset}`;

      if (barkVeinRef.current) {
        barkVeinRef.current.style.strokeDasharray = `${totalLen}`;
        barkVeinRef.current.style.strokeDashoffset = `${mainOffset}`;
      }
      if (highlightVeinRef.current) {
        highlightVeinRef.current.style.strokeDasharray = `${totalLen}`;
        highlightVeinRef.current.style.strokeDashoffset = `${mainOffset}`;
      }

      // 2. Apical living sprout tip tracks the leading edge
      if (tipRef.current) {
        if (drawnLength < 12) {
          tipRef.current.style.opacity = '0';
        } else {
          const pt = stem.getPointAtLength(Math.min(totalLen, drawnLength));
          tipRef.current.setAttribute('transform', `translate(${pt.x}, ${pt.y})`);
          tipRef.current.style.opacity = '1';
        }
      }

      // 3. Trunk foliage: sprouts when passed, retracts in reverse when scrolling back up
      reg.foliage.forEach((cluster, idx) => {
        const el = foliageRefs.current[idx];
        if (!el) return;

        const anchor = cluster.anchorLength || 0;
        let s = 0;
        if (drawnLength > anchor) {
          s = Math.min(1, Math.max(0, (drawnLength - anchor) / 35));
        }

        el.style.transform = `scale(${s})`;
        el.style.opacity = `${s}`;
      });

      // 4. Footer flower clusters: bloom when reached, retract in reverse when scrolling back up
      reg.flowers.forEach((flower, idx) => {
        const el = flowerRefs.current[idx];
        if (!el) return;

        const anchor = flower.anchorLength || (totalLen * 0.9);
        let b = 0;
        if (drawnLength > anchor) {
          b = Math.min(1, Math.max(0, (drawnLength - anchor) / 45));
        }

        el.style.transform = `scale(${b})`;
        el.style.opacity = `${b}`;
      });

      // 5. Terminal sprout: blooms at branch tip, retracts when scrolling up
      if (terminalSproutRef.current) {
        const termAnchor = totalLen - 40;
        let t = 0;
        if (drawnLength > termAnchor) {
          t = Math.min(1, Math.max(0, (drawnLength - termAnchor) / 35));
        }
        terminalSproutRef.current.style.transform = `scale(${t})`;
        terminalSproutRef.current.style.opacity = `${t}`;
      }

      reg.animating = false;
    };

    const onScroll = () => {
      if (!registryRef.current.animating) {
        registryRef.current.animating = true;
        registryRef.current.rafId = requestAnimationFrame(renderTick);
      }
    };

    // Execute initial tick immediately
    renderTick();

    const animReg = registryRef.current;
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (animReg.rafId) {
        cancelAnimationFrame(animReg.rafId);
      }
    };
  }, [pathData]);

  if (!pathData.mainD) {
    return null;
  }

  return (
    <div
      className="botanical-root-canvas-wrap"
      aria-hidden="true"
      ref={canvasWrapRef}
      style={{ height: `${pathData.rootStopY}px`, maxHeight: `${pathData.rootStopY}px` }}
    >
      <svg
        className="botanical-root-svg"
        viewBox={`0 0 ${dimensions.width} ${pathData.rootStopY}`}
        style={{ width: `${dimensions.width}px`, height: `${pathData.rootStopY}px` }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Natural 3D Bark Gradient */}
          <linearGradient id="rootTrunkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A26743" />
            <stop offset="28%" stopColor="#875131" />
            <stop offset="65%" stopColor="#6C3E22" />
            <stop offset="100%" stopColor="#4D2713" />
          </linearGradient>

          {/* Twig Wood Gradient */}
          <linearGradient id="branchWoodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9C623D" />
            <stop offset="50%" stopColor="#754326" />
            <stop offset="100%" stopColor="#4A2612" />
          </linearGradient>

          {/* Fresh Glossy Leaf Blade Gradient */}
          <linearGradient id="leafBladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7ACB45" />
            <stop offset="45%" stopColor="#4B9C34" />
            <stop offset="100%" stopColor="#226E1D" />
          </linearGradient>

          {/* Dark Forest Accent Leaf Gradient */}
          <linearGradient id="leafDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4D9632" />
            <stop offset="60%" stopColor="#256E1F" />
            <stop offset="100%" stopColor="#144B15" />
          </linearGradient>

          {/* Ayurvedic Warm Lotus / Jasmine Flower Petal Gradient */}
          <linearGradient id="ayushPetalGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#F9E29D" />
            <stop offset="35%" stopColor="#FFF6DF" />
            <stop offset="80%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFFDF7" />
          </linearGradient>

          {/* Golden Amber Flower Stamen Core Gradient */}
          <radialGradient id="flowerStamenGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE066" />
            <stop offset="60%" stopColor="#D49A00" />
            <stop offset="100%" stopColor="#8A5700" />
          </radialGradient>

          {/* Living Flower Core Glow */}
          <radialGradient id="flowerCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE680" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
          </radialGradient>

          {/* Living Apical Sprout Tip Glow */}
          <radialGradient id="sproutTipGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A6E65E" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#6EA83D" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#6EA83D" stopOpacity="0" />
          </radialGradient>

          {/* Soft 3D Drop Shadow on Botanical Stem */}
          <filter id="rootDropShadow" x="-25%" y="-20%" width="150%" height="140%">
            <feDropShadow dx="2" dy="3" stdDeviation="3.5" floodColor="#180C05" floodOpacity="0.28" />
          </filter>

          {/* Leaf Drop Shadow */}
          <filter id="leafShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1" dy="1.5" stdDeviation="1.8" floodColor="#0E2B12" floodOpacity="0.22" />
          </filter>

          {/* Flower Petal Shadow */}
          <filter id="flowerShadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="1" dy="2" stdDeviation="2.2" floodColor="#041B0E" floodOpacity="0.32" />
          </filter>
        </defs>

        {/* ==================================================================
            1. MAIN TREE ROOT (Initial style guarantees no flash of full root)
            ================================================================== */}
        <path
          ref={mainRootRef}
          d={pathData.mainD}
          fill="none"
          stroke="url(#rootTrunkGrad)"
          strokeWidth={stemWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#rootDropShadow)"
          style={{ strokeDasharray: '30000', strokeDashoffset: '29965' }}
        />

        {/* Inner bark groove / crease line */}
        <path
          ref={barkVeinRef}
          d={pathData.mainD}
          fill="none"
          stroke="#44210F"
          strokeWidth={Math.max(1.4, stemWidth * 0.18)}
          strokeLinecap="round"
          strokeDasharray="18 12"
          opacity="0.8"
          style={{ strokeDasharray: '30000', strokeDashoffset: '29965' }}
        />

        {/* Soft bark highlight ridge along lit side */}
        <path
          ref={highlightVeinRef}
          d={pathData.mainD}
          fill="none"
          stroke="#B8855F"
          strokeWidth={Math.max(1.1, stemWidth * 0.12)}
          strokeLinecap="round"
          opacity="0.6"
          style={{ strokeDasharray: '30000', strokeDashoffset: '29965' }}
        />

        {/* ==================================================================
            2. REGULAR TRUNK FOLIAGE (Alternating along left outer gutter)
            ================================================================== */}
        {pathData.foliageClusters.map((cluster, idx) => {
          const isRight = cluster.isRight;
          return (
            <g
              key={cluster.id}
              ref={(el) => { foliageRefs.current[idx] = el; }}
              style={{
                transformOrigin: `${cluster.stemX}px ${cluster.y}px`,
                transform: 'scale(0)',
                opacity: 0,
                willChange: 'transform, opacity'
              }}
            >
              {/* Woody Twig Branch */}
              <path
                d={cluster.twigD}
                fill="none"
                stroke="url(#branchWoodGrad)"
                strokeWidth={Math.max(2.4, stemWidth * 0.3)}
                strokeLinecap="round"
                filter="url(#rootDropShadow)"
              />

              {/* Wooden Swelling Node */}
              <circle
                cx={cluster.stemX}
                cy={cluster.y}
                r={Math.max(3, stemWidth * 0.38)}
                fill="#6C3E22"
              />

              {/* 2-3 Botanical Leaves at Twig Endpoint */}
              <g transform={`translate(${cluster.twigEndX}, ${cluster.twigEndY})`}>
                <path
                  d="M 0,0 C 6,-10 18,-7 23,3 C 16,10 7,8 0,0 Z"
                  fill="url(#leafBladeGrad)"
                  filter="url(#leafShadow)"
                  transform={`rotate(${isRight ? -35 : 175}) scale(0.92)`}
                />
                <path
                  d="M 0,0 Q 11,-1 19,2"
                  fill="none"
                  stroke="#D7EFB2"
                  strokeWidth="0.8"
                  opacity="0.85"
                  transform={`rotate(${isRight ? -35 : 175}) scale(0.92)`}
                />
                <path
                  d="M 0,0 C -5,-9 -15,-6 -19,3 C -13,9 -5,8 0,0 Z"
                  fill="url(#leafDarkGrad)"
                  filter="url(#leafShadow)"
                  transform={`rotate(${isRight ? 20 : 130}) scale(0.8)`}
                />
                <path
                  d="M 0,0 Q -9,-1 -16,2"
                  fill="none"
                  stroke="#CBE89D"
                  strokeWidth="0.7"
                  opacity="0.75"
                  transform={`rotate(${isRight ? 20 : 130}) scale(0.8)`}
                />
                <path
                  d="M 0,0 C 2,-6 7,-4 9,-1 C 6,3 2,2 0,0 Z"
                  fill="#82CF46"
                  transform={`rotate(${isRight ? -5 : 150}) scale(0.72)`}
                />
              </g>
            </g>
          );
        })}

        {/* ==================================================================
            3. FOOTER FLOWER & LEAF CLUSTERS (Matching reference ending)
            ================================================================== */}
        {pathData.footerFlowers.map((flower, idx) => (
          <g
            key={flower.id}
            ref={(el) => { flowerRefs.current[idx] = el; }}
            style={{
              transformOrigin: `${flower.stemX}px ${flower.stemY}px`,
              transform: 'scale(0)',
              opacity: 0,
              willChange: 'transform, opacity'
            }}
          >
            {/* Delicate offshoot branch curving into flower bloom */}
            <path
              d={flower.offshootTwigD}
              fill="none"
              stroke="url(#branchWoodGrad)"
              strokeWidth={Math.max(2.2, stemWidth * 0.28)}
              strokeLinecap="round"
              filter="url(#rootDropShadow)"
            />

            {/* Wooden branch joint node */}
            <circle
              cx={flower.stemX}
              cy={flower.stemY}
              r={Math.max(2.6, stemWidth * 0.32)}
              fill="#6C3E22"
            />

            {/* Main Botanical Flower Group */}
            <g transform={`translate(${flower.flowerX}, ${flower.flowerY}) scale(${flower.scale})`}>
              {/* Calyx Leaves radiating beneath petals */}
              <path
                d="M 0,0 C 4,-7 11,-10 15,-3 C 11,2 5,2 0,0 Z"
                fill="url(#leafBladeGrad)"
                filter="url(#leafShadow)"
                transform="rotate(25)"
              />
              <path
                d="M 0,0 C -4,-7 -11,-10 -15,-3 C -11,2 -5,2 0,0 Z"
                fill="url(#leafDarkGrad)"
                filter="url(#leafShadow)"
                transform="rotate(-25)"
              />
              <path
                d="M 0,0 C 3,7 8,10 13,4 C 9,0 4,0 0,0 Z"
                fill="url(#leafBladeGrad)"
                filter="url(#leafShadow)"
                transform="rotate(115)"
              />
              <path
                d="M 0,0 C -3,7 -8,10 -13,4 C -9,0 -4,0 0,0 Z"
                fill="url(#leafDarkGrad)"
                filter="url(#leafShadow)"
                transform="rotate(-115)"
              />

              {/* 5 Radiant Lotus / Jasmine Petals */}
              {[0, 72, 144, 216, 288].map((angle) => (
                <g key={angle} transform={`rotate(${angle})`}>
                  <path
                    d="M 0,0 C -5,-7 -7,-14 0,-19 C 7,-14 5,-7 0,0 Z"
                    fill="url(#ayushPetalGrad)"
                    stroke="#E6C875"
                    strokeWidth="0.55"
                    filter="url(#flowerShadow)"
                  />
                  <path
                    d="M 0,-2 Q 0,-8 0,-14"
                    fill="none"
                    stroke="#F5DF9E"
                    strokeWidth="0.45"
                    opacity="0.8"
                  />
                </g>
              ))}

              {/* Golden Stamen Amber Center Core */}
              <circle cx="0" cy="0" r="4.2" fill="url(#flowerStamenGrad)" />
              <circle cx="0" cy="0" r="6.8" fill="url(#flowerCoreGlow)" className="flower-core-glow" />

              {/* 5 Tiny Golden Pollen Stamens */}
              {[0, 72, 144, 216, 288].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const px = Math.cos(rad) * 2.7;
                const py = Math.sin(rad) * 2.7;
                return (
                  <circle key={`pollen-${angle}`} cx={px} cy={py} r="0.85" fill="#FFF2B2" />
                );
              })}
              <circle cx="0" cy="0" r="1.3" fill="#FFF7CC" />

              {/* Companion Secondary Mini-Bud */}
              <g transform={`translate(${flower.budOffsetX}, ${flower.budOffsetY}) scale(0.68)`}>
                <path
                  d="M -10,12 Q -4,5 0,0"
                  fill="none"
                  stroke="url(#branchWoodGrad)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 0,0 C 2,-5 6,-7 8,-2 C 6,1 2,1 0,0 Z"
                  fill="url(#leafBladeGrad)"
                  transform="rotate(38)"
                />
                <path
                  d="M 0,0 C -2,-5 -6,-7 -8,-2 C -6,1 -2,1 0,0 Z"
                  fill="url(#leafDarkGrad)"
                  transform="rotate(-38)"
                />
                <path
                  d="M 0,0 C -3,-5 -3,-10 0,-13 C 3,-10 3,-5 0,0 Z"
                  fill="url(#ayushPetalGrad)"
                  stroke="#E6C875"
                  strokeWidth="0.5"
                />
                <circle cx="0" cy="-5" r="1.4" fill="#FFC83B" opacity="0.85" />
              </g>
            </g>
          </g>
        ))}

        {/* ==================================================================
            4. TERMINAL SPROUT AT HORIZONTAL BRANCH END
            ================================================================== */}
        {pathData.terminalSprout && (
          <g
            ref={terminalSproutRef}
            style={{
              transformOrigin: `${pathData.terminalSprout.endX}px ${pathData.terminalSprout.endY}px`,
              transform: 'scale(0)',
              opacity: 0,
              willChange: 'transform, opacity'
            }}
          >
            <g
              transform={`translate(${pathData.terminalSprout.endX}, ${pathData.terminalSprout.endY}) scale(${pathData.terminalSprout.scale})`}
            >
              <circle cx="0" cy="0" r="7" fill="url(#sproutTipGlow)" className="root-tip-glow" />
              <path
                d="M 0,0 C 3,-6 9,-8 13,-3 C 10,2 4,2 0,0 Z"
                fill="url(#leafBladeGrad)"
                filter="url(#leafShadow)"
                transform="rotate(15)"
              />
              <path
                d="M 0,0 C -2,-5 -6,-7 -9,-2 C -7,2 -2,2 0,0 Z"
                fill="url(#leafDarkGrad)"
                filter="url(#leafShadow)"
                transform="rotate(-40)"
              />
              <circle cx="3" cy="-2" r="2.8" fill="#FCE59F" stroke="#E6C875" strokeWidth="0.4" />
              <circle cx="3" cy="-2" r="1.1" fill="#FFB703" />
            </g>
          </g>
        )}

        {/* ==================================================================
            5. LIVING APICAL GROWING TIP (Tracks leading edge during scroll)
            ================================================================== */}
        <g ref={tipRef} style={{ opacity: 0, willChange: 'transform, opacity' }}>
          <circle cx="0" cy="0" r={Math.max(9, stemWidth * 0.9)} fill="url(#sproutTipGlow)" className="root-tip-glow" />
          <circle cx="0" cy="0" r={Math.max(3.5, stemWidth * 0.35)} fill="#583119" />
          <path d="M 0,0 C 3,-7 9,-6 12,-1 C 8,3 3,2 0,0 Z" fill="#88C74D" />
          <path d="M 0,0 C -3,-7 -9,-6 -12,-1 C -8,3 -3,2 0,0 Z" fill="#6FA83E" />
        </g>
      </svg>
    </div>
  );
}

export default BotanicalRootAnimation;
