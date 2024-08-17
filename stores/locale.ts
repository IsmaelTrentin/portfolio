import i18next from 'i18next';
import { create } from 'zustand';

type LocaleStore = {
  locale: string;
  setLocale: (locale: LocaleStore['locale']) => void;
};

export const useLocaleStore = create<LocaleStore>(set => {
  return {
    locale: i18next.language || 'en',
    setLocale: locale => set(() => ({ locale })),
  };
});
