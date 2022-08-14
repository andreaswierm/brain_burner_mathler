import styled, { css } from "styled-components";
import { TextColor, TextComponent, TextProps } from "./Text.types";

export const Text: TextComponent = styled.span<TextProps>`
  ${({
    theme,
    fontSize = "1rem",
    fontWeight = "normal",
    color = "primary",
  }) => {
    const colorMap: Record<TextColor, string> = {
      primary: theme.textPrimary,
      secondary: theme.textSecondary,
      error: theme.error,
    };

    return css`
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      color: ${colorMap[color]};
    `;
  }}
`;
