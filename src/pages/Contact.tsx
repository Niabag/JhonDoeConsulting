import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Building2, Users, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Contactez
            <span className="block text-blue-600">John Doe Consulting</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Prêt à développer votre business multi-secteurs ? Contactez-moi pour une consultation 
            stratégique gratuite et découvrez les opportunités qui vous attendent.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Apport d'Affaires BTP</h3>
              <p className="text-blue-100">Développement commercial secteur construction</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Solutions Digitales</h3>
              <p className="text-blue-100">Sites web, apps, SEO et communication</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mise en Relation</h3>
              <p className="text-blue-100">Réseau professionnel multi-secteurs</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Consultation Gratuite</h3>
              <p className="text-blue-100">Analyse de vos opportunités</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Parlons de Votre Projet</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-2">
                      Secteur d'activité
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Sélectionnez votre secteur</option>
                      <option value="btp">BTP & Construction</option>
                      <option value="immobilier">Immobilier</option>
                      <option value="digital">Digital & Tech</option>
                      <option value="musique">Industrie Musicale</option>
                      <option value="marketing">Marketing</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="apport-affaires">Apport d'affaires</option>
                      <option value="partenariat">Opportunité de partenariat</option>
                      <option value="digital">Projet digital</option>
                      <option value="conseil">Conseil stratégique</option>
                      <option value="formation">Formation équipe</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Décrivez votre projet, vos besoins ou vos questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Envoyer le Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Mes Coordonnées</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
                    <p className="text-gray-600 mb-1">07 80 39 28 53</p>
                    <p className="text-gray-600">Disponible 6j/7 de 8h à 20h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-gray-600 mb-1">john.doe@consulting-business.fr</p>
                    <p className="text-gray-600">Réponse sous 2h en moyenne</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Zone d'intervention</h3>
                    <p className="text-gray-600 mb-1">France entière</p>
                    <p className="text-gray-600">Déplacements possibles</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Disponibilités</h3>
                    <p className="text-gray-600 mb-1">Lundi - Vendredi : 8h - 20h</p>
                    <p className="text-gray-600">Samedi : 11h - 18h</p>
                  </div>
                </div>
              </div>

              {/* Engagement */}
              <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Mon Engagement</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-blue-700">Consultation gratuite et sans engagement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-blue-700">Réponse garantie sous 24h</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-blue-700">Accompagnement personnalisé</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-blue-700">Transparence totale sur les tarifs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Questions Fréquentes</h2>
            <p className="text-xl text-gray-600">
              Les réponses aux questions les plus courantes sur nos services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Comment fonctionne l\'apport d\'affaires ?',
                answer: 'Nous identifions des opportunités qualifiées dans votre secteur et vous mettons en relation avec des prospects chauds. Commission uniquement sur les affaires conclues.'
              },
              {
                question: 'Quels secteurs couvrez-vous ?',
                answer: 'BTP, immobilier, digital, musique, marketing, communication, développement personnel et mise en relation. Notre réseau s\'étend sur tous les secteurs porteurs.'
              },
              {
                question: 'Quel est le coût de vos services ?',
                answer: 'Consultation gratuite, puis tarification adaptée selon le service : commission sur CA généré, forfait projet ou accompagnement mensuel.'
              },
              {
                question: 'Comment devenir partenaire ?',
                answer: 'Contactez-nous pour un entretien. Nous évaluons votre profil et vous proposons le type de partenariat le plus adapté à vos objectifs.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold mb-3 text-blue-600">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;