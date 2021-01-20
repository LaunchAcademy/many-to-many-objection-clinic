/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("castings", (table) => {
    table.bigIncrements("id")
    table.bigInteger("actorId").unsigned().notNullable().index().references("actors.id")
    table.bigInteger("movieId").unsigned().notNullable().index().references("movies.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("castings")
}
