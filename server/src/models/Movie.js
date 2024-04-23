const Model = require("./Model")

class Movie extends Model {
  static get tableName() {
    return "movies"
  }

  static get relationMappings() {
    const { Actor, Casting } = require("./index.js")

    return {
      actors: {
        modelClass: Actor,
        relation: Model.ManyToManyRelation,
        join: {
          from: "movies.id",
          through: {
            from: "castings.movieId",
            to: "castings.actorId"
          },
          to: "actors.id"
        }
      },
      castings: {
        modelClass: Casting, 
        relation: Model.HasManyRelation,
        join: {
          from: "movies.id",
          to: "castings.movieId"
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
