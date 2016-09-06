angular.module('example').controller('ExampleController', ['$scope', '$routeParams', '$location', 'Authentication', 'ParticipantsService', 'ModalService',
    function($scope, $routeParams, $location, Authentication, ParticipantsService, ModalService) {
        $scope.authentication = Authentication;

        $scope.showParticipantDiv = false;
      
        $scope.goToParticipants = function(){
        	window.location = "/#!/participants"
        }
        
        $scope.goToEvents = function(){
        	window.location = "/#!/events"
        }
        
        $scope.goToActivities = function(){
        	window.location = "/#!/activities"
        }
    }
]);