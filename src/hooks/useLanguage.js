import language from "@/config/language";

import * as en from "@/locales/en";
import * as de from "@/locales/de";
import * as hi from "@/locales/hi";
import * as tr from "@/locales/tr";

const locales = {
  en,
  de,
  hi,
  tr,
};

const useLanguage = () => locales[language] || locales.en;

export default useLanguage;