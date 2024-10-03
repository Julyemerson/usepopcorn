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
import MovieDetail from "./components/MovieDetail";

export default function App() {
  const [watched, setWatched] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleWatchedMovie(movie) {
    setWatched((whatched) => [...watched, movie]);
  }

  function handleDeleteWatchedMovie(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebounceValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debounceValue;
  }

  const debouncedQuery = useDebounce(query, 500);

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError(null);
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=${
              import.meta.env.VITE_API_KEY
            }&s=${debouncedQuery}`,
            { signal: controller.signal }
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
          if (error.name !== "AbortError") {
            setError(error.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError(null);
        return;
      }

      handleCloseMovie();

      if (debouncedQuery) {
        fetchMovies();
      }

      return () => {
        controller.abort();
      };
    },

    [debouncedQuery]
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
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </MoviesBox>

        <MoviesBox>
          {selectedId ? (
            <MovieDetail
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatchedMovie={handleWatchedMovie}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatchedMovie={handleDeleteWatchedMovie}
              />
            </>
          )}
        </MoviesBox>
      </Main>
    </>
  );
}
