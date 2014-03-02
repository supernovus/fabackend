/**
 * Article Feed
 */

module.exports = function Feed (api) {

  /*
  var rst  = api.restify;
  var errs = {
    invalid_sess: new rst.InvalidArgumentError("Invalid session id"),
  };
  */ 

  // TODO: add handler functions.

  var base_path_v1 = '/articles/:page';
  var tag_path_v1  = '/articles/tag/:tagname/:page';
  var user_path_v1 = '/articles/user/:username/:page';

  var ver1 = '1.0.0';

  // TODO: add REST mappings.

}
