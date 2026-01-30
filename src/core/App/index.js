import { useEffect } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MovieListPage } from "../../features/movieList/MovieListPage";
import { MovieDetailsPage } from "../../features/movieDetails/MovieDetailsPage";
import { PersonDetailsPage } from "../../features/personDetails/PersonDetailsPage";
import { PersonListPage } from "../../features/personList/PersonListPage";
import {
  toPersonDetails,
  toPeople,
  toMovies,
  ToMoviesDetails,
  toMovieDetails,
} from "../../common/routes";
import { TopBar } from "./TopBar";
import { fetchGenres } from "../../common/bothPageTypes/genres/genresSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <HashRouter>
      <TopBar />

      <Switch>
        <Route path={toPersonDetails(":id")}>
          <PersonDetailsPage />
        </Route>
        <Route path={toPeople()}>
          <PersonListPage />
        </Route>
        <Route path={toMovieDetails(":id")}>
          <MovieDetailsPage />
        </Route>
        <Route path={toMovies()}>
          <MovieListPage />
        </Route>
        <Route path="">
          <Redirect to={toMovies} />
        </Route>
      </Switch>
    </HashRouter>
  );
}
