(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('AllophonicTranscriptor'));

    it('get gaps data', inject(function($controller) {
      var vm = $controller('MainController');

      expect(vm.gaps).toBeTruthy();
      // expect(vm.awesomeThings.length > 5).toBeTruthy();
    }));
  });
})();
