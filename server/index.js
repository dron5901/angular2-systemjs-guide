const express = require('express');
const app = express(app);
const http = require('http');

require('./boot')(app);
require('./routes')(app);

http.createServer(app).listen(app.get('port'), () => {
  console.log(`start server on port: ${app.get('port')}`)
});


