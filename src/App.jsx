import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search";
import MoviesBox from "./components/MoviesBox";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import SearchNumResults from "./components/SearchNumResults";
import { useState } from "react";
import { tempMovieData } from "./data/MovieData";
import { tempWatchedData } from "./data/WatchedMovieData";

export default function App() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <Navbar>
        <Search />
        <SearchNumResults movies={movies} />
      </Navbar>
      <Main>
        <MoviesBox>
          <MovieList movies={movies} />
        </MoviesBox>

        <MoviesBox>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </MoviesBox>
      </Main>
    </>
  );
}
