import React, { useState, useEffect } from "react"

import MovieTile from "./MovieTile.js"

const GenreShowPage = (props) => {
  const [genre, setGenre] = useState({ movies: [] })

  const id = props.match.params.id

  const getGenre = async () => {
    try {
      const response = await fetch(`/api/v1/genres/${id}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const genreData = await response.json()
      setGenre(genreData.genre)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getGenre()
  }, [])

  const movieTileComponents = genre.movies.map((movieObject) => {
    return <MovieTile key={movieObject.id} {...movieObject} />
  })

  return (
    <div className="callout">
      <h1>
        {genre.name}
      </h1>
      {movieTileComponents}
    </div>
  )
}

export default GenreShowPage
