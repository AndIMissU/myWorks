const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
var appData = require('./data.json');

var apiRoutes = express.Router();

app.use('/api', apiRoutes);
app.get('/api', function(req, res) {
  res.send('jsjskkak');
});
app.listen(8082);