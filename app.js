const express = require('express')
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('msg', (msg_in) => {
        console.log('message: ' + msg_in);
        io.emit('response', {msg:msg_in})
    });
});


http.listen(3000, () => {
    console.log('listening on *:3000');
});