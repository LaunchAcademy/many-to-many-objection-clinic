import express from "express"
import objection from "objection"

import { Movie } from "../../../models/index.js"

import movieReviewsRouter from "./movieReviewsRouter.js"

const moviesRouter = new express.Router()

moviesRouter.use("/:movieId/reviews", movieReviewsRouter)

moviesRouter.get("/", async (req, res) => {
  try {
    const movies = await Movie.query()
    return res.status(200).json({ movies: movies })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

moviesRouter.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.query().findById(req.params.id)
    movie.actors = await movie.$relatedQuery("actors")
    movie.reviews = await movie.$relatedQuery("reviews")
    return res.status(200).json({ movie: movie })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

export default moviesRouter
