# usePopcorn

![Usepopcorn image](/public/usePopCorn.png "usepopcorn react app")

**usePopcorn** is a React-based web application that allows users to search for movies, view detailed information about them, and manage a list of watched movies. The application fetches movie data from the OMDB API and provides a user-friendly interface for interacting with the movie database.

## Features

- **Search Movies**: Users can search for movies by entering a query in the search bar. The application fetches and displays a list of movies matching the query.
- **View Movie Details**: Users can click on a movie to view detailed information, including the title, year, poster, runtime, IMDb rating, plot, actors, director, and genre.
- **Add to Watched List**: Users can add movies to their watched list and rate them using a star rating system.
- **Manage Watched List**: Users can view a summary of their watched movies, including their ratings, and remove movies from the watched list.

## Project Structure

The project is organized as follows:

### Key Components

- **App.jsx**: The main application component that manages the state and renders the main layout, including the search bar, movie list, and watched movie list.
- **Navbar.jsx**: The navigation bar that contains the search bar and the number of search results.
- **Main.jsx**: The main content area that displays the movie list and watched movie list.
- **Search.jsx**: The search bar component that allows users to enter a query.
- **MoviesBox.jsx**: A container component for displaying movies.
- **MovieList.jsx**: A component that displays a list of movies based on the search query.
- **MovieListItem.jsx**: A component that displays a single movie item in the list.
- **MovieDetail.jsx**: A component that displays detailed information about a selected movie.
- **WatchedSummary.jsx**: A component that displays a summary of the watched movies.
- **WatchedMovieList.jsx**: A component that displays the list of watched movies.
- **WatchedMovieListItem.jsx**: A component that displays a single watched movie item.
- **StarRating.jsx**: A component that allows users to rate movies using a star rating system.
- **ErrorMessage.jsx**: A component that displays error messages.
- **Loader.jsx**: A component that displays a loading spinner.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/usepopcorn.git

   cd usepopcorn
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a .env file in the root directory and add your OMDB API key:

   ```sh
   VITE_API_KEY=your_omdb_api_key
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

## Scripts

> `npm run dev`: Starts the development server.

> `npm run build`: Builds the project for production.

> `npm run lint`: Lints the codebase using ESLint.

> `npm run preview`: Previews the production build.

## Dependencies

- React: A JavaScript library for building user interfaces.
- Vite: A build tool that provides a fast development server and optimized production builds.
- ESLint: A tool for identifying and fixing problems in JavaScript code.

## License

This project is licensed under the MIT License.
