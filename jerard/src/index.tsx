import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import {App} from "@app/client";
import {store} from "@shared/lib/store";

const root = document.getElementById("root");

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root,
);
