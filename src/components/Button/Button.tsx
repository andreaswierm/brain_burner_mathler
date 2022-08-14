import styled, { css } from "styled-components";

import { ButtonComponent } from "./Button.types";

export const Button: ButtonComponent = styled.button`
  ${({ theme }) => css`
    border: none;
    border-radius: 0.5rem;
    background-color: ${theme.button.backgroundColor};
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    font-weight: bold;
    color: ${theme.button.color};

    &:hover {
      background-color: ${theme.button.hover.backgroundColor};
    }

    &:active {
      background-color: ${theme.button.active.backgroundColor};
    }
  `}
`;
