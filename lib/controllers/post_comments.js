/**
 * Post Comments
 */

module.exports = function Post_Comments (api) {

  var rst  = api.restify;
  var errs = {
    invalid_sess: new rst.InvalidArgumentError("Invalid session id"),
    unauthorized: new rst.NotAuthorizedError("You are not authorized"),
  };

  // TODO: add handler functions.

  var base_path_v1 = '/:sid/comments/:aid';
  var edit_path_v1 = base_path_v1 + '/:cid';

  var ver1 = '1.0.0';

  // TODO: add REST mappings.

}
