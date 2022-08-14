import { Flex, Tile } from "../../../../components";
import { AttemptsBoardComponent } from "./AttemptsBoard.types";

export const AttemptsBoard: AttemptsBoardComponent = ({
  attempts,
  equation,
}) => {
  return (
    <Flex flexDirection="column" gap="1rem">
      {attempts.map((attempt) => (
        <Flex key={attempt} gap="1rem">
          {attempt.split("").map((attemptCharacter, index) => {
            if (attemptCharacter === undefined)
              return (
                <Tile key={attemptCharacter + index}>{attemptCharacter}</Tile>
              );

            const isInCorrectSpot = equation[index] === attemptCharacter;

            if (isInCorrectSpot)
              return (
                <Tile key={attemptCharacter + index} variant="success">
                  {attemptCharacter}
                </Tile>
              );

            const isInTheEquation = equation.includes(attemptCharacter);

            if (isInTheEquation)
              return (
                <Tile key={attemptCharacter + index} variant="secondary">
                  {attemptCharacter}
                </Tile>
              );

            return (
              <Tile key={attemptCharacter + index}>{attemptCharacter}</Tile>
            );
          })}
        </Flex>
      ))}
    </Flex>
  );
};
