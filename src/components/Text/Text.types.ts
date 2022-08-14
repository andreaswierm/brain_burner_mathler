import { CSSProperties, FC, PropsWithChildren } from "react";

export type TextColor = "primary" | "secondary" | "error";

export type TextProps = Pick<CSSProperties, "fontSize" | "fontWeight"> & {
  color?: TextColor;
};

export type TextComponent = FC<PropsWithChildren<TextProps>>;
