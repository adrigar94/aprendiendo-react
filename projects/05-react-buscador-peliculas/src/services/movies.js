const APIKEY = "72f66896"
const APIENDPOINT = "https://www.omdbapi.com/"

export async function searchMovies({ search }) {
    if (search === '') return null

    try {
        const response = await fetch(`${APIENDPOINT}?s=${search}&apikey=${APIKEY}`)
        const json = await response.json()

        const movies = json.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster
        }))
    } catch (error) {
        throw new Error('Error on searching movies')
    }
}