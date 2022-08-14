import { ReactNode, useState } from "react";
import { GameBoard, LostGameScene, WinnerGameScene } from "./components";
import { Scaffold } from "./DailyGameBoardPage.styles";
import {
  DailyGameBoardPageComponent,
  GameStages,
} from "./DailyGameBoardPage.types";

export const DailyGameBoardPage: DailyGameBoardPageComponent = ({
  equationFetcher,
}) => {
  const [equation, setEquation] = useState<string>(equationFetcher());
  const [gameStep, setStep] = useState<GameStages>("IN_GAME");

  const handleOnClickNewGame = () => {
    setEquation(equationFetcher());
    setStep("IN_GAME");
  };

  const mapGameStagesToContent: Record<GameStages, () => ReactNode> = {
    IN_GAME: () => (
      <GameBoard
        equation={equation}
        numberOfAttempts={6}
        onLose={() => setStep("LOST")}
        onWin={() => setStep("WON")}
      />
    ),
    LOST: () => <LostGameScene onClickTryAgain={() => setStep("IN_GAME")} />,
    WON: () => <WinnerGameScene onClickNewGame={handleOnClickNewGame} />,
  };

  return <Scaffold>{mapGameStagesToContent[gameStep]()}</Scaffold>;
};
