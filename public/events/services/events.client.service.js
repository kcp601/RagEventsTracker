angular.module('events').factory('EventsService', ['$resource',
    function($resource) {
        return $resource('api/events/:eventId', {
            eventId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });

    }
]);