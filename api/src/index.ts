import http, { type Server } from 'node:http';

import app from './app';
import socket from './sockets/app.socket';

const port = process.env.PORT || '5000';
app.set('port', port);

socket();
const server: Server = http.createServer(app);
const env = process.env.NODE_ENV;

server.listen(port, () => {
  console.log(`API running in ${env} mode on localhost:${port}`);
});
