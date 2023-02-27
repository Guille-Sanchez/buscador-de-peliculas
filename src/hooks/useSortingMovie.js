import { useEffect, useState } from 'react'

function reArrangeMovies (movies, sortBy) {
  let toSortMovies = ''
  switch (sortBy) {
    case 'alphabetic':
      toSortMovies = movies.sort((a, b) => (a.title).localeCompare(b.title))
      return toSortMovies

    case 'releaseYear':
      toSortMovies = movies.sort((a, b) => {
        let year1 = a.year
        let year2 = b.year
        if (a.year.includes('\u2013')) { // API uses '–', and '–' === '\u2013'
          year1 = year1.split('\u2013')[0]
        }
        if (b.year.includes('\u2013')) {
          year2 = year2.split('\u2013')[0]
        }
        return (+(year1) - +(year2))
      })
      return toSortMovies

    default:
      toSortMovies = movies
      return toSortMovies
  }
}

function useSortingMovie ({ movies, sortBy, loading }) {
  const [sortedMovies, setSortedMovies] = useState('')

  useEffect(() => {
    let subscribed = true

    if (subscribed) {
      if (loading.current || movies === 'No Results Found') return setSortedMovies(() => movies)
      setSortedMovies(() => reArrangeMovies([...movies], sortBy))
    }

    return () => {
      subscribed = false
    }
  }, [movies, sortBy])

  return sortedMovies
}

export default useSortingMovie
