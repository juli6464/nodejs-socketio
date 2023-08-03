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

const teachers = io.of("teachers");
const students = io.of("students");

teachers.on("connection", socket => {
    console.log(socket.id + "se ha conectado a la sala de profes");
    
    socket.on("send message", data => {
        teachers.emit("message", data);
    });

});

students.on("connection", socket => {
    console.log(socket.id + "se ha conectado a la sala de estudiantes");

    socket.on("send message", data => {
        students.emit("message", data);
    });
});

httpServer.listen(3000);