const express = require("express");
const server = express();
const router = require("./users/users-router");
const { logger } = require('./users/users-middleware');

server.use(express.json());

server.get("/", (req,res) => {
    res.send("<h1>Node APP is working</h1>")
})

server.use("/api", logger, router);

module.exports = server;
