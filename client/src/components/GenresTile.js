import React from "react"
import { Link } from "react-router-dom"

const GenresTile = ({ name, id }) => {
  return (
    <li className="callout">
      <Link to={`/genres/${id}`}>
        {name}
      </Link>
    </li>
  )
}

export default GenresTile
