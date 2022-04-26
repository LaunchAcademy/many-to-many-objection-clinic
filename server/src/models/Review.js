const Model = require("./Model")

class Review extends Model {
  static get tableName() {
    return "reviews"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "rating"],
      properties: {
        title: { type: "string" },
        content: { type: "string" },
        rating: { type: ["integer", "string"], minimum: 1, maximum: 5 }
      }
    }
  }

  static get relationMappings() {
    const { Movie } = require("./index.js")

    return {
      movie: {
        relation: Model.BelongsToOneRelation,
        modelClass: Movie,
        join: {
          from: "reviews.movieId",
          to: "movies.id"
        }
      }
    }
  }
}

module.exports = Review
