const Model = require("./Model")

class Movie extends Model {
  static get tableName() {
    return "movies"
  }

  static get relationMappings() {
    const { Casting, Actor } = require("./index")
    // movie.$relatedQuery("castings")
    return {
      castings: {
        relation: Model.HasManyRelation,
        modelClass: Casting,
        join: {
          from: "movies.id",
          to: "castings.movieId"
        }
      },
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

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title"],
      properties: {
        title: { type: "string" }
      }
    }
  }
}

module.exports = Movie
