import { Button, Flex, Text } from "../../../../components";
import { WinnerGameSceneComponent } from "./WinnerGameScene.types";

export const WinnerGameScene: WinnerGameSceneComponent = ({
  onClickNewGame,
}) => {
  return (
    <Flex flexDirection="column" alignItems="center" gap="1rem">
      <Text fontSize="5rem" fontWeight="bold">
        You WON
      </Text>

      <Flex gap="1rem">
        <Button onClick={onClickNewGame}>New game</Button>
      </Flex>
    </Flex>
  );
};
