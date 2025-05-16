import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

// Light theme
const lightTheme = {
  colors: {
    primary: '#5e3bee',
    secondary: '#232e35',
    text: '#656d72',
    light: '#f5fcff',
    dark: '#232e35',
    background: '#ffffff',
    sectionBg: '#f5fcff',
    border: '#e3e3e3',
    cardBg: '#ffffff',
    headerBg: '#ffffff',
    footerBg: '#232e35',
    footerText: '#ffffff',
  },
  fonts: {
    main: "'Poppins', sans-serif",
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  transition: 'all 0.3s ease',
  name: 'light'
};

// Dark theme
const darkTheme = {
  colors: {
    primary: '#6b4bff',
    secondary: '#e3e3e3',
    text: '#b4b4b4',
    light: '#2d2d2d',
    dark: '#f5fcff',
    background: '#121212',
    sectionBg: '#1e1e1e',
    border: '#333333',
    cardBg: '#1e1e1e',
    headerBg: '#121212',
    footerBg: '#0a0a0a',
    footerText: '#e3e3e3',
  },
  fonts: {
    main: "'Poppins', sans-serif",
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  transition: 'all 0.3s ease',
  name: 'dark'
};

function App() {
  // Check if user has a theme preference in localStorage
  const savedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(savedTheme === 'dark' ? darkTheme : lightTheme);
  
  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme.name === 'light' ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme.name);
  };

  // Check system preference on initial load
  useEffect(() => {
    if (!savedTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? darkTheme : lightTheme);
      localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
    }
  }, [savedTheme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ScrollToTop />
      <div style={{ 
        width: '100%', 
        maxWidth: '100vw',
        overflowX: 'hidden',
        margin: 0,
        padding: 0
      }}>
        <Header toggleTheme={toggleTheme} currentTheme={theme.name} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 