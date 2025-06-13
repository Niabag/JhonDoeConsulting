import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag, Clock, Eye, MessageCircle } from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'Les Tendances du BTP en 2024 : Innovation et Durabilité',
      excerpt: 'Découvrez les principales tendances qui transforment le secteur du BTP cette année, de la construction durable aux nouvelles technologies.',
      content: 'Le secteur du BTP connaît une transformation majeure...',
      category: 'btp',
      author: 'Jonathan P.',
      date: '2024-01-15',
      readTime: '5 min',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['BTP', 'Innovation', 'Durabilité'],
      views: 1250,
      comments: 23
    },
    {
      id: 2,
      title: 'Investissement Immobilier : Guide Complet 2024',
      excerpt: 'Tout ce que vous devez savoir pour investir intelligemment dans l\'immobilier en 2024.',
      content: 'L\'investissement immobilier reste l\'un des placements...',
      category: 'immobilier',
      author: 'Jonathan P.',
      date: '2024-01-10',
      readTime: '8 min',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Immobilier', 'Investissement', 'Guide'],
      views: 2100,
      comments: 45
    },
    {
      id: 3,
      title: 'Marketing Digital : Les Stratégies Gagnantes',
      excerpt: 'Comment développer une stratégie marketing digital efficace pour votre entreprise.',
      content: 'Le marketing digital évolue constamment...',
      category: 'digital',
      author: 'Jonathan P.',
      date: '2024-01-05',
      readTime: '6 min',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Marketing', 'Digital', 'Stratégie'],
      views: 1800,
      comments: 32
    },
    {
      id: 4,
      title: 'L\'Industrie Musicale à l\'Ère du Streaming',
      excerpt: 'Comment les artistes peuvent-ils tirer profit des plateformes de streaming modernes.',
      content: 'Le streaming a révolutionné l\'industrie musicale...',
      category: 'musique',
      author: 'Jonathan P.',
      date: '2024-01-01',
      readTime: '7 min',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Musique', 'Streaming', 'Artistes'],
      views: 950,
      comments: 18
    },
    {
      id: 5,
      title: 'Développement Commercial : 10 Stratégies Éprouvées',
      excerpt: 'Les meilleures stratégies pour booster votre développement commercial en 2024.',
      content: 'Le développement commercial est au cœur...',
      category: 'business',
      author: 'Jonathan P.',
      date: '2023-12-28',
      readTime: '9 min',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Business', 'Commercial', 'Stratégie'],
      views: 3200,
      comments: 67
    },
    {
      id: 6,
      title: 'Networking Professionnel : L\'Art de Créer des Relations',
      excerpt: 'Comment développer un réseau professionnel solide et durable.',
      content: 'Le networking est essentiel dans le monde...',
      category: 'business',
      author: 'Jonathan P.',
      date: '2023-12-20',
      readTime: '4 min',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Networking', 'Relations', 'Professionnel'],
      views: 1650,
      comments: 29
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les Articles', count: blogPosts.length },
    { id: 'btp', name: 'BTP & Construction', count: blogPosts.filter(p => p.category === 'btp').length },
    { id: 'immobilier', name: 'Immobilier', count: blogPosts.filter(p => p.category === 'immobilier').length },
    { id: 'digital', name: 'Digital & Tech', count: blogPosts.filter(p => p.category === 'digital').length },
    { id: 'musique', name: 'Industrie Musicale', count: blogPosts.filter(p => p.category === 'musique').length },
    { id: 'business', name: 'Business', count: blogPosts.filter(p => p.category === 'business').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-scale">
            Notre
            <span className="block text-blue-600 gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto animate-fade-in-up">
            Insights, conseils et analyses sur tous nos secteurs d'expertise. 
            Restez informé des dernières tendances et opportunités.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Article à la Une</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover min-h-[300px] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
                  À la Une
                </div>
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{featuredPost.views}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 hover:text-blue-600 transition-colors duration-300">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 group">
                  <span>Lire l'Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search Bar */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 hover-lift ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span>{category.name}</span>
                <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-4">Aucun article trouvé</h3>
              <p className="text-gray-500">Essayez de modifier vos critères de recherche.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post, index) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 group hover-lift stagger-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                      {post.category.toUpperCase()}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      
                      <button className="flex items-center space-x-1 text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 group/btn">
                        <span>Lire</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Restez Informé</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Recevez nos derniers articles et insights directement dans votre boîte mail.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold">
                S'abonner
              </button>
            </div>
          </div>
          
          <p className="text-sm text-blue-200 mt-4">
            Pas de spam, désabonnement en un clic.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;