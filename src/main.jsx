import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/index.css';

import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// darkMode
import { DarkModeProvider } from './layout/DarkMode.jsx';

// Initialisation de i18next avec les ressources de traduction
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN
    },
    fr: {
      translation: translationFR
    }
  },
  lng: 'en', // Langue par défaut
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
