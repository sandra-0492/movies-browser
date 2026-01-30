import styled, { keyframes } from "styled-components";
import { ReactComponent as LoaderIcon } from "./loader.svg";

const rotate = keyframes`
to {
    transform: rotate(360deg);
}
`;

export const Loader = styled(LoaderIcon)`
  animation: ${rotate} 1s linear infinite;
  margin: 120px auto 0 auto;
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 24px;
    width: 35px;
    height: auto;
  }
`;
