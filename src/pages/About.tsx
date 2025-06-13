import React from 'react';
import { Award, Target, Users, Lightbulb, Building2, Globe, TrendingUp, Shield, Truck, Store } from 'lucide-react';

interface AboutProps {
  onPageChange?: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onPageChange }) => {
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

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                Jonathan.P
                <span className="block text-blue-400 neon-text">Fondateur & Consultant Multi-Secteurs</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Bienvenue chez John Doe Consulting, votre partenaire stratégique pour le développement des affaires. Fondée par Jonathan.P en 2024, notre entreprise se spécialise dans l'apport d'affaires et l'innovation. Grâce à notre expertise multi-sectorielle unique, nous connectons les entreprises aux opportunités commerciales qui leur permettront de croître et de prospérer.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center neon-glow">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-300">Expert en Développement Commercial Multi-Secteurs</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bureau moderne avec équipe de travail collaboratif"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 neon-glow" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500 rounded-full opacity-10 neon-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* Mon Histoire */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white neon-text">Mon Histoire</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un parcours atypique mais aussi éclectique qui forge une expertise unique dans le développement d'affaires.
            </p>
          </div>

          <div className="dark-card rounded-3xl shadow-xl p-8 md:p-12 border border-gray-700">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                Tout au long de mon parcours professionnel, j'ai évolué dans des domaines variés : <strong className="text-blue-400">livreur</strong>, <strong className="text-blue-400">gérant en restauration rapide</strong>, <strong className="text-blue-400">courtier en assurance</strong>, <strong className="text-blue-400">marketing</strong>, commerce de solutions de <strong className="text-blue-400">référencement de sites internet</strong>, vente de <strong className="text-blue-400">matériel de télécommunication et de systèmes de paiement</strong>, ainsi que dans le secteur du <strong className="text-blue-400">BTP</strong>.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Parallèlement, j'ai acquis des compétences dans des métiers exigeants tels que <strong className="text-purple-400">garde du corps</strong>, <strong className="text-purple-400">convoyeur de fonds</strong>, et <strong className="text-purple-400">sécurité de sites</strong>.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Cette richesse d'expériences, bien qu'atypique, m'a permis de développer une <strong className="text-green-400">vision globale</strong> et une <strong className="text-green-400">grande adaptabilité</strong>. Pourtant, certains employeurs voyaient cette diversité comme un obstacle, ce qui m'a poussé à me remettre en question et à prendre une décision audacieuse : <strong className="text-cyan-400">créer ma propre société d'apporteur d'affaires</strong>.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Ce projet me permet de réunir mes compétences variées pour développer un commerce qui me correspond pleinement. En tant qu'apporteur d'affaires, je refuse de me limiter à un seul domaine. Cette liberté m'offre l'opportunité d'explorer des secteurs qui me passionnent et de bâtir des relations d'affaires solides, tout en restant fidèle à mes valeurs et à mon mode de fonctionnement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white neon-text">Ma Mission</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transformer la diversité d'expériences en force pour créer des ponts entre les secteurs 
              et générer des opportunités d'affaires durables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Vision Globale',
                description: 'Une approche transversale nourrie par des expériences variées dans tous les secteurs.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Lightbulb,
                title: 'Adaptabilité',
                description: 'Capacité unique à comprendre et s\'adapter aux spécificités de chaque métier.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Users,
                title: 'Réseau Diversifié',
                description: 'Un carnet d\'adresses exceptionnel cultivé à travers tous mes parcours professionnels.',
                color: 'from-green-500 to-blue-500'
              },
              {
                icon: Award,
                title: 'Authenticité',
                description: 'Une approche sincère et personnalisée, fidèle à mes valeurs et mon expérience.',
                color: 'from-orange-500 to-red-500'
              }
            ].map((value, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300 neon-glow`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parcours Professionnel */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white neon-text">Mon Parcours Professionnel</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une diversité d'expériences qui forge une expertise unique en développement d'affaires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                category: 'Logistique & Service',
                experiences: ['Livreur', 'Convoyeur de fonds'],
                skills: 'Rigueur, ponctualité, gestion du stress',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Store,
                category: 'Commerce & Gestion',
                experiences: ['Gérant restauration rapide', 'Vente télécommunication'],
                skills: 'Management, relation client, performance',
                color: 'from-green-500 to-teal-500'
              },
              {
                icon: Shield,
                category: 'Sécurité & Protection',
                experiences: ['Garde du corps', 'Sécurité de sites'],
                skills: 'Vigilance, discrétion, gestion de crise',
                color: 'from-red-500 to-pink-500'
              },
              {
                icon: TrendingUp,
                category: 'Assurance & Finance',
                experiences: ['Courtier en assurance', 'Systèmes de paiement'],
                skills: 'Conseil, négociation, expertise produit',
                color: 'from-purple-500 to-indigo-500'
              },
              {
                icon: Globe,
                category: 'Digital & Marketing',
                experiences: ['SEO & référencement', 'Stratégies marketing'],
                skills: 'Innovation, communication, analyse',
                color: 'from-orange-500 to-yellow-500'
              },
              {
                icon: Building2,
                category: 'BTP & Construction',
                experiences: ['Secteur du bâtiment', 'Développement commercial'],
                skills: 'Technique, réseau, développement',
                color: 'from-gray-500 to-gray-700'
              }
            ].map((domain, index) => (
              <div key={index} className="dark-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${domain.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 neon-glow`}>
                  <domain.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-center group-hover:text-blue-400 transition-colors duration-300 text-white">
                  {domain.category}
                </h3>
                
                <div className="space-y-2 mb-4">
                  {domain.experiences.map((exp, expIndex) => (
                    <div key={expIndex} className="text-center">
                      <span className="inline-block px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-500/30">
                        {exp}
                      </span>
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-400 text-center text-sm italic">
                  {domain.skills}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* La Décision Entrepreneuriale */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 neon-text">La Décision Entrepreneuriale</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Transformer un parcours atypique en force entrepreneuriale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Le Constat</h3>
              <p className="text-blue-200">
                Ma diversité d'expériences était perçue comme un obstacle par certains employeurs, 
                alors qu'elle représentait ma plus grande force.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">La Révélation</h3>
              <p className="text-blue-200">
                Créer ma propre société d'apporteur d'affaires pour valoriser cette richesse 
                d'expériences et cette vision transversale unique.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">La Réalisation</h3>
              <p className="text-blue-200">
                John Doe Consulting : un projet qui me correspond pleinement, 
                sans limitation sectorielle, fidèle à mes valeurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs & Approche */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white neon-text">Mes Valeurs & Mon Approche</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une philosophie business basée sur l'authenticité et l'adaptabilité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Pas de Limitation Sectorielle',
                description: 'Je refuse de me cantonner à un seul domaine. Cette liberté me permet d\'explorer tous les secteurs qui me passionnent et d\'identifier les meilleures opportunités.',
                icon: Globe
              },
              {
                title: 'Relations d\'Affaires Solides',
                description: 'Mon expérience variée me permet de comprendre les enjeux spécifiques de chaque métier et de créer des relations de confiance durables.',
                icon: Users
              },
              {
                title: 'Fidélité à Mes Valeurs',
                description: 'Chaque collaboration respecte mes principes : transparence, engagement et respect mutuel. Je travaille uniquement avec des partenaires qui partagent ces valeurs.',
                icon: Award
              },
              {
                title: 'Adaptabilité Permanente',
                description: 'Ma capacité d\'adaptation, forgée par mes expériences diverses, me permet de m\'ajuster rapidement aux spécificités de chaque secteur et client.',
                icon: Target
              }
            ].map((value, index) => (
              <div key={index} className="dark-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 neon-glow">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white neon-text">Construisons Ensemble Votre Succès</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Mon parcours atypique est votre atout. Découvrez comment ma vision transversale 
            peut transformer vos opportunités d'affaires.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={handleContactClick}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 neon-glow"
            >
              Consultation Gratuite
            </button>
            <button 
              onClick={handleServicesClick}
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Découvrir Mes Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;