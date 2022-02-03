import * as React from "react";

import {CredentialsObtainer} from "@features/auth";
import {Routes} from "@pages/routes";
import {GlobalStyles} from "./global-styles";

const globalStyles = <GlobalStyles />;

export const App: React.FC = () => (
  <>
    {globalStyles}
    <CredentialsObtainer>
      <Routes />
    </CredentialsObtainer>
  </>
);
