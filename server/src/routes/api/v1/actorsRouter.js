import express from "express"
import objection from "objection"
import ActorSerializer from "../../../serializers/ActorSerializer.js"

import { Actor } from "../../../models/index.js"

const actorsRouter = new express.Router()

actorsRouter.get("/", async (req, res) => {
  try {
    const actors = await Actor.query()

    const serializedActors = ActorSerializer.getSummaryForList(actors)

    return res.status(200).json({ actors: serializedActors })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

actorsRouter.get("/:id", async (req, res) => {
  try {

    const actor = await Actor.query().findById(req.params.id)
    const serializedActorAndMovies = await ActorSerializer.getDetailsForShow(actor)

    return res.status(201).json({ actor: serializedActorAndMovies })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error.message })
  }
})

export default actorsRouter
