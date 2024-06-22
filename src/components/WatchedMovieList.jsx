import WatchedMovieListItem from "./WatchedMovieListItem";

export default function WatchedMovieList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovieListItem key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
