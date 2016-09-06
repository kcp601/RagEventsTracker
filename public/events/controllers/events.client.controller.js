angular.module('events').controller('EventsController', ['$scope', '$routeParams', '$location', 'Authentication', 'EventsService', 'ModalService',
    function($scope, $routeParams, $location, Authentication, EventsService, ModalService) {
        $scope.authentication = Authentication;


    }
]);