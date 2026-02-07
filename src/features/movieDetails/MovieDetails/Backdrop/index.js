import { useSelector } from "react-redux";
import { Container } from "../../../../common/bothPageTypes/Container";
import { Vote } from "../../../../common/bothPageTypes/Vote";
import { getImageUrl } from "../../../../common/bothPageTypes/TMDb/getImageUrl";
import { selectors } from "../../movieDetailsSlice";
import { Image, Vignette, Title, Wrapper } from "./styled";

export const Backdrop = () => {
  const movie = useSelector(selectors.selectDetails);

  if (!movie || !movie.backdrop_path) return null;

  return (
    <Wrapper>
      <Container>
        <Image
          url={getImageUrl({
            path: movie.backdrop_path,
            size: "big",
          })}
        >
          <Vignette>
            <Title>{movie.title || ""}</Title>
            <Vote
              vote={{
                average: movie.vote_average || 0,
                count: movie.vote_count || 0,
              }}
              backdrop
            />
          </Vignette>
        </Image>
      </Container>
    </Wrapper>
  );
};
