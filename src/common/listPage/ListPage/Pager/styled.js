import styled, { css } from "styled-components";
import { ReactComponent as Arrow } from "./arrow.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    margin-top: 32px;
  }
`;

export const Button = styled.button`
  border: none;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 8px;
  align-items: center;
  margin: 6px;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.codGray};
  background: ${({ theme }) => theme.colors.patternsBlue};
  transition: filter 0.3s;
  cursor: pointer;

  &:hover:not(:disabled) {
    filter: brightness(90%);
  }

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.mystic};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    padding: 8px 12px;
    margin: 4px;
  }
`;

const arrowsGap = 4;

export const Arrows = styled.span`
  display: flex;
  margin: 0 -${arrowsGap / 2}px;
`;

export const StyledArrow = styled(Arrow)`
  fill: currentColor;
  margin: 0 ${arrowsGap / 2}px;
  color: ${({ theme }) => theme.colors.sceniceBlue};
  width: auto;

  ${({ $left }) =>
    $left &&
    css`
      transform: rotate(180deg);
    `}

  button:disabled & {
    color: ${({ theme }) => theme.colors.waterloo};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    height: 8px;
  }
`;

export const LinkText = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.codGray};
  margin: 0 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    font-size: 10px;
    margin: 0 8px;
  }
`;

export const Strong = styled.strong`
  color: ${({ theme }) => theme.colors.codGray};
  font-weight: 600;
`;
