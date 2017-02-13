'use strict';

const Aigle = require('aigle');
const Bluebird = require('bluebird');

module.exports = {
  Aigle,
  Bluebird,
  resolveAigle,
  resolveBluebird,
  mapAigle,
  mapBluebird
}

function resolveAigle(value) {
  return new Aigle(resolve => setImmediate(() => resolve(value)));
}

function resolveBluebird(value) {
  return new Bluebird(resolve => setImmediate(() => resolve(value)));
}

function mapAigle(array, iterator) {
  return Aigle.map(array, iterator);
}

function mapBluebird(array, iterator) {
  return Bluebird.map(array, iterator);
}
