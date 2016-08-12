angular.module('participants').controller('ParticipantsController', ['$scope', '$routeParams', '$location', 'Authentication', 'ParticipantsService', 'ModalService',
    function($scope, $routeParams, $location, Authentication, ParticipantsService, ModalService) {
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
        	$scope.participants = ParticipantsService.query();
    
        	console.log($scope.participants);
        };
        
        $scope.edit = function(){
        	// Just provide a template url, a controller and call 'showModal'.
            ModalService.showModal({
              templateUrl: "participants/views/edit-participant.client.view.html",
              controller: "SampleModalController"
            }).then(function(modal) {
              // The modal object has the element built, if this is a bootstrap modal
              // you can call 'modal' to show it, if it's a custom modal just show or hide
              // it as you need to.
              modal.element.modal();
              modal.close.then(function(result) {
                $scope.message = result ? "You said Yes" : "You said No";
              });
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

angular.module('participants').controller('SampleModalController', function($scope, close) {

	 $scope.dismissModal = function(result) {
	    close(result, 200); // close, but give 200ms for bootstrap to animate
	 };

	});