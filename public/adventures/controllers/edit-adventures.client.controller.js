angular.module('adventures').controller('AdventuresModalController',
    function($scope, $timeout, $q, $log, ModalService, AdventuresService, $location) {

        $scope.adventures = AdventuresService.query();
        $scope.selectedAdventure = $scope.adventures[1];

        $scope.dismissModal = function(result) {
            close(result, 500); // close, but give 200ms for bootstrap to animate
        };

        $scope.find = function () {
            $scope.adventures = AdventuresService.query();
            return $scope.adventures;
        };

        $scope.edit = function () {
            console.log($scope.adventures);

            ModalService.showModal({
                templateUrl: "adventures/views/edit-adventure.client.view.html",
                controller: "EditAdventuresModalController",
                inputs: {
                    adventure: $scope.selectedAdventure
                }
            }).then(function(modal) {
                // The modal object has the element built, if this is a bootstrap modal
                // you can call 'modal' to show it, if it's a custom modal just show or hide
                // it as you need to.
                modal.element.modal();
                modal.close.then(function(result) {
                    //TODO Adventureresource .save on returned adventure + success/fail message to user
                    $scope.message = result ? "You said Yes" : "You said No";
                });
            });
        };

        $scope.delete = function(adventure) {
            if (adventure) {
                adventure.$remove(function () {
                    for (var i in $scope.adventures) {
                        if ($scope.adventures[i] === adventure) {
                            $scope.adventures.splice(i, 1);
                        }
                    }
                });
            } else {
                $scope.adventure.$remove(function () {
                    $location.path('adventures');
                });
            }
        };

        $scope.print =function() {
            console.log($scope.selectedAdventure);
        };

    });
