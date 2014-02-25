/** 
 * We load our configuration file, and get the database connection string,
 * and server listen directive from it. If it does not exist, or is unreadable
 * we will throw an error. The configuration file must be in JSON format.
 */

var fs = require('fs');
var config_file = './conf/server.conf';

fs.readFile(config_file, function (err, config_text) {

  if (err) throw err;                     // Something bad happened.

  var DB  = require('./lib/db');          // The underlying database models.
  var API = require('./lib/api');         // The REST API controllers.

  var config = JSON.parse(config_text);   // Parse the configuration.

  var db  = new DB({db: config.db});      // Load the database.
  var api = new API({db: db});            // Load the REST API.

  var onReady = function () {
    console.log("%s listening at %s ", api.rest.name, api.rest.url);
  }

  api.start(config.listen, onReady);      // Start the application.

});

