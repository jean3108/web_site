import { useState, createContext } from "react";
import languages from "../assets/data_multilanguage.json";

export const LanguageContext = createContext({
  userLanguage: "fr",
  dictionaryLanguage: languages.fr,
});

const LanguagesProvider = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState("fr");

  const provider = {
    userLanguage,
    dictionaryLanguage: languages[userLanguage],
    userLanguageChange: (newLanguage) => setUserLanguage(newLanguage),
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguagesProvider;
