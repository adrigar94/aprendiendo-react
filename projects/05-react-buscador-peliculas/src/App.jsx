import { useCallback, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const devouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , []
  )

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    devouncedGetMovies(newSearch)
  }

  return (
    <div className='page'>

      <header>
        <h1>Film searcher</h1>
        <form onSubmit={handleSubmit} className="form">
          <input name="search" value={search} onChange={handleChange} type="text" placeholder='Oppenheimer, The Lord of the Rings...' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {loading ? <p>Loading...</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
