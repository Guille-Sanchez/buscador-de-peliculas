import { useState } from 'react'
import './searchMovie.css'

export function validateMovieSearch ({ newQuery }) {
  const errors = {
    vacio: 'No se puede iniciar la busqueda con espacio',
    minLetras: 'No se puede buscar una pelicula con menos de tres letras'
  }
  let error = ''

  if (newQuery === ' ') {
    error = errors.vacio
  } else if (newQuery.length < 3) {
    error = errors.minLetras
  } else {
    error = ''
  }
  return error
}

function SearchMovie ({ setMovieSearch }) {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  function handleOnChange (e) {
    e.preventDefault()
    const newQuery = e.target.value
    const ErrorAfterValidation = validateMovieSearch({ newQuery })
    setError(() => ErrorAfterValidation)
    if (ErrorAfterValidation.includes('espacio')) return
    setQuery(() => newQuery)
    if (ErrorAfterValidation) return
    setMovieSearch(() => newQuery)
  }

  function handleOnSubmit (e) {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleOnSubmit} className='searchForm'>
        <label htmlFor='movie'>Ingrese una pelicula: </label>
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

/* import { useState } from 'react'
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
    if (newQuery.length < 3) return
    setMovieSearch(() => newQuery)
  }

  function handleOnSubmit (e) {
    e.preventDefault()
    if (error) return
    setMovieSearch(() => query)
  }

  return (
    <>
      <form onSubmit={handleOnSubmit} className='searchForm'>
        <label htmlFor='movie'>Ingrese una pelicula: </label>
        <div>
          <input
            autoComplete='off'
            id='movie'
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            placeholder='Avengers, Batman, La La Land: Ciuda...'
            type='text'
            value={query}
          />
          {(error && focus) && <p className='input-error'>{error}</p>}
        </div>
      </form>
    </>
  )
}

export default SearchMovie
*/
