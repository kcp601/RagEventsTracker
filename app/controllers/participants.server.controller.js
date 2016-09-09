var mongoose = require('mongoose'),
    Participant = mongoose.model('Participant');

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
    var participant = new Participant(req.body);
    participant.creator = req.user;
    participant.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(participant);
        }
    });
};

exports.list = function(req, res) {
    Participant.find().sort('-created').populate('creator', 'name username').exec(function(err, participants) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(participants);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.participant);
};

exports.participantByID = function(req, res, next, id) {
    Participant.findById(id).populate('creator', 'name username').exec(function(err, participant) {
        if (err)
            return next(err);

        if (!participant)
            return next(new Error('Failed to load participant ' + id));

        req.participant = participant;
        next();
    });
};

exports.update = function(req, res) {

    console.log("req");
    console.log(req.body.Name);

    var participant = req.participant;
    participant.title = req.body.title;
    participant.comment = req.body.comment;
    participant.completed = req.body.completed;
    participant.Name = req.body.Name;
    participant.DateOfBirth = req.body.DateOfBirth;
    participant.Email = req.body.Email;
    participant.MobileNo = req.body.MobileNo;
    participant.Adventures = req.body.Adventures;
    participant.CatchUpDate1 = req.body.CatchUpDate1;
    participant.CatchUpDate2 = req.body.CatchUpDate2;
    participant.CatchUpDate3 = req.body.CatchUpDate3;
    participant.AttendedGroupMeeting1 = req.body.AttendedGroupMeeting1;
    participant.AttendedGroupMeeting2 = req.body.AttendedGroupMeeting2;
    participant.TotalFundraised = req.body.TotalFundraised;
    participant.OfflineTotal = req.body.OfflineTotal;
    participant.JustGivingTotal = req.body.JustGivingTotal;
    participant.AdventureLeader = req.body.AdventureLeader;

    participant.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(participant);
        }
    });
};

exports.delete = function(req, res) {
    var participant = req.participant;
    participant.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(participant);
        }
    });
};

exports.hasAuthorization = function(req, res, next) {
    if (req.participant.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};