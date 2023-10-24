const Model = require("./Model")

class Actor extends Model {
  static get tableName() {
    return "actors"
  }

  static get relationMappings() {
    const { Casting, Movie } = require("./index")

    return {
      castings: {
        relation: Model.HasManyRelation,
        modelClass: Casting,
        join: {
          from: "actors.id",
          to: "castings.actorId"
        }
      },
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
}

module.exports = Actor
