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
    adventure.Name = req.body.Name;
    adventure.DepartDate = req.body.DepartDate;
    adventure.InfoMeetingDate = req.body.InfoMeetingDate;
    adventure.WelcomeMeetingDate = req.body.WelcomeMeetingDate;
    adventure.FundraisingTarget = req.body.FundraisingTarget;
    adventure.CharityContact1Name = req.body.CharityContact1Name;
    adventure.CharityContact1Email = req.body.CharityContact1Email;
    adventure.CharityContact2Name = req.body.CharityContact2Name;
    adventure.CharityContact2Email = req.body.CharityContact2Email;
    adventure.CharityName = req.body.CharityName;
    adventure.FundraisingTarget1Date = req.body.FundraisingTarget1Date;
    adventure.FundraisingTarget1Amount = req.body.FundraisingTarget1Amount;
    adventure.FundraisingTarget2Date = req.body.FundraisingTarget2Date;
    adventure.FundraisingTarget2Amount = req.body.FundraisingTarget2Amount;
    adventure.FundraisingTarget3Date = req.body.FundraisingTarget3Date;
    adventure.FundraisingTarget3Amount = req.body.FundraisingTarget3Amount;
    adventure.AdventureLeader1 = req.body.AdventureLeader1;
    adventure.AdventureLeader2 = req.body.AdventureLeader2;
    adventure.AdventureLeader3 = req.body.AdventureLeader3;
    adventure.GroupMeetingDate1 = req.body.GroupMeetingDate1;
    adventure.GroupMeetingDate2 = req.body.GroupMeetingDate2;


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