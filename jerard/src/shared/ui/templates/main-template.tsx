import * as React from "react";
import {styled} from "@mui/system";

export const MainTemplate: React.FC = ({children}) => (
  <Wrapper>{children}</Wrapper>
);

const Wrapper = styled("main")`
  width: 100%;
  height: 0;
  min-height: 100vh;
`;
