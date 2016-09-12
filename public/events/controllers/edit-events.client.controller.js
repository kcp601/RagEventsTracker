angular.module('events').controller('EventsModalController',
    function($scope, $timeout, $q, $log, ModalService, EventsService, $location) {

        $scope.events = EventsService.query();
        $scope.selectedEvent = $scope.events[1];

        $scope.dismissModal = function(result) {
            close(result, 500); // close, but give 200ms for bootstrap to animate
        };

        $scope.find = function () {
            $scope.events = EventsService.query();
            return $scope.events;
        };

        $scope.edit = function () {
            console.log($scope.events);

            ModalService.showModal({
                templateUrl: "events/views/edit-event.client.view.html",
                controller: "EditEventsModalController",
                inputs: {
                    event: $scope.selectedEvent
                }
            }).then(function(modal) {
                // The modal object has the element built, if this is a bootstrap modal
                // you can call 'modal' to show it, if it's a custom modal just show or hide
                // it as you need to.
                modal.element.modal();
                modal.close.then(function(result) {
                    //TODO Eventresource .save on returned event + success/fail message to user
                    $scope.message = result ? "You said Yes" : "You said No";
                });
            });
        };

        $scope.delete = function(event) {
            if (event) {
                event.$remove(function () {
                    for (var i in $scope.events) {
                        if ($scope.events[i] === event) {
                            $scope.events.splice(i, 1);
                        }
                    }
                });
            } else {
                $scope.event.$remove(function () {
                    $location.path('events');
                });
            }
        };

        $scope.print =function() {
            console.log($scope.selectedEvent);
        };

    });
