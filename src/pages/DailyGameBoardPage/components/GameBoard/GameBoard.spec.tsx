import { fireEvent, render, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { GameBoard } from ".";
import { rockTheme } from "../../../../theme";

const typeInKeyboard = (keyboard: HTMLElement, equation: string) => {
  equation.split("").forEach((character) => {
    fireEvent.click(within(keyboard).getByText(character));
  });
};

describe("<GameBoard />", () => {
  it("Should win when user gets the correct answer in first try", () => {
    const onLoseSpy = jest.fn();
    const onWinSpy = jest.fn();

    const { getByTestId, getByText } = render(
      <ThemeProvider theme={rockTheme}>
        <GameBoard
          equation="119-41"
          numberOfAttempts={6}
          onLose={onLoseSpy}
          onWin={onWinSpy}
        />
      </ThemeProvider>
    );

    const keyboard = getByTestId("keyboard");

    typeInKeyboard(keyboard, "119-41");

    fireEvent.click(getByText("Enter"));

    expect(onWinSpy).toHaveBeenCalled();
    expect(onLoseSpy).not.toHaveBeenCalled();
  });

  it("Should lose whn user fails to find result with 2 attempts", () => {
    const onLoseSpy = jest.fn();
    const onWinSpy = jest.fn();

    const { getByTestId, getByText } = render(
      <ThemeProvider theme={rockTheme}>
        <GameBoard
          equation="119-41"
          numberOfAttempts={2}
          onLose={onLoseSpy}
          onWin={onWinSpy}
        />
      </ThemeProvider>
    );

    const keyboard = getByTestId("keyboard");

    typeInKeyboard(keyboard, "118-40");

    fireEvent.click(getByText("Enter"));

    typeInKeyboard(keyboard, "108-30");

    fireEvent.click(getByText("Enter"));

    expect(onWinSpy).not.toHaveBeenCalled();
    expect(onLoseSpy).toHaveBeenCalled();
  });

  it("Should win on last step", () => {
    const onLoseSpy = jest.fn();
    const onWinSpy = jest.fn();

    const { getByTestId, getByText } = render(
      <ThemeProvider theme={rockTheme}>
        <GameBoard
          equation="119-41"
          numberOfAttempts={2}
          onLose={onLoseSpy}
          onWin={onWinSpy}
        />
      </ThemeProvider>
    );

    const keyboard = getByTestId("keyboard");

    typeInKeyboard(keyboard, "118-40");

    fireEvent.click(getByText("Enter"));

    typeInKeyboard(keyboard, "119-41");

    fireEvent.click(getByText("Enter"));

    expect(onWinSpy).toHaveBeenCalled();
    expect(onLoseSpy).not.toHaveBeenCalled();
  });
});
