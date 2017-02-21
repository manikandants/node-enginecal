'use strict';

exports.responseHandler = function(err, response, body, callback) {
  if (err) {
    console.log(err);
    return callback(err);
  }
  if (response.statusCode !== 200) {
    console.log(response.statusCode);
    return callback(response.statusCode);
  }
  return callback(null, body);
};
