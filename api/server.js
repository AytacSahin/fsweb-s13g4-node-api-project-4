const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req,res) => {
    res.send("<h1>Node APP is working</h1>")
})

module.exports = server;
