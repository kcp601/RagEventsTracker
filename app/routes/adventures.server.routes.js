var users = require('../../app/controllers/users.server.controller'),
    adventures = require('../../app/controllers/adventures.server.controller');

module.exports = function(app) {

    app.route('/api/adventures')
        .get(adventures.list)
        .post(users.requiresLogin, adventures.create);

    app.route('/api/adventures/:adventureId')
        .get(adventures.read)
        .put(users.requiresLogin, adventures.hasAuthorization, adventures.update)
        .delete(users.requiresLogin, adventures.hasAuthorization, adventures.delete);

    app.param('adventureId', adventures.adventureByID);
};