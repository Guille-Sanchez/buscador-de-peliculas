import './moviesGrid.css'

function MoviesGrid ({ movies }) {
  if (!movies) return
  return (
    <div className='movies-container'>
      {
      movies === 'No Results Found'
        ? <div>{movies}</div>
        : movies.map((movie) => {
          return (
            <div className='movie-card' key={movie.id}>
              <p className='title'>{movie.title}</p>
              <img src={movie.poster} alt={movie.title} />
              <p>{movie.year}</p>
            </div>
          )
        })
}
    </div>
  )
}

export default MoviesGrid
