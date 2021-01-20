import React, { useState, useEffect } from "react"

import ActorTile from "./ActorTile.js"

const ActorsListPage = () => {
  const [actors, setActors] = useState([])

  const getActors = async () => {
    try {
      const response = await fetch("/api/v1/actors")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const parsedResponse = await response.json()
      setActors(parsedResponse.actors)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getActors()
  }, [])

  const actorTileComponents = actors.map((actorObject) => {
    return <ActorTile key={actorObject.id} {...actorObject} />
  })

  return (
    <div className="callout">
      <h1>Actors:</h1>
      {actorTileComponents}
    </div>
  )
}

export default ActorsListPage
