import mongoose from "mongoose";

const TweetSchema = mongoose.Schema({
  author: String,
  content: String,
  likes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Tweet", TweetSchema);
