/**
 * User management
 */

module.exports = function Manage_Users (api) {

  var rst  = api.restify;
  var errs = {
    invalid_sess: new rst.InvalidArgumentError("Invalid session id"),
    unauthorized: new rst.NotAuthorizedError("You are not authorized"),
  };

  // TODO: add handler functions.

  var base_path_v1 = '/:sid/users';
  var user_path_v1 = base_path_v1 + '/:uid';

  var ver1 = '1.0.0';

  // TODO: add REST mappings.

}
