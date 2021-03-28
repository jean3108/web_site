import { useContext } from "react";

import Navigator from "./Navigator";
import Resume from "./Resume";
import Presentation from "./Presentation";
import { ThemeContext } from "./ThemeProvider";

const MainPage = () => {
  const { userTheme, userColor, dictionaryTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        color: dictionaryTheme[userColor][userTheme].primary,
        backgroundColor: dictionaryTheme[userColor][userTheme].background,
      }}
    >
      <Navigator />
      <Presentation />
      <Resume />
    </div>
  );
};

export default MainPage;
