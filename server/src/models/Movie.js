const Model = require("./Model")

class Movie extends Model {
  static get tableName() {
    return "movies"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title"],
      properties: {
        title: { type: "string" }
      }
    }
  }

  static get relationMappings() {
    const Actor = require("./Actor")

    return {
      actors: {
        relation: Model.ManyToManyRelation,
        modelClass: Actor,
        join: {
          from: "movies.id",
          through: {
            from: "castings.movieId",
            to: "castings.actorId"
          },
          to: "actors.id"
        }
      }
    }
  }
}

module.exports = Movie
