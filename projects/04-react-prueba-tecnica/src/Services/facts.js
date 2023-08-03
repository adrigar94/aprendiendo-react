const ENDPOINT_CAT_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(ENDPOINT_CAT_FACT)
  const data = await res.json()
  console.log(data.fact)
  return data.fact
}
