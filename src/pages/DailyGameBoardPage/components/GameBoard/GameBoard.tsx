import { useCallback, useMemo, useState } from "react";
import { Button, Flex, RockerFont, Text, Tile } from "../../../../components";
import { runEquation } from "../../utils";
import { AttemptsBoard } from "../AttemptsBoard";
import { Legend } from "../Legend";
import { GameBoardComponent } from "./GameBoard.types";

export const GameBoard: GameBoardComponent = ({
  allowedNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  allowedOperators = ["+", "-", "*", "/"],
  equation,
  onLose,
  onWin,
  numberOfAttempts,
}) => {
  const result = useMemo(() => runEquation(equation), [equation]);
  const [equationAttempts, setAttempts] = useState<string[]>([]);
  const [currentAttempt, setCurrentAttempt] = useState<string>("");

  const hasWrongResult = useMemo(() => {
    try {
      if (currentAttempt.length !== equation.length) return false;

      const currentAttemptResult = runEquation(currentAttempt);

      return currentAttemptResult !== result;
    } catch (err) {
      return false;
    }
  }, [currentAttempt, result, equation]);

  const addCharacterToAttempt = useCallback(
    (character: string) => {
      setCurrentAttempt((currentAttempt) => {
        const isSmallerThanEquation = currentAttempt.length < equation.length;

        if (!isSmallerThanEquation) return currentAttempt;

        return currentAttempt + character;
      });
    },
    [setCurrentAttempt, equation]
  );

  const removeCharacterFromAttempt = useCallback(
    () => setCurrentAttempt((currentAttempt) => currentAttempt.slice(0, -1)),
    [setCurrentAttempt]
  );

  const handleOnPressSubmit = useCallback(() => {
    const usedAllAttempts = equationAttempts.length === numberOfAttempts - 1;
    const isCorrectEquation = equation === currentAttempt;

    if (isCorrectEquation) {
      onWin();

      return;
    }

    const isCorrectAnswer = runEquation(currentAttempt) === result;

    if (isCorrectAnswer) {
      if (usedAllAttempts) {
        onLose();

        return;
      }

      setAttempts((attempts) => [...attempts, currentAttempt]);
      setCurrentAttempt("");
    }
  }, [
    currentAttempt,
    equation,
    equationAttempts,
    numberOfAttempts,
    onLose,
    onWin,
    result,
  ]);

  return (
    <>
      <Flex flexDirection="column" gap="3rem" alignItems="center">
        <Flex flexDirection="column" alignItems="center" gap="0.25rem">
          <RockerFont>
            <Text fontSize="3rem" fontWeight="bold">
              Brain burner
            </Text>
          </RockerFont>

          <Text fontWeight="bold" color="secondary">
            Find the equation that results in {result}
          </Text>
        </Flex>

        <Flex flexDirection="column" gap="1rem">
          {!!equationAttempts.length && (
            <AttemptsBoard attempts={equationAttempts} equation={equation} />
          )}

          <Flex gap="1rem">
            {equation.split("").map((_, index) => (
              <Tile variant={hasWrongResult ? "error" : "default"} key={index}>
                {currentAttempt[index]}
              </Tile>
            ))}
          </Flex>
        </Flex>

        <Flex flexDirection="column" gap="0.5rem" data-testid="keyboard">
          <Flex gap="0.5rem" justifyContent="center">
            {allowedNumbers.map((number) => (
              <Button
                key={number}
                onClick={() => addCharacterToAttempt(number)}
              >
                {number}
              </Button>
            ))}
          </Flex>

          <Flex gap="0.5rem" justifyContent="center">
            <Button onClick={removeCharacterFromAttempt}>Delete</Button>

            {allowedOperators.map((operator) => (
              <Button
                key={operator}
                onClick={() => addCharacterToAttempt(operator)}
              >
                {operator}
              </Button>
            ))}

            <Button onClick={handleOnPressSubmit}>Enter</Button>
          </Flex>
        </Flex>

        {hasWrongResult && (
          <Text color="error" fontWeight="bold">
            Wrong result
          </Text>
        )}
      </Flex>

      <Legend />
    </>
  );
};
