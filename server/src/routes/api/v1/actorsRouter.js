import express from "express"
import objection from "objection"

import { Actor } from "../../../models/index.js"

const actorsRouter = new express.Router()

actorsRouter.get("/", async (req, res) => {
  try {
    const actors = await Actor.query()
    return res.status(200).json({ actors: actors })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

actorsRouter.get("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const actor = await Actor.query().findById(id)
    actor.movies = await actor.$relatedQuery("movies")
    return res.status(200).json({ actor: actor })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default actorsRouter
