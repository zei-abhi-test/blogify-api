const postService = require("../services/posts.service");

const getPosts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  const posts = await postService.getAllPosts(Number(page), Number(limit));
  res.json(posts);
};

const getPost = async (req, res) => {
  const post = await postService.getPostById(req.params.id);

  if (!post) return res.status(404).json({ message: "Post not found" });

  res.json(post);
};

const createPost = async (req, res) => {
  const post = await postService.createPost(req.body);
  res.status(201).json(post);
};

const updatePost = async (req, res) => {
  const post = await postService.updatePost(req.params.id, req.body);

  if (!post) return res.status(404).json({ message: "Post not found" });

  res.json(post);
};

const deletePost = async (req, res) => {
  const post = await postService.deletePost(req.params.id);

  if (!post) return res.status(404).json({ message: "Post not found" });

  res.json({ message: "Post deleted" });
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
};