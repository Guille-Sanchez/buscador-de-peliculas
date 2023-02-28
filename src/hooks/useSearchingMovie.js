import { useEffect, useState } from 'react'
import { getMovieInfo } from '../services/getMovieInfo'

function useSearchingMovie ({ movieSearch }) {
  const [movies, setMovies] = useState('')
  const [loading, setLoading] = useState('')

  useEffect(() => {
    let subscribed = true
    if (subscribed && movieSearch) {
      (async () => {
        const movieInfo = await getMovieInfo({ movieSearch, setLoading })
        if (!movieInfo) setMovies(() => 'No Results Found')
        setMovies(() => movieInfo)
      })()
    }

    return () => {
      subscribed = false
    }
  }, [movieSearch])

  return { movies, loading }
}
export default useSearchingMovie
