import { Flex, Text } from "../../../../components";
import {
  Container,
  ErrorCircle,
  SecondaryCircle,
  SuccessCircle,
} from "./Legend.styles";

export const Legend = () => {
  return (
    <Container>
      <Flex gap="0.5rem" alignItems="center">
        <SuccessCircle />
        <Text fontWeight="bold">Right place</Text>
      </Flex>

      <Flex gap="0.5rem" alignItems="center">
        <SecondaryCircle />
        <Text fontWeight="bold">In equation</Text>
      </Flex>

      <Flex gap="0.5rem" alignItems="center">
        <ErrorCircle />
        <Text fontWeight="bold">Error</Text>
      </Flex>
    </Container>
  );
};
