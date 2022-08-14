import styled, { css } from "styled-components";

export const Scaffold = styled.div`
  ${({ theme }) => css`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;
    background-color: ${theme.backgroundColor};
  `}
`;
