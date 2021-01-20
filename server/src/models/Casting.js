const Model = require("./Model")

class Casting extends Model {
  static get tableName() {
    return "castings"
  }
}

module.exports = Casting
