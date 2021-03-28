import React, { useContext } from "react";

import Switch from "react-switch";

import { ThemeContext, Color, Theme } from "./ThemeProvider";

const ThemeSelector = () => {
  const {
    userColor,
    userColorChange,
    userTheme,
    userThemeChange,
    dictionaryTheme,
  } = useContext(ThemeContext);

  const handleColorChange = (isWarm:boolean) =>
    userColorChange(isWarm ? "warm" : "cold");
  const handleThemeChange = (isDark:boolean) =>
  userThemeChange(isDark ? "dark" : "light");

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Switch
        checked={userColor === Color.Warm ? true : false}
        onChange={handleColorChange}
        offColor={dictionaryTheme.cold[userTheme].primary}
        onColor={dictionaryTheme.warm[userTheme].primary}
        offHandleColor="#fff"
        onHandleColor="#fff"
        uncheckedIcon={<div></div>}
        checkedIcon={<div></div>}
      />
      <Switch
        checked={userTheme === Theme.Dark ? true : false}
        onChange={handleThemeChange}
        offColor="#000"
        onColor="#000"
        offHandleColor="#fff"
        onHandleColor="#fff"
        uncheckedIcon={
          <div
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 25,
              paddingRight: 2,
            }}
          >
            {"\u{2600}"}
          </div>
        }
        checkedIcon={
          <div
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 25,
              paddingRight: 2,
            }}
          >
            {"\u{263D}"}
          </div>
        }
      />
    </div>
  );
};

export default ThemeSelector;
