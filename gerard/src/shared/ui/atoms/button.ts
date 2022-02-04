import {styled, css, ButtonBase} from "@mui/material";

import {opacify} from "@shared/lib/colors";

interface ButtonProps {
  fullWidth?: boolean;
  disabled?: boolean;
}

const propsNotToForward = ["fullWidth"];

export const Button = styled(ButtonBase, {
  shouldForwardProp: (prop: string) => !propsNotToForward.includes(prop),
})<ButtonProps>`
  ${({fullWidth, disabled, theme}) => css`
    color: ${theme.palette.primary.contrastText};
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightMedium};
    width: ${fullWidth ? "100%" : "initial"};
    background-color: ${theme.palette.primary.main};
    border-radius: ${theme.shape.borderRadius};
    transition: box-shadow 0.2s linear;
    opacity: ${disabled ? 0.4 : 1};

    &:focus {
      box-shadow: 0 0 0 4px ${opacify(theme.palette.primary.main, 0.8)};
    }
  `};

  font-size: 1.6rem;
  height: 5.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
