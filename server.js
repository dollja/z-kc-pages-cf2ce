const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')
const path = require('path')

// Middleware
const apiRoutes = require('./middleware/api.js')

// Bodyparser
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

// Routing
app.use('/api', apiRoutes)

app.listen(port, () => console.log(`Server listening on port ${port}`))

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname +'/hot-topics-backend/public'));

// basic-auth sets credentials for the site
// see: https://github.com/jshttp/basic-auth
var basicAuth = require('basic-auth');

var auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  };

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name == 'ibmzuser' && user.pass == 'ibmzuser') {
    return next();
  } else {
    return unauthorized(res);
  };
};

// comment out the following app.get middleware to remove the authentication
// yes, this is ugly, no i don't have a better way to do it!
/*
app.get('/support/z-content-solutions/system-recovery-boost/index1.html', auth);
*/
// end app.get authentication middleware

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});