import ActorSerializer from "./ActorSerializer.js"

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
}

export default MovieSerializer