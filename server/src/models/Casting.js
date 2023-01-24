const Model = require("./Model")

class Casting extends Model {
  static get tableName() {
    return "castings"
  }

  static get relationMappings() {
    const { Actor, Movie } = require("./index")

    return {
      actor: {
        relation: Model.BelongsToOneRelation,
        modelClass: Actor,
        join: {
          from: "castings.actorId",
          to: "actors.id"
        }
      },
      movie: {
        relation: Model.BelongsToOneRelation,
        modelClass: Movie,
        join: {
          from: "castings.movieId",
          to: "movies.id"
        }
      }
    }
  }
}

module.exports = Casting
