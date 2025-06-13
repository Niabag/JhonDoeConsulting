import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navigation = [
    { name: 'Accueil', id: 'home' },
    { name: 'À Propos', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Solutions', id: 'solutions' },
    { name: 'Opportunités', id: 'opportunities' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-700 ease-out ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl py-4 border-b border-gray-100' 
        : 'bg-transparent py-6'
    }`}>
      {/* Gradient border effect */}
      <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transition-opacity duration-500 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      }`} />
      
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        {/* Magnetic effect for logo */}
        <div 
          className="flex items-center space-x-3 cursor-pointer group magnetic hover-lift"
          onClick={() => onPageChange('home')}
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`
          }}
        >
          <div className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-pulse-slow">
            <Logo size="md" />
          </div>
          <div className="relative">
            <div className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-all duration-500 transform group-hover:scale-105">
              John Doe Consulting
            </div>
            <div className="text-xs text-gray-600 -mt-1 group-hover:text-purple-600 transition-colors duration-300">
              Expert Multi-Secteurs
            </div>
            {/* Animated underline */}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          {navigation.map((item, index) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`relative text-sm font-medium transition-all duration-500 group hover-lift stagger-item ${
                currentPage === item.id ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ${
                currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
              {/* Hover glow effect */}
              <span className="absolute inset-0 rounded-lg bg-blue-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={() => onPageChange('contact')}
            className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden morph-button ripple animate-glow"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Consultation Gratuite</span>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce-slow" />
            </span>
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 hover:text-blue-600 transition-all duration-500 hover:scale-110 hover:rotate-180"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative w-6 h-6">
            <Menu className={`absolute inset-0 transition-all duration-500 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} size={24} />
            <X className={`absolute inset-0 transition-all duration-500 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} size={24} />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden absolute top-full left-0 w-full glass-effect transition-all duration-700 ${
        isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
      }`}>
        <nav className="px-6 py-4 space-y-4">
          {navigation.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                onPageChange(item.id);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left text-lg font-medium transition-all duration-500 hover:translate-x-2 hover:text-blue-600 stagger-item ${
                currentPage === item.id ? 'text-blue-600' : 'text-gray-700'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>{item.name}</span>
              </div>
            </button>
          ))}
          <button 
            onClick={() => {
              onPageChange('contact');
              setIsMenuOpen(false);
            }}
            className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-500 transform hover:scale-105 animate-gradient"
          >
            Consultation Gratuite
          </button>
        </nav>
      </div>

      {/* Floating particles */}
      {scrolled && (
        <div className="particles">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;