/**
 * Registered API Controllers.
 */

module.exports = {
  current_user:   require('./current_user'),   // Authentication and metadata.
  manage_users:   require('./manage_users'),   // Administration.
  feed:           require('./feed'),           // Article listings.
  content:        require('./content'),        // Article management.
  read_comments:  require('./read_comments'),  // Comment listing.
  post_comments:  require('./post_comments'),  // Comment posting.
};

