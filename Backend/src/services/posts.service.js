const Post = require("../models/post.model");

const getAllPosts = async (page, limit) => {
  const skip = (page - 1) * limit;

  return await Post.find()
    .populate("author")
    .limit(limit)
    .skip(skip);
};

const getPostById = async (id) => {
  return await Post.findById(id).populate("author");
};

const createPost = async (data) => {
  return await Post.create(data);
};

const updatePost = async (id, data) => {
  return await Post.findByIdAndUpdate(id, data, { new: true });
};

const deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};