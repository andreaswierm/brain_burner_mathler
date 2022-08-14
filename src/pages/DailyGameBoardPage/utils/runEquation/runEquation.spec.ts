import { InvalidEquationError } from "../InvalidEquationError";
import { runEquation } from "./runEquation";

describe("runEquation()", () => {
  it("Should return the equation '10+5'", () => {
    expect(runEquation("10+5")).toEqual(15);
  });

  it("Should return the equation '10*5'", () => {
    expect(runEquation("10*5")).toEqual(50);
  });

  it("Should return the equation '10+40*5'", () => {
    expect(runEquation("10+40*5")).toEqual(210);
  });

  it("Should return the equation '10+40/5'", () => {
    expect(runEquation("10+40/5")).toEqual(18);
  });

  it("Should throw an error when equation has multiple operators '10++40'", () => {
    const test = () => runEquation("10++40");

    expect(test).toThrow(new InvalidEquationError());
  });

  it("Should throw an error when equation has operator in the end '10++40-'", () => {
    const test = () => runEquation("10++40-");

    expect(test).toThrow(new InvalidEquationError());
  });
});
