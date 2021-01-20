import React, { useState, useEffect } from "react"

import ActorTile from "./ActorTile.js"

const MovieShowPage = (props) => {
  const [movie, setMovie] = useState({ actors: [] })

  const id = props.match.params.id

  const getMovie = async () => {
    try {
      const response = await fetch(`/api/v1/movies/${id}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const movieData = await response.json()
      setMovie(movieData.movie)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getMovie()
  }, [])

  const actorTileComponents = movie.actors.map((movieObject) => {
    return <ActorTile key={movieObject.id} {...movieObject} />
  })

  return (
    <div className="callout">
      <h1>{movie.title}</h1>
      <h2>Starring:</h2>
      {actorTileComponents}
    </div>
  )
}

export default MovieShowPage
