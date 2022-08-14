import { FC, PropsWithChildren } from "react";

export type TileVariant = "success" | "secondary" | "default" | "error";

export type TileProps = {
  variant?: TileVariant;
};
export type TileComponent = FC<PropsWithChildren<TileProps>>;
