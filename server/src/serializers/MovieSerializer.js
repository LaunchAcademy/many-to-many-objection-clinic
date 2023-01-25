import ActorSerializer from "./ActorSerializer.js"

class MovieSerializer {
    static getSummary(movieRecord){
        // { id: 4, title: "Everything Everywhere All At Once", createdAt: "123213", updatedAt: "12323234"}
        
        let serializedMovie = {}

        const attributesThatIWant = ["id", "title"]

        for (const attributeString of attributesThatIWant) {
            serializedMovie[attributeString] = movieRecord[attributeString]
        }

        return serializedMovie 
        // { id: 4, title: "Everything Everywhere All At Once" }
    }

    static async getInfoForShow(movieRecord){
        // const serializedMovie = this.getSummary(movieRecord)

        let serializedMovie = {}
        const allowedAttributes = ["id", "title"]

        for(const attribute of allowedAttributes){
            serializedMovie[attribute] = movieRecord[attribute]
        }

        const actors = await movieRecord.$relatedQuery("actors")

        const serializedActors = actors.map(actor => {
            return ActorSerializer.getSummary(actor)
        })

        serializedMovie.actors = serializedActors

        return serializedMovie
    }


}

export default MovieSerializer