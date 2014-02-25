/**
 * FreeAlways Database
 *
 * We're using MongoDB for our backend database engine.
 * Each model has its own MongoDB collection.
 */

module.exports = function DB (conf) {
  var mongojs = require('mongojs');
  this.db = mongojs(conf.db);

  // A list of our default models.
  var models = require('./models');

  // Load our known models.
  // Each gets loaded into a property directly within the DB object.
  for (var mid in models) {
    this[mid] = new models[mid](this);
  }
}

