import "./search.css";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Container from "../../components/Card";
import Navbar from "../../components/Navbar";
import { FcSearch } from "react-icons/fc";

function Search() {
    const SearchApi = "https://api.themoviedb.org/3/search/movie";
    const ChaveKey = "api_key=1e42cd17dfebf86a5ab1b85e99d22bfb";

    const [searchParms] = useSearchParams();
    const query = searchParms.get("q");
    const [movies, setMovies] = useState([]);

    async function getData(url) {
        try {
            const response = await axios.get(url);
            console.log(response.data.results);
            setMovies(response.data.results);
        } catch (error) {
            console.error("Erro ao buscar filmes:", error);
        }
    }

    useEffect(() => {
        if (query) {
            const searchUrl = `${SearchApi}?${ChaveKey}&query=${query}`;
            getData(searchUrl);
        }
    }, [query]);

    return (
        <div className="principalSearch">
            <Navbar />

            <h1 className="result">Resultados para: <span className="NameResult">{query}</span></h1>

            <div className="MoviesCardMain">
                {movies.length > 0 ? (
                    movies.map((movie) => (

                        <div className="cardSearch" key={movie.id}>

                            <Container movie={movie} className="cardSearchcard" />

                        </div>

                    ))
                ) : (
                    <div className="notFoundContainer">
                        <p className="notFound"> Filme não Encontrado</p>
                        <FcSearch size={100} className="notFoundIcon" />
                    </div>


                )}
            </div>
        </div>
    );
}

export default Search;
