import { Button, Flex, RockerFont, Text } from "../../../../components";
import { WinnerGameSceneComponent } from "./WinnerGameScene.types";

export const WinnerGameScene: WinnerGameSceneComponent = ({
  onClickNewGame,
}) => {
  return (
    <Flex flexDirection="column" alignItems="center" gap="1rem">
      <RockerFont>
        <Text fontSize="5rem" fontWeight="bold">
          You WON
        </Text>
      </RockerFont>

      <Flex gap="1rem">
        <Button onClick={onClickNewGame}>New game</Button>
      </Flex>
    </Flex>
  );
};
