import moviesWithResults from './mockups/moviesWithResults.json'
import './App.css'
import MoviesGrid from './components/movies-grid/MoviesGrid'
import SearchMovie from './components/search-movie/SearchMovie'
import { useState } from 'react'

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
  const [movies, setMovies] = useState('')
  const queriedMovie = giveFormatToMovies(moviesWithResults)

  return (
    <div className='buscador'>
      <header style={{ backgroundColor: 'white', margin: '0', padding: '0' }}><h1 style={{ margin: '0', padding: '0' }}>Buscador de Peliculas</h1></header>
      <main className='App'>
        <SearchMovie setMovies={setMovies} />
        <section style={{ backgroundColor: 'green' }}>
          {movies === 'avengers' && <MoviesGrid queriedMovie={queriedMovie} />}
        </section>
      </main>
      <footer>
        website created by: <a href='https://github.com/Guille-Sanchez'>Chicho</a>
      </footer>
    </div>
  )
}

export default App
