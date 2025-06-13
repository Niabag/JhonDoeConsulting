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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', id: 'home' },
    { name: 'À Propos', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Solutions', id: 'solutions' },
    { name: 'Opportunités', id: 'opportunities' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => onPageChange('home')}
        >
          <div className="group-hover:scale-110 transition-transform duration-300">
            <Logo size="md" />
          </div>
          <div>
            <div className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              John Doe Consulting
            </div>
            <div className="text-xs text-gray-600 -mt-1">Expert Multi-Secteurs</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`relative text-sm font-medium transition-colors duration-300 group ${
                currentPage === item.id ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={() => onPageChange('contact')}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Consultation Gratuite
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <nav className="px-6 py-4 space-y-4">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onPageChange(item.id);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left text-lg font-medium transition-colors duration-300 ${
                currentPage === item.id ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => {
              onPageChange('contact');
              setIsMenuOpen(false);
            }}
            className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full"
          >
            Consultation Gratuite
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;