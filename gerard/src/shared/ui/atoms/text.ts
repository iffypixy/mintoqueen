import {styled, css} from "@mui/material";

interface TextProps {
  secondary?: boolean;
  size?: number;
}

const propsNotToForward = ["secondary", "size"];

export const Text = styled("span", {
  shouldForwardProp: (prop: string) => !propsNotToForward.includes(prop),
})<TextProps>`
  ${({theme, secondary, size}) => css`
    color: ${secondary
      ? theme.palette.text.secondary
      : theme.palette.text.primary};
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightRegular};
    font-size: ${size ? `${size}rem` : "1.6rem"};
  `}

  letter-spacing: 0.1px;
`;
