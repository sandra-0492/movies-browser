import styled, { css } from "styled-components";

export const Wrapper = styled.article`
  padding: 40px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  background: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: 312px 1fr;
  grid-template-areas: "picture meta" "picture description";
  grid-template-rows: auto 1fr;
  align-content: start;
  grid-gap: 0 40px;
  border-radius: 5px;

  ${({ small }) =>
    !small &&
    css`
      align-items: start;
      margin-top: 56px;
      @media (max-width: ${({ theme }) =>
          theme.breakpoints.tabletVerticalMax}px) {
        grid-template-columns: 260px 1fr;
        grid-template-areas: "picture meta" "description description";
        grid-gap: 24px;
        padding: 24px;
      }

      @media (max-width: ${({ tmeme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 114px 1fr;
        padding: 16px;
        grid-gap: 8px 16px;
      }
    `}

  ${({ small }) =>
    small &&
    css`
      grid-template-areas: "picture" "meta";
      grid-template-columns: 1fr;
      padding: 16px;
      grid-gap: 16px;

      @media (max-width: ${({ theme }) =>
          theme.breakpoints.mobileVerticalMax}px) {
        padding: 8px;
      }
    `}

${({ twoColumnsOnMobile }) =>
    twoColumnsOnMobile &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 114px 1fr;
        grid-template-areas: "picture meta";
        grid-template-rows: auto;
        padding: 16px;
      }
    `};

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `};
`;

export const Image = styled.div`
  padding-top: calc(100% * 632 / 421);
  background: url("{({url}) => url}");
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  grid-area: picture;

  ${({ noImage }) =>
    noImage &&
    css`
      background-color: ${({ theme }) => theme.colors.silver};
      background-size: 32%;
      background-repeat: no-repeat;
    `}
`;

export const Title = styled.header`
  font-weight: 600;
  font-size: 36px;
  margin-top: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    font-weight: 500;
  }

  ${({ small }) =>
    small &&
    css`
      font-weight: 500;
      font-size: 20px;
      margin-top: unset;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 20px;
      }

      @media (max-width: ${({ theme }) =>
          theme.breakpoints.mobileVerticalMax}px) {
        font-size: 14px;
        margin-bottom: 8px;
      }
    `}
`;

export const SubTitle = styled.p`
  margin: 24px 0 0 0;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    margin-top: 8px;
  }

  ${({ small }) =>
    small &&
    css`
      margin-top: 8px;
      font-size: 18px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
      }

      @media (max-width: ${({ theme }) =>
          theme.breakpoints.mobileVerticalMax}px) {
        font-size: 13px;
        margin-bottom: 8px;
      }
    `}
`;

export const Description = styled.p`
  margin: 24px 0 0 0;
  font-size: 20px;
  line-height: 1.6;
  grid-area: description;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    margin-top: 8px;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-content: start;

  ${({ stretchVertically }) =>
    stretchVertically &&
    css`
      align-content: stretch;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        align-content: start;
      }
    `}
`;
