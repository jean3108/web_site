import { useState, createContext } from "react";
import themes from "../assets/themes.json";

export const ThemeContext = createContext({
  userColor: "cold",
  userDark: "light",
  dictionaryTheme: themes,
});

const ThemeProvider = ({ children }) => {
  const [userColor, setUserColor] = useState("cold");
  const [userDark, setUserDark] = useState("light");

  const provider = {
    userColor,
    userColorChange: (newColor) => setUserColor(newColor),
    userDark,
    userDarkChange: (newDark) => setUserDark(newDark),
    dictionaryTheme: themes,
  };

  return (
    <ThemeContext.Provider value={provider}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
