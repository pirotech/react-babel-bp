import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import common_en from './common_en.json';
import common_ru from './common_ru.json';
import LoginPage_en from '../components/loginPage/LoginPage_en.json';
import LoginPage_ru from '../components/loginPage/LoginPage_ru.json';
import MainPage_en from '../components/mainPage/MainPage_en.json';
import MainPage_ru from '../components/mainPage/MainPage_ru.json';

i18next.use(LanguageDetector).use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['common', 'loginPage', 'mainPage'],
  defaultNS: 'common',
  fallbackNS: 'common',
  parseMissingKeyHandler(key) {
    return 'ERROR';
  },
  resources: {
    en: {
      common: common_en,
      loginPage: LoginPage_en,
      mainPage: MainPage_en
    },
    ru: {
      common: common_ru,
      loginPage: LoginPage_ru,
      mainPage: MainPage_ru
    }
  }
}).then(e => {});

export default i18next;