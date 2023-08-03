import { useEffect, useState } from 'react'

const ENDPOINT_CAT_IMG = 'https://cataas.com/cat/says/'

export function useCatImage ({ fact }) {
  const [img, setImg] = useState('')

  useEffect(() => {
    if (!fact) return

    const words = fact.split(' ').slice(0, 3).join(' ')
    setImg(`${ENDPOINT_CAT_IMG}${words}`)
  }, [fact])

  return { img }
}
