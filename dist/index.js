(function (root, factory) {
  // https://github.com/umdjs/umd/blob/master/templates/returnExports.js
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.returnExports = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  var environment = (Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]') ? 'node' : 'browser';

  var SOURCE = 'library';
  var VERSION = '1.0.1';

  function Little Insomniac(options) {
    var self = this;

    self.options = options || {};

    return self
  };

  Little Insomniac.prototype.method = function (options) {
    var self = this;

    options = options || {};

    return new Promise(function(resolve, reject) {

    });
  }

  // Register
  if (environment === 'browser') {
    try {
      window.Little Insomniac = Little Insomniac;
    } catch (e) {
    }
  }

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return Little Insomniac; // Enable if using UMD

}));
