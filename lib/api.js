/**
 * FreeAlways REST API
 */

module.exports = function API (conf) {

  // Some common settings.
  var version = this.version = "1.0.0";
  var appname = this.appname = "FreeAlwaysAPI";

  // Load restify and create a server.
  var restify = this.restify = require('restify');
  var server  = this.rest    = restify.createServer({
    name:    appname,
    version: version,
  });

  // Set up the default set of restify plugins.
  server.use(restify.queryParser());
  server.use(restify.bodyParser());
  server.use(restify.dateParser());

  // Store our DB object for use in controllers.
  this.db = conf.db;

  // A list of our controllers.
  var controllers = require('./controllers');

  // Storage space for loaded controllers.
  this.controllers = {};
  
  // Now, let's load our controllers.
  // They will be loaded into the 'controllers' object.
  for (var mid in controllers) {
    this.controllers[mid] = new controllers[mid](this);
  }

  // A reference to ourself.
  var self = this;

  // A built-in method for starting the service.
  this.start = function (listen, onStart) {
    var ltype = typeof listen;
    if (ltype == "number" || ltype == "string") { 
      // A port, or a string.
      self.rest.listen(listen, onStart);
    }
    else if (ltype == "object") { 
      // We expect an array of listen parameters.
      listen.push(onStart);
      self.rest.listen.apply(self.rest, listen);
    }
    else {
      throw "Invalid listen statement";
    }
  }
}

