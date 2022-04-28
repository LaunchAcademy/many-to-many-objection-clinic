import ActorSerializer from "./ActorSerializer.js"
import ReviewSerializer from "./ReviewSerializer.js"

class MovieSerializer {
  static getSummary(movie) {
    const allowedAttributes = ["id", "title"]
    const serializedMovie = {}
    for (const attribute of allowedAttributes) {
      serializedMovie[attribute] = movie[attribute]
    }

    return serializedMovie
  }

  static async getSummaryWithActors(movie) {
    const allowedAttributes = ["id", "title"]
    const serializedMovie = {}
    for (const attribute of allowedAttributes) {
      serializedMovie[attribute] = movie[attribute]
    }

    const actors = await movie.$relatedQuery("actors")
    const serializedActors = actors.map((actor) => ActorSerializer.getSummary(actor))
    serializedMovie.actors = serializedActors

    return serializedMovie
  }

  static async getSummaryWithActorsAndReviews(movie) {
    const allowedAttributes = ["id", "title", "releaseYear"]
    const serializedMovie = {}
    for (const attribute of allowedAttributes) {
      serializedMovie[attribute] = movie[attribute]
    }

    const actors = await movie.$relatedQuery("actors")
    const serializedActors = actors.map((actor) => ActorSerializer.getSummary(actor))
    serializedMovie.actors = serializedActors

    const reviews = await movie.$relatedQuery("reviews")
    const serializedReviews = reviews.map((review) => ReviewSerializer.getSummary(review))
    serializedMovie.reviews = serializedReviews

    return serializedMovie
  }
}

export default MovieSerializer