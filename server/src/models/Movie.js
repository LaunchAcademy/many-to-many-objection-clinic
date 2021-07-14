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

  static get relationMappings(){
    const { Actor } = require("./index.js")
    const { Casting } = require("./index.js")
    // const Casting = require("./Casting")

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
}

module.exports = Movie
