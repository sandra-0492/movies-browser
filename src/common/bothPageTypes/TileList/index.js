import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const tileList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
  grid-gap: 16px;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}x) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 12px;
  }

  ${({ lessItems }) =>
    lessItems &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

      @media (max-width: ${({ theme }) =>
          theme.breakpoints.mobileVerticalMax}x) {
        grid-template-columns: 1fr;
      }
    `}
`;

export const TileLitLink = styled(Link)`
  display: grid;
  align-items: stretch;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;
