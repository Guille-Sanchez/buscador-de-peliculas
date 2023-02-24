import './moviesGrid.css'

function MoviesGrid ({ movies }) {
  return (
    <div className='movies-container'>
      {movies.map((movie) => {
        return (
          <div className='movie-card' key={movie.id}>
            <p className='title'>{movie.title}</p>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.year}</p>
          </div>
        )
      })}
    </div>
  )
}

export default MoviesGrid
