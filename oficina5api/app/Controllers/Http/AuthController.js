"use strict";
const User = use("App/Models/User");

class AuthController {
  async register({ request, auth }) {
    const { username, email, password } = request.all();
    await User.create(request.all());
    const token = await auth.attempt(email, password);
    return token;
  }

  async authenticate({ request, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }
}

module.exports = AuthController;
