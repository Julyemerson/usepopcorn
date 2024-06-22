import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search";
import Movies from "./components/Movies";
import MovieList from "./components/MovieList";
import SearchNumResults from "./components/SearchNumResults";
import ListWatchedMovies from "./components/ListWatchedMovies";
import { useState } from "react";
import { tempMovieData } from "./data/MovieData";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <Navbar>
        <Search />
        <SearchNumResults movies={movies} />
      </Navbar>
      <Main>
        <Movies>
          <MovieList movies={movies} />
        </Movies>
        <ListWatchedMovies />
      </Main>
    </>
  );
}
