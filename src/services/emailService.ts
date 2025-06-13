import emailjs from '@emailjs/browser';

// ⚠️ CONFIGURATION EMAILJS REQUISE ⚠️
// Remplacez ces valeurs par vos vrais identifiants EmailJS
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Remplacez par votre Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Remplacez par votre Template ID  
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Remplacez par votre Public Key

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  sector: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Vérifier si EmailJS est configuré
    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY' || 
        EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID') {
      console.warn('⚠️ EmailJS non configuré. Veuillez configurer vos identifiants dans emailService.ts');
      
      // Simuler un envoi réussi en mode développement
      console.log('📧 Simulation d\'envoi d\'email:', formData);
      return true;
    }

    // Initialiser EmailJS avec votre clé publique
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Préparer les données pour le template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company || 'Non spécifiée',
      sector: formData.sector || 'Non spécifié',
      subject: formData.subject || 'Demande générale',
      message: formData.message,
      to_email: 'johndoeconsulting@proton.me', // Votre email de réception
      reply_to: formData.email,
      // Informations supplémentaires
      date: new Date().toLocaleDateString('fr-FR'),
      time: new Date().toLocaleTimeString('fr-FR')
    };

    // Envoyer l'email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('✅ Email envoyé avec succès:', response);
    return true;
  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi de l\'email:', error);
    return false;
  }
};

// Fonction pour envoyer un email de confirmation au client
export const sendConfirmationEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Vérifier si EmailJS est configuré
    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      console.log('📧 Simulation d\'email de confirmation pour:', formData.email);
      return true;
    }

    const confirmationParams = {
      to_name: formData.name,
      to_email: formData.email,
      from_name: 'John Doe Consulting',
      subject: 'Confirmation de réception - John Doe Consulting',
      message: `Bonjour ${formData.name},

Merci pour votre message ! Nous avons bien reçu votre demande concernant "${formData.subject || 'votre projet'}".

📋 Récapitulatif de votre demande :
• Nom : ${formData.name}
• Email : ${formData.email}
• Téléphone : ${formData.phone}
• Entreprise : ${formData.company || 'Non spécifiée'}
• Secteur : ${formData.sector || 'Non spécifié'}
• Sujet : ${formData.subject || 'Demande générale'}

💬 Votre message :
${formData.message}

⏰ Nous vous répondrons dans les plus brefs délais, généralement sous 2h en moyenne.

Cordialement,
L'équipe John Doe Consulting

📞 07 80 39 28 53
📧 johndoeconsulting@proton.me
🌐 France entière`
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_confirmation', // Template de confirmation
      confirmationParams
    );

    console.log('✅ Email de confirmation envoyé');
    return true;
  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi de l\'email de confirmation:', error);
    return false;
  }
};