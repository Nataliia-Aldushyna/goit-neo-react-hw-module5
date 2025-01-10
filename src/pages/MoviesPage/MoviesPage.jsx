import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import css from "./MoviesPage.module.css";

import MovieList from "../../components/MovieList/MovieList.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import getApiOptions from "../../services/api.js";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [ttlPages, setTtlPage] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);
  
  const query = searchParams.get("query") || "";
  const curPage = parseInt(searchParams.get("page")) || 1;

  const url = `https://api.themoviedb.org/3/search/movie?language=en-US&query=${query}&page=${curPage}`;

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;
      try {
        const response = await axios.get(url, getApiOptions);
        setMovies(response.data.results);
        setTtlPage(response.data.total_pages);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovies();
  }, [query, curPage]);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchQuery = form.elements.movieSearch.value.trim();
    
    setSearchParams({ query: searchQuery, page: 1 });
  };

  const handleNextPage = () => {
    setSearchParams({ query, page: curPage + 1 });
  };

  const handlePrevPage = () => {
    setSearchParams({ query, page: curPage - 1 });
  };

  return (
    <section className="section">
      <h1 className={css.homeTitle}>Search Movies</h1>
      <form onSubmit={handleSearch} className={css.formContainer}>
        <label htmlFor="movieSearch"></label>
        <input
          type="text"
          id="movieSearch"
          name="movieSearch"
          defaultValue={query} 
          placeholder="Search for a movie..."
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>

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
