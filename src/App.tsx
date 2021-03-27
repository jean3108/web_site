import React from 'react';


import ThemeProvider from "./components/ThemeProvider"
import LanguageProvider from "./components/LanguageProvider"
import MainPage from "./components/MainPage"

function App() {

  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainPage />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
