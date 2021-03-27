import { useContext } from "react";

import Navigator from "./Navigator";
import Resume from "./Resume";
import Presentation from "./Presentation";
import { ThemeContext } from "./ThemeProvider";

const MainPage = () => {
  const { userDark, userColor, dictionaryTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        color: dictionaryTheme[userColor][userDark].primary,
        backgroundColor: dictionaryTheme[userColor][userDark].background,
      }}
    >
      <Navigator />
      <Presentation />
      <Resume />
    </div>
  );
};

export default MainPage;
