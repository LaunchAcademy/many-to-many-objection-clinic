import React from "react"
import { Link } from "react-router-dom"

const ActorTile = ({ firstName, lastName, id }) => {
  return (
    <li className="callout">
      <Link to={`/actors/${id}`}>
        {firstName} {lastName}
      </Link>
    </li>
  )
}

export default ActorTile
