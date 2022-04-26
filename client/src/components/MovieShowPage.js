import React, { useState, useEffect } from "react"

import ActorTile from "./ActorTile.js"
import ReviewTile from "./ReviewTile.js"
import NewReviewForm from "./NewReviewForm.js"
import ErrorList from "./ErrorList.js"

import translateServerErrors from "../services/translateServerErrors.js"

const MovieShowPage = (props) => {
  const [movie, setMovie] = useState({ actors: [], reviews: [] })
  const [errors, setErrors] = useState([])

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

  const postReview = async (formPayload) => {
    try {
      const response = await fetch(`/api/v1/movies/${id}/reviews`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(formPayload)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      } else {
        const body = await response.json()
        const updatedReviews = movie.reviews.concat(body.review)
        setErrors([])
        setMovie({ ...movie, reviews: updatedReviews })
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const actorTileComponents = movie.actors.map((movieObject) => {
    return <ActorTile key={movieObject.id} {...movieObject} />
  })

  const reviewTileComponents = movie.reviews.map((movieObject) => {
    return <ReviewTile key={movieObject.id} {...movieObject} />
  })

  return (
    <div className="callout">
      <h1>{movie.title}</h1>
      <h2>Starring:</h2>
      {actorTileComponents}
      <div>
        <ErrorList errors={errors} />
        <NewReviewForm postReview={postReview} />
      </div>
      <h2>Reviews</h2>
      {reviewTileComponents}
    </div>
  )
}

export default MovieShowPage
