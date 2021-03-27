import React, { useContext } from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { LanguageContext } from "./LanguageProvider";

const LanguageSelector = () => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const handleLanguageChange = (e) => userLanguageChange(e.target.value);

  return (
    <Select value={userLanguage} onChange={handleLanguageChange}>
      <MenuItem key="fr" value="fr">
        {"\u{1F1EB}\u{1F1F7}"}
      </MenuItem>
      <MenuItem key="en" value="en">
        {"\u{1F1EC}\u{1F1E7}"}
      </MenuItem>
    </Select>
  );
};

export default LanguageSelector;
