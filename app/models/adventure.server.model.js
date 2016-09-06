var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AdventureSchema =  new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    Name: {
        type: String,
        default: '',
        trim: true
    },
    DepartDate: {
        type: Date
    },
    InfoMeetingDate: {
        type: Date
    },
    WelcomeMeetingDate: {
        type: Date
    },
    FundraisingTarget: {
        type: String,
        default: '',
        trim: true
    },
    CharityContact1Name: {
        type: String,
        default: '',
        trim: true
    },
    CharityContact1Email: {
        type: String,
        default: '',
        trim: true
    },
    CharityContact2Name: {
        type: String,
        default: '',
        trim: true
    },
    CharityContact2Email: {
        type: String,
        default: '',
        trim: true
    },
    CharityName: {
        type: String,
        default: '',
        trim: true
    },
/*    OverallFundraisingTarget: {
        type: String,
        default: '',
        trim: true
    },
    PercentageFundraisingMet: {
        type: String,
        default: '',
        trim: true
    },*/
    FundraisingTarget1Date: {
        type: Date
    },
    FundraisingTarget1Amount: {
        type: String,
        default: '',
        trim: true
    },
    FundraisingTarget2Date: {
        type: Date
    },
    FundraisingTarget2Amount: {
        type: String,
        default: '',
        trim: true
    },
    FundraisingTarget3Date: {
        type: Date
    },
    FundraisingTarget3Amount: {
        type: String,
        default: '',
        trim: true
    },
    AdventureLeader1: {
        type: String,
        default: '',
        trim: true
    },
    AdventureLeader2: {
        type: String,
        default: '',
        trim: true
    },
    AdventureLeader3: {
        type: String,
        default: '',
        trim: true
    },
    GroupMeetingDate1: {
        type: Date
    },
    GroupMeetingDate2: {
        type: Date
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }

});
mongoose.model('Adventure', AdventureSchema);