(function() {
  'use strict';

  angular
    .module('mas')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');

    
  }

})();
