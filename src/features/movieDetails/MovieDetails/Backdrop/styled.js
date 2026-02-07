import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.black};
`;

export const Image = styled.div`
  background-image: url("${({ url }) => url}");
  height: 770px;
  min-height: 400px;
  max-height: 80vh;
  background-size: cover;
  background-position: center;
  margin-bottom: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopMax}px) {
    height: 55vw;
    min-height: 300px;
    margin-bottom: 56px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 8px;
  }
`;

export const Vignette = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  flex-wrap: wrap;
  background:
    linear-gradient(to bottom, ${({ theme }) => theme.colors.black} 0%, transparent 50%, ${({ theme }) => theme.colors.black} 100%),
    linear-gradient(to right, ${({ theme }) => theme.colors.black} 0%, transparent 50%, ${({ theme }) => theme.colors.black} 100%);

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopMax}px) {
    padding: 8px;
  }
`;

export const Title = styled.div`
  font-size: 64px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  line-height: 1.1;
  word-break: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
  }
`;
