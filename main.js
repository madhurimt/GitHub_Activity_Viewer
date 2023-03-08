import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {},
  "Enter the username to search for repositories"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
