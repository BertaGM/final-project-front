import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "@fontsource/patrick-hand";
import "@fontsource/patrick-hand/400.css";
import mainTheme from "./styles/MainTheme";
import GlobalStyled from "./styles/GlobalStyle";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyled />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
