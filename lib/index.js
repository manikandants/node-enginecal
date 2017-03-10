'use strict';

var CarIntell = require('./carintell');
var CarNet = require('./carnet');
var EngineInsight = require('./engineinsight');
var EVA = require('./eva');

var urls = {
  carintell: 'http://carintell.enginecal.com/api',
  carnet: 'http://carnet.enginecal.com/api',
  engineinsight: 'http://ei.enginecal.com/api',
  eva: 'http://eva.enginecal.com/api'
};

module.exports = function(options) {
  var Enginecal = function() {};
  options = options || {};
  if (!options.apiKey) {
    return console.error('apiKey is required.');
  }
  this.urls = options.urls || urls;
  this.apiKey = options.apiKey;
  Enginecal.CarNet = new CarNet(options);
  Enginecal.CarIntell = new CarIntell(options);
  Enginecal.EngineInsight = new EngineInsight(options);
  Enginecal.EVA = new EVA(options);
  return Enginecal;
};
