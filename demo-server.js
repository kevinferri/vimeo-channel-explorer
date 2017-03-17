const path = require('path');
const express = require('express');

const app = express();
const port = process.env.port || 8080;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '/build/index.html'));
  });

  app.listen(port);
}
