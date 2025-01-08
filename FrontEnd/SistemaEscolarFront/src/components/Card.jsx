import "./Card.css"
import { Link } from 'react-router-dom';
function Card({ movie, showDetails = true }) {

    const PictureMovie = `https://image.tmdb.org/t/p/w500/`;
    return (
        <>
            <div className="card">
                <img src={PictureMovie + movie.poster_path} alt={movie.title} className="pictureMovie" />
                <div className="movie-info">
                    <h2>{movie.title}</h2>
                    {showDetails && <Link to={`/Details/${movie.id}`} className="details">Details</Link>}
                </div>
            </div>
        </>
    )
}



export default Card;