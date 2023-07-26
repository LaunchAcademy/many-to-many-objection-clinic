import express from "express"
import objection from "objection"

import { Actor } from "../../../models/index.js"
import ActorSerializer from "../../../serializers/ActorSerializer.js"

const actorsRouter = new express.Router()

actorsRouter.get("/", async (req, res) => {
  try {

    const actors = await Actor.query()

    actors.map(actor => {
      return ActorSerializer.getDetailsForShow(actor)
    })

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

    const serializedActor = await ActorSerializer.getDetailsForShow(actor)
    // actor.movies = await actor.$relatedQuery("movies")

    return res.status(201).json({ actor: serializedActor })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error.message })
  }
})

export default actorsRouter
