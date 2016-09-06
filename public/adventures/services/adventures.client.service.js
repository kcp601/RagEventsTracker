angular.module('adventures').factory('AdventuresService', ['$resource',
    function($resource) {
        return $resource('api/adventures/:adventureId', {
            adventureId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });

    }
]);