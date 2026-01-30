import { useGoToPage } from "../useGoToPage";
import {
  StyledArrow,
  Strong,
  Button,
  Text,
  Wrapper,
  LinkText,
  Arrows,
} from "./styled";

export const Pager = ({ page, totalPages }) => {
  const goToPage = useGoToPage();

  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
    <Wrapper>
      <Button disabled={isFirstPage} onClick={() => goToPage(1)}>
        <Arrows>
          <StyledArrow left />
          <StyledArrow left />
        </Arrows>
        <LinkText>First</LinkText>
      </Button>
      <Button disabled={isFirstPage} onClick={() => goToPage(page - 1)}>
        <Arrows>
          <StyledArrow left />
        </Arrows>
        <LinkText>Previous</LinkText>
      </Button>

      <Text>
        Page <Strong>{page}</Strong> of <Strong>{totalPages}</Strong>
      </Text>

      <Button disabled={isLasttPage} onClick={() => goToPage(page + 1)}>
        <LinkText>Next</LinkText>
        <Arrows>
          <StyledArrow />
        </Arrows>
      </Button>
      <Button disabled={isLastPage} onClick={() => goToPage(totalPages)}>
        <LinkText>last</LinkText>
        <Arrows>
          <StyledArrow />
          <StyledArrow />
        </Arrows>
      </Button>
    </Wrapper>
  );
};
