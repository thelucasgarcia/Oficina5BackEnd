"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CommentSchema extends Schema {
  up() {
    this.create("comments", table => {
      table.increments();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.text("body").notNullable();

      table.integer("post_id").unsigned();

      table
        .foreign("post_id")
        .references("posts.id")
        .onDelete("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("comments");
  }
}

module.exports = CommentSchema;
