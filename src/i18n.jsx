import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import langEn from './lang/en-US.json';
import langHu from './lang/hu-HU.json';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ['en-US', 'hu-HU'],
    fallbackLng: 'en-US',
    resources: {
      'en-US': {
        translation: langEn,
      },
      'hu-HU': {
        translation: langHu,
      },
    },
    detection: {
      order: ['cookie', 'localStorage', 'path', 'htmlTag', 'subdomain'],
      caches: ['cookie'],
    },
    nsSeparator: false,
    keySeparator: false,
  });

export default i18next;
