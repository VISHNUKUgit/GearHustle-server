const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: [3, 'Must be at least 3, got {VALUE}']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value) {
                return validator.isEmail(value); // Use the validator library to check if the value is a valid email
            },
            message: '{VALUE} is not a valid email address'
        }
    },
    password: {
        type: String,
        required: true,
    },
    mob: {
        type: String,
       
    },
    whatsapp: {
        type: String,
        
    },
    profile:{
        type: String
    }

});

const users = mongoose.model('users', userSchema);

module.exports = users;
