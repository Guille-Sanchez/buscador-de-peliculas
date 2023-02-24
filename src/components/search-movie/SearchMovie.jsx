import { useState } from 'react'
import useMovieValidation from '../../hooks/useMovieValidation'
import './searchMovie.css'

function SearchMovie ({ setMovies }) {
  const [query, setQuery] = useState('')
  const { handleOnBlur, handleOnFocus, error, focus } = useMovieValidation({ query })

  function handleOnChange (e) {
    e.preventDefault()
    const newQuery = e.target.value
    if (newQuery === ' ') return
    setQuery(() => newQuery)
  }

  function handleOnSubmit (e) {
    e.preventDefault()
    setMovies(() => query)
  }

  return (
    <>

      <form onSubmit={handleOnSubmit}>
        <label htmlFor='movie'>Ingrese una pelicula: </label>
        <div>
          <input
            autoComplete='off'
            placeholder='Avengers, Batman, La La Land: Ciudad de los sueños...'
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            type='text'
            id='movie'
            value={query}
          />
          {(error && focus) && <p>{error}</p>}
        </div>
      </form>
    </>
  )
}

export default SearchMovie
