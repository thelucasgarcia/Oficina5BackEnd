"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.post("/register", "AuthController.register");
Route.post("/authenticate", "AuthController.authenticate");

Route.get("/users", "UserController.index");
Route.get("/user/:id/posts", "UserController.posts");

Route.get("/posts", "PostController.index");
Route.get("/posts/:id", "PostController.show");
Route.get("/posts/:id/comments", "CommentController.index");
Route.get("/users/:id/albums", "AlbumController.index");

Route.group(() => {
  Route.resource("/posts", "PostController");
  Route.resource("/albums", "AlbumController");
}).middleware("auth");
