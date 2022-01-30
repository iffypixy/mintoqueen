import {styled, css} from "@mui/material/styles";

interface LayoutProps {
  w?: string | number;
  h?: string | number;
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "safe center"
    | "unsafe center";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  p?: string | number;
  px?: string | number;
  py?: string | number;
  pt?: string | number;
  pb?: string | number;
  pl?: string | number;
  pr?: string | number;
  m?: string | number;
  mx?: string | number;
  my?: string | number;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  gap?: string | number;
  reverse?: boolean;
}

const prop = (value: any) => value || "initial";
const size = (value: any) =>
  typeof value === "number" ? `${value}rem` : prop(value);

const mixin = (props: LayoutProps) => css`
  width: ${size(props.w)};
  height: ${size(props.h)};
  justify-content: ${prop(props.justify)};
  align-items: ${prop(props.align)};
  padding-left: ${size(props.pl || props.p)};
  padding-right: ${size(props.pr || props.p)};
  padding-top: ${size(props.pt || props.py || props.p)};
  padding-bottom: ${size(props.pb || props.py || props.p)};
  padding-inline-start: ${size(props.px || props.p)};
  padding-inline-end: ${size(props.px || props.p)};
  margin-left: ${size(props.ml || props.m)};
  margin-right: ${size(props.mr || props.m)};
  margin-top: ${size(props.mt || props.my || props.m)};
  margin-bottom: ${size(props.mb || props.my || props.m)};
  margin-inline-start: ${size(props.mx || props.m)};
  margin-inline-end: ${size(props.mx || props.m)};
`;

const propsNotToForward = [
  "w",
  "h",
  "justify",
  "align",
  "p",
  "px",
  "py",
  "pt",
  "pb",
  "pl",
  "pr",
  "m",
  "mx",
  "my",
  "mt",
  "mb",
  "ml",
  "mr",
  "gap",
  "reverse",
];

const shouldForwardProp = (prop: string) => !propsNotToForward.includes(prop);

export const Col = styled("div", {shouldForwardProp})<LayoutProps>`
  display: flex;
  flex-direction: column;

  ${mixin}

  ${(props) => css`
    & > :not(:first-child) {
      margin-top: ${size(props.gap)};
    }
  `}

  ${(props) =>
    props.reverse &&
    css`
      flex-direction: column-reverse;
    `}
`;

export const Row = styled("div", {shouldForwardProp})<LayoutProps>`
  display: flex;
  flex-direction: row;

  ${mixin}

  ${(props) => css`
    & > :not(:first-child) {
      margin-top: ${size(props.gap)};
    }
  `}

  ${(props) =>
    props.reverse &&
    css`
      flex-direction: row-reverse;
    `}
`;
