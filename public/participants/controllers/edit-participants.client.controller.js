angular.module('participants').controller('SampleModalController', function($scope, close) {

 $scope.dismissModal = function(result) {
    close(result, 200); // close, but give 200ms for bootstrap to animate
 };

});