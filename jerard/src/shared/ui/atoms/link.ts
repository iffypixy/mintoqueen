import {styled, css} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

interface LinkProps {
  underline?: boolean;
}

const propsNotToForward = ["underline"];

export const Link = styled(RouterLink, {
  shouldForwardProp: (prop: string) => !propsNotToForward.includes(prop),
})<LinkProps>`
  ${({theme, underline}) => css`
    color: #f4a261;
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightRegular};
    text-decoration: ${underline ? "underline" : "none"};
  `}

  font-size: 1.6rem;
  letter-spacing: 0.1px;
`;
