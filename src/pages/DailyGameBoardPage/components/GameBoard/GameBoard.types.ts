import { FC } from "react";

export type GameBoardProps = {
  numberOfAttempts: number;
  equation: string;
  onLose: () => void;
  onWin: () => void;
  allowedNumbers?: string[];
  allowedOperators?: string[];
};

export type GameBoardComponent = FC<GameBoardProps>;
