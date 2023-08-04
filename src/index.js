const express = require("express");
const path = require("path");
const { createServer } = require("http");
const { Server} = require("socket.io");
const { Socket } = require("dgram");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

//este index.js es el servidor

app.use( express.static(path.join(__dirname, "views")) );

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});


io.on("connection", socket => {

    socket.on("is connected", msg => {
        console.log(msg);
    });

});



httpServer.listen(3000);