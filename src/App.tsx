import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Opportunities from './pages/Opportunities';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handlePageChange = (page: string) => {
    if (page === currentPage) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Add parallax effect to CSS custom property
    document.documentElement.style.setProperty('--scroll-y', `${scrollY}`);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'solutions':
        return <Solutions />;
      case 'opportunities':
        return <Opportunities />;
      case 'contact':
        return <Contact />;
      case 'portfolio':
        return <Portfolio />;
      case 'blog':
        return <Blog />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Global animated background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 animate-gradient" />
        {/* Floating particles */}
        <div className="particles">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 15}s`,
                background: `rgba(${Math.random() > 0.5 ? '59, 130, 246' : '139, 92, 246'}, 0.1)`
              }}
            />
          ))}
        </div>
      </div>

      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      
      <main className={`relative z-10 transition-all duration-500 ${
        isTransitioning 
          ? 'opacity-0 transform scale-95 blur-sm' 
          : 'opacity-100 transform scale-100 blur-0'
      }`}>
        <div className="animate-fade-in-scale">
          {renderPage()}
        </div>
      </main>

      {/* Loading overlay during transitions */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;