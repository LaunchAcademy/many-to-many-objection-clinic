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
  const { id } = req.params

  try {
    const movie = await Movie.query().findById(id)
    movie.actors = await movie.$relatedQuery("actors")
    return res.status(200).json({ movie: movie })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default moviesRouter
