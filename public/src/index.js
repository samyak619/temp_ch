import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {disableReactDevTools} from "@fvilers/disable-react-devtools";

// CSS Styles
import "./index.css";

if(process.env.NODE_ENV === "production"){
  disableReactDevTools();
}   

createRoot(document.getElementById("root")).render(<App />);
