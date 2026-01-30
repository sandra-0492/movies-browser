import styled, { css } from "styled-components";

export const Wrapper = styled.dl`
  font: 18px;
  margin: 24px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 0;
    font-size: 12p;
  }
`;

export const Row = styled.div`
  margin: 8px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-top: 16px;
  }
`;

export const Key = styled.dt`
  display: inline;
  color: ${({ theme }) => theme.colors.stormGray};
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-bottom: 8px;
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 4px;

    ${({ hideOnMobile }) =>
      hideOnMobile &&
      css`
        display: none;
      `}
  }
`;

export const Value = styled.div`
  display: inline;
  margin: 0;
`;
