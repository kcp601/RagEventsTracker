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
        type: String,
        default: '',
        trim: true
    },
    InfoMeetingDate: {
        type: String,
        default: '',
        trim: true
    },
    WelcomeMeetingDate: {
        type: String,
        default: '',
        trim: true
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
/*    OverallFundraisingTargetAchieved: {
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
        type: String,
        default: '',
        trim: true
    },
    FundraisingTarget1Amount: {
        type: String,
        default: '',
        trim: true
    },
    FundraisingTarget2Date: {
        type: String,
        default: '',
        trim: true
    },
    FundraisingTarget2Amount: {
        type: String,
        default: '',
        trim: true
    },
    FundraisingTarget3Date: {
        type: String,
        default: '',
        trim: true
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
        type: String,
        default: '',
        trim: true
    },
    GroupMeetingDate2: {
        type: String,
        default: '',
        trim: true
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }

});
mongoose.model('Adventure', AdventureSchema);