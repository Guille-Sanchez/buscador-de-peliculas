import { useEffect, useRef, useState } from 'react'
import { getMovieInfo } from '../services/getMovieInfo'

function useSearchingMovie ({ movieSearch }) {
  const [movies, setMovies] = useState('')
  const loading = useRef(true)

  useEffect(() => {
    let subscribed = true
    if (subscribed && movieSearch) {
      (async () => {
        const movieInfo = await getMovieInfo({ movieSearch, loading })
        setMovies(() => movieInfo)
      })()
      setMovies(() => 'No Results Found')
    }

    return () => {
      subscribed = false
    }
  }, [movieSearch])

  return { movies, loading }
}
export default useSearchingMovie
