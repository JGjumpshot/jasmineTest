var express = require('express');
var bearerToken = require('express-bearer-token');
var app = express();

// app.use(bearerToken());
// app.use(function (req, res) {
//   res.send('Token '+req.token);
// });
app.listen(8000);
