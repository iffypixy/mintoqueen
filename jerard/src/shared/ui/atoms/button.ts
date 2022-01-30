import {styled, css, ButtonBase} from "@mui/material";

interface ButtonProps {
  fullWidth?: boolean;
  disabled?: boolean;
}

const propsNotToForward = ["fullWidth"];

export const Button = styled(ButtonBase, {
  shouldForwardProp: (prop: string) => !propsNotToForward.includes(prop),
})<ButtonProps>`
  ${({fullWidth, disabled, theme}) => css`
    color: #ffffff;
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightMedium};
    background-color: ${disabled ? "#F8C7A0" : "#F4A261"};
    border-radius: ${theme.shape.borderRadius};
    width: ${fullWidth ? "100%" : "initial"};
  `};

  font-size: 1.6rem;
  height: 5.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
