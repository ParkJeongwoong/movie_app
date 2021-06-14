import React from "react"
import PropTypes from "prop-types"
import "./Movie.css"

function Movie({ year, title, summary, poster, rating, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        {/* <h5 className="movie__rating">{rating}</h5> */}
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index)=> {
            return <li key={index} className="movie__genre">{genre}</li>
          })}
        </ul>
        {
          summary.length > 140
          ? <p>{summary.slice(0,140)}...</p>
          : <p>{summary}</p>
        }
      </div>
    </div>
    )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie