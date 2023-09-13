import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom/client";
// import more components who have their own stylesheet
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
