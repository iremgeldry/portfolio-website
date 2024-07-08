import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
//import HTTPApi from "i18next-http-backend";
//import Backend from "i18next-http-backend";
import enLang from "./locales/en/en.json";
import deLang from "./locales/de/de.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "de",
    fallbackLng: "de",
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: enLang },
      de: { translation: deLang },
    },
  });

export default i18n;
