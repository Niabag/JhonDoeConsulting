import React from 'react';
import { Building2, Home, Globe, Music, TrendingUp, Users, Search, Lightbulb } from 'lucide-react';

interface ServicesProps {
  onPageChange?: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onPageChange }) => {
  // Fonction de navigation vers Contact
  const handleContactClick = () => {
    if (onPageChange) {
      onPageChange('contact');
    }
  };

  const services = [
    {
      icon: Building2,
      title: 'BTP & Construction',
      description: 'Apport d\'affaires, mise en relation et stratégies de développement pour le secteur du bâtiment.',
      features: ['Apport d\'affaires qualifiés', 'Mise en relation professionnelle', 'Analyse de marché BTP', 'Stratégies de croissance'],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Home,
      title: 'Immobilier',
      description: 'Stratégies d\'investissement, mise en relation et analyse de marché immobilier.',
      features: ['Analyse de marché immobilier', 'Stratégies d\'investissement', 'Mise en relation investisseurs', 'Accompagnement projets'],
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Globe,
      title: 'Digital & Communication',
      description: 'Création sites web, applications, SEO, stratégies de communication digitale complètes.',
      features: ['Création sites web', 'Développement applications', 'Gestion SEO avancée', 'Stratégies digitales'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Music,
      title: 'Industrie Musicale',
      description: 'Mise en relation artistes-producteurs, développement de carrières musicales.',
      features: ['Mise en relation artistes', 'Développement carrières', 'Stratégies de promotion', 'Accompagnement projets'],
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Développement Commercial',
      description: 'Stratégies de croissance, formation équipes commerciales et optimisation des performances.',
      features: ['Stratégies de croissance', 'Formation commerciale', 'Optimisation performances', 'Coaching équipes'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Search,
      title: 'Études de Marché',
      description: 'Analyses approfondies, veille concurrentielle et études de faisabilité sectorielles.',
      features: ['Analyses de marché', 'Veille concurrentielle', 'Études de faisabilité', 'Rapports détaillés'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'Accompagnement Personnalisé',
      description: 'Coaching individuel, développement personnel et accompagnement sur-mesure.',
      features: ['Coaching personnalisé', 'Développement personnel', 'Accompagnement sur-mesure', 'Suivi individualisé'],
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: 'Conseil Stratégique',
      description: 'Consultant externe pour définir vos orientations stratégiques et optimiser votre développement.',
      features: ['Conseil stratégique', 'Audit d\'entreprise', 'Plans d\'action', 'Optimisation processus'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Nos
            <span className="block text-blue-400 neon-text">Services</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Solutions complètes pour votre développement d'affaires multi-secteurs. 
            De l'apport d'affaires à l'accompagnement personnalisé, nous couvrons tous vos besoins.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="dark-card rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-700 hover:border-blue-500">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center neon-glow`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-300 mb-3">Services inclus :</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full neon-glow" />
                            <span className="text-sm text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button 
                      onClick={handleContactClick}
                      className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 neon-glow"
                    >
                      En Savoir Plus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white neon-text">Notre Méthodologie</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un processus éprouvé pour garantir le succès de vos projets de développement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Diagnostic', 
                description: 'Analyse complète de votre situation et de vos objectifs',
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                step: '02', 
                title: 'Stratégie', 
                description: 'Élaboration d\'un plan d\'action personnalisé et ciblé',
                color: 'from-purple-500 to-pink-500'
              },
              { 
                step: '03', 
                title: 'Mise en Œuvre', 
                description: 'Déploiement des actions avec notre réseau professionnel',
                color: 'from-green-500 to-teal-500'
              },
              { 
                step: '04', 
                title: 'Suivi', 
                description: 'Accompagnement continu et optimisation des résultats',
                color: 'from-orange-500 to-red-500'
              }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 dark-card border-4 border-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:${phase.color} transition-all duration-300 neon-glow`}>
                  <span className="text-2xl font-bold text-blue-400 group-hover:text-white transition-colors duration-300">
                    {phase.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300 text-white">
                  {phase.title}
                </h3>
                <p className="text-gray-400">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white neon-text">Nos Engagements</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Votre réussite est notre priorité absolue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Résultats Mesurables',
                description: 'Objectifs chiffrés et reporting détaillé de nos actions et de leur impact.',
                metric: '100%',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Accompagnement Personnalisé',
                description: 'Un interlocuteur dédié et un suivi individualisé pour chaque projet.',
                metric: '24/7',
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Réseau Qualifié',
                description: 'Accès à notre carnet d\'adresses premium dans tous les secteurs.',
                metric: '1000+',
                color: 'from-green-500 to-teal-500'
              }
            ].map((guarantee, index) => (
              <div key={index} className="dark-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 text-center group hover:border-blue-500">
                <div className={`text-4xl font-bold mb-4 bg-gradient-to-r ${guarantee.color} bg-clip-text text-transparent neon-text`}>
                  {guarantee.metric}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {guarantee.title}
                </h3>
                <p className="text-gray-400">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white neon-text">Prêt à Commencer ?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès maintenant pour une consultation gratuite et découvrez comment nous pouvons développer votre business.
          </p>
          <button 
            onClick={handleContactClick}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 neon-glow"
          >
            Consultation Gratuite
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;