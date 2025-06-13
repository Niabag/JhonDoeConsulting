import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Eye, Heart, Share2, Filter, Search, Building2, Globe, Music, Home as HomeIcon, TrendingUp, Users } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: 'Rénovation Complexe Résidentiel',
      category: 'btp',
      description: 'Projet de rénovation complète d\'un complexe de 50 logements avec optimisation énergétique.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['BTP', 'Rénovation', 'Énergie'],
      client: 'Groupe Immobilier ABC',
      year: '2024',
      value: '2.5M€'
    },
    {
      id: 2,
      title: 'Plateforme E-commerce Luxe',
      category: 'digital',
      description: 'Développement d\'une plateforme e-commerce haut de gamme avec expérience utilisateur premium.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Digital', 'E-commerce', 'UX/UI'],
      client: 'Maison de Luxe XYZ',
      year: '2024',
      value: '150k€'
    },
    {
      id: 3,
      title: 'Mise en Relation Artiste-Label',
      category: 'musique',
      description: 'Accompagnement d\'un artiste émergent vers la signature avec un label majeur.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Musique', 'Artiste', 'Label'],
      client: 'Artiste Indépendant',
      year: '2024',
      value: 'Contrat 3 ans'
    },
    {
      id: 4,
      title: 'Investissement Immobilier Commercial',
      category: 'immobilier',
      description: 'Mise en relation investisseurs pour l\'acquisition d\'un centre commercial.',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Immobilier', 'Investissement', 'Commercial'],
      client: 'Fonds d\'Investissement',
      year: '2024',
      value: '8M€'
    },
    {
      id: 5,
      title: 'Application Mobile Fitness',
      category: 'digital',
      description: 'Développement d\'une application mobile pour le coaching sportif personnalisé.',
      image: 'https://images.pexels.com/photos/4474047/pexels-photo-4474047.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Mobile', 'Fitness', 'Coaching'],
      client: 'Startup FitTech',
      year: '2023',
      value: '80k€'
    },
    {
      id: 6,
      title: 'Construction Écoquartier',
      category: 'btp',
      description: 'Coordination d\'un projet d\'écoquartier avec 200 logements durables.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['BTP', 'Écologie', 'Logements'],
      client: 'Ville de Marseille',
      year: '2023',
      value: '15M€'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les Projets', icon: TrendingUp },
    { id: 'btp', name: 'BTP & Construction', icon: Building2 },
    { id: 'digital', name: 'Digital & Tech', icon: Globe },
    { id: 'immobilier', name: 'Immobilier', icon: HomeIcon },
    { id: 'musique', name: 'Industrie Musicale', icon: Music }
  ];

  const filteredProjects = filter === 'all' 
    ? projects.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : projects.filter(project => 
        project.category === filter &&
        (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         project.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white animate-gradient">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-scale">
            Notre
            <span className="block text-blue-600 gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto animate-fade-in-up">
            Découvrez nos réalisations et succès dans tous les secteurs. 
            Chaque projet témoigne de notre expertise multi-sectorielle et de notre engagement.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projets Réalisés', icon: TrendingUp },
              { number: '25M€+', label: 'Valeur Générée', icon: Building2 },
              { number: '98%', label: 'Clients Satisfaits', icon: Users },
              { number: '4', label: 'Secteurs Couverts', icon: Globe }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500">
                  <stat.icon className="w-8 h-8 group-hover:animate-pulse" />
                </div>
                <div className="text-3xl font-bold mb-2 gradient-text">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search Bar */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-500 hover-lift ${
                  filter === category.id
                    ? 'bg-blue-500 text-white shadow-lg neon-glow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-4">Aucun projet trouvé</h3>
              <p className="text-gray-500">Essayez de modifier vos critères de recherche.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="group cursor-pointer hover-lift stagger-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100 hover:border-blue-200 h-full">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Project Value Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                        {project.value}
                      </div>
                      
                      {/* View Project Button */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>

                      {/* Year Badge */}
                      <div className="absolute bottom-4 right-4 px-2 py-1 bg-blue-500 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {project.year}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full hover:bg-blue-200 transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span className="font-medium">Client: {project.client}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{Math.floor(Math.random() * 500) + 100}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{Math.floor(Math.random() * 50) + 10}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-blue-500 font-medium group-hover:translate-x-2 transition-transform duration-300">
                          <span>Voir le Projet</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Ce Que Disent Nos Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leurs témoignages reflètent notre engagement et notre expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Marie Dubois',
                role: 'Directrice Générale, Groupe ABC',
                content: 'John Doe Consulting a transformé notre approche du développement commercial. Résultats exceptionnels !',
                rating: 5,
                project: 'Rénovation Complexe Résidentiel'
              },
              {
                name: 'Pierre Martin',
                role: 'CEO, Startup FitTech',
                content: 'Un accompagnement personnalisé qui a dépassé toutes nos attentes. Notre app est un succès grâce à eux.',
                rating: 5,
                project: 'Application Mobile Fitness'
              },
              {
                name: 'Sophie Laurent',
                role: 'Artiste Musicale',
                content: 'Grâce à leur réseau, j\'ai pu signer avec un label majeur. Un tournant dans ma carrière !',
                rating: 5,
                project: 'Mise en Relation Artiste-Label'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover-lift">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                      ⭐
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-xs text-blue-600 mt-1">Projet: {testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in-scale">
            Votre Projet Sera le Prochain ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Rejoignez nos clients satisfaits et donnez vie à vos ambitions avec notre expertise multi-sectorielle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 font-semibold morph-button">
              Démarrer Mon Projet
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-500 transform hover:scale-105">
              Télécharger Notre Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;