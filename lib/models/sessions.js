/**
 * Sessions Model
 */

module.exports = function Sessions (dbo) {
  var sessions = {}; // Private storage of active sessions.

  var uuid = require('node-uuid');

  this.start = function (userId) {
    return sessions[session.id] = {
      id:   uuid.v1(),
      user: userId,
    };
  }

  this.get = function (sid) {
    if (sid in sessions) {
      return sessions[sid];
    }
  }

  this.end = function (sid) {
    delete sessions[sid];
  }

}

