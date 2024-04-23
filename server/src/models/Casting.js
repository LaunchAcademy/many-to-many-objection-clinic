const Model = require("./Model")

class Casting extends Model {
  static get tableName() {
    return "castings"
  }

  static get relationMappings() {
    const { Actor, Movie } = require("./index.js")

    return {
      movie: {
        modelClass: Movie, 
        relation: Model.BelongsToOneRelation,
        join: {
          from: "castings.movieId",
          to: "movies.id"
        }
      },
      actor: {
        modelClass: Actor, 
        relation: Model.BelongsToOneRelation,
        join: {
          from: "castings.actorId",
          to: "actors.id"
        }
      }
    }
  }
}

module.exports = Casting
