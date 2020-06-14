var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    image: {
        type: String
    }
});

userSchema.plugin(passportLocalMongoose);

var Users = mongoose.model('User', userSchema);
module.exports = Users;