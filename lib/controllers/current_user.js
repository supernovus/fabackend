/**
 * Authentication and User metadata controller
 */

module.exports = function Current_User (api) {

  var rst  = api.restify;
  var errs = {
    invalid_sess: new rst.InvalidArgumentError("Invalid session id"),
  };

  // User login.
  var login_v1 = function (req, res, next) {
    // TODO: implement this for real.
    res.send(200, {hello:req.params.name});
    return next();
  }
  
  // User logout.
  var logout_v1 = function (req, res, next) {
    api.db.sessions.end(req.params.sid);
    res.send(200);
    return next();
  }

  // Get user data.
  var get_data_v1 = function (req, res, next) {
    var session = api.db.sessions.get(req.params.sid);
    if (session) {
      var uid = session.user;
      api.db.users.getUserData(
        uid,              // User id
        function (data) { // Success handler
          res.send(200, data);
          return next();
        },
        function (err)  { // Failure handler
          return next(err);
        }
      );
    }
    else {
      return next(errs.invalid_sess);
    }
  }

  // Update user data.
  var update_data_v1 = function (req, res, next) {
    var session = api.db.sessions.get(req.params.sid);
    if (session) {
      var newdata = req.params.newData;
      var uid = session.user;
      api.db.users.updateUserData(
        uid,       // user id 
        newdata,   // data to update
        function (data) {
          res.send(200, data);
          return next();
        },
        function (err) {
          return next(err);
        }
      );
    }
    else {
      return next(errs.invalid_sess);
    }
  }

  // Change login token.
  var update_token_v1 = function (req, res, next) {
    // TODO: implement me.
  }

  var login_path_v1 = '/user';
  var user_path_v1  = '/user/:sid';
  var token_path_v1 = user_path_v1 + '/token';

  var ver1 = '1.0.0';

  api.rest.put(  {path: login_path_v1,  version: ver1}, login_v1);
  api.rest.del(  {path: user_path_v1,   version: ver1}, logout_v1);
  api.rest.get(  {path: user_path_v1,   version: ver1}, get_data_v1);
  api.rest.post( {path: user_path_v1,   version: ver1}, update_data_v1);
  api.rest.post( {path: token_path_v1,  version: ver1}, update_token_v1);

}
