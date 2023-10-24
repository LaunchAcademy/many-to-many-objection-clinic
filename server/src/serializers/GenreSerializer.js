import MovieSerializer from "./MovieSerializer.js"

class GenreSerializer {
  static getSummary(genre) {
    const allowedAttributes = ["id", "name"]
    const serializedGenre = {}
    for (const attribute of allowedAttributes) {
      serializedGenre[attribute] = genre[attribute]
    }

    return serializedGenre
  }

  static async getSummaryWithMovies(genre) {
    const allowedAttributes = ["id", "name"]
    const serializedGenre = {}
    for (const attribute of allowedAttributes) {
      serializedGenre[attribute] = genre[attribute]
    }

    const movies = await genre.$relatedQuery("movies")
    
    console.log("before promise.all")
    const serializedMovies = await Promise.all(movies.map(async movie => {
      console.log("inside promise.all")
      return await MovieSerializer.getSummaryWithActors(movie)
    }))
    console.log("after promise.all")

    serializedGenre.movies = serializedMovies

    return serializedGenre
  }
}

export default GenreSerializer