import * as React from "react";
import {OutlinedTextFieldProps, TextField, styled} from "@mui/material";

type OutlinedInputProps = Omit<OutlinedTextFieldProps, "variant">;

export const OutlinedInput: React.FC<OutlinedInputProps> = (props) => (
  <OutlinedInputNative variant="outlined" {...props} />
);

const OutlinedInputNative = styled(TextField)`
  & > label {
    font-size: 1.6rem;
    color: ${({theme}) => theme.palette.text.secondary}!important;
    transform: translate(2rem, 2rem) scale(1);

    &.MuiInputLabel-shrink {
      transform: translate(2rem, 1rem) scale(0.85);
    }

    & > span {
      color: ${({theme}) => theme.palette.error.main};
    }
  }

  & > div {
    border-radius: ${({theme}) => theme.shape.borderRadius};

    &.Mui-focused {
      & > fieldset {
        border: 1px solid #b1b0b5 !important;
      }
    }

    & > input {
      color: ${({theme}) => theme.palette.text.primary};
      font-size: 1.6rem;
      padding: 3rem 2rem 1rem;
    }

    & > fieldset {
      border: 1px solid #e3e3e3 !important;
      top: 0;
      transition: border 0.2s linear;

      & > legend {
        display: none;
      }
    }
  }
`;
