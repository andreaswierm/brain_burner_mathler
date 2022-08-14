import { FC } from "react";

export type GameStages = "IN_GAME" | "WON" | "LOST";

export type EquationFetcher = () => string;

export type DailyGameBoardPageProps = {
  equationFetcher: EquationFetcher;
};

export type DailyGameBoardPageComponent = FC<DailyGameBoardPageProps>;
