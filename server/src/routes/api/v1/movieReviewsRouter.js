import express from "express"

import { Review } from "../../../models/index.js"

const movieReviewsRouter = new express.Router({ mergeParams: true })

movieReviewsRouter.post("/", async (req, res) => {
  const { title, content, rating } = req.body
  const { movieId } = req.params

  try {
    const newReview = await Review.query().insertAndFetch({ title, content, rating, movieId })
    return res.status(201).json({ review: newReview })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default movieReviewsRouter
