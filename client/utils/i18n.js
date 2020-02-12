import i18n from 'i18next';
import backend from 'i18next-xhr-backend';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(backend)
  .use(detector)
  .use(initReactI18next)
  .init({
    load: 'currentOnly',
    fallbackLng: 'en',
    ns: ['app'],
    defaultNS: 'app',
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
