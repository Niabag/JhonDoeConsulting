import React from 'react';
import { Award, Target, Users, Lightbulb, Building2, Globe, TrendingUp, Shield, Truck, Store } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                Jonathan.P
                <span className="block text-blue-600">Fondateur & Consultant Multi-Secteurs</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Bienvenue chez John Doe Consulting, votre partenaire stratégique pour le développement des affaires. Fondée par Jonathan.P en 2024, notre entreprise se spécialise dans l'apport d'affaires et l'innovation. Grâce à notre expertise multi-sectorielle unique, nous connectons les entreprises aux opportunités commerciales qui leur permettront de croître et de prospérer.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700">Expert en Développement Commercial Multi-Secteurs</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bureau moderne avec équipe de travail collaboratif"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-full opacity-20" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500 rounded-full opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mon Histoire */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Mon Histoire</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un parcours atypique mais aussi éclectique qui forge une expertise unique dans le développement d'affaires.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Tout au long de mon parcours professionnel, j'ai évolué dans des domaines variés : <strong>livreur</strong>, <strong>gérant en restauration rapide</strong>, <strong>courtier en assurance</strong>, <strong>marketing</strong>, commerce de solutions de <strong>référencement de sites internet</strong>, vente de <strong>matériel de télécommunication et de systèmes de paiement</strong>, ainsi que dans le secteur du <strong>BTP</strong>.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Parallèlement, j'ai acquis des compétences dans des métiers exigeants tels que <strong>garde du corps</strong>, <strong>convoyeur de fonds</strong>, et <strong>sécurité de sites</strong>.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Cette richesse d'expériences, bien qu'atypique, m'a permis de développer une <strong>vision globale</strong> et une <strong>grande adaptabilité</strong>. Pourtant, certains employeurs voyaient cette diversité comme un obstacle, ce qui m'a poussé à me remettre en question et à prendre une décision audacieuse : <strong>créer ma propre société d'apporteur d'affaires</strong>.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Ce projet me permet de réunir mes compétences variées pour développer un commerce qui me correspond pleinement. En tant qu'apporteur d'affaires, je refuse de me limiter à un seul domaine. Cette liberté m'offre l'opportunité d'explorer des secteurs qui me passionnent et de bâtir des relations d'affaires solides, tout en restant fidèle à mes valeurs et à mon mode de fonctionnement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Ma Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformer la diversité d'expériences en force pour créer des ponts entre les secteurs 
              et générer des opportunités d'affaires durables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Vision Globale',
                description: 'Une approche transversale nourrie par des expériences variées dans tous les secteurs.'
              },
              {
                icon: Lightbulb,
                title: 'Adaptabilité',
                description: 'Capacité unique à comprendre et s\'adapter aux spécificités de chaque métier.'
              },
              {
                icon: Users,
                title: 'Réseau Diversifié',
                description: 'Un carnet d\'adresses exceptionnel cultivé à travers tous mes parcours professionnels.'
              },
              {
                icon: Award,
                title: 'Authenticité',
                description: 'Une approche sincère et personnalisée, fidèle à mes valeurs et mon expérience.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parcours Professionnel */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Mon Parcours Professionnel</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une diversité d'expériences qui forge une expertise unique en développement d'affaires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                category: 'Logistique & Service',
                experiences: ['Livreur', 'Convoyeur de fonds'],
                skills: 'Rigueur, ponctualité, gestion du stress'
              },
              {
                icon: Store,
                category: 'Commerce & Gestion',
                experiences: ['Gérant restauration rapide', 'Vente télécommunication'],
                skills: 'Management, relation client, performance'
              },
              {
                icon: Shield,
                category: 'Sécurité & Protection',
                experiences: ['Garde du corps', 'Sécurité de sites'],
                skills: 'Vigilance, discrétion, gestion de crise'
              },
              {
                icon: TrendingUp,
                category: 'Assurance & Finance',
                experiences: ['Courtier en assurance', 'Systèmes de paiement'],
                skills: 'Conseil, négociation, expertise produit'
              },
              {
                icon: Globe,
                category: 'Digital & Marketing',
                experiences: ['SEO & référencement', 'Stratégies marketing'],
                skills: 'Innovation, communication, analyse'
              },
              {
                icon: Building2,
                category: 'BTP & Construction',
                experiences: ['Secteur du bâtiment', 'Développement commercial'],
                skills: 'Technique, réseau, développement'
              }
            ].map((domain, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <domain.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {domain.category}
                </h3>
                
                <div className="space-y-2 mb-4">
                  {domain.experiences.map((exp, expIndex) => (
                    <div key={expIndex} className="text-center">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {exp}
                      </span>
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-600 text-center text-sm italic">
                  {domain.skills}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* La Décision Entrepreneuriale */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">La Décision Entrepreneuriale</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transformer un parcours atypique en force entrepreneuriale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Le Constat</h3>
              <p className="text-blue-100">
                Ma diversité d'expériences était perçue comme un obstacle par certains employeurs, 
                alors qu'elle représentait ma plus grande force.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">La Révélation</h3>
              <p className="text-blue-100">
                Créer ma propre société d'apporteur d'affaires pour valoriser cette richesse 
                d'expériences et cette vision transversale unique.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">La Réalisation</h3>
              <p className="text-blue-100">
                John Doe Consulting : un projet qui me correspond pleinement, 
                sans limitation sectorielle, fidèle à mes valeurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs & Approche */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Mes Valeurs & Mon Approche</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Construisons Ensemble Votre Succès</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Mon parcours atypique est votre atout. Découvrez comment ma vision transversale 
            peut transformer vos opportunités d'affaires.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Consultation Gratuite
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 text-blue-600 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105">
              Découvrir Mes Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;