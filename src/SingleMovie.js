import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import "./Error";

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  const { isLoading, movie, isError } = useFetch(`&i=${id}`);

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
        <footer className="footer-section">
        Copyright © Avii
        </footer>
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;