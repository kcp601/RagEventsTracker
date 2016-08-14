angular.module('admins').controller('AdminsController', ['$scope', '$routeParams', '$location', 'Authentication', 'AdminsService', 'ModalService',
    function($scope, $routeParams, $location, Authentication, AdminsService, ModalService) {
        $scope.authentication = Authentication;       
        
        $scope.create = function() {
            /*var participant = new ParticipantsService({
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
            });*/

            user.$save(function(response) {
                $location.path('participants/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.find = function() {
            // TODO need to be careful with this as $resource.query() will return an empty [] and promise until callback. Slow loads will result in empty table
        	$scope.users = AdminsService.query();
        };
        
/*        $scope.edit = function(participant){
        	// Just provide a template url, a controller and call 'showModal'.
            ModalService.showModal({
                templateUrl: "participants/views/edit-participant.client.view.html",
                controller: "SampleModalController",
                inputs: {
                    participant: participant
                }
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
        };*/

        $scope.findOne = function() {
            $scope.users = ParticipantsService.get({
                userId: $routeParams.userId
            });
        };

        $scope.update = function() {
            $scope.user.$update(function() {
            	//TODO check that users/ doesn't interrupt with users service
                $location.path('users/' + $scope.todo._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.delete = function(participant) {
            if (user) {
            	user.$remove(function() {
                    for (var i in $scope.users) {
                        if ($scope.users[i] === user) {
                            $scope.users.splice(i, 1);
                        }
                    }
                });
            } else {
                $scope.user.$remove(function() {
                    $location.path('users');
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