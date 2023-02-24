import './App.css'
import MoviesGrid from './components/movies-grid/MoviesGrid'
import SearchMovie from './components/search-movie/SearchMovie'
import { useState } from 'react'
import useSearchingMovie from './hooks/useSearchingMovie'

function App () {
  const [movieSearch, setMovieSearch] = useState('')
  const movies = useSearchingMovie({ movieSearch })

  return (
    <div className='buscador'>
      <header style={{ backgroundColor: 'white', margin: '0', padding: '0' }}>
        <h1 style={{ margin: '0', padding: '0' }}>Buscador de Peliculas</h1>
      </header>

      <main className='App'>
        <SearchMovie setMovieSearch={setMovieSearch} />
        <section style={{ backgroundColor: 'green' }}>
          {movies && <MoviesGrid movies={movies} />}
        </section>
      </main>

      <footer>
        website created by: <a href='https://github.com/Guille-Sanchez'>Chicho</a>
      </footer>
    </div>
  )
}

export default App
