import { useContext } from "react";

import { LanguageContext } from "./LanguageProvider";

const Presentation = () => {
  const { userLanguage, dictionaryLanguage } = useContext(LanguageContext);

  return (
    <div>
      <h1>{dictionaryLanguage[userLanguage].homepage.presentation.title}</h1>
      <p>{dictionaryLanguage[userLanguage].homepage.presentation.intro}</p>
    </div>
  );
};

export default Presentation;
