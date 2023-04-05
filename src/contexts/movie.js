import { createContext, useState, useEffect, useContext } from "react";

import api from "../services/api";
import {PaginationContext} from '../contexts/pagination';

export const MovieContext = createContext({});


function MovieProvider({children}) {

    const {page} = useContext(PaginationContext);

    const [movies, setMovies] = useState([]);
    const [moviesFilter, setMoviesFilter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: 'dc8d1f407a1bd3c7756a115230fc20e7',
                    language: 'pt-BR',
                    page: page,
                }
            })

            // console.log(response.data.results)
            setMovies(response.data.results);
            setMoviesFilter(response.data.results);
            setTimeout(() => {
                setLoading(false)
            }, 1500)
        }

        loadMovies();
    }, [page])

    return(
        <MovieContext.Provider
            value={{movies, loading, moviesFilter, setMoviesFilter, favorites, setFavorites}}
        >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider;