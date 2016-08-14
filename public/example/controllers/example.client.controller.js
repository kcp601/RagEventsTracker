angular.module('example').controller('ExampleController', ['$scope', 'Authentication',
    function($scope, Authentication) {
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
        
        $scope.goToAdmins = function(){
        	window.location = "/#!/admins"
        }
    }
]);