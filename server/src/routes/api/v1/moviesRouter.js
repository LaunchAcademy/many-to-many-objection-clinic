import express from "express"

import { Movie } from "../../../models/index.js"
import MovieSerializer from "../../../serializers/MovieSerializer.js"

const moviesRouter = new express.Router()

moviesRouter.get("/", async (req, res) => {
  try {
    const movies = await Movie.query()
    const serializedMovies = MovieSerializer.getList(movies)
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
    const serializedMovie = await MovieSerializer.getDetails(movie)

    // const movie = { actors: [] }
    // const actorsArray = await movie.$relatedQuery("actors")
    // serializedMovie.actors = actorsArray
    return res.status(200).json({ movie: serializedMovie })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default moviesRouter
