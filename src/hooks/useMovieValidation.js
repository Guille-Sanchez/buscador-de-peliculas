import { useEffect, useState } from 'react'

export function validateMovieSearch ({ focus, query }) { // Puede separarse en su propia carpeta de logica
  const errors = {
    vacio: 'Por favor, Inserta una pelicula',
    minLetras: 'No se puede buscar una pelicula con menos de tres letras'
  }
  let error = ''

  if (!focus) return
  if (query === '') {
    error = errors.vacio
  } else if (query.length < 3) {
    error = errors.minLetras
  } else {
    console.log('number of letters', query.length)
    error = ''
  }
  return error
}

function useMovieValidation ({ query }) {
  console.log('useMovieValidation', query)
  const [focus, setFocus] = useState(false)
  const [error, setError] = useState('')

  function handleOnFocus () {
    setFocus(() => true)
  }

  function handleOnBlur () {
    setFocus(() => false)
  }

  useEffect(() => {
    let subscribed = true
    if (subscribed) {
      setError(() => validateMovieSearch({ focus, query }))
    }
    return () => {
      subscribed = false
    }
  }, [query, focus, error])
  return (
    { handleOnBlur, handleOnFocus, error, focus }
  )
}

export default useMovieValidation
