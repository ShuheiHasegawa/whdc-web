import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 翻訳リソース
import jaTranslation from "../../public/locales/ja.json";
import enTranslation from "../../public/locales/en.json";

const resources = {
  ja: {
    translation: jaTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

i18n
  // ブラウザの言語検出を使用
  .use(LanguageDetector)
  // reactと連携
  .use(initReactI18next)
  // 初期化
  .init({
    resources,
    fallbackLng: "ja",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false, // Reactはデフォルトでエスケープするため
    },
  });

export default i18n;
