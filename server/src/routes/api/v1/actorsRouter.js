import express from "express"
import objection from "objection"

import { Actor } from "../../../models/index.js"

import ActorSerializer from "../../../serializers/ActorSerializer.js"

const actorsRouter = new express.Router()

actorsRouter.get("/", async (req, res) => {
  try {
    const actors = await Actor.query()
    const serializedActors = actors.map(actor => ActorSerializer.getSummary(actor))
    return res.status(200).json({ actors: serializedActors })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

actorsRouter.get("/:id", async (req, res) => {
  try {
    const actor = await Actor.query().findById(req.params.id)
    const serializedActor = await ActorSerializer.getSummaryWithMovies(actor)
    return res.status(200).json({ actor: serializedActor })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default actorsRouter
