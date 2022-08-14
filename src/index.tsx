import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "./index.css";
import { DailyGameBoardPage } from "./pages/DailyGameBoardPage";
import reportWebVitals from "./reportWebVitals";
import { rockTheme } from "./theme";
import { findRandomEquation } from "./utils";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={rockTheme}>
      <DailyGameBoardPage equationFetcher={() => "100+10"} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
