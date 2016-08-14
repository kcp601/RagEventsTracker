angular.module('admins').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/admins', {
            templateUrl: 'admins/views/list-users.client.view.html'
        });
    }
]);