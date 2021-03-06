import { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import { ThemeContext } from "./ThemeProvider";

const useStyles = makeStyles((theme) => ({
  navItem: {
    margin: "10px",
  },

  nav: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const Navigator = () => {
  const classes = useStyles();

  const { userColor, userTheme, dictionaryTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: dictionaryTheme[userColor][userTheme].secondary,
  };

  return (
    <Toolbar className={classes.nav} style={styles}>
      <Button className={classes.navItem}>Presentation</Button>
      <Button className={classes.navItem}>CV</Button>
      <Button className={classes.navItem}>Blog</Button>
      <ThemeSelector />
      <LanguageSelector />
    </Toolbar>
  );
};

export default Navigator;
