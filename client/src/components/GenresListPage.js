import React, { useState, useEffect } from "react"

import GenreTile from "./GenreTile.js"

const GenresListPage = () => {
  const [genres, setGenres] = useState([])

  const getGenres = async () => {
    try {
      const response = await fetch("/api/v1/genres")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const parsedResponse = await response.json()
      setGenres(parsedResponse.genres)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getGenres()
  }, [])

  const genreTileComponents = genres.map((genresObject) => {
    return <GenreTile key={genresObject.id} {...genresObject} />
  })

  return (
    <div className="callout">
      <h1>Genres:</h1>
      {genreTileComponents}
    </div>
  )
}

export default GenresListPage
