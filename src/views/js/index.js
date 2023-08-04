//cliente (frontend)
const socket = io();

const send = document.querySelector("#send");
const disconnect = document.querySelector("#disconnect");
const reconnect = document.querySelector("#reconnect");

send.addEventListener("click", () => {

    if(socket.connected)
        socket.emit("is connected", "está conectado");
});

disconnect.addEventListener("click", () => {
    socket.disconnect();
});

reconnect.addEventListener("click", () => {
    socket.connect();
});