/**
 * Article management.
 */

module.exports = function Content (api) {

  var rst  = api.restify;
  var errs = {
    invalid_sess: new rst.InvalidArgumentError("Invalid session id"),
    unauthorized: new rst.NotAuthorizedError("You are not authorized"),
  };

  // TODO: add handler functions.

  var base_path_v1 = '/:sid/article';
  var edit_path_v1 = base_path_v1 + '/:aid';

  var ver1 = '1.0.0';

  // TODO: add REST mappings.

}
