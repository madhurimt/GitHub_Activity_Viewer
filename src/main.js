import React from "react";
import ReactDOM from "react-dom/client";
import { RepoResults } from "./components/RepoResults";
import { UserInput } from "./components/UserInput";
import { RepoResults } from "./components/RepoResults";

const AppLayout = () => {
  return <UserInput />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
