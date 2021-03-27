import React, { useContext } from "react";

import Switch from "react-switch";

import { ThemeContext } from "./ThemeProvider";

const ThemeSelector = () => {
  const {
    userColor,
    userColorChange,
    userDark,
    userDarkChange,
    dictionaryTheme,
  } = useContext(ThemeContext);

  const handleColorChange = (isWarm) =>
    userColorChange(isWarm ? "warm" : "cold");
  const handleDarkChange = (isDark) =>
    userDarkChange(isDark ? "dark" : "light");

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Switch
        checked={userColor === "warm" ? true : false}
        onChange={handleColorChange}
        offColor={dictionaryTheme.cold[userDark].primary}
        onColor={dictionaryTheme.warm[userDark].primary}
        uncheckedIcon=""
        checkedIcon=""
      />
      <Switch
        checked={userDark === "dark" ? true : false}
        onChange={handleDarkChange}
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
