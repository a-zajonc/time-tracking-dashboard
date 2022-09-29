import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "375px",
  md: "400px",
  lg: "00px",
  xl: "900px",
  "2xl": "1440px",
};

export const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: "Rubik",
    body: "Rubik",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
