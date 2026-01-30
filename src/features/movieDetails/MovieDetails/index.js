import { useSelector } from "react-redux";
import { selectors } from "../movieDetailsSlice";
import { getImageUrl } from "../../../common/bothPageTypes/TMDb/getImageUrl";
import { People } from "../../../common/bothPageTypes/People";
import { Tile } from "../../../common/bothPageTypes/Tile";
import { Backdrop } from "./Backdrop";
import { Container } from "../../../common/bothPageTypes/Container";
import { Header } from "../../../common/bothPageTypes/Header";
import moviePlaceholder from "../../../common/bothPageTypes/images/moviePlaceholder.png";
import { getYearFromDate } from "../../../common/bothPageTypes/getYearFromDate";

export function MovieDetails() {
  const movie = useSelector(selectors.selectDetails);

  const movieMetaData = {
    Production: movie.production_countries?.map(({ name }) => name).join(","),
    "Release date": movie.release_date,
  };

  return (
    <>
      <Backdrop />
      <Container>
        <Tile
          image={getImageUrl({
            path: movie.poster_path,
            sieze: "medium",
          })}
          imagePlaceholder={moviePlaceholder}
          title={movie.title}
          subitle={getYearFromDate(movie.release_date)}
          metaData={movieMetaData}
          hideMetaDataKeysOnMobile
          tags={movie.genres?.map(({ name }) => name)}
          vote={{
            average: movie.vote_average,
            count: movie.vote_count,
          }}
          description={movie.overview}
        />

        {!!movie.cast?.length && (
          <>
            <Header as="h2">Cast ({movie.cast.length})</Header>
            <People people={movie.cast} showCharacter />
          </>
        )}
        {!!movie.crew?.length && (
          <>
            <Header as="h2">Crew ({movie.crew.length})</Header>
            <People people={movie.crew} showJob />
          </>
        )}
      </Container>
    </>
  );
}
