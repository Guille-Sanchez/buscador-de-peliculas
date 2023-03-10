import { useCallback, useState } from 'react'
import './searchMovie.css'
import { validateMovieSearch } from '../../logic/validateMovieSearch'
import debounce from 'just-debounce-it'

function SearchMovie ({ setMovieSearch }) {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  const debounceMovie = useCallback(
    debounce((newQuery) => {
      setMovieSearch(() => newQuery)
    }, 300), [])

  function handleOnChange (e) {
    e.preventDefault()
    const newQuery = e.target.value
    const ErrorAfterValidation = validateMovieSearch({ newQuery })
    setError(() => ErrorAfterValidation)
    if (ErrorAfterValidation.includes('espacio')) return
    setQuery(() => newQuery)
    if (ErrorAfterValidation) return
    debounceMovie(newQuery)
  }

  function handleOnSubmit (e) {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleOnSubmit} className='searchForm'>
        <label htmlFor='movie'>Ingrese una pelicula:</label>
        <div>
          <input
            autoComplete='off'
            id='movie'
            onChange={handleOnChange}
            placeholder='Avengers, Batman, Shrek, Los Locos Adams, Matilda'
            type='text'
            value={query}
          />
          {error && <p className='input-error'>{error}</p>}
        </div>
      </form>
    </>
  )
}

export default SearchMovie
