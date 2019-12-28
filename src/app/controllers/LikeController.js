import Tweet from "../models/Tweet";

class LikeController {
  async store(req, res) {
    const { id } = req.params;

    const tweet = await Tweet.findById(id);

    tweet.set({ likes: tweet.likes + 1 });

    tweet.save();

    req.io.emit("Like", tweet);

    return res.json(tweet);
  }
}

export default new LikeController();
