import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Luxury Hotel Branding',
      category: 'branding',
      description: 'Complete brand identity for a luxury boutique hotel chain.',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Branding', 'Hospitality', 'Luxury']
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'Modern e-commerce platform with seamless user experience.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Web Design', 'E-commerce', 'UX/UI']
    },
    {
      id: 3,
      title: 'Fitness App Design',
      category: 'mobile',
      description: 'Mobile app design for a revolutionary fitness tracking platform.',
      image: 'https://images.pexels.com/photos/4474047/pexels-photo-4474047.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Mobile', 'Health', 'App Design']
    },
    {
      id: 4,
      title: 'Tech Startup Branding',
      category: 'branding',
      description: 'Brand identity for an innovative AI technology startup.',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Branding', 'Tech', 'Startup']
    },
    {
      id: 5,
      title: 'Restaurant Website',
      category: 'web',
      description: 'Elegant website design for a fine dining restaurant.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Web Design', 'Restaurant', 'Food']
    },
    {
      id: 6,
      title: 'Banking App UI',
      category: 'mobile',
      description: 'Secure and intuitive mobile banking application interface.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Mobile', 'Banking', 'Security']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'branding', name: 'Branding' },
    { id: 'web', name: 'Web Design' },
    { id: 'mobile', name: 'Mobile Apps' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Our
            <span className="block text-orange-500">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Explore our collection of successful projects that showcase our expertise 
            in creating exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-200">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's collaborate to bring your vision to life with our creative expertise 
            and technical excellence.
          </p>
          <button className="px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;