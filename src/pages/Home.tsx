import React, { useEffect, useState } from 'react';
import { ArrowDown, Play, Building2, TrendingUp, Users, Globe, Music, Home as HomeIcon, Sparkles, Zap, Terminal } from 'lucide-react';

interface HomeProps {
  onPageChange?: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observer.observe(el));

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fonctions de navigation
  const handleContactClick = () => {
    if (onPageChange) {
      onPageChange('contact');
    }
  };

  const handleServicesClick = () => {
    if (onPageChange) {
      onPageChange('services');
    }
  };

  const handleAboutClick = () => {
    if (onPageChange) {
      onPageChange('about');
    }
  };

  const handleConsultationClick = () => {
    if (onPageChange) {
      onPageChange('contact');
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Dark Cyber Theme */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 animate-gradient">
        {/* Cyber grid background */}
        <div className="absolute inset-0 cyber-grid opacity-20" />
        
        {/* Animated hologram background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse-slow" />
        
        {/* Floating cyber elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full animate-float-1 blur-sm neon-glow" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full animate-float-2 blur-sm neon-glow" />
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full animate-float-3 blur-sm neon-glow" />
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-full animate-float-1 blur-sm neon-glow" 
               style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-full animate-float-2 blur-sm neon-glow" 
               style={{ animationDelay: '1s' }} />
        </div>

        {/* Cyber scanning lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Parallax cyber elements */}
        <div 
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full opacity-80 parallax-slow neon-glow"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full opacity-80 parallax-fast neon-glow"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-3 glass-effect rounded-full text-blue-400 font-medium animate-slide-up-delay-1 shadow-2xl border border-blue-500/30 hover:shadow-2xl transition-all duration-500 hover:scale-105 group neon-glow">
              <Building2 className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300 neon-glow" />
              <span className="gradient-text">Expert Multi-Secteurs & Développement d'Affaires</span>
              <Terminal className="w-4 h-4 ml-3 animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block animate-slide-up-delay-1 hover:animate-wiggle cursor-default text-white neon-text">Développez</span>
              <span className="block animate-slide-up-delay-2 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient hover:scale-105 transition-transform duration-300 cursor-default">
                Votre Business
              </span>
              <span className="block animate-slide-up-delay-3 text-gray-300 hover:text-blue-400 transition-colors duration-500 cursor-default">Multi-Secteurs</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto animate-fade-in-delay-4 leading-relaxed hover:text-gray-300 transition-colors duration-300">
              BTP, Immobilier, Digital, Musique... Votre partenaire stratégique pour l'apport d'affaires, 
              la mise en relation et le développement commercial dans tous les secteurs porteurs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-delay-5">
              <button 
                onClick={handleContactClick}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-2xl transform hover:scale-110 transition-all duration-500 overflow-hidden morph-button cyber-button neon-glow"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Consultation Gratuite</span>
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 group-hover:animate-bounce transition-all duration-300" />
                  <Zap className="w-4 h-4 animate-pulse neon-glow" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              
              <button 
                onClick={handleServicesClick}
                className="group flex items-center space-x-3 px-8 py-4 border-2 border-gray-600 rounded-full hover:border-blue-500 hover:bg-gray-800/50 transition-all duration-500 hover:shadow-lg transform hover:scale-105 glass-effect cyber-button"
              >
                <Play className="w-5 h-5 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                <span className="group-hover:text-blue-400 transition-colors duration-300 text-gray-300">Découvrir Nos Services</span>
              </button>
            </div>
          </div>
        </div>

        {/* Cyber scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center neon-glow">
            <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse neon-glow"></div>
          </div>
        </div>
      </section>

      {/* Stats Section - Dark Cyber Theme */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900/30 to-gray-900 text-white relative overflow-hidden animate-gradient">
        {/* Cyber grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full cyber-grid" />
        </div>

        {/* Scanning lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Building2, number: '200+', label: 'Projets Accompagnés', color: 'from-blue-500 to-cyan-500' },
              { icon: TrendingUp, number: '193+', label: 'Clients Satisfaits', color: 'from-purple-500 to-pink-500' },
              { icon: Users, number: '275+', label: 'Mises en Relation', color: 'from-green-500 to-blue-500' },
              { icon: Globe, number: '8+', label: 'Secteurs d\'Expertise', color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <div key={index} className="text-center fade-in-up group hover-lift">
                <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl neon-glow dark-card`}>
                  <stat.icon className="w-10 h-10 group-hover:animate-pulse" />
                </div>
                <div className="text-5xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform duration-300 neon-text">{stat.number}</div>
                <div className="text-gray-400 group-hover:text-white transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview - Dark Theme */}
      <section className="py-24 bg-gray-800 relative overflow-hidden">
        {/* Cyber background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full animate-float-1 blur-3xl neon-glow" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full animate-float-2 blur-3xl neon-glow" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 fade-in-up gradient-text neon-text">Nos Secteurs d'Expertise</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto fade-in-up">
              Une approche multi-sectorielle pour maximiser vos opportunités d'affaires
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'BTP & Construction',
                description: 'Apport d\'affaires, mise en relation, stratégies de développement pour le secteur du bâtiment.',
                image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: Building2,
                color: 'from-orange-500 to-red-500'
              },
              {
                title: 'Immobilier',
                description: 'Stratégies d\'investissement, mise en relation, analyse de marché immobilier.',
                image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: HomeIcon,
                color: 'from-green-500 to-teal-500'
              },
              {
                title: 'Digital & Tech',
                description: 'Création sites web, applications, SEO, stratégies de communication digitale.',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: Globe,
                color: 'from-blue-500 to-purple-500'
              },
              {
                title: 'Industrie Musicale',
                description: 'Mise en relation artistes-producteurs, développement carrières musicales.',
                image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: Music,
                color: 'from-pink-500 to-purple-500'
              }
            ].map((service, index) => (
              <div key={index} className="group cursor-pointer fade-in-up hover-lift stagger-item">
                <div className="dark-card rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-700 hover:border-blue-500 h-full group-hover:scale-105 hover-tilt neon-glow">
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/60 transition-all duration-500" />
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center opacity-90 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg neon-glow`}>
                      <service.icon className="w-6 h-6 text-white group-hover:animate-pulse" />
                    </div>
                    {/* Cyber overlay effect */}
                    <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                    {/* Cyber progress bar */}
                    <div className="mt-4 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-700 rounded-full neon-glow" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section - Dark Theme */}
      <section className="py-24 relative overflow-hidden bg-gray-900">
        {/* Cyber background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/10 to-gray-900 animate-gradient" />
        <div className="absolute inset-0 cyber-grid opacity-10" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 fade-in-up gradient-text neon-text">Notre Approche</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto fade-in-up">
              Une méthodologie éprouvée pour maximiser votre développement commercial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Analyse & Stratégie',
                description: 'Étude de marché approfondie, analyse de la concurrence et définition de votre stratégie de développement.',
                features: ['Audit complet', 'Étude de marché', 'Positionnement', 'Plan d\'action'],
                color: 'from-blue-500 to-cyan-500'
              },
              {
                step: '02',
                title: 'Mise en Relation',
                description: 'Activation de notre réseau professionnel pour créer des opportunités d\'affaires qualifiées.',
                features: ['Réseau qualifié', 'Rendez-vous ciblés', 'Négociation', 'Suivi personnalisé'],
                color: 'from-purple-500 to-pink-500'
              },
              {
                step: '03',
                title: 'Accompagnement',
                description: 'Support continu pour optimiser vos performances et développer votre activité durablement.',
                features: ['Coaching business', 'Formation équipes', 'Outils digitaux', 'Reporting détaillé'],
                color: 'from-green-500 to-blue-500'
              }
            ].map((phase, index) => (
              <div key={index} className="dark-card p-8 rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-700 border border-gray-700 fade-in-up group hover-lift hover-tilt neon-glow">
                <div className="flex items-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg animate-glow neon-glow`}>
                    <span className="text-3xl font-bold text-white group-hover:animate-pulse">{phase.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300 text-white">
                    {phase.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {phase.description}
                </p>
                
                <div className="space-y-3">
                  {phase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 group/item">
                      <div className="w-3 h-3 bg-blue-500 rounded-full group-hover/item:animate-pulse transition-all duration-300 neon-glow" />
                      <span className="text-sm text-gray-400 group-hover/item:text-blue-400 transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Cyber Theme */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-blue-900/30 to-gray-900 text-white relative overflow-hidden animate-gradient">
        {/* Cyber grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full animate-rotate-slow cyber-grid" />
        </div>

        {/* Scanning lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in-scale neon-text">
            Prêt à Développer Votre Business ?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
            Rejoignez notre réseau d'entrepreneurs qui ont fait confiance à notre expertise 
            multi-sectorielle pour développer leur activité.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-scale" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={handleConsultationClick}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 font-semibold overflow-hidden morph-button shadow-2xl cyber-button neon-glow"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Consultation Stratégique Gratuite</span>
                <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              </span>
            </button>
            <button 
              onClick={handleAboutClick}
              className="group px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full hover:bg-gray-800/50 hover:text-blue-400 hover:border-blue-500 transition-all duration-500 transform hover:scale-110 glass-effect cyber-button"
            >
              <span className="flex items-center space-x-2">
                <span>Découvrir Nos Réussites</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>

        {/* Cyber floating elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-500/50 rounded-full animate-float-1 neon-glow" />
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-purple-500/50 rounded-full animate-float-2 neon-glow" />
        <div className="absolute top-1/2 left-10 w-3 h-3 bg-cyan-500/50 rounded-full animate-float-3 neon-glow" />
      </section>
    </div>
  );
};

export default Home;