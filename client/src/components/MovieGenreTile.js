import React from "react"
import { Link } from "react-router-dom"

const MovieTile = ({ id, title, actors }) => {
  const actorList = actors.map((actor, index) => {
    if (index === actors.length - 1) {
      return <li>{actor.firstName} {actor.lastName}</li>
    } else {
      return <li>{actor.firstName} {actor.lastName},</li>
    }
  })

  return (
    <div className="callout">
      <Link to={`/movies/${id}`}> {title} </Link>
      <ul className="actor-list">Starring: {actorList}</ul>
    </div>
  )
}

export default MovieTile
