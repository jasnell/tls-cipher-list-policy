'use strict';

const constants = require('constants');
const tls = require('tls');

function enforceBuiltIn() {
  // todo: need to keep sync'd with core
  var core_list = constants.defaultCoreCipherList || tls.DEFAULT_CIPHERS;
  delete tls.DEFAULT_CIPHERS;
  Object.defineProperty(
    tls, 
    'DEFAULT_CIPHERS', {
      configurable: false,
      enumerable: true,
      value: core_list
    });
}
exports.enforceBuiltIn = enforceBuiltIn;

function resetBuiltIn() {
  tls.DEFAULT_CIPHERS = constants.defaultCoreCipherList || tls.DEFAULT_CIPHERS;
}

exports.resetBuiltIn = resetBuiltIn;

function checkBuiltIn() {
  var core_list = constants.defaultCoreCipherList || tls.DEFAULT_CIPHERS;
  return tls.DEFAULT_CIPHERS == core_list;
}

exports.checkBuiltIn = checkBuiltIn;

function assertBuiltIn() {
  if (!checkBuiltIn()) 
    throw new Error('Not using the default TLS Cipher List');
}

exports.assertBuiltIn = assertBuiltIn;
