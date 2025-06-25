import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.events': 'Events',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero Section
    'hero.title': 'Digital Transformation',
    'hero.subtitle': 'Leaders in Burundi',
    'hero.description': 'We help businesses adapt to the digital era by offering efficient, scalable, and secure solutions, contributing to the digital transformation of Burundi.',
    'hero.cta': 'Start Your Project',
    'hero.learn': 'Learn More',
    
    // Stats
    'stats.projects': 'Projects Completed',
    'stats.clients': 'Happy Clients',
    'stats.years': 'Years Experience',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive digital solutions for your business',
    'services.web.title': 'Web Development',
    'services.web.desc': 'Modern, responsive websites built with cutting-edge technologies',
    'services.cta.title': 'Ready to Transform Your Business?',
    'services.cta.desc': 'Join the digital revolution with our comprehensive solutions designed specifically for businesses in Burundi and East Africa.',
    'services.mobile.title': 'Mobile Apps',
    'services.mobile.desc': 'Native and cross-platform mobile applications',
    'services.system.title': 'System Management',
    'services.system.desc': 'Complete information system management and maintenance',
    'services.payment.title': 'Payment Integration',
    'services.payment.desc': 'Secure mobile payment solutions and financial integrations',
    
    // Mission & Vision
    'mission.title': 'Our Mission',
    'mission.text': 'Help businesses adapt to the digital era by offering efficient, scalable, and secure solutions, contributing to the digital transformation of Burundi.',
    'vision.title': 'Our Vision',
    'vision.text': 'Become the leader of digital transformation in Burundi and East Africa.',
    
    // Events
    'events.title': 'Latest Events',
    'events.subtitle': 'Stay updated with our latest activities and achievements',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to start your digital transformation journey?',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    
    // Footer
    'footer.description': 'Leading digital transformation in Burundi with innovative web and mobile solutions.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact Info',
    'footer.rights': 'All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.events': 'Événements',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Commencer',
    
    // Hero Section
    'hero.title': 'Transformation Numérique',
    'hero.subtitle': 'Leaders au Burundi',
    'hero.description': 'Nous aidons les entreprises à s\'adapter à l\'ère numérique en offrant des solutions efficaces, évolutives et sécurisées, contribuant à la transformation numérique du Burundi.',
    'hero.cta': 'Démarrer Votre Projet',
    'hero.learn': 'En Savoir Plus',
    
    // Stats
    'stats.projects': 'Projets Réalisés',
    'stats.clients': 'Clients Satisfaits',
    'stats.years': 'Années d\'Expérience',
    'services.cta.title': 'Prêt à transformer votre entreprise ?',
    'services.cta.desc': 'Rejoignez la révolution numérique avec nos solutions complètes conçues spécialement pour les entreprises du Burundi et de l\'Afrique de l\'Est.',
    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Solutions numériques complètes pour votre entreprise',
    'services.web.title': 'Développement Web',
    'services.web.desc': 'Sites web modernes et réactifs construits avec des technologies de pointe',
    'services.mobile.title': 'Applications Mobiles',
    'services.mobile.desc': 'Applications mobiles natives et multiplateformes',
    'services.system.title': 'Gestion de Systèmes',
    'services.system.desc': 'Gestion et maintenance complète des systèmes d\'information',

    'services.payment.title': 'Intégration de Paiement',
    'services.payment.desc': 'Solutions de paiement mobile sécurisées et intégrations financières',
    
    // Mission & Vision
    'mission.title': 'Notre Mission',
    'mission.text': 'Aider les entreprises à s\'adapter à l\'ère numérique en offrant des solutions efficaces, évolutives et sécurisées, contribuant à la transformation numérique du Burundi.',
    'vision.title': 'Notre Vision',
    'vision.text': 'Devenir le leader de la transformation numérique au Burundi et en Afrique de l\'Est.',
    
    // Events
    'events.title': 'Derniers Événements',
    'events.subtitle': 'Restez informé de nos dernières activités et réalisations',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Prêt à commencer votre parcours de transformation numérique ?',
    'contact.name': 'Nom Complet',
    'contact.email': 'Adresse Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',
    
    // Footer
    'footer.description': 'Leader de la transformation numérique au Burundi avec des solutions web et mobiles innovantes.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
  }
};