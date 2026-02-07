import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Warning } from "./warning.svg";

export const Wrapper = styled.div`
  margin-top: 200px;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr;
  justify-items: center;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 50px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    margin-top: 24px;
    grid-gap: 16px;
  }
`;

export const Icon = styled(Warning)`
  margin-bottom: 16px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    width: 70px;
    margin-bottom: 8px;
  }
`;

export const Header = styled.div`
  margin: 0;
  font-size: 36px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    font-size: 16px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    font-size: 14px;
  }
`;

export const StyledLink = styled(Link)`
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 14px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 24px;
  background: ${({ theme }) => theme.colors.sceniceBlue};
  transition: filter 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    font-size: 12px;
  }

  &:hover {
    filter: brightness(120%);
  }
`;
