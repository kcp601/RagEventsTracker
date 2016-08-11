var users = require('../../app/controllers/users.server.controller'),
    participants = require('../../app/controllers/participants.server.controller');

module.exports = function(app) {
	
    app.route('/api/participants')
        .get(participants.list)
        .post(users.requiresLogin, participants.create);

    app.route('/api/participants/:participantId')
        .get(participants.read)
        .put(users.requiresLogin, participants.hasAuthorization, participants.update)
        .delete(users.requiresLogin, participants.hasAuthorization, participants.delete);

    app.param('participantId', participants.participantByID);
};