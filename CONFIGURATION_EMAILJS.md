# 📧 Configuration EmailJS - Guide Complet

## 🎯 Objectif
Configurer EmailJS pour recevoir les emails du formulaire de contact sur votre adresse email.

## 📋 Étapes de Configuration

### 1. 🆓 Créer un Compte EmailJS
1. Allez sur [EmailJS.com](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" 
3. Créez votre compte gratuit (200 emails/mois inclus)

### 2. 🔗 Connecter Votre Email
1. Dans le dashboard, allez dans **"Email Services"**
2. Cliquez **"Add New Service"**
3. Choisissez votre fournisseur :
   - **Gmail** (recommandé)
   - **Outlook**
   - **Yahoo**
   - Ou autre
4. Suivez les instructions de connexion
5. **Notez votre Service ID** (ex: `service_abc123`)

### 3. 📝 Créer les Templates

#### Template Principal (pour recevoir les messages)
1. Allez dans **"Email Templates"**
2. Cliquez **"Create New Template"**
3. **Template ID** : `template_contact`
4. **Contenu** :

```
Objet : Nouveau message de contact - {{subject}}

🆔 NOUVEAU MESSAGE DE CONTACT

👤 Informations du contact :
• Nom : {{from_name}}
• Email : {{from_email}}
• Téléphone : {{phone}}
• Entreprise : {{company}}
• Secteur d'activité : {{sector}}

📋 Détails de la demande :
• Sujet : {{subject}}
• Date : {{date}} à {{time}}

💬 Message :
{{message}}

---
📧 Répondre à : {{reply_to}}
🌐 Envoyé depuis le site John Doe Consulting
```

#### Template de Confirmation (pour le client)
1. Créez un second template
2. **Template ID** : `template_confirmation`
3. **Contenu** :

```
{{message}}
```

### 4. 🔑 Récupérer la Clé Publique
1. Allez dans **"Account"** > **"API Keys"**
2. Copiez votre **Public Key** (ex: `abc123def456`)

### 5. ⚙️ Configurer le Code
Modifiez le fichier `src/services/emailService.ts` :

```typescript
const EMAILJS_SERVICE_ID = 'service_abc123'; // Votre Service ID
const EMAILJS_TEMPLATE_ID = 'template_contact'; // Votre Template ID
const EMAILJS_PUBLIC_KEY = 'abc123def456'; // Votre Public Key
```

## ✅ Test de Configuration

1. Sauvegardez les modifications
2. Rechargez votre site
3. Remplissez le formulaire de contact
4. Vérifiez votre boîte email !

## 🔧 Dépannage

### Erreur "Public Key is invalid"
- Vérifiez que vous avez copié la bonne clé publique
- Assurez-vous qu'il n'y a pas d'espaces avant/après

### Erreur "Service not found"
- Vérifiez votre Service ID
- Assurez-vous que le service est bien connecté

### Erreur "Template not found"
- Vérifiez le nom de votre template
- Assurez-vous qu'il est publié

### Emails non reçus
- Vérifiez vos spams
- Vérifiez que votre service email est bien configuré
- Testez avec un autre email

## 📊 Limites du Plan Gratuit
- **200 emails/mois** gratuits
- Parfait pour un site de contact
- Upgrade possible si besoin

## 🆘 Support
Si vous avez des difficultés :
1. Consultez la [documentation EmailJS](https://www.emailjs.com/docs/)
2. Contactez-moi directement : 07 80 39 28 53

## 🎉 Une fois configuré
Votre formulaire enverra automatiquement :
1. **Un email à vous** avec tous les détails du contact
2. **Un email de confirmation** au client
3. **Messages de statut** sur le site (succès/erreur)

---
*Configuration estimée : 10-15 minutes*