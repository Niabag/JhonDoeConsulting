import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Opportunities from './pages/Opportunities';
import Contact from './pages/Contact';

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
        return <About onPageChange={handlePageChange} />;
      case 'services':
        return <Services onPageChange={handlePageChange} />;
      case 'solutions':
        return <Solutions />;
      case 'opportunities':
        return <Opportunities />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Dark theme global animated background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Cyber grid background */}
        <div className="absolute inset-0 cyber-grid opacity-30" />
        
        {/* Animated gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 animate-gradient" />
        
        {/* Matrix rain effect */}
        <div className="matrix-rain absolute inset-0 opacity-20" />
        
        {/* Floating particles with neon glow */}
        <div className="particles">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 15}s`,
                background: `rgba(${Math.random() > 0.5 ? '59, 130, 246' : '139, 92, 246'}, 0.8)`,
                boxShadow: `0 0 10px rgba(${Math.random() > 0.5 ? '59, 130, 246' : '139, 92, 246'}, 0.8)`
              }}
            />
          ))}
        </div>

        {/* Hologram scanning lines */}
        <div className="absolute inset-0 hologram-effect opacity-10" />
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

      {/* Loading overlay during transitions with cyber theme */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-gray-900/90 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce neon-glow" style={{ animationDelay: '0s' }} />
            <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce neon-glow" style={{ animationDelay: '0.1s' }} />
            <div className="w-4 h-4 bg-cyan-500 rounded-full animate-bounce neon-glow" style={{ animationDelay: '0.2s' }} />
          </div>
          <div className="absolute inset-0 cyber-line" />
        </div>
      )}

      {/* Cyber corner decorations */}
      <div className="fixed top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-blue-500 opacity-30 z-40" />
      <div className="fixed top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-purple-500 opacity-30 z-40" />
      <div className="fixed bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-cyan-500 opacity-30 z-40" />
      <div className="fixed bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-green-500 opacity-30 z-40" />
    </div>
  );
}

export default App;