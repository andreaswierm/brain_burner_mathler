import { FC, PropsWithChildren, ButtonHTMLAttributes } from "react";

export type ButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
>;

export type ButtonComponent = FC<PropsWithChildren<ButtonProps>>;
