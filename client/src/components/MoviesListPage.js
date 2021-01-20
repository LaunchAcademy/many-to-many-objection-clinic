import React, { useState, useEffect } from "react"

import MovieTile from "./MovieTile.js"

const MoviesListPage = () => {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    try {
      const response = await fetch("/api/v1/movies")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const parsedResponse = await response.json()
      setMovies(parsedResponse.movies)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  const movieTileComponents = movies.map((movieObject) => {
    return <MovieTile key={movieObject.id} {...movieObject} />
  })

  return (
    <div className="callout">
      Featured Films
      {movieTileComponents}
    </div>
  )
}

export default MoviesListPage
