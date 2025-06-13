import emailjs from '@emailjs/browser';

// Configuration EmailJS
const EMAILJS_SERVICE_ID = 'service_johndoe'; // À remplacer par votre Service ID
const EMAILJS_TEMPLATE_ID = 'template_contact'; // À remplacer par votre Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // À remplacer par votre Public Key

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
      reply_to: formData.email
    };

    // Envoyer l'email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email envoyé avec succès:', response);
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return false;
  }
};

// Fonction pour envoyer un email de confirmation au client
export const sendConfirmationEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const confirmationParams = {
      to_name: formData.name,
      to_email: formData.email,
      from_name: 'John Doe Consulting',
      message: `Bonjour ${formData.name},

Merci pour votre message ! Nous avons bien reçu votre demande concernant "${formData.subject || 'votre projet'}".

Voici un récapitulatif de votre demande :
- Nom : ${formData.name}
- Email : ${formData.email}
- Téléphone : ${formData.phone}
- Entreprise : ${formData.company || 'Non spécifiée'}
- Secteur : ${formData.sector || 'Non spécifié'}
- Sujet : ${formData.subject || 'Demande générale'}

Votre message :
${formData.message}

Nous vous répondrons dans les plus brefs délais, généralement sous 2h en moyenne.

Cordialement,
L'équipe John Doe Consulting
📞 07 80 39 28 53
📧 johndoeconsulting@proton.me`
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_confirmation', // Template de confirmation
      confirmationParams
    );

    return true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email de confirmation:', error);
    return false;
  }
};