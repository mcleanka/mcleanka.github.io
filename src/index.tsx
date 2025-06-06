import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/app.css";
// import "animate.css/animate.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
