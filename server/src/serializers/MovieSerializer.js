import ActorSerializer from "./ActorSerializer.js"

class MovieSerializer {
    static getSummaryForActorShow(arrayOfMovies){
        const requiredAttributes = ["id", "title"]

        const serializedMovies = arrayOfMovies.map((movieObject) => {
            let serializedMovie = {}

            for(const attribute of requiredAttributes) {
                serializedMovie[attribute] = movieObject[attribute]
            }
            return serializedMovie
        })
        return serializedMovies
    }


}

export default MovieSerializer