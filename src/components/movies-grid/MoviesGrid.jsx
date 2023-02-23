import './moviesGrid.css'

function MoviesGrid ({ queriedMovie }) {
  return (
    <div className='movies-container'>
      {queriedMovie.map((movie) => {
        return (
          <div className='movie-card' key={movie.id}>
            <p>{movie.title}</p>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.year}</p>
          </div>
        )
      })}
    </div>
  )
}

export default MoviesGrid
/*
              <div>{movie.title}</div>
              <img src={movie.poster} alt={movie.title} />
              <div>{movie.year}</div>
*/
