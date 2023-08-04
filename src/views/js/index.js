const socket = io({
    auth: {
        token: "Gato"
    }
});

// en caso de error el middleware
socket.on("connect_error", err => {

    console.log("error de conexión");
    console.log(err.message);
    console.log(err.data.details);

});