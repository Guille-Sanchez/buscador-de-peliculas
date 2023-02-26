import './App.css'
import MoviesGrid from './components/movies-grid/MoviesGrid'
import SearchMovie from './components/search-movie/SearchMovie'
import { useState } from 'react'
import SortMovies from './components/sortMovies/SortMovies'
import useSortingMovie from './hooks/useSortingMovie'
import useSearchingMovie from './hooks/useSearchingMovie'

function App () {
  const [movieSearch, setMovieSearch] = useState('')
  const movies = useSearchingMovie({ movieSearch })
  const [sortBy, setSortBy] = useState('')
  const sortedMovies = useSortingMovie({ movies, sortBy })

  return (
    <div className='buscador'>
      <header style={{ backgroundColor: 'white', margin: '0', padding: '0' }}>
        <h1 style={{ margin: '0', padding: '0' }}>Buscador de Peliculas</h1>
      </header>

      <main className='App'>
        <section style={{ display: 'flex', alignItems: 'flex-start' }}>
          <SearchMovie setMovieSearch={setMovieSearch} />
          <SortMovies setSortBy={setSortBy} />
        </section>
        <section style={{ backgroundColor: 'green' }}>
          {sortedMovies && <MoviesGrid movies={sortedMovies} />}
        </section>
      </main>

      <footer>
        website created by: <a href='https://github.com/Guille-Sanchez'>Chicho</a>
      </footer>
    </div>
  )
}

export default App
