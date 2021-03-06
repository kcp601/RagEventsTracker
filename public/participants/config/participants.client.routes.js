angular.module('participants').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/participants', {
            templateUrl: 'participants/views/list-participants.client.view.html'
        }).
        when('/participants/edit', {
            templateUrl: 'participants/views/create-participant.client.view.html'
        });
/*        when('/participants/:todoId', {
            templateUrl: 'participants/views/view-todo.client.view.html'
        }).
        when('/participants/:todoId/edit', {
            templateUrl: 'participants/views/edit-todo.client.view.html'
        });*/
    }
]);