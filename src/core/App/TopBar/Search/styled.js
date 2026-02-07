import styled from "styled-components";
import { ReactComponent as SearchIconSvg } from "./search.svg";

export const Label = styled.div`
  position: relative;
  width: 100%;
  max-width: 432px;
  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const SearchIcon = styled(SearchIconSvg)`
  position: absolute;
  left: 22px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
    height: 16px;
    left: 16px;
  }
`;

// Poprawka: Input powinien być input, nie div
export const Input = styled.input`
  width: 100%;
  height: 42px;
  border-radius: 33px;
  padding-left: 56px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  border: none;
  outline: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
    padding-left: 40px;
    height: 44px;
  }
`;
