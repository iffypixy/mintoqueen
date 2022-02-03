import * as React from "react";
import {styled} from "@mui/material/styles";

export const CenterContent: React.FC = ({children}) => (
  <Wrapper>{children}</Wrapper>
);

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
