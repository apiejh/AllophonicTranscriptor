(function() {
  'use strict';

  angular
    .module('AllophonicTranscriptor')
    .factory('dataProvider', dataProvider);

  /** @ngInject */
  function dataProvider($resource) {
    return $resource('app/json/:segments.model.json', {}, {
      getData: {method:'GET', params:{data:'segments.model'}, isArray:true}
    });
  }
})();