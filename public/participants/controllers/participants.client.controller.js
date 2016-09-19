angular.module('participants').controller('ParticipantsController', ['$scope', '$routeParams', '$location', 'Authentication', 'ParticipantsService', 'ModalService',
    function($scope, $routeParams, $location, Authentication, ParticipantsService, ModalService) {
        $scope.authentication = Authentication;
        var participants = ParticipantsService.query();

        $scope.lastCatchUpDate60Days = function() {
            //  $scope.order.showPopupAddedToCart = !$scope.order.showPopupAddedToCart;
            var columns = ["Name", "Adventure", "Adventure Leader", "Last meeting date"];
            var rows = [];

            angular.forEach(participants, function(participant){
                var oneDay = 24*60*60*1000;
                var catchupDate = new Date(participant.LastCatchUpDate);
                var now = new Date();

                var diffDays = Math.round(Math.abs((catchupDate.getTime() - now.getTime())/(oneDay)));

                if (diffDays > 60){
                    var row = [participant.Name, participant.Adventure[0].Name, participant.AdventureLeader, participant.LastCatchUpDate];
                    rows.push(row);
                }
            });

            var doc = new jsPDF('p', 'pt');
            doc.autoTable(columns, rows);

            // Save the PDF*/
            doc.save('LastCatchUp60Days.pdf');
        } ;

        $scope.addParticipant = function(){
            // Just provide a template url, a controller and call 'showModal'.
            ModalService.showModal({
                templateUrl: "participants/views/create-participant.client.view.html",
                controller: "CreateParticipantModalController"
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

        $scope.editParticipant = function(){
            $scope.participants = ParticipantsService.query();

         // Just provide a template url, a controller and call 'showModal'.
            ModalService.showModal({
                templateUrl: "participants/views/select-participant.client.view.html",
                controller: "ParticipantsModalController"
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

        $scope.deleteParticipant = function(){
            // Just provide a template url, a controller and call 'showModal'.
            ModalService.showModal({
                // TODO Change so the edit is a delete html page
                templateUrl: "participants/views/delete-participant.client.view.html",
                controller: "ParticipantsModalController"
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