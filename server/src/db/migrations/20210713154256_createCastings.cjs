/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("castings", (table) => {
    table.bigIncrements("id")
    table.string("awards")
    table.bigInteger("actorId").unsigned().notNullable().references("actors.id").index()
    table.bigInteger("movieId").unsigned().notNullable().references("movies.id").index()
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("castings")
};
