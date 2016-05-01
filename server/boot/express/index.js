const express = require('express');
const path = require('path');

module.exports = (app) => {
  app.set('view engine', 'jade');
  app.set('port', 3000);
  app.set('views', path.join(__dirname, './../../views'));
  app.use('/', express.static(path.join(__dirname, './../../../')));
};