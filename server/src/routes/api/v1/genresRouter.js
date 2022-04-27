import express from "express"
import objection from "objection"

import { Genre } from "../../../models/index.js"

import GenreSerializer from "../../../../serializers/genreSerializer.js"

const genresRouter = new express.Router()

genresRouter.get("/", async (req, res) => {
  try {
    const genres = await Genre.query()
    const serializedGenres = genres.map(genre => GenreSerializer.getSummary(genre))
    return res.status(200).json({ genres: serializedGenres })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

genresRouter.get("/:id", async (req, res) => {
  try {
    const genre = await Genre.query().findById(req.params.id)
    const serializedGenre = await GenreSerializer.getSummaryWithMovies(genre)

    return res.status(200).json({ genre: serializedGenre })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

export default genresRouter
