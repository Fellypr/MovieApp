import Navbar from '../../components/Navbar';
import './Container.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
function Container() {
    const [movies, setMovies] = useState([]);

    const apiKey = '1e42cd17dfebf86a5ab1b85e99d22bfb';
    const urlMovie = `https://api.themoviedb.org/3/movie/`;


    async function getData(url) {
        try {
            const response = await axios.get(url)
            console.log(response.data.results);
            setMovies(response.data.results);

        }
        catch (error) {

        }

    }
    useEffect(() => {
        const moviesUrl = (`${urlMovie}top_rated?api_key=${apiKey}`)
        getData(moviesUrl);
    }, [])



    return (

        <div className="principal">
            <Navbar />

            {movies.length === 0 && (
                <div className="loader">
                    <div className="loader__bar"></div>
                    <div className="loader__bar"></div>
                    <div className="loader__bar"></div>
                    <div className="loader__bar"></div>
                    <div className="loader__bar"></div>
                    <div className="loader__ball"></div>
                </div>
            )}

            {movies.length > 0 &&

                <div className='movie-container'>
                    {movies.map((movie) => {
                        return (
                            <div key={movie.id} className='cardMovies'>
                                <Card movie={movie} />
        

                            </div>


                        )
                    })}
                </div>

            }

        </div>
    )
}

export default Container;