angular.module('admins').factory('AdminsService', ['$resource',
    function($resource) {
        return $resource('api/admins/:adminId', {
        	userId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
        
    }
]);