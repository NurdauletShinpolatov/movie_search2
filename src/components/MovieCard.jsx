import React from 'react'

const MovieCard = (props) => {
    const { Title, Poster, Type, Year} = props
    return (
    <div className='movie-card'>
        <img src={Poster} alt={Title} className="movie-card-image" />
        <div className="movie-card-body">
          <h4>{Title}</h4>
          <div className="movie-info">
            <span>{Type}</span>
            <span>{Year}</span>
          </div>
        </div>
    </div>
  )
}

export default MovieCard