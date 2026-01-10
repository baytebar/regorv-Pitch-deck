import { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import SlideNavigator from './components/SlideNavigator';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Market from './components/Market';
import Solution from './components/Solution';
import Business from './components/Business';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
    const [activeSlide, setActiveSlide] = useState(0);
    const containerRef = useRef(null);

    const slides = [
        { id: 'hero', component: <Hero /> },
        { id: 'problem', component: <Problem /> },
        { id: 'solution', component: <Solution /> },
        { id: 'market', component: <Market /> },
        { id: 'business', component: <Business /> },
        { id: 'roadmap', component: <Roadmap /> },
        { id: 'team', component: <Team /> }
    ];

    const handleScroll = () => {
        if (containerRef.current) {
            const scrollValues = containerRef.current.scrollTop;
            const height = window.innerHeight;
            const index = Math.round(scrollValues / height);
            setActiveSlide(index);
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

    return (
        <div className="app">
            <Navigation />
            <SlideNavigator
                activeIndex={activeSlide}
                count={slides.length}
                onSelect={scrollToSlide}
            />

            <main
                ref={containerRef}
                className="snap-container"
                onScroll={handleScroll}
            >
                {slides.map((slide, index) => (
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
