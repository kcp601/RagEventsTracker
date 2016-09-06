var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema =  new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }

});
mongoose.model('Event', EventSchema);