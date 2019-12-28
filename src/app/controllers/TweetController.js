import Tweet from "../models/Tweet";

class TweetController {
  async index(req, res) {
    const tweets = await Tweet.find({}).sort("-createdAt");

    return res.json(tweets);
  }

  async store(req, res) {
    const tweet = await Tweet.create(req.body);

    req.io.emit("Tweet", tweet);

    return res.json(tweet);
  }
}

export default new TweetController();
