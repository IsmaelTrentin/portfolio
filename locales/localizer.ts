import i18n from 'i18next';
import { enLocale } from './en';
import { initReactI18next } from 'react-i18next';
import { itLocale } from './it';

export type Locale = {
  itTechnician: string;
  fullstackDev: string;
  projectsHeader: string;
  infoCode: string;
};

export type LocaleKeys = keyof typeof enLocale;

export const setup = () => {
  i18n.use(initReactI18next).init({
    lng: 'en',
    resources: {
      en: {
        translation: enLocale,
      },
      it: {
        translation: itLocale,
      },
    },
    supportedLngs: ['it', 'en', 'de', 'fr'],
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
};
