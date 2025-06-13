# John Doe Consulting - Site Web Multi-Secteurs

Site web professionnel pour John Doe Consulting, spécialisé dans l'apport d'affaires et le développement commercial multi-secteurs.

## 🚀 Fonctionnalités

- **Design Dark Cyberpunk** avec animations et effets visuels
- **Navigation fluide** entre les pages
- **Formulaire de contact** avec envoi d'emails
- **Responsive design** adaptatif
- **Secteurs couverts** : BTP, Immobilier, Digital, Musique, Finance, Assurance

## 📧 Configuration EmailJS

Pour que le formulaire de contact fonctionne et que vous receviez les emails, vous devez configurer EmailJS :

### 1. Créer un compte EmailJS
1. Allez sur [EmailJS.com](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Connectez votre service email (Gmail, Outlook, etc.)

### 2. Configurer le service
1. Dans votre dashboard EmailJS, créez un nouveau service
2. Choisissez votre fournisseur email (Gmail recommandé)
3. Notez votre **Service ID**

### 3. Créer les templates
Créez deux templates dans EmailJS :

#### Template principal (template_contact) :
```
Nouveau message de contact

De : {{from_name}} ({{from_email}})
Téléphone : {{phone}}
Entreprise : {{company}}
Secteur : {{sector}}
Sujet : {{subject}}

Message :
{{message}}

---
Envoyé depuis le site John Doe Consulting
```

#### Template de confirmation (template_confirmation) :
```
Objet : Confirmation de réception - John Doe Consulting

{{message}}
```

### 4. Obtenir votre clé publique
1. Allez dans Account > API Keys
2. Copiez votre **Public Key**

### 5. Configurer le code
Modifiez le fichier `src/services/emailService.ts` :

```typescript
const EMAILJS_SERVICE_ID = 'votre_service_id';
const EMAILJS_TEMPLATE_ID = 'template_contact';
const EMAILJS_PUBLIC_KEY = 'votre_public_key';
```

## 🛠️ Installation et Développement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

## 📱 Sections du Site

- **Accueil** : Présentation générale et services
- **À Propos** : Histoire et parcours de Jonathan.P
- **Services** : Détail des services par secteur
- **Solutions** : Solutions spécialisées avec tarification
- **Opportunités** : Partenariats et opportunités d'affaires
- **Contact** : Formulaire et coordonnées

## 🎨 Technologies Utilisées

- **React 18** avec TypeScript
- **Tailwind CSS** pour le styling
- **Lucide React** pour les icônes
- **EmailJS** pour l'envoi d'emails
- **Vite** comme bundler

## 📞 Contact

- **Téléphone** : 07 80 39 28 53
- **Email** : johndoeconsulting@proton.me
- **Disponibilités** : Lundi-Vendredi 8h-20h, Samedi 11h-18h

## 🔧 Support

Pour toute question technique ou configuration, contactez-nous directement.