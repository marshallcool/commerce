'use strict';

const config = require('config');
const crypto = require('crypto');

function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand     = Math.round(rand);
  return rand;
}

function oid(str) {
  return crypto
    .createHash('md5')
    .update(str)
    .digest('hex')
    .substring(0, 24);
}

function* loadFixtures() {

  let fixtures = ['users', 'categories', 'accounts', 'transactions'];

  fixtures = fixtures.map(f => {
    return {
      load: require(`${config.server.fixtures}/${f}`).load,
      name: f
    };
  }).filter(Boolean);

  for (let fixture of fixtures) {
    yield* fixture.load();
  }

}

exports.randomInteger = randomInteger;
exports.loadFixtures = loadFixtures;
exports.oid = oid;
