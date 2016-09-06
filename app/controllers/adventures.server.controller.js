var mongoose = require('mongoose'),
    Adventure = mongoose.model('Adventure');

var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

exports.create = function(req, res) {
    var adventure = new Adventure(req.body);
    adventure.creator = req.user;
    adventure.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(adventure);
        }
    });
};

exports.list = function(req, res) {
    Adventure.find().sort('-created').populate('creator', 'name username').exec(function(err, adventures) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(adventures);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.adventure);
};

exports.adventureByID = function(req, res, next, id) {
    Adventure.findById(id).populate('creator', 'name username').exec(function(err, adventure) {
        if (err)
            return next(err);

        if (!adventure)
            return next(new Error('Failed to load adventure ' + id));

        req.adventure = adventure;
        next();
    });
};

exports.update = function(req, res) {
    var adventure = req.adventure;
    adventure.title = req.body.title;
    adventure.comment = req.body.comment;
    adventure.completed = req.body.completed;

    adventure.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(adventure);
        }
    });
};

exports.delete = function(req, res) {
    var adventure = req.adventure;
    adventure.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(adventure);
        }
    });
};

exports.hasAuthorization = function(req, res, next) {
    if (req.adventure.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};