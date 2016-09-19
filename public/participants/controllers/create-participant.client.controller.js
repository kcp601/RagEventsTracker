angular.module('participants').controller('CreateParticipantModalController', function($scope, close, ParticipantsService, AdventuresService) {

        $scope.adventures = AdventuresService.query();

        $scope.dismissModal = function(result) {
            close(result, 500); // close, but give 200ms for bootstrap to animate
        };

        $scope.create = function () {
            //Create the service to create a participant
            var participant = new ParticipantsService({
                Name: $scope.Name,
                DateOfBirth: $scope.DateOfBirth,
                Email: $scope.Email,
                MobileNo: $scope.MobileNo,
                Adventure: $scope.Adventure,
                CatchUpDate1: $scope.CatchUpDate1,
                CatchUpDate2: $scope.CatchUpDate2,
                CatchUpDate3: $scope.CatchUpDate3,
                AttendedGroupMeeting1: $scope.AttendedGroupMeeting1,
                AttendedGroupMeeting2: $scope.AttendedGroupMeeting2,
                TotalFundraised: $scope.TotalFundraised,
                OfflineTotal: $scope.OfflineTotal,
                JustGivingTotal: $scope.JustGivingTotal,
                AdventureLeader: $scope.AdventureLeader,
                LastCatchUpDate: $scope.LastCatchUpDate
            });

            participant.$save(function(response) {
                console.log(response);
                console.log("done!");
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        }
    }
);