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

const emitToLast = document.querySelector("#emit-to-last");
emitToLast.addEventListener("click", () => {
    socket.emit("last", "hola ")
});

socket.on("salute", message => {
    console.log(message);
});

//on se emite varias veces
socket.on("on", () => {
    console.log("se emite varias veces");
});

//once se emite una vez
socket.once("once", () => {
    console.log("se emite una sola vez");
});

//funcion anonima que paso al off
const listener = () => {
    console.log("se apaga el evento");
}

socket.on("off", listener);

setTimeout(() => {
    socket.off("off", listener);
}, 2000);
