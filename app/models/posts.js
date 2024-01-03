import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const PostModel = mongoose.models.post || mongoose.model("post", postSchema); // checking if model already exists

export default PostModel;
