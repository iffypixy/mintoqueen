import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import {App} from "@app/client";
import {store} from "@shared/lib/store";
import {ThemeProvider} from "@shared/lib/theming";

import "@shared/lib/i18n";

const root = document.getElementById("root");

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  root,
);
