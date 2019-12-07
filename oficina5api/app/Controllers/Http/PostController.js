"use strict";
const User = use("App/Models/User");
const Post = use("App/Models/Post");

class PostController {
  async index() {
    const posts = await Post.query()
      .with("user")
      .with("comments")
      .orderBy("id", "desc")
      .fetch();
    return posts;
  }

  async comments({ params }) {
    const post = Post.findOrFail(params.id);
    return await post.load("comments");
  }

  async store({ request, auth }) {
    const post = await auth.user.posts().create(request.all());
    const posts = await Post.query()
      .with("user")
      .with("comments")
      .orderBy("id", "desc")
      .fetch();
    return posts;
  }

  async update({ request, params }) {
    const post = await Post.findOrFail(params.id);
    const { title, body } = request.all();
    post.title = title;
    post.body = body;
    await post.save();
    return post;
  }

  async show({ params }) {
    const post = await Post.findOrFail(params.id);
    return response.json(post);
  }

  async destroy({ params }) {
    const post = await Post.findOrFail(params.id);

    return await post.delete();
  }
}

module.exports = PostController;
