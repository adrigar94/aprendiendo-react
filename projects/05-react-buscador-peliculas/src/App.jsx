import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App() {

  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({search})

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className='page'>

      <header>
        <h1>Film searcher</h1>
        <form onSubmit={handleSubmit} className="form">
          <input name="search" value={search} onChange={handleChange} type="text" placeholder='Oppenheimer, The Lord of the Rings...' />
          <button type="submit">Search</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        { loading ? <p>Loading...</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
