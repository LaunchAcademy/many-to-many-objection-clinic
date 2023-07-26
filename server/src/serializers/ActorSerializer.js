class ActorSerializer {
    static getSummaryForList(arrayOfActors){

        const requiredFields = ["id", "firstName", "lastName"]

        const serializedActors = arrayOfActors.map(actorObject => {
            const serializedActor = {}

            for (let field of requiredFields) {
                serializedActor[field] = actorObject[field]
            }

            return serializedActor
        })

        return serializedActors
    }

    static async getDetailsForShow(actor){

        const whiteListedFields = ["id", "firstName", "lastName"]
        const serializedActor = {}

        whiteListedFields.forEach((field) => {
            serializedActor[field] = actor[field]
        })

        serializedActor.movies = await actor.$relatedQuery("movies")


        return serializedActor
    }
}

export default ActorSerializer