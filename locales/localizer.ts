import i18n from 'i18next';
import { enLocale } from './en';
import { initReactI18next } from 'react-i18next';
import { itLocale } from './it';

type KV = {
  key: string;
  value: string;
};

export type Locale = {
  itTechnician: string;
  fullstackDev: string;
  projectsHeader: string;
  infoCode: string;
};

export type LocaleKeys = keyof typeof enLocale;

export const setup = () => {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: enLocale,
      },
      it: {
        translation: itLocale,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
};
