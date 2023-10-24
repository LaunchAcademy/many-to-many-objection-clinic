class MovieSerializer {
  // method to serialize an array of movies
  static getList(movies) {
    console.log(movies)
    const allowedAttributes = ["id", "title"]
    
    const serializedMovies = movies.map((movie) => {
      console.log(movie)

      const serializedMovie = {}
      for (const attribute of allowedAttributes) {
        serializedMovie[attribute] = movie[attribute]
      }
      console.log(serializedMovie)

      return serializedMovie
    })

    console.log(serializedMovies)

    return serializedMovies
  }

  // method to serialize one single movie
  static async getDetails(movie) {
    console.log(movie)
    const allowedAttributes = ["id", "title", "releaseYear", "genreId"]
    const serializedMovie = {}

    for (const attribute of allowedAttributes) {
      console.log(attribute)
      console.log(movie[attribute])
      // movie.id
      // movie.attribute
      serializedMovie[attribute] = movie[attribute]
    }

    console.log(serializedMovie)

    const actorsArray = await movie.$relatedQuery("actors")
    serializedMovie.actors = actorsArray


    return serializedMovie
  }
}

export default MovieSerializer