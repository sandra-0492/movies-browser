import styled from "styled-components";

export const Header = styled.header`
  font-size: 36x;
  margin-top: 56px;
  margin-bottom: 0;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    font-size: 18px;
    margin-top: 20px;
  }
`;
