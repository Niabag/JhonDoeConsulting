import React from 'react';
import { Building2, Home, Globe, Music, TrendingUp, Users, Search, Lightbulb } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Building2,
      title: 'BTP & Construction',
      description: 'Apport d\'affaires, mise en relation et stratégies de développement pour le secteur du bâtiment.',
      features: ['Apport d\'affaires qualifiés', 'Mise en relation professionnelle', 'Analyse de marché BTP', 'Stratégies de croissance'],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Home,
      title: 'Immobilier',
      description: 'Stratégies d\'investissement, mise en relation et analyse de marché immobilier.',
      features: ['Analyse de marché immobilier', 'Stratégies d\'investissement', 'Mise en relation investisseurs', 'Accompagnement projets'],
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Globe,
      title: 'Digital & Communication',
      description: 'Création sites web, applications, SEO, stratégies de communication digitale complètes.',
      features: ['Création sites web', 'Développement applications', 'Gestion SEO avancée', 'Stratégies digitales'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Music,
      title: 'Industrie Musicale',
      description: 'Mise en relation artistes-producteurs, développement de carrières musicales.',
      features: ['Mise en relation artistes', 'Développement carrières', 'Stratégies de promotion', 'Accompagnement projets'],
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: TrendingUp,
      title: 'Développement Commercial',
      description: 'Stratégies de croissance, formation équipes commerciales et optimisation des performances.',
      features: ['Stratégies de croissance', 'Formation commerciale', 'Optimisation performances', 'Coaching équipes'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Search,
      title: 'Études de Marché',
      description: 'Analyses approfondies, veille concurrentielle et études de faisabilité sectorielles.',
      features: ['Analyses de marché', 'Veille concurrentielle', 'Études de faisabilité', 'Rapports détaillés'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Users,
      title: 'Accompagnement Personnalisé',
      description: 'Coaching individuel, développement personnel et accompagnement sur-mesure.',
      features: ['Coaching personnalisé', 'Développement personnel', 'Accompagnement sur-mesure', 'Suivi individualisé'],
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Lightbulb,
      title: 'Conseil Stratégique',
      description: 'Consultant externe pour définir vos orientations stratégiques et optimiser votre développement.',
      features: ['Conseil stratégique', 'Audit d\'entreprise', 'Plans d\'action', 'Optimisation processus'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Nos
            <span className="block text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Solutions complètes pour votre développement d'affaires multi-secteurs. 
            De l'apport d'affaires à l'accompagnement personnalisé, nous couvrons tous vos besoins.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 mb-3">Services inclus :</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Notre Méthodologie</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus éprouvé pour garantir le succès de vos projets de développement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Diagnostic', description: 'Analyse complète de votre situation et de vos objectifs' },
              { step: '02', title: 'Stratégie', description: 'Élaboration d\'un plan d\'action personnalisé et ciblé' },
              { step: '03', title: 'Mise en Œuvre', description: 'Déploiement des actions avec notre réseau professionnel' },
              { step: '04', title: 'Suivi', description: 'Accompagnement continu et optimisation des résultats' }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-all duration-300">
                  <span className="text-2xl font-bold text-blue-500 group-hover:text-white transition-colors duration-300">
                    {phase.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {phase.title}
                </h3>
                <p className="text-gray-600">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Nos Engagements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Votre réussite est notre priorité absolue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Résultats Mesurables',
                description: 'Objectifs chiffrés et reporting détaillé de nos actions et de leur impact.',
                metric: '100%'
              },
              {
                title: 'Accompagnement Personnalisé',
                description: 'Un interlocuteur dédié et un suivi individualisé pour chaque projet.',
                metric: '24/7'
              },
              {
                title: 'Réseau Qualifié',
                description: 'Accès à notre carnet d\'adresses premium dans tous les secteurs.',
                metric: '1000+'
              }
            ].map((guarantee, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-4">{guarantee.metric}</div>
                <h3 className="text-xl font-bold mb-4">{guarantee.title}</h3>
                <p className="text-gray-600">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;