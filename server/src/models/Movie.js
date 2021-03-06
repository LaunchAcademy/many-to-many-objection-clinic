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
}

module.exports = Movie
