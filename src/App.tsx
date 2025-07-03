import React from "react";
import "./App.css";
import MainContainer from "./containers/main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
        <MainContainer theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
