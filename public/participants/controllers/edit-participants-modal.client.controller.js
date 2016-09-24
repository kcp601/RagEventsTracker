angular.module('participants').controller('EditParticipantsModalController', function($scope, $location, participant, Authentication, AdventuresService){
    $scope.authentication = Authentication;

    $scope.participant = participant;
    $scope.adventures = AdventuresService.query();
    $scope.participant.Adventure = $scope.participant.Adventure[0];

    console.log($scope.participant);
    console.log($scope.adventures);

    $scope.print = function() {
        console.log($scope.participant);
    };

    $scope.save = function() {

        console.log($scope.participant);

        $scope.participant.$update(function() {
            $location.path('participants/' + $scope.participant._id);
        }, function(errorResponse) {
            $scope.error = errorResponse.data.message;
        });
    }
});