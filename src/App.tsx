import React from "react";
import "./App.css";
import MainContainer from "./containers/main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

import { PortfolioProvider } from "./context/PortfolioContext";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={chosenTheme}>
       <PortfolioProvider>
          <GlobalStyles />
          <div>
          <MainContainer theme={chosenTheme} />
          </div>
       </PortfolioProvider>
    </ThemeProvider>
  );
};

export default App;
