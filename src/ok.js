(function(global) {
  'use strict';

  global.ok = function ok(input) {
    if (typeof(input) !== 'string') {
      throw new Error('OMFG');
    }
    return 'ok';
  }

}(window));
