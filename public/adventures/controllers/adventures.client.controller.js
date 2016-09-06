angular.module('adventures').controller('AdventuresController', ['$scope', '$routeParams', '$location', 'Authentication', 'AdventuresService', 'ModalService',
    function($scope, $routeParams, $location, Authentication, AdventuresService, ModalService) {
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

        $scope.addAdventure = function(){
            // Just provide a template url, a controller and call 'showModal'.
            ModalService.showModal({
                templateUrl: "adventures/views/create-adventure.client.view.html",
                controller: "CreateAdventureModalController"
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
    }
]);