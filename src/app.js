import express from "express";
import http from "http";
import socket from "socket.io";
import cors from "cors";

import routes from "./routes";

import "./database";

class App {
  constructor() {
    this.app = express();
    this.server = http.Server(this.app);
    this.io = socket(this.server);

    this.middlewares();
    this.routes();
    this.instanceWebSocket();
  }

  instanceWebSocket() {
    this.io.on("connection", client => {
      console.log("usuario conectado", client.id);
    });
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());

    this.app.use((req, res, next) => {
      req.io = this.io;

      next();
    });
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().server;
