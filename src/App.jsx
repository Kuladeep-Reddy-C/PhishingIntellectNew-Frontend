import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DetectionCards from './components/DetectionCards';
import ThreatSummary from './components/ThreatSummary';
import HowItWorks from './components/HowItWorks';
import ConnectWithUs from './components/ConnectWithUs';
import Footer from './components/Footer';
import DetectPage from './pages/DetectPage';
import ReportPage from './pages/ReportPage';
import AboutPage from './pages/AboutPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [userRole, setUserRole] = useState('guest');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/detect') setCurrentPage('detect');
      else if (path === '/report') setCurrentPage('report');
      else if (path === '/about') setCurrentPage('about');
      else setCurrentPage('home');
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState();

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    if (currentPage !== 'home') {
      navigate('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onNavigate={navigate}
        onScrollToSection={scrollToSection}
        userRole={userRole}
        currentPage={currentPage}
      />

      {currentPage === 'home' && (
        <>
          <Hero onDetectClick={() => navigate('detect')} onHowItWorksClick={() => scrollToSection('how-trustnet-helps')} />
          <DetectionCards />
          <ThreatSummary />
          <HowItWorks />
          <ConnectWithUs />
          <Footer onNavigate={navigate} />
        </>
      )}

      {currentPage === 'detect' && <DetectPage />}
      {currentPage === 'report' && <ReportPage />}
      {currentPage === 'about' && <AboutPage />}
    </div>
  );
}

export default App;