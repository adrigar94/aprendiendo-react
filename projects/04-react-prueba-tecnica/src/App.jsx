import './App.css'
import { useCatImage } from './Hooks/useCatImage'
import { useCatFact } from './Hooks/useCatFact'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { img } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {img && <img
        className='img-cat'
        src={img}
        alt={`Cat say ${fact}`}
              />}

      <button onClick={handleClick}>Get new fact</button>
    </main>
  )
}
