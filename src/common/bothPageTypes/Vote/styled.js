import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from "./star.svg";

export const Wrapper = styled.p`
  margin: 24px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 14px;

  ${({ $small }) =>
    $small &&
    css`
      margin: 16px 0 0 0;
      margin-top: 12px;
      align-self: end;
    `}

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 16px 0 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    margin: 16px;
  }

  ${({ $backdrop }) =>
    $backdrop &&
    css`
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 56px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 8px 0;
      }
    `}
`;

export const Star = styled(StarIcon)`
  height: 22px;
  width: auto;
  transform: translateY(-8%);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 14px;
  }

  ${({ $backdrop }) =>
    $backdrop &&
    css`
      height: 35px;
    `}

  //needed to align "no votes yet" vertically
    ${({ hidden }) =>
    hidden &&
    css`
      width: 0;
      display: unset;
    `}
`;

export const Average = styled.strong`
  font-size: 22px;
  font-weight: 500;
  margin-left: 8px;

  ${({ $small }) =>
    $small &&
    css`
      font-size: 16px;
    `}

  ${({ $backdrop }) =>
    $backdrop &&
    css`
      font-size: 30px;
    `}

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-left: 4px;
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    font-size: 13px;
    font-weight: 600;
  }
`;

export const OutOf = styled.span`
  margin-left: 8px;

  ${({ $backdrop }) =>
    $backdrop &&
    css`
      @media (max-width: ${({ theme }) =>
          theme.breakpoints.mobileVerticalMax}px) {
        display: none;
      }
    `};

  ${({ $backdrop }) =>
    $backdrop &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 10px;
        margin-left: 4px;
      }
    `}
`;

export const Count = styled.span`
  margin-left: 8px;

  ${({ $noVotes }) =>
    $noVotes &&
    css`
      margin-left: 0;
    `}

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    color: ${({ theme }) => theme.colors.waterloo};
    font-size: 13px;
  }

  ${({ $small }) =>
    $small &&
    css`
      color: ${({ theme }) => theme.colors.waterloo};
      font-size: 16px;
    `}

  ${({ $backdrop }) =>
    $backdrop &&
    css`
      width: 100%;
      margin-left: 0;
      margin-top: 16px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: unset;
        margin-top: unset;
        color: inherit;
        font-size: 10px;
        margin-left: 8px;
      }
    `}
`;
