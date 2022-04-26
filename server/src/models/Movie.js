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

  static get relationMappings() {
    const { Actor, Casting, Review } = require("./index.js")

    return {
      actors: {
        relation: Model.ManyToManyRelation,
        modelClass: Actor,
        join: {
          from: "movies.id",
          through: {
            from: "castings.movieId",
            to: "castings.actorId",
          },
          to: "actors.id"
        }
      },
      castings: {
        relation: Model.HasManyRelation,
        modelClass: Casting,
        join: {
          from: "movies.id",
          to: "castings.movieId"
        }
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: "movies.id",
          to: "reviews.movieId"
        }
      }
    }
  }
}

module.exports = Movie
