import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          title: 'IOT Devices Manager',
          devices: 'Devices',
          searchPlaceholder: 'Filter your devices here...',
          name: 'Name',
          location: 'Location',
          status: 'Status',
          date: 'Date',
          previous: 'Previous',
          next: 'Next',
          searchLabel: 'Search Devices',
          pageLabel: 'Current page',
          online: 'Online',
          offline: 'Offline',
          error: 'Error',
          searchPlacholder: 'Filter your devices here...',
          deviceOverview: 'IoT Device Status Overview'
        }
      },
      fr: {
        translation: {
          title: 'Gestionnaire de dispositifs IOT',
          devices: 'Appareils',
          searchPlaceholder: 'Filtrer vos appareils ici...',
          name: 'Nom',
          location: 'Emplacement',
          status: 'Statut',
          date: 'Date',
          previous: 'Précédent',
          next: 'Suivant',
          searchLabel: 'Rechercher des appareils',
          pageLabel: 'Page actuelle',
          online: 'En ligne',
          offline: 'Hors ligne',
          error: 'Erreur'
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
