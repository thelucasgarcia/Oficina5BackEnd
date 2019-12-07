"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AlbumSchema extends Schema {
  up() {
    this.create("albums", table => {
      table.increments();

      table.string("title").notNullable();

      table.integer("user_id").unsigned();

      table
        .foreign("user_id")
        .references("users.id")
        .onDelete("cascade");

      table.timestamps();
    });
  }

  down() {
    this.drop("albums");
  }
}

module.exports = AlbumSchema;
