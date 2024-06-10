import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/index.css';

import { I18nextProvider } from 'react-i18next';
import i18n from './config/translation/i18n.js';

// darkMode
import { DarkModeProvider } from './layout/DarkMode.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
