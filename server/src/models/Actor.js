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
    const Movie = require("./Movie.js")
    const Casting = require("./Casting.js")

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
      },
      castings: {
        relation: Model.HasManyRelation,
        modelClass: Casting,
        join: {
          from: "actors.id",
          to: "castings.actorId"
        }
      }
    }
  }
}

module.exports = Actor
