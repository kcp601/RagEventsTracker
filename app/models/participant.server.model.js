var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    AdventureSchema = require('../models/adventure.server.model');

var participantSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    Name: {
        type: String,
        default: '',
        trim: true,
        required: "Name can't be blank"
    },
    DateOfBirth: {
        type: String,
        default: '',
        trim: true,
        required: "D.O.B can't be blank"
    },
    Email: {
    	type: String,
		default: '',
    	trim: true
    },
    MobileNo: {
    	type: String,
    	default: '',
    	trim: true
    },
    Adventure: [
    	// Needs a reference to the adventures table!
        AdventureSchema
    ],
    CatchUpDate1: {
    	type: String,
		default: '',
		trim: true
    },
    CatchUpDate2: {
    	type: String,
		default: '',
		trim: true
    },
    CatchUpDate3: {
    	type: String,
		default: '',
		trim: true
    },   
    AttendedGroupMeeting1: {
    	type: Boolean,
    	default: false
    },
    AttendedGroupMeeting2: {
    	type: Boolean,
    	default: false
    },
    TotalFundraised: {
    	type: String,
    	trim: true,
    	default: ''
    },
    OfflineTotal: {
    	type: String,
    	trim: true,
    	default: ''
    },
    JustGivingTotal: {
    	// Will complete after finished base project
    	type: String,
		default: '',
		trim: true
    },
    // TODO Ask about "Currently ahead of target"
    AdventureLeader: {
    	type: String,
		default: '',
		trim: true
    	// Reference Adventure leaders from adventure details
    },
    LastCatchUpDate: {
        type: String,
        default: '',
        trim: true
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
mongoose.model('Participant', participantSchema);