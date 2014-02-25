/**
 * Registered DB Models.
 */

module.exports = {
  users:    require('./users'),     // User database.
  articles: require('./articles'),  // Articles with tags and metadata.
  comments: require('./comments'),  // Comment threads.
  sessions: require('./sessions'),  // Current user sessions.
};

