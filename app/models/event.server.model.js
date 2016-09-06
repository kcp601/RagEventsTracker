var mongoose = require('mongoose'),
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
    Notes: {
        type: String,
        default: '',
        trim: true
    },
    PermitApplicationDate: {
        type: Date
    },
    PermitDateFor: {
        type: Date
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