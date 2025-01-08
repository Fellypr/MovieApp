import "./details.css";
import Navbar from '../../components/Navbar';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { FcMoneyTransfer } from "react-icons/fc";
import {FaStar} from 'react-icons/fa'
function Details() {
    const apiKey = `1e42cd17dfebf86a5ab1b85e99d22bfb`;
    const urlMovie = `https://api.themoviedb.org/3/movie/`;
    const imageBaseUrl = `https://image.tmdb.org/t/p/w500/`;

    const [movie, setMovie] = useState(null);
    const { id } = useParams();

    async function getData(url) {
        try {
            const response = await axios.get(url);
            console.log(response.data); // Mostra os detalhes do filme no console
            setMovie(response.data);
        } catch (error) {
            console.error("Erro ao buscar detalhes do filme:", error);
        }
    }

    useEffect(() => {
        const movieUrl = `${urlMovie}${id}?api_key=${apiKey}`;
        getData(movieUrl);
    }, [id]);

    if (!movie) {
        return (
            <div className="details-container">
                <Navbar />
                <p>Carregando detalhes do filme...</p>
            </div>
        );
    }


    function FormatacaoGeral(value){
        return new Intl.NumberFormat('en-US',{minimumFractionDigits:1 , maximumFractionDigits:1}).format(value);
    }
    const formattedVoteAverage = FormatacaoGeral(movie.vote_average);
    function formatMoney(value) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
    const formattedBudget = formatMoney(movie.budget);

    return (
        <div className="details-container">
            <Navbar />
            <div className="details-content">
                <img src={imageBaseUrl + movie.poster_path} alt={movie.title} className="details-poster" />
                <div className="details-info">
                    <h1 className="movie-title">{movie.title}</h1>
                    <p className="overview">{movie.overview}</p>
                    <p className="release-date">
                        <strong>Data de lançamento:</strong> {movie.release_date}
                    </p>
                    <p className="vote-average">
                        <strong>Avaliação:</strong> {formattedVoteAverage} / 10 <FaStar size={18} className="iconstar"/>
                    </p>
                    <p className="budget">Orçamento: {formattedBudget} <FcMoneyTransfer  size={18} className="iconmoney"/></p>
                </div>
            </div>
        </div>
    );
}

export default Details;
