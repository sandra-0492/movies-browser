import styled from "styled-components";
import { ReactComponent as NoResultsImage } from "./no-result.svg";

export const NoResults = styled(NoResultsImage)`
  display: block;
  margin: 187px auto 0 auto;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 32px;
    width: 150px;
  }
`;
