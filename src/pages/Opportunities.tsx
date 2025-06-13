import React from 'react';
import { TrendingUp, Users, DollarSign, Award, Target, Briefcase, Building2, Globe, Shield, AlertTriangle, Umbrella, Home, Car, Heart, PawPrint, UserCheck, Wrench } from 'lucide-react';

const Opportunities: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Opportunités
            <span className="block text-purple-600">de Partenariat</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Rejoignez notre réseau de partenaires et développez votre activité dans les secteurs 
            les plus porteurs : BTP, immobilier, digital, musique, gestion de patrimoine, assurance et plus encore.
          </p>
        </div>
      </section>

      {/* Secteurs Premium - Gestion de Patrimoine & Assurance */}
      <section className="py-24 bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">🏆 Opportunités Premium : Finance & Assurance</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Secteurs à forte valeur ajoutée avec commissions attractives et cadre réglementaire structuré
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Gestion de Patrimoine */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold">Gestion de Patrimoine</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                  <span className="text-green-100">Commissions 500€ à 2000€ par client</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                  <span className="text-green-100">Revenus récurrents sur durée de vie</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                  <span className="text-green-100">50+ clients qualifiés/mois</span>
                </div>
              </div>

              <div className="bg-yellow-500/20 rounded-lg p-4">
                <p className="text-sm text-yellow-100">
                  <strong>Statut requis :</strong> IOBSP ou CIF + Formation 150h
                </p>
              </div>
            </div>

            {/* Assurance */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Umbrella className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold">Courtage en Assurance</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full" />
                  <span className="text-blue-100">Commissions 200€ à 1500€ par contrat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full" />
                  <span className="text-blue-100">Revenus récurrents annuels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full" />
                  <span className="text-blue-100">100+ prospects qualifiés/mois</span>
                </div>
              </div>

              <div className="bg-orange-500/20 rounded-lg p-4">
                <p className="text-sm text-orange-100">
                  <strong>Statut requis :</strong> Mandataire ou Courtier + Formation DDA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'Assurances Détaillés */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">🏠 Gamme Complète d'Assurances</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez toutes les opportunités dans le secteur de l'assurance, des particuliers aux professionnels
            </p>
          </div>

          {/* Assurances Particuliers */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-blue-600">🏠 Assurances pour les Particuliers</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Assurance RC */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-center">🔹 Responsabilité Civile</h4>
                <p className="text-gray-600 text-sm text-center mb-3">Protection contre les dommages causés à autrui</p>
                <div className="text-center">
                  <span className="text-blue-600 font-semibold">150-400€/an</span>
                </div>
              </div>

              {/* Assurance Vie */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-center">🔹 Assurance Vie / Décès</h4>
                <p className="text-gray-600 text-sm text-center mb-3">Protection financière pour vos proches</p>
                <div className="text-center">
                  <span className="text-green-600 font-semibold">500-2000€/an</span>
                </div>
              </div>

              {/* Assurance Santé */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-center">🔹 Assurance Santé</h4>
                <p className="text-gray-600 text-sm text-center mb-3">Complémentaire santé et frais médicaux</p>
                <div className="text-center">
                  <span className="text-red-600 font-semibold">800-3000€/an</span>
                </div>
              </div>

              {/* Assurance Accident */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-center">🔹 Assurance Accident</h4>
                <p className="text-gray-600 text-sm text-center mb-3">Protection en cas d'accident de la vie</p>
                <div className="text-center">
                  <span className="text-orange-600 font-semibold">200-600€/an</span>
                </div>
              </div>
            </div>

            {/* Assurances Véhicules */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold mb-6 text-center text-gray-800">🚗 Assurances Véhicules</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <Car className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                  <h5 className="font-bold mb-2">🔹 Véhicules à Moteur</h5>
                  <p className="text-gray-600 text-sm">Auto, moto, scooter</p>
                  <div className="text-blue-600 font-semibold mt-2">400-1200€/an</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <Wrench className="w-10 h-10 text-green-500 mx-auto mb-3" />
                  <h5 className="font-bold mb-2">🔹 Véhicules Spécialisés</h5>
                  <p className="text-gray-600 text-sm">Utilitaires, camping-cars</p>
                  <div className="text-green-600 font-semibold mt-2">600-2000€/an</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <Target className="w-10 h-10 text-purple-500 mx-auto mb-3" />
                  <h5 className="font-bold mb-2">🔹 Autres Véhicules</h5>
                  <p className="text-gray-600 text-sm">Bateaux, jet-ski, quad</p>
                  <div className="text-purple-600 font-semibold mt-2">300-1500€/an</div>
                </div>
              </div>
            </div>

            {/* Assurances Habitation */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold mb-6 text-center text-gray-800">🏡 Assurances Habitation</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <Home className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                  <h5 className="font-bold mb-2">🔹 Résidences</h5>
                  <p className="text-gray-600 text-sm">Habitation principale, secondaire, locative</p>
                  <div className="text-blue-600 font-semibold mt-2">200-800€/an</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <Shield className="w-10 h-10 text-green-500 mx-auto mb-3" />
                  <h5 className="font-bold mb-2">🔹 Biens Spécifiques</h5>
                  <p className="text-gray-600 text-sm">Objets de valeur, équipements</p>
                  <div className="text-green-600 font-semibold mt-2">100-500€/an</div>
                </div>
              </div>
            </div>

            {/* Assurances de la Personne */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold mb-6 text-center text-gray-800">👨‍👩‍👧‍👦 Assurances de la Personne</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <UserCheck className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                  <h5 className="font-bold mb-2">🔹 Vie Privée</h5>
                  <p className="text-gray-600 text-sm">Protection juridique, assistance</p>
                  <div className="text-blue-600 font-semibold mt-2">150-400€/an</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <DollarSign className="w-10 h-10 text-green-500 mx-auto mb-3" />
                  <h5 className="font-bold mb-2">🔹 Emprunt</h5>
                  <p className="text-gray-600 text-sm">Assurance crédit immobilier</p>
                  <div className="text-green-600 font-semibold mt-2">500-2000€/an</div>
                </div>
              </div>
            </div>

            {/* Assurances Animaux */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold mb-6 text-center text-gray-800">🐶 Assurances pour Animaux</h4>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center max-w-md mx-auto">
                <PawPrint className="w-10 h-10 text-purple-500 mx-auto mb-3" />
                <h5 className="font-bold mb-2">Assurance Animaux</h5>
                <p className="text-gray-600 text-sm">Santé et responsabilité civile</p>
                <div className="text-purple-600 font-semibold mt-2">200-800€/an</div>
              </div>
            </div>
          </div>

          {/* Assurances Professionnelles */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-green-600">💼 Assurances Professionnelles</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Multirisque Pro */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-center">🔹 Multirisque Pro</h4>
                <p className="text-gray-600 text-sm text-center mb-3">Protection globale de l'entreprise</p>
                <div className="text-center">
                  <span className="text-blue-600 font-semibold">800-5000€/an</span>
                </div>
              </div>

              {/* RC Professionnelle */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-center">🔹 RC Professionnelle</h4>
                <p className="text-gray-600 text-sm text-center mb-3">Responsabilité civile métier</p>
                <div className="text-center">
                  <span className="text-green-600 font-semibold">300-2000€/an</span>
                </div>
              </div>

              {/* Responsabilités Spécifiques */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-center">🔹 Responsabilités Spécifiques</h4>
                <p className="text-gray-600 text-sm text-center mb-3">Cyber-risques, environnement</p>
                <div className="text-center">
                  <span className="text-purple-600 font-semibold">500-3000€/an</span>
                </div>
              </div>
            </div>

            {/* Dirigeants et Salariés */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold mb-6 text-center text-gray-800">👷 Assurances Dirigeants et Salariés</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <Users className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                  <h5 className="font-bold mb-2">🔹 Protection Sociale</h5>
                  <p className="text-gray-600 text-sm">Prévoyance, santé collective</p>
                  <div className="text-blue-600 font-semibold mt-2">1000-5000€/an</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <Award className="w-10 h-10 text-green-500 mx-auto mb-3" />
                  <h5 className="font-bold mb-2">🔹 Couverture Spécifique</h5>
                  <p className="text-gray-600 text-sm">Dirigeants, mandataires sociaux</p>
                  <div className="text-green-600 font-semibold mt-2">2000-10000€/an</div>
                </div>
              </div>
            </div>

            {/* Biens Spécifiques */}
            <div>
              <h4 className="text-2xl font-bold mb-6 text-center text-gray-800">🧱 Assurances de Biens Spécifiques</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <Building2 className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                  <h5 className="font-bold mb-2">🔹 Immobilier</h5>
                  <p className="text-gray-600 text-sm">Bâtiments professionnels, chantiers</p>
                  <div className="text-blue-600 font-semibold mt-2">1500-8000€/an</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <Wrench className="w-10 h-10 text-green-500 mx-auto mb-3" />
                  <h5 className="font-bold mb-2">🔹 Objets / Activités</h5>
                  <p className="text-gray-600 text-sm">Matériel, marchandises, événements</p>
                  <div className="text-green-600 font-semibold mt-2">500-4000€/an</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Pourquoi Devenir Partenaire ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profitez de notre expertise multi-sectorielle et de notre réseau étendu pour développer votre business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Marchés en Croissance',
                description: 'Accès privilégié aux secteurs les plus dynamiques avec une croissance soutenue.',
                stats: 'Croissance 15-25%/an'
              },
              {
                icon: DollarSign,
                title: 'Revenus Attractifs',
                description: 'Commissions généreuses et revenus récurrents sur les affaires générées.',
                stats: 'Jusqu\'à 20% commission'
              },
              {
                icon: Users,
                title: 'Réseau Professionnel',
                description: 'Intégration dans un réseau de 400+ professionnels actifs multi-secteurs.',
                stats: '400+ contacts qualifiés'
              },
              {
                icon: Award,
                title: 'Formation & Support',
                description: 'Programme de formation complet et accompagnement personnalisé continu.',
                stats: '50h de formation'
              },
              {
                icon: Target,
                title: 'Leads Qualifiés',
                description: 'Accès à un flux constant d\'opportunités d\'affaires pré-qualifiées.',
                stats: '100+ leads/mois'
              },
              {
                icon: Briefcase,
                title: 'Flexibilité Totale',
                description: 'Activité complémentaire ou principale, adaptez votre engagement à vos objectifs.',
                stats: 'À votre rythme'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center group-hover:text-purple-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                    {benefit.stats}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Types de Partenariats</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez le type de collaboration qui correspond à votre profil et vos objectifs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: 'Apporteur d\'Affaires',
                commission: '5-15%',
                color: 'from-blue-500 to-blue-600',
                features: [
                  'Commission sur CA généré',
                  'Formation commerciale',
                  'Outils de prospection',
                  'Support commercial'
                ],
                ideal: 'Commercial expérimenté'
              },
              {
                type: 'Partenaire Secteur',
                commission: '10-25%',
                color: 'from-purple-500 to-purple-600',
                popular: true,
                features: [
                  'Exclusivité sectorielle',
                  'Formation spécialisée',
                  'Accompagnement terrain',
                  'Revenus récurrents'
                ],
                ideal: 'Expert métier'
              },
              {
                type: 'Partenaire Stratégique',
                commission: '15-30%',
                color: 'from-green-500 to-green-600',
                features: [
                  'Co-développement projets',
                  'Partage de ressources',
                  'Accès réseau complet',
                  'Participation aux bénéfices'
                ],
                ideal: 'Entreprise établie'
              }
            ].map((partnership, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${partnership.popular ? 'border-purple-500 transform scale-105' : 'border-gray-100'}`}>
                {partnership.popular && (
                  <div className="bg-purple-500 text-white text-center py-2 text-sm font-semibold">
                    Le Plus Demandé
                  </div>
                )}
                
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${partnership.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-4">{partnership.type}</h3>
                  
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-2">Commission {partnership.commission}</div>
                    <div className="text-purple-600 font-semibold">Idéal pour : {partnership.ideal}</div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {partnership.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full px-6 py-3 bg-gradient-to-r ${partnership.color} text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    Devenir Partenaire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Opportunities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Opportunités par Secteur</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les opportunités spécifiques dans chaque secteur d'activité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                sector: 'BTP',
                icon: Building2,
                growth: '+18%/an',
                opportunities: '200+ projets/mois',
                commission: '10-20%',
                color: 'from-orange-500 to-red-500'
              },
              {
                sector: 'Immobilier',
                icon: Target,
                growth: '+12%/an',
                opportunities: '150+ mandats/mois',
                commission: '5-15%',
                color: 'from-green-500 to-teal-500'
              },
              {
                sector: 'Digital',
                icon: Globe,
                growth: '+25%/an',
                opportunities: '100+ projets/mois',
                commission: '15-25%',
                color: 'from-blue-500 to-purple-500'
              },
              {
                sector: 'Patrimoine',
                icon: Shield,
                growth: '+20%/an',
                opportunities: '50+ clients/mois',
                commission: '500-2000€/client',
                color: 'from-green-600 to-blue-600',
                special: true
              },
              {
                sector: 'Assurance',
                icon: Umbrella,
                growth: '+15%/an',
                opportunities: '100+ prospects/mois',
                commission: '200-1500€/contrat',
                color: 'from-blue-600 to-indigo-600',
                special: true
              }
            ].map((sector, index) => (
              <div key={index} className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border group ${sector.special ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-100'}`}>
                {sector.special && (
                  <div className="bg-green-500 text-white text-center py-1 text-xs font-semibold rounded-t-lg -mx-6 -mt-6 mb-4">
                    PREMIUM
                  </div>
                )}
                
                <div className={`w-16 h-16 bg-gradient-to-br ${sector.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <sector.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-center mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {sector.sector}
                </h3>
                
                <div className="space-y-2 text-center">
                  <div className="text-green-600 font-semibold">{sector.growth}</div>
                  <div className="text-gray-600 text-sm">{sector.opportunities}</div>
                  <div className="text-purple-600 font-semibold text-sm">{sector.commission}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réglementation Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Accompagnement Réglementaire</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous vous accompagnons dans toutes les démarches réglementaires nécessaires pour les secteurs financiers et assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* IOBSP */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Statut IOBSP</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Intermédiaire en Opérations de Banque</strong>
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Formation 150h minimum</li>
                  <li>• Assurance RC professionnelle</li>
                  <li>• Garantie financière</li>
                  <li>• Inscription ORIAS</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-700 text-sm">
                    💡 <strong>Notre accompagnement :</strong> Formation complète, aide aux démarches, mise en relation avec assureurs.
                  </p>
                </div>
              </div>
            </div>

            {/* CIF */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Statut CIF</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Conseiller en Investissements Financiers</strong>
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Formation spécialisée</li>
                  <li>• Honorabilité et compétence</li>
                  <li>• Assurance RC professionnelle</li>
                  <li>• Adhésion association agréée</li>
                </ul>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-700 text-sm">
                    💡 <strong>Notre accompagnement :</strong> Préparation examens, dossier d'agrément, suivi réglementaire.
                  </p>
                </div>
              </div>
            </div>

            {/* DDA Assurance */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                  <Umbrella className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Formation DDA</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Directive sur la Distribution d'Assurance</strong>
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Formation 15h minimum</li>
                  <li>• Mise à jour annuelle</li>
                  <li>• Capacité professionnelle</li>
                  <li>• Inscription ORIAS</li>
                </ul>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-indigo-700 text-sm">
                    💡 <strong>Notre accompagnement :</strong> Formation DDA, inscription ORIAS, suivi réglementaire continu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Prêt à Saisir l'Opportunité ?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Rejoignez notre réseau de partenaires et construisez votre succès dans les secteurs 
            les plus porteurs de l'économie, y compris la gestion de patrimoine et l'assurance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold">
              Candidater Maintenant
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
              Télécharger la Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Opportunities;