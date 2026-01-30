import { Container } from "../../../common/bothPageTypes/Container";
import { toMovies, toPeople } from "../../../common/routes";
import { Search } from "./Search";
import {
  Grid,
  LinkItem,
  Links,
  LogoImage,
  LogoLink,
  LogoText,
  Main,
  StyledLink,
  Wrapper,
} from "./styled";

export const TopBar = () => (
  <Wrapper>
    <Container>
      <Grid>
        <Main>
          <LogoLink to="/">
            <LogoImage />
            <LogoText>Movies Browser</LogoText>
          </LogoLink>
          <nav>
            <Links>
              <LinkItem>
                <StyledLink to={toMovies()}>Movies</StyledLink>
              </LinkItem>
              <LinkItem to={toPeople()}>People</LinkItem>
            </Links>
          </nav>
        </Main>
        <Search />
      </Grid>
    </Container>
  </Wrapper>
);
