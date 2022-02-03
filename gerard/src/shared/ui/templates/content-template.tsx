import * as React from "react";
import {styled} from "@mui/material/styles";

import {MainTemplate} from "./main-template";

export const ContentTemplate: React.FC = ({children}) => (
  <MainTemplate>
    {children}
    <Navigation />
  </MainTemplate>
);

const Navigation = styled("nav")`
  width: 75rem;
  height: 7rem;
  position: fixed;
  left: 50%;
  bottom: 2.5rem;
  transform: translateX(-50%);
`;
