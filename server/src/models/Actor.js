const Model = require("./Model")

class Actor extends Model {
  static get tableName() {
    return "actors"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["firstName", "lastName"],
      properties: {
        firstName: { type: "string" },
        lastName: { type: "string" }
      }
    }
  }
}

module.exports = Actor
