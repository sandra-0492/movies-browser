import { StyledLink, Header, Icon, Paragraph, Wrapper } from "./styled";

export const Error = () => (
  <Wrapper>
    <Icon />
    <Header>Oops! Something went wrong</Header>
    <Paragraph>
      Please check your network connection
      <br />
      and try again
    </Paragraph>
    <StyledLink to="/">Back to home page</StyledLink>
  </Wrapper>
);
