import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { TileComponent, TileProps, TileVariant } from "./Tile.types";

export const Tile: TileComponent = styled.div<TileProps>`
  ${({ variant = "default", theme }) => {
    const variantStyle: Record<TileVariant, FlattenSimpleInterpolation> = {
      default: css`
        border: 0.25rem solid ${theme.textPrimary};
        color: ${theme.textPrimary};
      `,
      secondary: css`
        background-color: ${theme.secondary};
        border: 0.25rem solid ${theme.secondary};
        color: ${theme.onSecondary};
      `,
      success: css`
        background-color: ${theme.success};
        border: 0.25rem solid ${theme.success};
        color: ${theme.onSuccess};
      `,
      error: css`
        border: 0.25rem solid ${theme.error};
        color: ${theme.error};
      `,
    };

    return css`
      border-radius: 0.25rem;
      min-width: 2rem;
      min-height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      font-weight: bold;
      font-size: 1rem;

      ${variantStyle[variant]}
    `;
  }}
`;
