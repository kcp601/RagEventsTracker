angular.module('participants').controller('ParticipantsModalController', function($scope, $q, $log, close, ParticipantsService, participants) {

    $scope.participants = participants;

    $scope.dismissModal = function(result) {
        close(result, 500); // close, but give 200ms for bootstrap to animate
    };

    $scope.find = function () {
        $scope.participants = ParticipantsService.query();
        return $scope.participants;
    }

});