
import { useState, createContext, FC } from "react";
import themes from "../assets/themes.json";

export enum Theme {
  Dark = "dark",
  Light = "light"
}

export enum Color {
  Cold = "cold",
  Warm = "warm"
}

type DicoTheme = {
  [key in Color]: {
    [key in Theme]: {
      [key: string]: string
    }
  }
};

type ThemeContextType = {
  dictionaryTheme: DicoTheme;
  userTheme: Theme;
  userColor: Color;
  userThemeChange: Function;
  userColorChange: Function;
};


export const ThemeContext = createContext<ThemeContextType>({
  userColor: Color.Cold,
  userTheme: Theme.Light,
  dictionaryTheme: themes,
  userThemeChange: (newTheme:Theme):void => {},
  userColorChange: (newColor:Color):void => {},
});

const ThemeProvider:FC = ({ children }) => {
  const [userColor, setUserColor] = useState(Color.Cold);
  const [userTheme, setUserTheme] = useState(Theme.Light);

  const provider = {
    userColor,
    userColorChange: (newColor:Color) => setUserColor(newColor),
    userTheme,
    userThemeChange: (newTheme:Theme) => setUserTheme(newTheme),
    dictionaryTheme: themes,
  };

  return (
    <ThemeContext.Provider value={provider}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
