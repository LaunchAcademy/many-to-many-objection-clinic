import express from "express"
import objection from "objection"

import { Movie } from "../../../models/index.js"
import MovieSerializer from "../../../serializers/movieSerializer.js"

const moviesRouter = new express.Router()

moviesRouter.get("/", async (req, res) => {
  try {
    const movies = await Movie.query()

    // will not have createdAt and updatedAt
    const serializedMovies = movies.map(movieRecord => {
      return MovieSerializer.getSummary(movieRecord)
    })

    return res.status(200).json({ movies: serializedMovies })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

moviesRouter.get("/:id", async (req, res) => {
  try {
    const movieId = req.params.id
    const movie = await Movie.query().findById(movieId)

    const serializedMovie = await MovieSerializer.getInfoForShow(movie)


    return res.status(200).json({ movie: serializedMovie })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

export default moviesRouter
