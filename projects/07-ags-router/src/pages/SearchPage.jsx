/* eslint-disable react/prop-types */
import { useEffect } from "react"

export default function SearchPage({ routeParams }) {

    useEffect(() => {
        document.title = `Search - ${routeParams.query}`
    }, [])

    return (
        <>
            <h1>Search</h1>
            <p>
                Has buscado &apos;{routeParams.query}&apos;
            </p>
        </>
    )
}