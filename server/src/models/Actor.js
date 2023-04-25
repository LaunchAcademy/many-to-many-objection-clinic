const Model = require("./Model")

class Actor extends Model {
  static get tableName() {
    return "actors"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["firstName", "lastName"],
      properties: {
        firstName: { type: "string" },
        lastName: { type: "string" }
      }
    }
  }

  static get relationMappings() {
    const { Movie } = require("./index.js")

    return {
      movies: {
        relation: Model.ManyToManyRelation,
        modelClass: Movie,
        join: {
          from: "actors.id",
          through: {
            from: "castings.actorId",
            to: "castings.movieId"
          },
          to: "movies.id"
        }
      }
    }
  }
}

module.exports = Actor
