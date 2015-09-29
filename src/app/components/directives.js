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
      templateUrl: 'app/components/partials/keyboard.template.html',
      scope: {},
      link: function($scope, $elem, $attr) {

    }
  };
  }

})();

(function() {
  'use strict';

  angular
    .module('AllophonicTranscriptor')
    .directive('settings', settings);

  /** @ngInject */
  function settings() {
    return {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'app/components/partials/settings.template.html',
      scope: {},
      link: function($scope, $elem, $attr) {

    }
  };
  }
})();
