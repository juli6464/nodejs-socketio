const express = require("express");
const path = require("path");
const { createServer } = require("http");
const { Server} = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

//este index.js es el servidor

app.use(express.static(path.join(__dirname, "views")));

const socketsOnline = [];

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
});

io.on("connection", socket => {

    socketsOnline.push(socket.id);

    //EMISION BASICA
    socket.emit("welcome", "Ahora estás conectado.");

    socket.on("server", data => {
        console.log(data);
    });

    //emisión a todos
    io.emit("everyone", socket.id + "se ha conectado");

    //emisión a uno solo
    socket.on("last", message => {

        const lastSocket = socketsOnline[socketsOnline.length - 1];
        io.to(lastSocket).emit("salute", message);

    })

    //on
    // socket.emit("on", "hola");
    // socket.emit("on", "hola");

    //once
    // socket.emit("once", "hola");
    // socket.emit("once", "hola");

    //off
    socket.emit("off", "hola");

    setTimeout(() => {
        socket.emit("off", "hola");
    }, 3000);



});

httpServer.listen(3000);