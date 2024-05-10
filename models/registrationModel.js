const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[A-Za-z]+$/.test(v);
            },
            message: props => `${props.value} is not a valid first name!`
        }
    },
    lastName: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[A-Za-z]+$/.test(v);
            },
            message: props => `${props.value} is not a valid last name!`
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /\S+@\S+\.\S+/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    dob: {
        type: Date,
        required: true,
        validate: {
            validator: function (v) {
                const dob = new Date(v);
                const currentDate = new Date();
                const minDate = new Date();
                minDate.setFullYear(minDate.getFullYear() - 99);
                const maxDate = new Date();
                maxDate.setFullYear(maxDate.getFullYear() - 14);
                return dob >= minDate && dob <= maxDate;
            },
            message: props => `${props.value} is not a valid date of birth!`
        }
    }
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = { Registration };
