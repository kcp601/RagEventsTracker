angular.module('participants').controller('SampleModalController', function($scope, close, participant) {

 $scope.selectedParticipant = participant;

 $scope.dismissModal = function(result) {
    close(result, 500); // close, but give 200ms for bootstrap to animate
 };

});