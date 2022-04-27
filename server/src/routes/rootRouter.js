import express from "express"
import clientRouter from "./clientRouter.js"
const rootRouter = new express.Router()

import moviesRouter from "./api/v1/moviesRouter.js"
import actorsRouter from "./api/v1/actorsRouter.js"
import genresRouter from "./api/v1/genresRouter.js"

rootRouter.use("/api/v1/movies", moviesRouter)
rootRouter.use("/api/v1/actors", actorsRouter)
rootRouter.use("/api/v1/genres", genresRouter)
rootRouter.use("/", clientRouter)

export default rootRouter
