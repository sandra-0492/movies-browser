import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "./logo.svg";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  line-height: 1;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: end;
  align-items: center;
  padding: 24px;
  grid-gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    padding: 24px 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 24px 0;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    padding: 16px 0;
  }
`;

export const Main = styled.div`
  display: flex;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled(Logo)`
  height: 25px;
  width: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    height: 19px;
  }
`;

export const LogoText = styled.header`
  font-weight: 500;
  font-size: 24px;
  margin-left: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 22px;
    margin-left: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
    margin-left: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    font-size: 13px;
    margin-left: 8px;
  }
`;

export const Links = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 90px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-left: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    margin-left: 12px;
  }
`;

export const LinkItem = styled.li`
  margin-left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-left: 4px;
  }
`;

export const StyledLink = styled(NavLink)`
  border: 1px solid transparent;
  transition: border-color 0.3s;
  display: block;
  border-radius: 24px;
  padding: 13px 24px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;

  &.active,
  &:hover {
    border-color: currentColor;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;
