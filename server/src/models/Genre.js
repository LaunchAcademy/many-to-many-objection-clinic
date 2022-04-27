const Model = require("./Model")

class Genre extends Model {
  static get tableName() {
    return "genres"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      }
    }
  }

  static get relationMappings() {
    const { Movie } = require("./index.js")

    return {
      movies: {
        relation: Model.HasManyRelation,
        modelClass: Movie,
        join: {
          from: "genres.id",
          to: "movies.genreId"
        }
      }
    }
  }
}

module.exports = Genre
