import { Router } from "express";
import path from "path";

import TweetController from "./app/controllers/TweetController";
import LikeController from "./app/controllers/LikeController";

const routes = new Router();

routes.get("/io", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

routes.get("/tweets", TweetController.index);
routes.post("/tweets", TweetController.store);

routes.post("/likes/:id", LikeController.store);
routes.post("/likes/:id/undo", LikeController.update);

export default routes;
