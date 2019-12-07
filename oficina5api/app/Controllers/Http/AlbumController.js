"use strict";
const Album = use("App/Models/Album");
const User = use("App/Models/User");

class AlbumController {
  async index() {
    return await Album.all();
  }

  async store({ request, auth }) {
    const album = await auth.user.albums().create(request.all());
    return album;
  }

  async update({ request, params }) {
    const album = await User.findOrFail(params.id);
    const { title, body } = request.all();
    album.title = title;
    album.body = body;
    await album.save();
    return album;
  }

  async show({ params }) {
    const user = await user.findOrFail(params.id);
    return response.json(user.albums());
  }

  async destroy({ params }) {
    const album = await album.findOrFail(params.id);

    return await album.delete();
  }
}

module.exports = AlbumController;
