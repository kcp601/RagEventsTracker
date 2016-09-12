var mongoose = require('mongoose'),
    ParticipantSchema = require('../models/participant.server.model'),
    Schema = mongoose.Schema;

var EventSchema =  new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    Name: {
        type: String,
        default: '',
        trim: true
    },
    DateOfEvent: {
        type: String,
        default: '',
        trim: true
    },
    AmountRaised: {
        type: String,
        default: '',
        trim: true
    },
    BankingMethod: {
        type: String,
        default: '',
        trim: true
    },
    HasBeenBanked: {
        type: Boolean,
        default: false
    },
    BankedOn: {
        type: String,
        default: '',
        trim: true
    },
    Participant: [
        ParticipantSchema
    ],
    Notes: {
        type: String,
        default: '',
        trim: true
    },
    PermitApplicationDate: {
        type: String,
        default: '',
        trim: true
    },
    PermitDateFor: {
        type: String,
        default: '',
        trim: true
    },
    PermitAttachment: {
        //TODO
    },
    CityTownPermitFor: {
        type: String,
        default: '',
        trim: true
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }

});
mongoose.model('Event', EventSchema);