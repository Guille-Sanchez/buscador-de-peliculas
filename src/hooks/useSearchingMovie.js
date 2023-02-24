import { useEffect, useState } from 'react'
import moviesWithResults from '../mockups/moviesWithResults.json'

function useSearchingMovie ({ movieSearch }) {
  const [movies, setMovies] = useState('')
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
    if (movieSearch === 'avengers') {
      return giveFormatToMovies({ moviesWithResults })
    }
  }

  useEffect(() => {
    let subscribed = true
    if (subscribed && movieSearch) { // borrar luego
      setMovies(() => queryMovies({ movieSearch }))
    }

    return () => {
      subscribed = false
    }
  }, [movieSearch])

  return movies
}
export default useSearchingMovie
