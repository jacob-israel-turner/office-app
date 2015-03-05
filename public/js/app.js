var app = angular.module('cheet', []);

Office.initialize = function () {
  console.log(">>> Office.initialize()");
  angular.bootstrap(jQuery('#container'), ['cheet']);
};