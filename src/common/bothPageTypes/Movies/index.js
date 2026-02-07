import { getImageUrl } from "../TMDb/getImageUrl";
import { toMovieDetails } from "../../routes";
import { TileList, TileListLink } from "../TileList";
import { Tile } from "../Tile";
import moviePlaceholder from "../images/moviePlaceholder.png";
import { useSelector } from "react-redux";
import { selectGenresAll, selectGenresStatus } from "../genres/genresSlice";
import { getYearFromDate } from "../getYearFromDate";

export const Movies = ({ movies, showJob, showCharacter }) => {
  const genres = useSelector(selectGenresAll);
  const genresStatus = useSelector(selectGenresStatus);

  return (
    <TileList $lessItems>
      {movies.map((movie) => (
        <TileListLink key={movie.id} to={toMovieDetails(movie.id)}>
          <Tile
            stretchVertically
            twoColumnsOnMobile
            title={movie.title}
            $small
            image={getImageUrl({ path: movie.poster_path, size: "medium" }) || moviePlaceholder}
            imagePlaceholder={moviePlaceholder}
            tags={
              genresStatus === "success"
                ? movie.genre_ids?.map((id) => genres[id]) || []
                : []
            }
            vote={{
              average: movie.vote_average,
              count: movie.vote_count,
            }}
            subtitle={
              showJob || showCharacter ? (
                <>
                  {showJob ? movie.job : movie.character}
                  {movie.release_date && ` (${getYearFromDate(movie.release_date)})`}
                </>
              ) : (
                getYearFromDate(movie.release_date)
              )
            }
          />
        </TileListLink>
      ))}
    </TileList>
  );
};

