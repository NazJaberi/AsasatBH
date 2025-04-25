// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import logo from './logo.png'; // You would need to save the logo image

// Main Components
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// Language Context
export const LanguageContext = React.createContext();

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
    document.body.dir = language === 'en' ? 'rtl' : 'ltr';
    document.body.className = language === 'en' ? 'ar-font' : 'en-font';
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <Router>
        <div className={`app ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

function Header() {
  const { language, toggleLanguage } = React.useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Toggle body scroll when menu is open
    document.body.style.overflow = !menuOpen ? 'hidden' : 'auto';
    // Toggle overlay class on header
    const headerElement = document.querySelector('header');
    if (headerElement) {
      headerElement.classList.toggle('overlay-active', !menuOpen);
    }
  };

  // Close menu when route changes
  React.useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
    const headerElement = document.querySelector('header');
    if (headerElement) {
      headerElement.classList.remove('overlay-active');
    }
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: { en: 'Home', ar: 'الرئيسية' } },
    { path: '/about', label: { en: 'About Us', ar: 'من نحن' } },
    { path: '/portfolio', label: { en: 'Portfolio', ar: 'المشاريع' } },
    { path: '/contact', label: { en: 'Contact Us', ar: 'اتصل بنا' } },
  ];

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Asasat Albahrain Logo" />
          </Link>
        </div>
        
        <div className={`mobile-menu-button ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={menuOpen ? 'active' : ''}>
          <ul>
            {navItems.map((item) => (
              <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
                <Link to={item.path} onClick={() => setMenuOpen(false)}>
                  {item.label[language]}
                </Link>
              </li>
            ))}
            <li className="language-toggle">
              <button onClick={toggleLanguage}>
                {language === 'en' ? 'العربية' : 'English'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const { language } = React.useContext(LanguageContext);
  
  const footerText = {
    en: {
      rights: '© 2025 Asasat Albahrain. All Rights Reserved.',
      address: 'Manama, Kingdom of Bahrain',
      phone: 'Phone: +973 xxxx xxxx',
      email: 'Email: info@asasatalbahrain.com'
    },
    ar: {
      rights: '© 2025 أساسات البحرين. جميع الحقوق محفوظة.',
      address: 'المنامة، مملكة البحرين',
      phone: 'هاتف: +973 xxxx xxxx',
      email: 'البريد الإلكتروني: info@asasatalbahrain.com'
    }
  };
  
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Asasat Albahrain Logo" />
        </div>
        
        <div className="footer-info">
          <p>{footerText[language].address}</p>
          <p>{footerText[language].phone}</p>
          <p>{footerText[language].email}</p>
        </div>
        
        <div className="social-links">
          <button 
            className="social-button" 
            aria-label="Facebook"
            onClick={() => window.open('https://facebook.com', '_blank')}
          >
            <i className="fab fa-facebook-f"></i>
          </button>
          <button 
            className="social-button" 
            aria-label="Instagram"
            onClick={() => window.open('https://instagram.com', '_blank')}
          >
            <i className="fab fa-instagram"></i>
          </button>
          <button 
            className="social-button" 
            aria-label="LinkedIn"
            onClick={() => window.open('https://linkedin.com', '_blank')}
          >
            <i className="fab fa-linkedin-in"></i>
          </button>
          <button 
            className="social-button" 
            aria-label="Twitter"
            onClick={() => window.open('https://twitter.com', '_blank')}
          >
            <i className="fab fa-twitter"></i>
          </button>
        </div>
        
        <div className="copyright">
          <p>{footerText[language].rights}</p>
        </div>
      </div>
    </footer>
  );
}

export default App;