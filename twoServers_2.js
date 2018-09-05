var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

const server1 = http.createServer(function (request, response) {
    response.end("It Works!! Path Hit: " + request.url + "  Everything you touch turns to gold!");
});
const server2 = http.createServer(function (request, response) {
    response.end("It Works!! Path Hit: " + request.url + "  You are only a failure at the important things...");
});

server1.listen(PORT1, function () {
    console.log("Server1 listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function () {
    console.log("Server2 listening on: http://localhost:" + PORT2);
});
