// Standard React, you know this one.
import React from "react";
// Yes, you know the drill!
import { render } from "react-dom";
// You've seen this before, right?
import App from "./components/App";
import "./styles.css";

import Store from "./store";

render(
  <Store>
    <App />
  </Store>,
  document.getElementById("root")
);
