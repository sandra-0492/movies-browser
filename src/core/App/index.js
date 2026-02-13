import { useEffect } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MovieListPage } from "../../features/movieList/MovieListPage";
import { MovieDetailsPage } from "../../features/movieDetails/MovieDetailsPage";
import { PersonDetailsPage } from "../../features/personDetails/PersonDetailsPage";
import { PersonListPage } from "../../features/personList/PersonListPage";
import {
  toPersonDetails,
  toPeople,
  toMovies,
  toMovieDetails,
} from "../../common/routes";
import { TopBar } from "./TopBar";
import { fetchGenres } from "../../common/bothPageTypes/genres/genresSlice";
import { Container } from "../../common/bothPageTypes/Container";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <HashRouter>
  <TopBar />

  <Container>
    <Routes>
      <Route
        path={toPersonDetails(":id")}
        element={<PersonDetailsPage />}
      />
      <Route
        path={toPeople()}
        element={<PersonListPage />}
      />
      <Route
        path={toMovieDetails(":id")}
        element={<MovieDetailsPage />}
      />
      <Route
        path={toMovies()}
        element={<MovieListPage />}
      />
      <Route
        path="*"
        element={<Navigate to={toMovies()} replace />}
      />
    </Routes>
  </Container>
</HashRouter>

  );
}

export default App;
