import React, { useEffect } from 'react';
import { ArrowDown, Play, Building2, TrendingUp, Users, Globe, Music, Home as HomeIcon } from 'lucide-react';

const Home: React.FC = () => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-purple-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium animate-slide-up-delay-1">
              <Building2 className="w-4 h-4 mr-2" />
              Expert Multi-Secteurs & Développement d'Affaires
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block animate-slide-up-delay-1">Développez</span>
              <span className="block animate-slide-up-delay-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Votre Business
              </span>
              <span className="block animate-slide-up-delay-3 text-gray-800">Multi-Secteurs</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto animate-fade-in-delay-4 leading-relaxed">
              BTP, Immobilier, Digital, Musique... Votre partenaire stratégique pour l'apport d'affaires, 
              la mise en relation et le développement commercial dans tous les secteurs porteurs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-delay-5">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                <span className="flex items-center space-x-2">
                  <span>Consultation Gratuite</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </button>
              
              <button className="group flex items-center space-x-3 px-8 py-4 border-2 border-gray-300 rounded-full hover:border-blue-500 transition-all duration-500">
                <Play className="w-5 h-5 group-hover:text-blue-500 transition-colors duration-300" />
                <span>Découvrir Nos Secteurs</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float-1" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full animate-float-2" />
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full animate-float-3" />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center fade-in-up">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mx-auto mb-6">
                <Building2 className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-gray-300">Projets Accompagnés</div>
            </div>
            
            <div className="text-center fade-in-up">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mx-auto mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">193+</div>
              <div className="text-gray-300">Clients satifaits</div>
            </div>
            
            <div className="text-center fade-in-up">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">275+</div>
              <div className="text-gray-300">Mises en Relation</div>
            </div>
            
            <div className="text-center fade-in-up">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mx-auto mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">8+</div>
              <div className="text-gray-300">Secteurs d'Expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 fade-in-up">Nos Secteurs d'Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-up">
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
              <div key={index} className="group cursor-pointer fade-in-up">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 h-full">
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center opacity-90`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 fade-in-up">Notre Approche</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-up">
              Une méthodologie éprouvée pour maximiser votre développement commercial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Analyse & Stratégie',
                description: 'Étude de marché approfondie, analyse de la concurrence et définition de votre stratégie de développement.',
                features: ['Audit complet', 'Étude de marché', 'Positionnement', 'Plan d\'action']
              },
              {
                step: '02',
                title: 'Mise en Relation',
                description: 'Activation de notre réseau professionnel pour créer des opportunités d\'affaires qualifiées.',
                features: ['Réseau qualifié', 'Rendez-vous ciblés', 'Négociation', 'Suivi personnalisé']
              },
              {
                step: '03',
                title: 'Accompagnement',
                description: 'Support continu pour optimiser vos performances et développer votre activité durablement.',
                features: ['Coaching business', 'Formation équipes', 'Outils digitaux', 'Reporting détaillé']
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 fade-in-up group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{phase.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors duration-300">
                    {phase.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {phase.description}
                </p>
                
                <div className="space-y-2">
                  {phase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Prêt à Développer Votre Business ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Rejoignez notre reseau d'entrepreneurs qui ont fait confiance à notre expertise 
            multi-sectorielle pour développer leur activité.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold">
              Consultation Stratégique Gratuite
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Découvrir Nos Réussites
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;