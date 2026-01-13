import { useState, useRef, useEffect } from 'react';
import Navigation from './components/Navigation';
import SlideNavigator from './components/SlideNavigator';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Market from './components/Market';
import Business from './components/Business';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef(null);

  // Aggressively prevent horizontal dragging and screen movement
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;
    
    let touchStartX = 0;
    let touchStartY = 0;
    let mouseStartX = 0;
    let mouseStartY = 0;
    
    // Force document width to match viewport
    const forceViewportWidth = () => {
      const viewportWidth = window.innerWidth;
      const docWidth = document.documentElement.scrollWidth;
      const bodyWidth = document.body.scrollWidth;
      
      // Force html and body to exact viewport width
      document.documentElement.style.width = `${viewportWidth}px`;
      document.documentElement.style.maxWidth = `${viewportWidth}px`;
      document.body.style.width = `${viewportWidth}px`;
      document.body.style.maxWidth = `${viewportWidth}px`;
      
      // Force root element
      const root = document.getElementById('root');
      if (root) {
        root.style.width = `${viewportWidth}px`;
        root.style.maxWidth = `${viewportWidth}px`;
      }
      
      // Lock scroll position
      if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY);
      }
      
      // Lock all containers
      if (containerRef.current) {
        containerRef.current.scrollLeft = 0;
        containerRef.current.style.width = `${viewportWidth}px`;
        containerRef.current.style.maxWidth = `${viewportWidth}px`;
      }
      
      // Prevent transforms
      document.body.style.transform = 'translateX(0)';
      document.documentElement.style.transform = 'translateX(0)';
      if (containerRef.current) {
        containerRef.current.style.transform = 'translateX(0)';
      }
      
      // Find and fix any element wider than viewport - only check visible elements
      // Skip expensive checks on every frame
      const visibleElements = document.querySelectorAll('.snap-section, .container, nav, .snap-container');
      visibleElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.width > viewportWidth) {
          el.style.maxWidth = `${viewportWidth}px`;
          el.style.width = '100%';
          el.style.boxSizing = 'border-box';
        }
      });
    };
    
    // Touch handlers
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };
    
    const handleTouchMove = (e) => {
      if (e.touches.length === 1) {
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        const deltaX = Math.abs(touchX - touchStartX);
        const deltaY = Math.abs(touchY - touchStartY);
        
        // Only prevent if horizontal movement is significantly greater than vertical
        // Allow vertical scrolling to work normally
        if (deltaX > deltaY * 2 && deltaX > 10) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }
    };
    
    // Mouse handlers
    const handleMouseDown = (e) => {
      mouseStartX = e.clientX;
      mouseStartY = e.clientY;
    };
    
    const handleMouseMove = (e) => {
      if (e.buttons === 1) {
        const deltaX = Math.abs(e.clientX - mouseStartX);
        const deltaY = Math.abs(e.clientY - mouseStartY);
        
        if (deltaX > deltaY && deltaX > 5) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }
    };
    
    // Prevent horizontal scroll
    const preventHorizontalScroll = (e) => {
      if (e.deltaX !== 0 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };
    
    // Prevent drag
    const preventDrag = (e) => {
      if (e.type === 'dragstart' || e.type === 'drag') {
        e.preventDefault();
        return false;
      }
    };
    
    // Monitor for DOM changes - debounced
    let mutationTimeout;
    const observer = new MutationObserver(() => {
      clearTimeout(mutationTimeout);
      mutationTimeout = setTimeout(() => {
        forceViewportWidth();
      }, 100);
    });
    
    // Continuous monitoring with requestAnimationFrame - reduced frequency
    let rafId;
    let lastCheck = 0;
    const monitor = () => {
      const now = Date.now();
      // Only check every 200ms instead of every frame
      if (now - lastCheck > 200) {
        forceViewportWidth();
        lastCheck = now;
      }
      rafId = requestAnimationFrame(monitor);
    };
    
    // Add event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mousemove', handleMouseMove, { passive: false });
    document.addEventListener('dragstart', preventDrag, { passive: false });
    document.addEventListener('drag', preventDrag, { passive: false });
    window.addEventListener('wheel', preventHorizontalScroll, { passive: false });
    window.addEventListener('scroll', forceViewportWidth, { passive: true });
    window.addEventListener('resize', forceViewportWidth);
    
    // Start monitoring
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });
    
    rafId = requestAnimationFrame(monitor);
    forceViewportWidth();
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('dragstart', preventDrag);
      document.removeEventListener('drag', preventDrag);
      window.removeEventListener('wheel', preventHorizontalScroll);
      window.removeEventListener('scroll', forceViewportWidth);
      window.removeEventListener('resize', forceViewportWidth);
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

  const slides = [
    { id: 'hero', component: <Hero /> },
    { id: 'problem', component: <Problem /> },
    { id: 'solution', component: <Solution /> },
    { id: 'market', component: <Market /> },
    { id: 'business', component: <Business /> },
    { id: 'roadmap', component: <Roadmap /> },
    { id: 'team', component: <Team /> },
  ];

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollValues = containerRef.current.scrollTop;
      const height = window.innerHeight;
      // Use a more lenient threshold - snap to section when scrolled 25% of viewport
      // This makes navigation more responsive with less scrolling needed
      const threshold = height * 0.25;
      const index = Math.floor((scrollValues + threshold) / height);
      const maxIndex = slides.length;
      const clampedIndex = Math.max(0, Math.min(index, maxIndex - 1));
      if (clampedIndex !== activeSlide) {
        setActiveSlide(clampedIndex);
      }
    }
  };

  const scrollToSlide = (index) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      });
      setActiveSlide(index);
    }
  };

  const scrollToTop = () => {
    scrollToSlide(0);
  };

  return (
    <div 
      className="w-full h-full overflow-x-hidden" 
      style={{ 
        touchAction: 'pan-y', 
        overscrollBehaviorX: 'none',
        width: '100%',
        maxWidth: '100%',
        overflowX: 'hidden',
        position: 'relative',
        left: 0,
        right: 0
      }}
    >
      <Navigation />
      <SlideNavigator
        activeIndex={activeSlide}
        count={slides.length}
        onSelect={scrollToSlide}
      />
      <ScrollToTop onScrollToTop={scrollToTop} />

      <main
        ref={containerRef}
        className="snap-container"
        onScroll={handleScroll}
        style={{ 
          touchAction: 'pan-y', 
          overscrollBehaviorX: 'none',
          width: '100%',
          maxWidth: '100%',
          overflowX: 'hidden',
          position: 'relative',
          left: 0,
          right: 0
        }}
      >
        {slides.map((slide) => (
          <section key={slide.id} id={slide.id} className="snap-section">
            {slide.component}
          </section>
        ))}
        <section id="footer" className="snap-section footer-section">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
