const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const c = require(__dirname + "/config.json");

var users = []
var leaderboard = []
var leaderboardChanged = false

app.use(express.static(__dirname + '/client'));

io.on("connection", function(socket) {
    console.log("A user has connected with the id: " + socket.id + ", " + spcket.handshake.query.type); 
});

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || c.host;
var serverport = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || c.port;
http.listen(serverport, ipaddress, function() {
    console.log("[DEBUG]: Listening on " + ipaddress + ":" + serverport);
});
