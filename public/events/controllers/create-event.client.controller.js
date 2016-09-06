angular.module('events').controller('CreateEventModalController', function($scope, close, EventsService) {

        $scope.dismissModal = function(result) {
            close(result, 500); // close, but give 200ms for bootstrap to animate
        };

        $scope.create = function () {
            //Create the service to create a participant
            var event = new EventsService({
                Name: $scope.Name,
                DateOfEvent: $scope.DateOfEvent,
                AmountRaised: $scope.AmountRaised,
                BankingMethod: $scope.BankingMethod,
                HasBeenBanked: $scope.HasBeenBanked,
                BankedOn: $scope.BankedOn,
                Notes: $scope.Notes,
                PermitApplicationDate: $scope.PermitApplicationDate,
                PermitDateFor: $scope.PermitDateFor,
                PermitAttachment: $scope.PermitAttachment,
                CityTownPermitFor: $scope.CityTownPermitFor
            });

            event.$save(function(response) {
                console.log(response);
                console.log("done!");
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        }
    }
);