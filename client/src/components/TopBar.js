import React from "react"
import { Link } from "react-router-dom"

const TopBar = () => {
  return <div className="top-bar">
    <ul>
      <li>
        <Link to="/genres">Genres</Link>
      </li>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
      <li>
        <Link to="/actors">Actors</Link>
      </li>
    </ul>
  </div>
}

export default TopBar