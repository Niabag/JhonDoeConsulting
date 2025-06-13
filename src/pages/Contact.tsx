import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Building2, Users, Globe, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { sendContactEmail, sendConfirmationEmail, type ContactFormData } from '../services/emailService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Validation des champs requis
      if (!formData.name || !formData.email || !formData.phone || !formData.message) {
        setSubmitStatus('error');
        setStatusMessage('Veuillez remplir tous les champs obligatoires.');
        setIsSubmitting(false);
        return;
      }

      // Validation de l'email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setSubmitStatus('error');
        setStatusMessage('Veuillez saisir une adresse email valide.');
        setIsSubmitting(false);
        return;
      }

      // Envoyer l'email principal
      const emailSent = await sendContactEmail(formData);
      
      if (emailSent) {
        // Envoyer l'email de confirmation (optionnel)
        await sendConfirmationEmail(formData);
        
        setSubmitStatus('success');
        setStatusMessage('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
        
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          sector: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Échec de l\'envoi de l\'email');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
      setStatusMessage('Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer ou nous contacter directement par téléphone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Contactez
            <span className="block text-blue-400 neon-text">John Doe Consulting</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
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
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Parlons de Votre Projet</h2>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/30 border border-green-500/30 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 neon-glow" />
                  <p className="text-green-300">{statusMessage}</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/30 border border-red-500/30 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                  <p className="text-red-300">{statusMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400 disabled:opacity-50"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400 disabled:opacity-50"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400 disabled:opacity-50"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400 disabled:opacity-50"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="sector" className="block text-sm font-medium text-gray-300 mb-2">
                      Secteur d'activité
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white disabled:opacity-50"
                    >
                      <option value="" className="text-gray-400">Sélectionnez votre secteur</option>
                      <option value="btp" className="text-white">BTP & Construction</option>
                      <option value="immobilier" className="text-white">Immobilier</option>
                      <option value="digital" className="text-white">Digital & Tech</option>
                      <option value="musique" className="text-white">Industrie Musicale</option>
                      <option value="marketing" className="text-white">Marketing</option>
                      <option value="autre" className="text-white">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white disabled:opacity-50"
                    >
                      <option value="" className="text-gray-400">Sélectionnez un sujet</option>
                      <option value="apport-affaires" className="text-white">Apport d'affaires</option>
                      <option value="partenariat" className="text-white">Opportunité de partenariat</option>
                      <option value="digital" className="text-white">Projet digital</option>
                      <option value="conseil" className="text-white">Conseil stratégique</option>
                      <option value="formation" className="text-white">Formation équipe</option>
                      <option value="autre" className="text-white">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none text-white placeholder-gray-400 disabled:opacity-50"
                    placeholder="Décrivez votre projet, vos besoins ou vos questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 neon-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer le Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Mes Coordonnées</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 neon-glow">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Téléphone</h3>
                    <p className="text-gray-300 mb-1">07 80 39 28 53</p>
                    <p className="text-gray-400">Disponible 6j/7 de 8h à 20h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 neon-glow">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
                    <p className="text-gray-300 mb-1">johndoeconsulting@proton.me</p>
                    <p className="text-gray-400">Réponse sous 2h en moyenne</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 neon-glow">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Zone d'intervention</h3>
                    <p className="text-gray-300 mb-1">France entière</p>
                    <p className="text-gray-400">Déplacements possibles</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 neon-glow">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Disponibilités</h3>
                    <p className="text-gray-300 mb-1">Lundi - Vendredi : 8h - 20h</p>
                    <p className="text-gray-400">Samedi : 11h - 18h</p>
                  </div>
                </div>
              </div>

              {/* Engagement */}
              <div className="mt-12 p-6 bg-blue-900/30 rounded-2xl border border-blue-500/30">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Mon Engagement</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full neon-glow" />
                    <span className="text-blue-200">Consultation gratuite et sans engagement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full neon-glow" />
                    <span className="text-blue-200">Réponse garantie sous 24h</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full neon-glow" />
                    <span className="text-blue-200">Accompagnement personnalisé</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full neon-glow" />
                    <span className="text-blue-200">Transparence totale sur les tarifs</span>
                  </div>
                </div>
              </div>

              {/* Instructions EmailJS */}
              <div className="mt-8 p-4 bg-yellow-900/30 rounded-lg border border-yellow-500/30">
                <h4 className="text-lg font-bold mb-2 text-yellow-300">📧 Configuration Email</h4>
                <p className="text-yellow-200 text-sm">
                  Pour recevoir les emails, configurez EmailJS avec vos identifiants dans le fichier 
                  <code className="bg-gray-800 px-2 py-1 rounded mx-1">src/services/emailService.ts</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white neon-text">Questions Fréquentes</h2>
            <p className="text-xl text-gray-400">
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
              <div key={index} className="dark-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                <h3 className="text-lg font-bold mb-3 text-blue-400">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;