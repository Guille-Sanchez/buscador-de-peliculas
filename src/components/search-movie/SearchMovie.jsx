import { useState } from 'react'
import useMovieValidation from '../../hooks/useMovieValidation'
import './searchMovie.css'

function SearchMovie ({ setMovieSearch }) {
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
    if (error) return
    setMovieSearch(() => query)
  }

  return (
    <>

      <form onSubmit={handleOnSubmit}>
        <label htmlFor='movie'>Ingrese una pelicula: </label>
        <div>
          <input
            autoComplete='off'
            id='movie'
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            placeholder='Avengers, Batman, La La Land: Ciudad de los sueños...'
            type='text'
            value={query}
          />
          {(error && focus) && <p>{error}</p>}
        </div>
      </form>
    </>
  )
}

export default SearchMovie
