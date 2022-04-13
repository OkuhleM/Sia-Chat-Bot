var WebSocketServer = require('websocket').server;
var http = require('http');


let server = http.createServer((req, res) => {
    console.log((new Date()) + ' Recieved request for ' + req.url);

    res.writeHead(404);
    res.end()
});
server.listen(8080, () => {
    console.log((new Date()) + 'Sever is running on 8080');
});

WebSocketServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

// const originIsAllowed = (origin) => {

//     return true
// }

WebSocketServer.on('req',(req)=>{
    if(!originIsAllowed(req.origin)){
        req.reject();
        console.log((new Date()) + 'Connection from origin ' + req.origin + 'rejected.');
    return;
}
})

let connection = req.accept('echo-protocol',req.origin);
console.log((new Date()) + 'Connection accepted');
connection.on('message', (message)=>{
    if(message.type === 'utf8')
})