import axios from "axios";
import { useEffect, useState } from "react";
import getApiOptions from '../../services/api'

import { useParams } from "react-router-dom";
import css from './MovieCast.module.css'
import CastCard from "../CastCard/CastCard";

const MovieCast = () => {
    
    const movieId = useParams().movieId; 
    const [casts, setCast] = useState([])

    useEffect(() => {
        if (!movieId) return;  

        const fetchMovies = async () => {
            try {
                const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
                const response = await axios.get(url, getApiOptions);
                setCast(response.data.cast)
            } catch (err) {
                console.log(err);
            }
        };

        fetchMovies();

    }, [movieId]);

    return (
        <div className="container">
            <ul className={css.castList}>
                {casts.map(cast => (
                    <li key={cast.id} className={css.castItem}>
                        <CastCard cast={cast} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieCast;