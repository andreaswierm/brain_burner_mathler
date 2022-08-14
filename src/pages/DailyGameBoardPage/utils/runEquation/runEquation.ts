/*eslint no-eval: 0 */
import { InvalidEquationError } from "../InvalidEquationError";

export const runEquation = (equation: string) => {
  try {
    return eval(equation);
  } catch (err) {
    throw new InvalidEquationError();
  }
};
