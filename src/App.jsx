import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search";
import MoviesBox from "./components/MoviesBox";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import SearchNumResults from "./components/SearchNumResults";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

export default function App() {
  const [watched, setWatched] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("interstellar");

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError(null);
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=${
              import.meta.env.VITE_API_KEY
            }&s=${query}`
          );

          if (!response.ok) {
            throw new Error("Something went wrong with fetching movies!");
          }

          const data = await response.json();
          if (data.Response === "False") {
            throw new Error(data.Error);
          }
          setMovies(data.Search);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError(null);
        return;
      }
      fetchMovies();
    },
    [query]
  );

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <SearchNumResults movies={movies} />
      </Navbar>
      <Main>
        <MoviesBox>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </MoviesBox>

        <MoviesBox>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </MoviesBox>
      </Main>
    </>
  );
}
