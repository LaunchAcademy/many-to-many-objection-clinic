import express from "express"
import objection from "objection"

import { Genre } from "../../../models/index.js"

const genresRouter = new express.Router()

genresRouter.get("/", async (req, res) => {
  try {
    const genres = await Genre.query()
    return res.status(200).json({ genres: genres })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

genresRouter.get("/:id", async (req, res) => {
  try {
    const genre = await Genre.query().findById(req.params.id)
    const movies = await genre.$relatedQuery("movies")
    for (const movie of movies) {
      const actors = await movie.$relatedQuery("actors")
      movie.actors = actors
    }
    genre.movies = movies

    return res.status(200).json({ genre: genre })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

export default genresRouter
