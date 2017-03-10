'use strict';

var _ = require('lodash');
var request = require('request');
var utils = require('./utils');

var EngineInsight = function(options) {
  this.url = options.urls.engineinsight;
  this.apiKey = options.apiKey;
};

EngineInsight.prototype.getReportData = function(payload, callback) {
  var data = _.extend({
    apiKey: this.apiKey
  }, payload);
  request({
      method: 'GET',
      url: this.url + '/reportData',
      headers: {
        Authorization: this.token
      },
      qs: {
        data: JSON.stringify(data)
      },
      json: true
    }, function(err, response, body) {
      utils.responseHandler(err, response, body, callback);
  });
};

module.exports = EngineInsight;
