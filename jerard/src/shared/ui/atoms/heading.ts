import {styled, css} from "@mui/material";

export const H1 = styled("h1")`
  ${({theme}) => css`
    color: ${theme.palette.text.primary};
    font-family: ${theme.typography.h1.fontFamily};
    font-size: ${theme.typography.h1.fontSize};
    font-weight: ${theme.typography.h1.fontWeight};
    line-height: ${theme.typography.h1.lineHeight};
  `}
`;

export const H2 = styled("h2")`
  ${({theme}) => css`
    color: ${theme.palette.text.primary};
    font-family: ${theme.typography.h2.fontFamily};
    font-size: ${theme.typography.h2.fontSize};
    font-weight: ${theme.typography.h2.fontWeight};
    line-height: ${theme.typography.h2.lineHeight};
  `}
`;

export const H3 = styled("h3")`
  ${({theme}) => css`
    color: ${theme.palette.text.primary};
    font-family: ${theme.typography.h3.fontFamily};
    font-size: ${theme.typography.h3.fontSize};
    font-weight: ${theme.typography.h3.fontWeight};
    line-height: ${theme.typography.h3.lineHeight};
  `}
`;

export const H4 = styled("h4")`
  ${({theme}) => css`
    color: ${theme.palette.text.primary};
    font-family: ${theme.typography.h4.fontFamily};
    font-size: ${theme.typography.h4.fontSize};
    font-weight: ${theme.typography.h4.fontWeight};
    line-height: ${theme.typography.h4.lineHeight};
  `}
`;

export const H5 = styled("h5")`
  ${({theme}) => css`
    color: ${theme.palette.text.primary};
    font-family: ${theme.typography.h5.fontFamily};
    font-size: ${theme.typography.h5.fontSize};
    font-weight: ${theme.typography.h5.fontWeight};
    line-height: ${theme.typography.h5.lineHeight};
  `}
`;

export const H6 = styled("h6")`
  ${({theme}) => css`
    color: ${theme.palette.text.primary};
    font-family: ${theme.typography.h6.fontFamily};
    font-size: ${theme.typography.h6.fontSize};
    font-weight: ${theme.typography.h6.fontWeight};
    line-height: ${theme.typography.h6.lineHeight};
  `}
`;
