angular.module('adventures').controller('CreateAdventureModalController', function($scope, close, AdventuresService) {

        $scope.dismissModal = function(result) {
            close(result, 500); // close, but give 200ms for bootstrap to animate
        };

        $scope.create = function () {
            //Create the service to create a participant
            var adventure = new AdventuresService({
                Name: $scope.Name,
                DepartDate: $scope.DepartDate,
                InfoMeetingDate: $scope.InfoMeetingDate,
                WelcomeMeetingDate: $scope.WelcomeMeetingDate,
                FundraisingTarget: $scope.FundraisingTarget,
                CharityContact1Name: $scope.CharityContact1Name,
                CharityContact1Email: $scope.CharityContact1Email,
                CharityContact2Name: $scope.CharityContact2Name,
                CharityContact2Email: $scope.CharityContact2Email,
                CharityName: $scope.CharityName,
                FundraisingTarget1Date: $scope.FundraisingTarget1Date,
                FundraisingTarget1Amount: $scope.FundraisingTarget1Amount,
                FundraisingTarget2Date: $scope.FundraisingTarget2Date,
                FundraisingTarget2Amount: $scope.FundraisingTarget2Amount,
                FundraisingTarget3Date: $scope.FundraisingTarget3Date,
                FundraisingTarget3Amount: $scope.FundraisingTarget3Amount,
                AdventureLeader1: $scope.AdventureLeader1,
                AdventureLeader2: $scope.AdventureLeader2,
                AdventureLeader3: $scope.AdventureLeader3,
                GroupMeetingDate1: $scope.GroupMeetingDate1,
                GroupMeetingDate2: $scope.GroupMeetingDate2
            });

            adventure.$save(function(response) {
                console.log(response);
                console.log("done!");
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        }
    }
);