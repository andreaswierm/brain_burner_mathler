import { fireEvent, render } from "@testing-library/react";
import { Button } from ".";

describe("<Button />", () => {
  it("Should call onClick callback when user clicks in button", () => {
    const onClickSpy = jest.fn();

    const { getByText } = render(
      <Button onClick={onClickSpy}>Click me</Button>
    );

    fireEvent.click(getByText("Click me"));

    expect(onClickSpy).toHaveBeenCalled();
  });
});
