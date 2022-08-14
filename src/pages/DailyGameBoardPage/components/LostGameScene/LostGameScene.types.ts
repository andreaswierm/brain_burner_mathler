import { FC } from "react";

export type LostGameSceneProps = {
  onClickTryAgain: () => void;
};

export type LostGameSceneComponent = FC<LostGameSceneProps>;
