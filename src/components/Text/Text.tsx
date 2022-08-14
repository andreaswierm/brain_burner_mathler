import styled, { css } from "styled-components";
import { TextColor, TextComponent, TextProps } from "./Text.types";

const colorMap: Record<TextColor, string> = {
  primary: "#212121",
  secondary: "#757575",
  error: "red",
};

export const Text: TextComponent = styled.span<TextProps>`
  ${({
    theme,
    fontSize = "1rem",
    fontWeight = "normal",
    color = "primary",
  }) => {
    return css`
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      color: ${colorMap[color]};
    `;
  }}
`;
