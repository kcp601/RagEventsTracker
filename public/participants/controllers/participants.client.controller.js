angular.module('participants').controller('ParticipantsController', ['$scope', '$routeParams', '$location', 'Authentication', 'ParticipantsService',
    function($scope, $routeParams, $location, Authentication, ParticipantsService) {
        $scope.authentication = Authentication;       
        
        $scope.create = function() {
            var participant = new ParticipantsService({
                Name: "Steve",
                DateOfBirth: "14/2/1933",
                Email: "lol@lol.com",
                MobileNo: "072525252527",
                Adventures: "N/A",
                CatchUpDate1: "12/3/2012",
                CatchUpDate2: "13/3/2013",
                CatchUpDate3: "14/3/2014",
                AttendedGroupMeeting1: 1,
                AttendedGroupMeeting2: 0,
                TotalFundraised: "122.33",
                OfflineTotal: "122.22",
                JustGivingTotal: "122",
                AdventureLeader: "Alan"
            });

            participant.$save(function(response) {
                $location.path('participants/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.find = function() {
            ParticipantsService.query(function (data){
            	$scope.participants = data;
            });
        };

        $scope.findOne = function() {
            $scope.participants = ParticipantsService.get({
                participantId: $routeParams.participantId
            });
        };

        $scope.update = function() {
            $scope.participant.$update(function() {
                $location.path('participants/' + $scope.todo._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.delete = function(participant) {
            if (participant) {
            	participant.$remove(function() {
                    for (var i in $scope.participants) {
                        if ($scope.participants[i] === participant) {
                            $scope.participants.splice(i, 1);
                        }
                    }
                });
            } else {
                $scope.participant.$remove(function() {
                    $location.path('participants');
                });
            }
        };
    }
]);