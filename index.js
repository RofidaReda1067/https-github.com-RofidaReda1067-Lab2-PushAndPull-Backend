const express = require("express");
const app = express();
const http = require("http");

const server = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
  },
});

io.on("connection", (socket) => {
  console.log("user is chatting now");
  socket.on("message", (message) => {
    io.emit("newMessage", message);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
