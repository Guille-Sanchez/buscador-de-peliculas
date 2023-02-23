import { useState } from 'react'
import './searchMovie.css'

function SearchMovie () {
  const [movies, setMovies] = useState('')
  const [query, setQuery] = useState('')

  function handleOnChange (e) {
    setQuery(() => e.target.value)
  }

  function getMovies () {
    setMovies(() => query)
    console.log(movies)
  }

  return (
    <>
      <h1>Buscador de Peliculas</h1>
      <form onSubmit={getMovies}>
        <label htmlFor='movie' />
        <input onChange={handleOnChange} type='text' id='movie' value={query} />
        <button>Buscar</button>
      </form>
    </>
  )
}

export default SearchMovie
