import * as React from "react";
import {styled} from "@mui/system";

import {MainTemplate} from "./main-template";

export const ContentTemplate: React.FC = ({children}) => (
  <MainTemplate>
    <Wrapper>{children}</Wrapper>
    <Navigation />
  </MainTemplate>
);

const Wrapper = styled("div")`
  width: 100%;
  height: 0;
  min-height: 100vh;
`;

const Navigation = styled("nav")`
  width: 75rem;
  height: 7rem;
  position: fixed;
  left: 50%;
  bottom: 2.5rem;
  transform: translateX(-50%);
`;
