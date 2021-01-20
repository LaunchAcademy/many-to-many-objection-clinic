import React from "react"
import { Link } from "react-router-dom"

const MovieTile = ({ id, title }) => {
  return (
    <div className="callout">
      <Link to={`/movies/${id}`}> {title} </Link>
    </div>
  )
}

export default MovieTile
