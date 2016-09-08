angular.module('participants').controller('EditParticipantsModalController', function($scope, $location, participant, Authentication){
    $scope.authentication = Authentication;

    $scope.participant = participant;

    $scope.print = function() {
        console.log($scope.participant);
    };

    $scope.save = function() {
        $scope.participant.$update(function() {
            $location.path('participants/' + $scope.participant._id);
        }, function(errorResponse) {
            $scope.error = errorResponse.data.message;
        });
    }
});