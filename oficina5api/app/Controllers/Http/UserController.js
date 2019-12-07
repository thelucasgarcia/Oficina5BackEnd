"use strict";
const User = use("App/Models/User");

class UserController {
  async store({ request }) {
    const data = request.only(["username", "email", "password"]);
    const user = await User.create(data);
    return user;
  }

  async index() {
    return await User.all();
  }

  async posts({ params }) {
    const user = await User.find(params.id);
    await user.loadMany(["albums", "posts", "posts.comments"]);
    return user;
  }
}

module.exports = UserController;
