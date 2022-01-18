import * as React from "react";
import {render} from "react-dom";

import {App} from "@app/client";

const root = document.getElementById("root");

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root,
);
