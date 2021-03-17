const express = require("express");
const path = require("path")
const app = express()
const server = require("http").createServer(app);
const io = require("socket.io")(server)

app.use(express.static(path.join(__dirname + "/public")))

io.on("connection", socket => {
    // console.log("User is connected");
    socket.on("chat", message => {
        // console.log("From client", message);
        io.emit("chat", message)
    })
})

server.listen(3000, function() {
    console.log("Engine Started!");
});