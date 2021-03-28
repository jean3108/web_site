import React, { useContext, ChangeEvent } from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { LanguageContext, Language } from "./LanguageProvider";


const LanguageSelector = () => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const handleLanguageChange = (e:ChangeEvent<any>) => userLanguageChange(e.target.value);

  return (
    <Select value={userLanguage} onChange={handleLanguageChange}>
      <MenuItem key="fr" value={Language.FR}>
        {"\u{1F1EB}\u{1F1F7}"}
      </MenuItem>
      <MenuItem key="en" value={Language.EN}>
        {"\u{1F1EC}\u{1F1E7}"}
      </MenuItem>
    </Select>
  );
};

export default LanguageSelector;
