import http from 'http';
import WebSocket, { Data } from 'ws';

const socket = () => {
  const wss = new WebSocket.Server({ port: 8080 });
  wss.on('connection', (socket: WebSocket, request: http.IncomingMessage) => {
    console.log(request.url);
    
    let i: number = 0;
    setInterval(() => {
      socket.send(i++);
    }, 2000);

    socket.on('message', (message: Data) => {
      console.log(message);
    });
  });
};

export default socket;