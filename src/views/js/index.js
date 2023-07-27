const socket = io();

//cliente index.js

socket.on("welcome", data => {
    text.textContent = data;
})

const emitToServer = document.querySelector("#emit-to-server");
emitToServer.addEventListener("click", () => {
    socket.emit("server", "hola servidor");
});

//recibe conexion a todos los clientes conectados
socket.on("everyone", message => {
    console.log(message);
});