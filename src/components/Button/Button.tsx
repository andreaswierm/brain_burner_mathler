import styled from "styled-components";

import { ButtonComponent } from "./Button.types";

export const Button: ButtonComponent = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: lightgray;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #bdbdbd;
  }
`;
