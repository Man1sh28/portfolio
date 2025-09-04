import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const App = () => {
  const [currentTime, setCurrentTime] = useState('');
  
  // Refs for scroll animations
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  
  // Element refs for animations
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

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero" ref={heroRef} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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

          <div className="geometric-pattern">
            <div className="sphere" ref={sphereRef}></div>
            <div className="ring ring-1" ref={ring1Ref}></div>
            <div className="ring ring-2" ref={ring2Ref}></div>
            <div className="ring ring-3" ref={ring3Ref}></div>
            
          </div>

          <div className="geometric-pattern-2">
            <div className="sphere" ref={sphereRef}></div>
            <div className="ring ring-1" ref={ring1Ref}></div>
            <div className="ring ring-2" ref={ring2Ref}></div>
            <div className="ring ring-3" ref={ring3Ref}></div>
          </div>
        </main>

        <div className="scroll-indicator">
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" ref={aboutRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem' }}>
        <div className="section-content">
          <h2 className="section-title" ref={aboutTitleRef}>ABOUT</h2>
          <div className="about-text" ref={aboutTextRef}>
            <p>Digital designer crafting immersive experiences at the intersection of art and technology. Specializing in creative direction, visual design, and interactive storytelling.</p>
            <p>Based in Berlin, working globally.</p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="work" ref={workRef} style={{ minHeight: '100vh', padding: '4rem 2rem' }}>
        <div className="section-content">
          <h2 className="section-title" ref={workTitleRef}>SELECTED WORK</h2>
          <div className="work-grid">
            {[
              { title: 'Digital Imaging', category: 'Photoshop' },
              { title: 'Evenza', category: 'Python SQL Vannila' },
              { title: 'Pro-take', category: 'Swift' },
            ].map((item, index) => (
              <div key={index} className="work-item" ref={el => workItemsRef.current[index] = el}>
                <div className="work-item-inner">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" ref={contactRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem' }}>
        <div className="section-content">
          <h2 className="section-title" ref={contactTitleRef}>CONTACT</h2>
          <div className="contact-form" ref={contactFormRef}>
            <p>Let's create something extraordinary together.</p>
            <div className="contact-info">
              <p>man1shbarik.fr@gmail.com</p>
              
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" style={{ position: 'fixed', bottom: '2rem', left: '2rem', right: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', letterSpacing: '0.05em', zIndex: 100 }}>
        <div className="copyright">
          © 2025 MAN1SH
        </div>
        <div className="contact-btn">
          CONTACT →
        </div>
        <div className="time">
          {currentTime}
        </div>
      </footer>


    </div>
  );
};

export default App;
