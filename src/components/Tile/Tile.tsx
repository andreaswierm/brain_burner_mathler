import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { TileComponent, TileProps, TileVariant } from "./Tile.types";

export const Tile: TileComponent = styled.div<TileProps>`
  ${({ variant = "default" }) => {
    const variantStyle: Record<TileVariant, FlattenSimpleInterpolation> = {
      default: css`
        border: 0.25rem solid lightgray;
      `,
      secondary: css`
        background-color: gray;
        border: 0.25rem solid gray;
        color: white;
      `,
      success: css`
        background-color: green;
        border: 0.25rem solid green;
        color: white;
      `,
      error: css`
        border: 0.25rem solid red;
        color: red;
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
