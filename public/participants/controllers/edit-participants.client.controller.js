angular.module('participants').controller('ParticipantsModalController',
    function($scope, $timeout, $q, $log, ModalService, ParticipantsService, $location) {

    $scope.participants = ParticipantsService.query();
    $scope.selectedParticipant = $scope.participants[1];

    $scope.dismissModal = function(result) {
        close(result, 500); // close, but give 200ms for bootstrap to animate
    };

    $scope.find = function () {
        $scope.participants = ParticipantsService.query();
        return $scope.participants;
    };

    $scope.edit = function () {

        ModalService.showModal({
            templateUrl: "participants/views/edit-participant.client.view.html",
            controller: "EditParticipantsModalController",
            inputs: {
                participant: $scope.selectedParticipant
            }
        }).then(function(modal) {
            // The modal object has the element built, if this is a bootstrap modal
            // you can call 'modal' to show it, if it's a custom modal just show or hide
            // it as you need to.
            modal.element.modal();
            modal.close.then(function(result) {
                //TODO Participantresource .save on returned participant + success/fail message to user
                $scope.message = result ? "You said Yes" : "You said No";
            });
        });
    };

    $scope.delete = function(participant) {
        if (participant) {
            participant.$remove(function () {
                for (var i in $scope.participants) {
                    if ($scope.participants[i] === participant) {
                        $scope.participants.splice(i, 1);
                    }
                }
            });
        } else {
            $scope.participant.$remove(function () {
                $location.path('participants');
            });
        }
    };

    $scope.print =function() {
        console.log($scope.selectedParticipant);
    };

});
