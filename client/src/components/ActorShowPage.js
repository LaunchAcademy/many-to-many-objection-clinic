import React, { useState, useEffect } from "react"

import MovieTile from "./MovieTile.js"

const ActorShowPage = (props) => {
  const [actor, setActor] = useState({ movies: [] })

  const id = props.match.params.id

  const getActor = async () => {
    try {
      const response = await fetch(`/api/v1/actors/${id}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const actorData = await response.json()
      setActor(actorData.actor)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getActor()
  }, [])

  const movieTileComponents = actor.movies.map((movieObject) => {
    return <MovieTile key={movieObject.id} {...movieObject} />
  })

  return (
    <div className="callout">
      <h1>
        {actor.firstName} {actor.lastName}
      </h1>
      {movieTileComponents}
    </div>
  )
}

export default ActorShowPage
