/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("movies", (table)=> {
    table.bigIncrements("id")
    table.string("title").notNullable()
    table.integer("releaseYear").notNullable()
    table.bigInteger("genreId").unsigned().notNullable().index().references("genres.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("movies")
};
