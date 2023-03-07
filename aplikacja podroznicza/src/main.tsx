import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { TripProvider } from "./Provider/TripProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <TripProvider>
    <App />
  </TripProvider>
  // </React.StrictMode>,
);
