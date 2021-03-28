import { useState, createContext, FC } from "react";
import languages from "../assets/data_multilanguage.json";

export enum Language {
  FR = "fr",
  EN = "en"
}

type DicoLanguage = {
  [key in Language]: any
};

type LanguageContextType = {
  dictionaryLanguage: DicoLanguage;
  userLanguage: Language;
  userLanguageChange: Function;
};

export const LanguageContext = createContext<LanguageContextType>({
  userLanguage: Language.FR,
  dictionaryLanguage: languages,
  userLanguageChange: (newLanguage:Language):void => {},
});

const LanguagesProvider:FC = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState(Language.FR);

  const provider = {
    userLanguage,
    dictionaryLanguage: languages,
    userLanguageChange: (newLanguage:Language) => setUserLanguage(newLanguage),
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguagesProvider;
