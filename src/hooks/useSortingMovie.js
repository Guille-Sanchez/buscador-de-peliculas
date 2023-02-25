import { useEffect, useState } from 'react'
import useSearchingMovie from './useSearchingMovie'

function useSortingMovie ({ movieSearch, movies, sortBy }) {
  const defaultMovies = useSearchingMovie({ movieSearch })
  const [sortedMovies, setSortedMovies] = useState(movies)

  function reArrangeMovies () {
    if (sortBy === 'default') {
      console.log('default')
      console.log(defaultMovies)
      return defaultMovies
    }
    if (sortBy === 'alphabetic') {
      movies = movies.sort((a, b) => (a.title).localeCompare(b.title))
      console.log('title')
    } else if (sortBy === 'releaseYear') {
      console.log('year')
      movies = movies.sort((a, b) => {
        let year1 = a.year
        let year2 = b.year
        if (a.year.includes('–')) {
          year1 = year1.split('–')[0]
        }
        if (b.year.includes('–')) {
          year2 = year2.split('–')[0]
        }
        return (+(year1) - +(year2))
      })
    }
    return movies
  }

  useEffect(() => {
    if (!movies && !sortBy) return
    setSortedMovies(() => [...reArrangeMovies()])
    return () => {}
  }, [movies, sortBy])

  return sortedMovies
}

export default useSortingMovie
