function giveFormatToMovies ({ data }) {
  return data.Search.map((movieSearch) => {
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

export async function getMovieInfo ({ movieSearch, loading }) {
  loading.current = true
  const API_KEY = 'bf561cf1'
  const movieInfo = fetch(`https://www.omdbapi.com/?s=${movieSearch}&apikey=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === 'False') return 'No Results Found'
      loading.current = false
      return giveFormatToMovies({ data })
    })
  return movieInfo
}