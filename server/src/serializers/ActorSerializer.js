
class ActorSerializer {
    static getSummary(actor){
        let serializedActor = {}
        const allowedAttributes = ["id", "firstName", "lastName"]

        for(const attribute of allowedAttributes){
            serializedActor[attribute] = actor[attribute]
        }

        return serializedActor
    }
}

export default ActorSerializer