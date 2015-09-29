(function() {
  'use strict';

  angular
    .module('AllophonicTranscriptor')
    .directive('keyboard', keyboard);

  /** @ngInject */
  function keyboard() {
  	return {
  		restrict: 'E',
	    replace: 'true',
	    templateUrl: 'app/components/keyboard.template.html',
	    scope: {},
	    link: function($scope, $elem, $attr) {

		}
	};
  }
})();