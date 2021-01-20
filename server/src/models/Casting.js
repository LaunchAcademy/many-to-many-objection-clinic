const Model = require("./Model")

class Casting extends Model {
  static get tableName() {
    return "castings"
  }

  static get relationMappings() {
    const Movie = require("./Movie")
    const Actor = require("./Actor")

    return {
      movie: {
        relation: Model.BelongsToOneRelation,
        modelClass: Movie,
        join: {
          from: "castings.movieId",
          to: "movies.id"
        }
      },
      actor: {
        relation: Model.BelongsToOneRelation,
        modelClass: Actor,
        join: {
          from: "castings.actorId",
          to: "actors.id"
        }
      }
    }
  }
}

module.exports = Casting
