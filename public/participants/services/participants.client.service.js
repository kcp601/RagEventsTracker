angular.module('participants').factory('ParticipantsService', ['$resource',
    function($resource) {
        return $resource('api/participants/:participantId', {
			participantId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
        
    }
]);