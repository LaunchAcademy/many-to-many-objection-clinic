class ActorSerializer {
  static getSummary(actor) {
    const allowedAttributes = ["id", "firstName", "lastName"]
    const serializedActor = {}
    for (const attribute of allowedAttributes) {
      serializedActor[attribute] = actor[attribute]
    }

    return serializedActor
  }
}

export default ActorSerializer