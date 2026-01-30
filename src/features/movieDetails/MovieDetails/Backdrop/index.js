import { useSelector } from "react-redux";
import { Container } from "../../../../common/bothPageTypes/Container";
import { Vote } from "../../../../common/bothPageTypes/Vote";
import { getImageUrl } from "../../../../common/bothPageTypes/TMDb/getImageUrl";
import { selectors } from "../../movieDetailsSlice";
import { Iamge, Vignette, Title, Wrapper } from "./styled";

export const Backdrop = () => {
  const movie = useSelector(selectors.selectDetails);

  return (
    !!movie.backdrop_path && (
      <Wrapper>
        <Container>
          <Iamge
            url={getImageUrl({
              path: movie.backdrop_path,
              size: "big",
            })}
          >
            <Vignette>
              <Title>{movie.title}</Title>
              <Vote
                vote={{
                  average: movie.vote_average,
                  count: movie.vote_count,
                }}
                backdrop
              />
            </Vignette>
          </Iamge>
        </Container>
      </Wrapper>
    )
  );
};
