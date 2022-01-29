import {styled, css} from "@mui/system";

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
  padding: ${size(props.p)};
  padding-left: ${size(props.pl)};
  padding-right: ${size(props.pr)};
  padding-top: ${size(props.pt)};
  padding-bottom: ${size(props.pb)};
  padding-inline-start: ${size(props.px)};
  padding-inline-end: ${size(props.px)};
  padding-top: ${size(props.py)};
  padding-bottom: ${size(props.py)};
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
