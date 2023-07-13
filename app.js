/*eslint-env node, express*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com


var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

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

  if (user.name == 'ibmzuser' && user.pass == 'ibmzuser' || user.name == 'beta-user' && user.pass == 'zos-containers-beta') {
    return next();
  } else {
    return unauthorized(res);
  };
};

// create a new express server
var app = express();


// comment out the following app.get middleware to remove the authentication
// yes, this is ugly, no i don't have a better way to do it!

/*
app.get('/support/z-content-solutions/system-recovery-boost/index1.html', auth);
*/

/* 
app.get('/support/z-content-solutions/validated-boot-for-zos/', auth) 
*/


app.get('/support/z-content-solutions/open-data-analytics-draft/', auth)
app.get('/support/z-content-solutions/zos-containers/', auth)
app.get('/support/z-content-solutions/eznosql-test/', auth)
app.get('/docs/javadoc-1-0-0-preGA.zip', auth)

app.get('/support/z-content-solutions/hyper-protect-data-controller/', (req, res) => {
  res.status(301).redirect('https://www.ibm.com/docs/en/hpdc');
});
app.get('/support/z-content-solutions/hyper-protect-virtual-servers/', (req, res) => {
  res.status(301).redirect('https://www.ibm.com/docs/en/hpvs/2.1.x');
});
// sunset journey to hybrid cloud 04032023, redirect to mod stack
app.get('/support/z-content-solutions/journey-to-hybrid-cloud-z/', (req, res) => {
  res.status(301).redirect('/support/z-content-solutions/z-and-cloud-modernization-stack/');
});
// redirect for cloud broker as a child page of mod stack
app.get('/support/z-content-solutions/cloud-broker/', (req, res) => {
  res.status(301).redirect('/support/z-content-solutions/z-and-cloud-modernization-stack/cloud-broker/');
});
// end app.get authentication middleware

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
  
});