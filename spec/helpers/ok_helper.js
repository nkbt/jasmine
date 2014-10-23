beforeEach(function () {
  jasmine.addMatchers({
    isOk: function () {
      return {
        compare: function (actual) {
          return {
            pass: actual === 'ok'
          }
        }
      };
    }
  });
});
