angular.module('events').controller('EventsController', ['$scope', '$routeParams', '$location', 'Authentication', 'EventsService', 'ModalService',
    function($scope, $routeParams, $location, Authentication, EventsService, ModalService) {
        $scope.authentication = Authentication;

        $scope.simplePDF = function() {
            //  $scope.order.showPopupAddedToCart = !$scope.order.showPopupAddedToCart;
            var doc = new jsPDF();
            doc.text(20, 20, 'Hello world!');
            doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
            doc.addPage();
            doc.text(20, 20, 'Do you like that?');

            // Save the PDF
            doc.save('Test.pdf');
        };

        $scope.addEvent = function(){
            // Just provide a template url, a controller and call 'showModal'.
            ModalService.showModal({
                templateUrl: "events/views/create-event.client.view.html",
                controller: "CreateEventModalController"
            }).then(function(modal) {
                // The modal object has the element built, if this is a bootstrap modal
                // you can call 'modal' to show it, if it's a custom modal just show or hide
                // it as you need to.
                modal.element.modal();
                modal.close.then(function(result) {
                    //TODO Eventresource .save on returned participant + success/fail message to user
                    $scope.message = result ? "You said Yes" : "You said No";
                });
            });
        };

        $scope.editEvent = function(){
            $scope.events = EventsService.query();
            console.log($scope.events);

            // Just provide a template url, a controller and call 'showModal'.
            ModalService.showModal({
                templateUrl: "events/views/select-event.client.view.html",
                controller: "EventsModalController"
            }).then(function(modal) {
                // The modal object has the element built, if this is a bootstrap modal
                // you can call 'modal' to show it, if it's a custom modal just show or hide
                // it as you need to.
                modal.element.modal();
                modal.close.then(function(result) {
                    //TODO Eventresource .save on returned participant + success/fail message to user
                    $scope.message = result ? "You said Yes" : "You said No";
                });
            });
        };

        $scope.deleteEvent = function(){
            // Just provide a template url, a controller and call 'showModal'.
            ModalService.showModal({
                // TODO Change so the edit is a delete html page
                templateUrl: "events/views/delete-event.client.view.html",
                controller: "EventsModalController"
            }).then(function(modal) {
                // The modal object has the element built, if this is a bootstrap modal
                // you can call 'modal' to show it, if it's a custom modal just show or hide
                // it as you need to.
                modal.element.modal();
                modal.close.then(function(result) {
                    //TODO Eventresource .save on returned participant + success/fail message to user
                    $scope.message = result ? "You said Yes" : "You said No";
                });
            });
        };
    }
]);