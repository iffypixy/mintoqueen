import * as React from "react";
import {OutlinedTextFieldProps, TextField, styled} from "@mui/material";

import {opacify} from "@shared/lib/colors";

type OutlinedInputProps = Omit<OutlinedTextFieldProps, "variant">;

const forward: React.ForwardRefRenderFunction<
  HTMLInputElement,
  OutlinedInputProps
> = (props, ref) => (
  <OutlinedInputNative variant="outlined" ref={ref} {...props} />
);

forward.displayName = "OutlinedInput";

export const OutlinedInput = React.forwardRef(forward);

const OutlinedInputNative = styled(TextField)`
  height: 8rem;

  & > label {
    color: ${({theme}) => opacify(theme.palette.text.primary, 0.6)};
    font-size: 1.6rem;
    transform: translate(2rem, 2rem) scale(1);

    &.MuiInputLabel-shrink {
      color: ${({theme}) => theme.palette.text.primary};
      transform: translate(2.3rem, 1rem) scale(0.85);
    }

    &.Mui-error {
      color: ${({theme}) => theme.palette.text.primary};
    }

    & > span {
      color: ${({theme}) => theme.palette.error.main};
      margin-left: 0.25rem;
    }
  }

  & > div {
    &.Mui-focused {
      & > input {
        border: 2px solid ${({theme}) => theme.palette.primary.main};
      }
    }

    &.Mui-error {
      & > input {
        background-color: ${({theme}) =>
          opacify(theme.palette.error.main, 0.15)};
        border: 2px solid ${({theme}) => theme.palette.error.main};
      }
    }

    & > input {
      background-color: ${({theme}) =>
        opacify(theme.palette.primary.main, 0.15)};
      border: 1px solid ${({theme}) => theme.palette.divider};
      border-radius: ${({theme}) => theme.shape.borderRadius};
      padding: 3rem 2rem 1rem;
    }

    & > fieldset {
      border: none;

      & > legend {
        display: none;
      }
    }
  }

  & > p {
    font-size: 1.4rem;
    margin-left: 0.5rem;
    margin-top: 0;
  }
`;
