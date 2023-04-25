import express from "express"
import objection from "objection"

import { Movie } from "../../../models/index.js"
import MovieSerializer from "../../../serializers/movieSerializer.js"

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
    const id = req.params.id 
    const movie = await Movie.query().findById(id)
    movie.actors = await movie.$relatedQuery("actors")
    return res.status(201).json({ movie })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

export default moviesRouter
