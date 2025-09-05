import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import CustomCursor from './components/CustomCursor';

const App = () => {
  const [currentTime, setCurrentTime] = useState('');
  
  // Refs for scroll animations
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  
 
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const sphereRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const ring3Ref = useRef(null);
  
  // New section refs
  const aboutTitleRef = useRef(null);
  const aboutTextRef = useRef(null);
  const workTitleRef = useRef(null);
  const workItemsRef = useRef([]);
  const contactTitleRef = useRef(null);
  const contactFormRef = useRef(null);

  useEffect(() => {
    // Clock update
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        timeZone: 'Europe/Berlin'
      });
      setCurrentTime(timeString + ' GMT+1');
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Custom scroll animations with Intersection Observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    // Hero entrance animation
    setTimeout(() => {
      titleRef.current?.classList.add('animate-in');
      subtitleRef.current?.classList.add('animate-in');
    }, 100);

    // Ring rotation with CSS
    const rings = document.querySelectorAll('.ring');
    rings.forEach(ring => {
      ring.style.animation = 'rotate 60s linear infinite';
    });

    // Parallax effect with CSS
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.geometric-pattern, .geometric-pattern-2');
      parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });

    // Cleanup
    return () => {
      sections.forEach(section => observer.unobserve(section));
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <div className="app">
      <CustomCursor />
      {/* Hero Section */}
      <section className="hero" ref={heroRef} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>

        
        <header className="header" ref={headerRef}>
          <div className="menu-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="status">AVAILABLE</div>
        </header>

        <main className="main">
          <div className="content">
            <h1 className="title" ref={titleRef}>
            MAN1SH
          </h1>
          <p className="subtitle" ref={subtitleRef}>
            CREATIVE DIGITAL DESIGNER
          </p>
          </div>

          {/* CSS-based geometric patterns */}
          <div className="geometric-pattern">
            <div className="sphere css-sphere"></div>
            <div className="ring ring-1 css-ring"></div>
            <div className="ring ring-2 css-ring"></div>
            <div className="ring ring-3 css-ring"></div>
          </div>

          <div className="geometric-pattern-2">
            <div className="sphere css-sphere"></div>
            <div className="ring ring-1 css-ring"></div>
            <div className="ring ring-2 css-ring"></div>
            <div className="ring ring-3 css-ring"></div>
          </div>
        </main>

        <div className="scroll-indicator">
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" ref={aboutRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem' }}>
        <div className="section-content">
          <h2 className="section-title" ref={aboutTitleRef} style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>ABOUT</h2>
          <div className="about-text" ref={aboutTextRef} style={{ fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <p>I'm a creative digital designer who transforms ideas into beautiful digital experiences. I combine cutting-edge technology with precision design to create interfaces that are both beautiful and functional.</p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="work" ref={workRef} style={{ minHeight: '100vh', padding: '4rem 2rem', position: 'relative' }}>
        <div className="section-content">
          <h2 className="section-title" ref={workTitleRef} style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>SELECTED WORK</h2>
          <div className="work-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            {[
              { title: 'Digital Imaging', category: 'Photoshop', tech: 'Creative Suite' },
              { title: 'Evenza', category: 'Python SQL Vanilla', tech: 'Full Stack' },
              { title: 'Pro-take', category: 'Swift', tech: 'iOS Development' },
            ].map((item, index) => (
              <div key={index} className="work-item" ref={el => workItemsRef.current[index] = el} style={{ padding: '2rem', border: '1px solid #333', borderRadius: '8px', transition: 'transform 0.3s ease' }}>
                <div className="work-item-inner">
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
                  <p style={{ color: '#888', marginBottom: '1rem' }}>{item.category}</p>
                  <p>{item.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" ref={contactRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem' }}>
        <div className="section-content">
          <h2 className="section-title" ref={contactTitleRef} style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>CONTACT</h2>
          <div className="contact-form" ref={contactFormRef} style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Ready to create something extraordinary together? Let's bring your ideas to life.</p>
            <a href="mailto:man1shbarik.fr@gmail.com" className="cta-button" style={{ display: 'inline-block', padding: '1rem 2rem', background: '#fff', color: '#000', textDecoration: 'none', borderRadius: '50px', marginRight: '1rem', marginBottom: '1rem' }}>
              man1shbarik.fr@gmail.com
            </a>
            <a href="https://www.instagram.com/man1sh.08/" className="cta-button" style={{ display: 'inline-block', padding: '1rem 2rem', background: 'transparent', color: '#fff', textDecoration: 'none', border: '1px solid #fff', borderRadius: '50px', marginBottom: '1rem' }}>
              INSTAGRAM
            </a>
          </div>
        </div>
      </section>

      <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid #333' }}>
        <p>&copy; 2024 MAN1SH. All rights reserved.</p>
      </footer>


    </div>
  );
};

export default App;
