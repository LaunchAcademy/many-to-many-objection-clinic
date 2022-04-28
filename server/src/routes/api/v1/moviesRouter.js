import express from "express"
import objection from "objection"

import { Movie } from "../../../models/index.js"

import movieReviewsRouter from "./movieReviewsRouter.js"

import MovieSerializer from "../../../serializers/MovieSerializer.js"

const moviesRouter = new express.Router()

moviesRouter.use("/:movieId/reviews", movieReviewsRouter)

moviesRouter.get("/", async (req, res) => {
  try {
    const movies = await Movie.query()
    const serializedMovies = movies.map(movie => MovieSerializer.getSummary(movie))
    return res.status(200).json({ movies: serializedMovies })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

moviesRouter.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.query().findById(req.params.id)
    const serializedMovie = await MovieSerializer.getSummaryWithActorsAndReviews(movie)
    return res.status(200).json({ movie: serializedMovie })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default moviesRouter
