'use strict';

var request = require('request');
var _ = require('lodash');
var utils = require('./utils');

var Enginecal = function(options) {
  options = options || {};
  if (!options.apiKey) {
    return console.error('apiKey is required.');
  }
  this.url = options.url || 'http://ei.enginecal.com/api';
  this.apiKey = options.apiKey;
};

Enginecal.prototype.getReportData = function(payload, callback) {
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

module.exports = Enginecal;