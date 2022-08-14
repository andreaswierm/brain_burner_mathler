import { FC } from "react";

export type AttemptsBoardProps = {
  attempts: string[];
  equation: string;
};

export type AttemptsBoardComponent = FC<AttemptsBoardProps>;
