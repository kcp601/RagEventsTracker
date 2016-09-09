var mongoose = require('mongoose'),
    Event = mongoose.model('Event');

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
    var event = new Event(req.body);
    event.creator = req.user;
    event.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(event);
        }
    });
};

exports.list = function(req, res) {
    Event.find().sort('-created').populate('creator', 'name username').exec(function(err, events) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(events);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.event);
};

exports.eventByID = function(req, res, next, id) {
    Event.findById(id).populate('creator', 'name username').exec(function(err, event) {
        if (err)
            return next(err);

        if (!event)
            return next(new Error('Failed to load event ' + id));

        req.event = event;
        next();
    });
};

exports.update = function(req, res) {
    var event = req.event;
    event.title = req.body.title;
    event.comment = req.body.comment;
    event.completed = req.body.completed;
    event.Name = req.body.Name;
    event.DateOfEvent = req.body.DateOfEvent;
    event.AmountRaised = req.body.AmountRaised;
    event.BankingMethod = req.body.BankingMethod;
    event.HasBeenBanked = req.body.HasBeenBanked;
    event.BankedOn = req.body.BankedOn;
    event.Notes = req.body.Notes;
    event.PermitApplicationDate = req.body.PermitApplicationDate;
    event.PermitAttachment = req.body.PermitAttachment;
    event.CityTownPermitFor = req.body.CityTownPermitFor;

    event.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(event);
        }
    });
};

exports.delete = function(req, res) {
    var event = req.event;
    event.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(event);
        }
    });
};

exports.hasAuthorization = function(req, res, next) {
    if (req.event.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};