import { useContext } from "react";

import { LanguageContext } from "./LanguageProvider";

const Presentation = () => {
  const { dictionaryLanguage } = useContext(LanguageContext);

  return (
    <div>
      <h1>{dictionaryLanguage.homepage.presentation.title}</h1>
      <p>{dictionaryLanguage.homepage.presentation.intro}</p>
    </div>
  );
};

export default Presentation;
