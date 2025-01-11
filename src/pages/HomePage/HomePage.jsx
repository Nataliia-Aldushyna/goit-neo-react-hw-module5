import axios from "axios";
import { useEffect, useState } from "react";
import usePagination from "../../hooks/usePagination.js";
import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [ttlPages, setTtlPage] = useState(0);

  const savedPage = JSON.parse(sessionStorage.getItem("page")) || 1;

  const { curPage, handleNextPage, handlePrevPage } = usePagination(
    savedPage,
    ttlPages
  );

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/trending/movie/day", {
          params: {
            language: "en-US",
            page: curPage,
          },
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_KEY}`,
          },
        });

        setMovies(response.data.results);
        setTtlPage(response.data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error.message);
      }
    };

    fetchMovies();
  }, [curPage]);
  
  return (
    <section className={css.homeSection}>
      <h1 className={css.homeTitle}>Trending Today</h1>
      <MovieList movies={movies} />
      <Pagination
        curPage={curPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        ttlPages={ttlPages}
      />
    </section>
  );
};

export default HomePage;
