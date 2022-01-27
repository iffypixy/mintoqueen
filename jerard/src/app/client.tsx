import * as React from "react";

import {CredentialsObtainer} from "@features/auth";
import {Routes} from "@pages/routes";

export const App: React.FC = () => (
  <CredentialsObtainer>
    <Routes />
  </CredentialsObtainer>
);
