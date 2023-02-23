import moviesWithResults from './mockups/moviesWithResults.json'
import './App.css'
import MoviesGrid from './components/movies-grid/MoviesGrid'
import SearchMovie from './components/search-movie/SearchMovie'

function giveFormatToMovies (toFormat) {
  return toFormat.Search.map((movie) => {
    return (
      {
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
        id: movie.imdbID
      }
    )
  })
}

function App () {
  const queriedMovie = giveFormatToMovies(moviesWithResults)

  return (
    <main className='App'>
      <SearchMovie />
      <section style={{ backgroundColor: 'green' }}>
        <MoviesGrid queriedMovie={queriedMovie} />
      </section>
    </main>
  )
}

export default App
