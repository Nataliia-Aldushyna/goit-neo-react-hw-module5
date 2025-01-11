import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [ttlPages, setTtlPage] = useState(0);
  const [query, setQuery] = useState("");  
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const curPage = parseInt(searchParams.get("page")) || 1;

  const url = `https://api.themoviedb.org/3/search/movie?language=en-US&query=${query}&page=${curPage}`;

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;

      setIsLoading(true); 

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_KEY}`,
          },
        });

        if (response.data.results.length === 0) {
          setErrorMessage("No movies found for your search.");
        } else {
          setMovies(response.data.results);
          setTtlPage(response.data.total_pages);
          setErrorMessage(null);
        }
      } catch (err) {
        console.log(err);
        setErrorMessage("An error occurred while fetching movies.");
      } finally {
        setIsLoading(false); 
      }
    };

    fetchMovies();
  }, [query, curPage]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = query.trim();

    if (searchQuery === "" || !/[a-zA-Z0-9]/.test(searchQuery)) {
      setErrorMessage("Please enter a valid search query.");
      return;
    }

    setSearchParams({ query: searchQuery, page: 1 });
    setQuery("");  
    setErrorMessage(null);
  };

  const handleNextPage = () => {
    setSearchParams({ query, page: curPage + 1 });
  };

  const handlePrevPage = () => {
    setSearchParams({ query, page: curPage - 1 });
  };

  return (
    <section className={css.section}>
      <form onSubmit={handleSearch} className={css.formContainer}>
        <label htmlFor="movieSearch"></label>
        <input
          type="text"
          id="movieSearch"
          name="movieSearch"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>

      {errorMessage && <p className={css.errorMessage}>{errorMessage}</p>}
      
      {isLoading && <p className={css.loadingMessage}>Loading movies...</p>}

      <MovieList movies={movies} />
      {movies.length !== 0 && (
        <Pagination
          curPage={curPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          ttlPages={ttlPages}
        />
      )}
    </section>
  );
};

export default MoviesPage;
