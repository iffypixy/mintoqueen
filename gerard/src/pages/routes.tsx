import * as React from "react";
import {Routes as Switch, Route} from "react-router-dom";

import {RegisterPage} from "./register";
import {LoginPage} from "./login";

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/login" element={<LoginPage />} />
  </Switch>
);
