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

const fieldset = ".MuiOutlinedInput-notchedOutline";

const OutlinedInputNative = styled(TextField)`
  height: 8rem;

  & > label {
    color: ${({theme}) => opacify(theme.palette.text.primary, 0.6)};
    font-size: 1.6rem;
    transform: translate(2rem, 2.1rem) scale(1);

    &.MuiInputLabel-shrink {
      color: ${({theme}) => theme.palette.text.primary};
      transform: translate(2rem, 1rem) scale(0.85);
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
    &:hover {
      & > ${fieldset} {
        border-color: ${({theme}) => theme.palette.primary.main};
      }
    }

    &.Mui-focused {
      & > ${fieldset} {
        box-shadow: 0 0 0 2px ${({theme}) => theme.palette.primary.main};
        border-width: 1px;
      }
    }

    &.Mui-error {
      & > input {
        background-color: ${({theme}) =>
          opacify(theme.palette.error.main, 0.15)};
      }

      & > ${fieldset} {
        border-color: ${({theme}) => theme.palette.error.main};
        border-width: 1px;
      }

      &.Mui-focused {
        & > ${fieldset} {
          box-shadow: 0 0 0 2px ${({theme}) => theme.palette.error.main};
          border-width: 1px;
        }
      }
    }

    & > input {
      background-color: ${({theme}) =>
        opacify(theme.palette.primary.main, 0.15)};
      border-radius: ${({theme}) => theme.shape.borderRadius};
      padding: 3rem 2rem 1rem;
    }

    & > ${fieldset} {
      border-width: 1px;
      border-style: solid;
      border-color: ${({theme}) => theme.palette.divider};
      border-radius: ${({theme}) => theme.shape.borderRadius};
      transition-property: box-shadow, border;
      transition-timing-function: linear;
      transition-duration: 0.2s;
      top: 0;

      & > legend {
        display: none;
      }
    }
  }

  & > p {
    font-size: 1.4rem;
    margin-left: 0.5rem;
    margin-top: 0.25rem;
  }
`;
