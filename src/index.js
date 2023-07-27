const express = require("express");
const path = require("path");
const { createServer } = require("http");
const { Server} = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

//este index.js es el servidor

app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
});

io.on("connection", socket => {

    //EMISION BASICA
    socket.emit("welcome", "Ahora estás conectado.");

    socket.on("server", data => {
        console.log(data);
    });

    //emisión a todos
    io.emit("everyone", socket.id + "se ha conectado");

});

httpServer.listen(3000);