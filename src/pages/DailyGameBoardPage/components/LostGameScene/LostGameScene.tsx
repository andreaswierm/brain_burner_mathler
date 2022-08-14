import { Button, Flex, Text } from "../../../../components";
import { LostGameSceneComponent } from "./LostGameScene.types";

export const LostGameScene: LostGameSceneComponent = ({ onClickTryAgain }) => {
  return (
    <Flex flexDirection="column" alignItems="center" gap="1rem">
      <Text fontSize="5rem" fontWeight="bold">
        You LOST
      </Text>

      <Flex gap="1rem">
        <Button onClick={onClickTryAgain}>Try again</Button>
      </Flex>
    </Flex>
  );
};
