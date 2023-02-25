import { useEffect, useState } from 'react'
import moviesWithResults from '../mockups/moviesWithResults.json'

function giveFormatToMovies ({ moviesWithResults }) {
  return moviesWithResults.Search.map((movieSearch) => {
    return (
      {
        title: movieSearch.Title,
        year: movieSearch.Year,
        poster: movieSearch.Poster,
        id: movieSearch.imdbID
      }
    )
  })
}

function queryMovies ({ movieSearch }) {
  // const moviesWithResults = fetch(movieSearch)
  if (movieSearch === 'avengers') { // Borrar una vez acabado el mockup. Solo sirve para no desplegar las peliculas con input vacio
    return giveFormatToMovies({ moviesWithResults })
  }
}

function useSearchingMovie ({ movieSearch }) {
  const [movies, setMovies] = useState('')

  useEffect(() => {
    let subscribed = true
    if (subscribed) {
      setMovies(() => queryMovies({ movieSearch }))
    }

    return () => {
      subscribed = false
    }
  }, [movieSearch])

  return movies
}
export default useSearchingMovie
