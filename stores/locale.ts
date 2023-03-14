import { create } from 'zustand';

type LocaleStore = {
  locale: string;
  setLocale: (locale: LocaleStore['locale']) => void;
};

export const useLocaleStore = create<LocaleStore>(set => ({
  locale: 'en',
  setLocale: locale => set(() => ({ locale })),
}));
