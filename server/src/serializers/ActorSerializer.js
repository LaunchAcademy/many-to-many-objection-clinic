import MovieSerializer from "./MovieSerializer.js"

class ActorSerializer {
  static getSummary(actor) {
    const allowedAttributes = ["id", "firstName", "lastName"]
    const serializedActor = {}
    for (const attribute of allowedAttributes) {
      serializedActor[attribute] = actor[attribute]
    }

    return serializedActor
  }

  static async getSummaryWithMovies(actor) {
    const allowedAttributes = ["id", "firstName", "lastName"]
    const serializedActor = {}
    for (const attribute of allowedAttributes) {
      serializedActor[attribute] = actor[attribute]
    }

    const movies = await actor.$relatedQuery("movies")
    const serializedMovies = movies.map((movie) => {
      return MovieSerializer.getSummary(movie)
    })
    
    serializedActor.movies = serializedMovies

    return serializedActor
  }
}

export default ActorSerializer
