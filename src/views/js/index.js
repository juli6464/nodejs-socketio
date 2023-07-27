const socket = io();

//status connected true or false
function checkSocketStatus() {
    console.log("estado del socket", socket.connected);
}

//socket connected true or false

socket.on("connect", () => {
    console.log("el socket se ha conectado: ", socket.id);
    checkSocketStatus();
});

//reconnection error
socket.on("connect_error", () => {
    console.log("no pude conectarme");
}); 

//socket disconnected
socket.on("disconnect", () => {
    console.log("el socket se ha desconectado: ", socket.id);
    checkSocketStatus();

});

//reconnect attempt
socket.io.on("reconnect_attempt", () => {
    console.log("estoy intentando reconectarme ");

});

//listen event  reconect
socket.io.on("reconnect", () => {
    console.log("me he vuelto a conectar");

})