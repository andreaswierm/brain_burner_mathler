import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Button } from ".";
import { rockTheme } from "../../theme";

describe("<Button />", () => {
  it("Should call onClick callback when user clicks in button", () => {
    const onClickSpy = jest.fn();

    const { getByText } = render(
      <ThemeProvider theme={rockTheme}>
        <Button onClick={onClickSpy}>Click me</Button>
      </ThemeProvider>
    );

    fireEvent.click(getByText("Click me"));

    expect(onClickSpy).toHaveBeenCalled();
  });
});
