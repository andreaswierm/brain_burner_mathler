import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
`;

export const SuccessCircle = styled(Circle)`
  ${({ theme }) => css`
    background-color: ${theme.success};
  `}
`;

export const SecondaryCircle = styled(Circle)`
  ${({ theme }) => css`
    background-color: ${theme.secondary};
  `}
`;

export const ErrorCircle = styled(Circle)`
  ${({ theme }) => css`
    background-color: ${theme.error};
  `}
`;
