const Model = require("./Model")

class Actor extends Model {
  static get tableName() {
    return "actors"
  }

  static get relationMappings() {
    const { Movie, Casting } = require("./index.js")

    return {
      movies: {
        modelClass: Movie,
        relation: Model.ManyToManyRelation,
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
        modelClass: Casting, 
        relation: Model.HasManyRelation,
        join: {
          from: "actors.id",
          to: "castings.actorId"
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
