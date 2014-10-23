(function(global) {
  'use strict';

  // console.log(global)
  // console.log(expect)
  // console.log(describe)
  // console.log(global.ok.bind(null))

  describe('ok', function() {


    it('should return "ok"', function() {
      expect(global.ok.bind(null, 'ok').call()).isOk();
    });


    it('should not throw error', function() {
      expect(global.ok.bind(null, 'hello')).not.toThrow();
    });


    it('should throw error if number passed', function() {
      expect(global.ok.bind(null, 123)).toThrow(Error('OMFG'));
    });


    it('should always return "ok"', function() {
      expect(global.ok.bind(null, 'not-ok').call()).isOk();

    });

  });


}(window));
