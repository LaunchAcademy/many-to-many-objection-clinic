import React, { useState, useEffect } from "react"

import MovieGenreTile from "./MovieGenreTile.js"

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

  const movieGenreTileComponents = genre.movies.map((movieObject) => {
    return <MovieGenreTile key={movieObject.id} {...movieObject} />
  })

  return (
    <div className="callout">
      <h1>
        {genre.name}
      </h1>
      {movieGenreTileComponents}
    </div>
  )
}

export default GenreShowPage
