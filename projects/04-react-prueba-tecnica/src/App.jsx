import { useEffect, useState } from 'react'
import './App.css'

const ENDPOINT_CAT_FACT = 'https://catfact.ninja/fact'
const ENDPOINT_CAT_IMG = 'https://cataas.com/cat/says/'

export function App () {
  const [fact, setFact] = useState()
  const [img, setImg] = useState('')

  useEffect(() => {
    fetch(ENDPOINT_CAT_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  useEffect(() => {
    if (!fact) return

    const words = fact.split(' ').slice(0, 3).join(' ')
    setImg(`${ENDPOINT_CAT_IMG}${words}`)
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {img && <img
        className='img-cat'
        src={img}
        alt={`Cat say ${fact}`}
              />}
    </main>
  )
}
