import express from "express"
import objection from "objection"

import { Movie } from "../../../models/index.js"

const moviesRouter = new express.Router()

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
    const movieId = req.params.id
    const movie = await Movie.query().findById(movieId)
    // const movie = { actors: [] }
    const actorsArray = await movie.$relatedQuery("actors")
    movie.actors = actorsArray
    return res.status(200).json({ movie: movie })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default moviesRouter
