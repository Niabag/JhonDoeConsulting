import React, { useState } from 'react';
import { Building2, Home, Globe, Music, TrendingUp, Users, Search, Lightbulb, Briefcase, DollarSign, PiggyBank } from 'lucide-react';

interface SolutionsProps {
  onPageChange?: (page: string) => void;
}

const Solutions: React.FC<SolutionsProps> = ({ onPageChange }) => {
  const [activeTab, setActiveTab] = useState('btp');

  // Fonction de navigation vers Contact
  const handleContactClick = () => {
    if (onPageChange) {
      onPageChange('contact');
    }
  };

  const solutions = {
    btp: {
      title: 'Solutions BTP & Construction',
      subtitle: 'Développement d\'affaires dans le bâtiment',
      icon: Building2,
      services: [
        {
          name: 'Apport d\'Affaires BTP',
          description: 'Génération de leads qualifiés et mise en relation avec des donneurs d\'ordres.',
          price: 'Commission sur CA généré',
          features: ['Prospection ciblée', 'Qualification des leads', 'Négociation commerciale', 'Suivi des projets'],
          results: 'Jusqu\'à +150% de CA'
        },
        {
          name: 'Réseau Partenaires BTP',
          description: 'Constitution et animation d\'un réseau de partenaires stratégiques.',
          price: 'Forfait mensuel',
          features: ['Identification partenaires', 'Événements networking', 'Accords commerciaux', 'Animation réseau'],
          results: '50+ partenaires actifs'
        },
        {
          name: 'Stratégie Développement',
          description: 'Élaboration de stratégies de croissance adaptées au secteur BTP.',
          price: 'Mission consultante',
          features: ['Audit de marché', 'Plan de développement', 'Formation équipes', 'Accompagnement terrain'],
          results: 'ROI moyen 300%'
        }
      ]
    },
    immobilier: {
      title: 'Solutions Immobilier',
      subtitle: 'Investissement et développement immobilier',
      icon: Home,
      services: [
        {
          name: 'Analyse de Marché Immobilier',
          description: 'Études approfondies des marchés locaux et opportunités d\'investissement.',
          price: 'À partir de 2 500€',
          features: ['Analyse de marché', 'Étude de rentabilité', 'Veille concurrentielle', 'Recommandations'],
          results: 'Décisions éclairées'
        },
        {
          name: 'Mise en Relation Investisseurs',
          description: 'Connexion entre investisseurs et porteurs de projets immobiliers.',
          price: 'Commission sur transaction',
          features: ['Sourcing investisseurs', 'Présentation projets', 'Due diligence', 'Accompagnement closing'],
          results: '85% de réussite'
        },
        {
          name: 'Accompagnement Projets',
          description: 'Support complet pour vos projets de développement immobilier.',
          price: 'Forfait projet',
          features: ['Montage financier', 'Gestion administrative', 'Suivi chantier', 'Commercialisation'],
          results: 'Projets sécurisés'
        }
      ]
    },
    digital: {
      title: 'Solutions Digital & Tech',
      subtitle: 'Transformation digitale et communication',
      icon: Globe,
      services: [
        {
          name: 'Création Sites Web',
          description: 'Développement de sites web professionnels et performants.',
          price: 'À partir de 1 000€',
          features: ['Design sur-mesure', 'Développement responsive', 'Optimisation SEO', 'Formation utilisateur'],
          results: 'Sites haute performance'
        },
        {
          name: 'Applications Mobiles',
          description: 'Conception et développement d\'applications mobiles innovantes.',
          price: 'À partir de 1 000€',
          features: ['UX/UI Design', 'Développement natif', 'Tests utilisateurs', 'Déploiement stores'],
          results: 'Apps store-ready'
        }
      ]
    },
    musique: {
      title: 'Solutions Industrie Musicale',
      subtitle: 'Développement de carrières artistiques',
      icon: Music,
      services: [
        {
          name: 'Mise en Relation Artistique',
          description: 'Connexion entre artistes, producteurs et professionnels de la musique.',
          price: 'Commission sur contrats',
          features: ['Sourcing talents', 'Présentation projets', 'Négociation contrats', 'Suivi carrières'],
          results: '70+ artistes signés'
        },
        {
          name: 'Développement Carrières',
          description: 'Accompagnement stratégique pour le développement artistique.',
          price: 'Forfait mensuel',
          features: ['Stratégie artistique', 'Plan de communication', 'Booking concerts', 'Gestion image'],
          results: 'Carrières accélérées'
        },
        {
          name: 'Production Musicale',
          description: 'Support complet pour vos projets de production musicale.',
          price: 'Forfait projet',
          features: ['Recherche financements', 'Coordination équipes', 'Gestion production', 'Distribution'],
          results: 'Projets aboutis'
        }
      ]
    },
    surmesure: {
      title: 'Solutions Sur Mesure',
      subtitle: 'Projets personnalisés selon vos besoins',
      icon: Briefcase,
      services: [
        {
          name: 'Consultation Stratégique',
          description: 'Analyse approfondie de vos besoins et élaboration de solutions personnalisées.',
          price: 'À partir de 500€',
          features: ['Audit complet', 'Analyse des besoins', 'Stratégie personnalisée', 'Plan d\'action détaillé'],
          results: 'Solutions uniques'
        },
        {
          name: 'Développement de Projet',
          description: 'Accompagnement complet de votre projet de A à Z selon vos spécifications.',
          price: 'Devis personnalisé',
          features: ['Gestion de projet', 'Coordination équipes', 'Suivi personnalisé', 'Livraison garantie'],
          results: 'Projets réussis'
        },
        {
          name: 'Formation & Coaching',
          description: 'Programmes de formation adaptés à vos équipes et vos objectifs spécifiques.',
          price: 'Forfait formation',
          features: ['Formation sur-mesure', 'Coaching individuel', 'Suivi performance', 'Certification'],
          results: 'Équipes performantes'
        }
      ]
    },
    investissement: {
      title: 'Solutions Investissement',
      subtitle: 'Opportunités d\'investissement et levées de fonds',
      icon: DollarSign,
      services: [
        {
          name: 'Recherche d\'Investisseurs',
          description: 'Mise en relation avec des investisseurs qualifiés pour vos projets.',
          price: 'Commission sur levée',
          features: ['Sourcing investisseurs', 'Pitch deck', 'Négociation termes', 'Due diligence'],
          results: 'Financements obtenus'
        },
        {
          name: 'Analyse d\'Opportunités',
          description: 'Évaluation et présentation d\'opportunités d\'investissement rentables.',
          price: 'À partir de 1 500€',
          features: ['Analyse financière', 'Étude de marché', 'Évaluation risques', 'Recommandations'],
          results: 'Investissements éclairés'
        },
        {
          name: 'Montage Financier',
          description: 'Structuration complète de vos opérations d\'investissement.',
          price: 'Forfait mission',
          features: ['Structuration juridique', 'Optimisation fiscale', 'Négociation conditions', 'Suivi post-investissement'],
          results: 'Montages optimisés'
        }
      ]
    },
    finance: {
      title: 'Finance Alternative',
      subtitle: 'Solutions de financement innovantes',
      icon: PiggyBank,
      services: [
        {
          name: 'Financement Participatif',
          description: 'Accompagnement dans les campagnes de crowdfunding et financement participatif.',
          price: 'Commission sur collecte',
          features: ['Stratégie de campagne', 'Création de contenu', 'Animation communauté', 'Gestion plateforme'],
          results: 'Objectifs atteints'
        },
        {
          name: 'Prêts Entre Particuliers',
          description: 'Mise en relation pour des solutions de prêts peer-to-peer.',
          price: 'Commission sur prêt',
          features: ['Évaluation profil', 'Mise en relation', 'Négociation conditions', 'Suivi remboursement'],
          results: 'Financements rapides'
        },
        {
          name: 'Solutions Crypto & DeFi',
          description: 'Accompagnement dans les solutions de finance décentralisée.',
          price: 'Forfait conseil',
          features: ['Formation crypto', 'Stratégies DeFi', 'Gestion portefeuille', 'Sécurisation actifs'],
          results: 'Rendements optimisés'
        }
      ]
    }
  };

  const tabs = [
    { id: 'btp', name: 'BTP', icon: Building2 },
    { id: 'immobilier', name: 'Immobilier', icon: Home },
    { id: 'digital', name: 'Digital', icon: Globe },
    { id: 'musique', name: 'Musique', icon: Music },
    { id: 'surmesure', name: 'Sur Mesure', icon: Briefcase },
    { id: 'investissement', name: 'Investissement', icon: DollarSign },
    { id: 'finance', name: 'Finance Alt.', icon: PiggyBank }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Solutions
            <span className="block text-blue-400 neon-text">Multi-Secteurs</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Des solutions sur-mesure pour chaque secteur d'activité. 
            Découvrez nos offres spécialisées pour développer votre business.
          </p>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2 neon-text">Consultation Stratégique Gratuite</h2>
              <p className="text-blue-200">Analysons ensemble vos opportunités de développement</p>
            </div>
            <button 
              onClick={handleContactClick}
              className="flex items-center space-x-3 px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 neon-glow"
            >
              <Users className="w-6 h-6" />
              <span className="font-semibold">Prendre Rendez-vous</span>
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-16">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-6 py-3 m-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-lg neon-glow'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Active Solution Content */}
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white neon-text">{solutions[activeTab as keyof typeof solutions].title}</h2>
              <p className="text-xl text-gray-400">{solutions[activeTab as keyof typeof solutions].subtitle}</p>
            </div>

            {/* Grid adaptatif selon le nombre de services */}
            <div className={`grid gap-8 ${
              solutions[activeTab as keyof typeof solutions].services.length === 2 
                ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' 
                : 'grid-cols-1 md:grid-cols-3'
            }`}>
              {solutions[activeTab as keyof typeof solutions].services.map((service, index) => {
                const CurrentTabIcon = solutions[activeTab as keyof typeof solutions].icon;
                
                return (
                  <div key={index} className="dark-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-700 hover:border-blue-500 group">
                    <div className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 neon-glow">
                        <CurrentTabIcon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-center group-hover:text-blue-400 transition-colors duration-300 text-white">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-400 text-center mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="text-center mb-6">
                        <div className="text-xl font-bold text-blue-400 mb-2">{service.price}</div>
                        <div className="text-sm text-gray-400 bg-green-900/30 px-3 py-1 rounded-full inline-block border border-green-500/30">
                          {service.results}
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full neon-glow" />
                            <span className="text-sm text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button 
                        onClick={handleContactClick}
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 neon-glow"
                      >
                        Demander un Devis
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white neon-text">Services Transversaux</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des services complémentaires qui s'adaptent à tous les secteurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Search,
                title: 'Études de Marché',
                description: 'Analyses sectorielles approfondies',
                price: 'À partir de 1 500€'
              },
              {
                icon: TrendingUp,
                title: 'Coaching Commercial',
                description: 'Formation et accompagnement équipes',
                price: 'Forfait mensuel'
              },
              {
                icon: Users,
                title: 'Développement Personnel',
                description: 'Accompagnement individuel sur-mesure',
                price: 'Sessions individuelles'
              },
              {
                icon: Lightbulb,
                title: 'Conseil Stratégique',
                description: 'Consultant externe pour vos projets',
                price: 'Mission consultante'
              }
            ].map((service, index) => (
              <div key={index} className="dark-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 neon-glow">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                <div className="text-blue-400 font-semibold text-sm">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white neon-text">Nos Résultats</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des chiffres qui parlent de notre expertise multi-sectorielle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '150k+€', label: 'CA généré pour nos clients', sector: 'Tous secteurs' },
              { metric: '200+', label: 'Projets BTP accompagnés', sector: 'Construction' },
              { metric: '85%', label: 'Taux de réussite immobilier', sector: 'Immobilier' },
              { metric: '15+', label: 'Artistes mis en relation', sector: 'Musique' }
            ].map((stat, index) => (
              <div key={index} className="dark-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2 neon-text">{stat.metric}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">{stat.label}</h3>
                <p className="text-gray-500 text-sm">{stat.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;