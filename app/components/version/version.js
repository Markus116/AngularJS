'use strict';

angular.module('testApp.version', [
  'testApp.version.interpolate-filter',
  'testApp.version.version-directive'
])

.value('version', '0.1');
