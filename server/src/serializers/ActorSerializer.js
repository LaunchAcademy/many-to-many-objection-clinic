
// import MovieSerializer from "./MovieSerializer.js"

class ActorSerializer {
    static getSummaryForList(arrayOfActors){
        // designate what are the required/whitelisted fields
        const requiredFields = ["id", "firstName", "lastName"]

        const serializedActors = arrayOfActors.map((originalActorObject) => {
            let serializedActor = {}
            for(const field of requiredFields) {
                serializedActor[field] = originalActorObject[field]
            }
            return serializedActor
        })
        return serializedActors
    }

    static async getDetailsForShow(actorObject){

        const whitelistedAttributes = ["firstName", "lastName"]
        let serializedActor = {}
        whitelistedAttributes.forEach((attributeString) => {
            serializedActor[attributeString] = actorObject[attributeString]
        })

        const movies = await actorObject.$relatedQuery("movies")
        serializedActor.movies = MovieSerializer.getSummaryForActorShow(movies)

        return serializedActor
    }
}

export default ActorSerializer