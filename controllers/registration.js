const { Registration } = require('../models/registrationModel');

const saveRegistrationData = async (req, res) => {
    try {
        const { firstName, lastName, email, country, state, city, gender, dob } = req.body;
        const registration = new Registration({
            firstName,
            lastName,
            email,
            country,
            state,
            city,
            gender,
            dob
        });

        await registration.save();

        res.status(200).json({
            message: 'Registration data saved successfully',
            status: 200
        });
    } catch (error) {

        console.error('Error saving registration data:', error);
        res.status(500).json({
            message: 'Internal server error',
            status: 500
        });
    }
};


const getRegistrationData = async (req, res) => {
    try {
        const registrations = await Registration.find({}, { _id: 0, __v: 0 });
        res.status(200).json({
            data: registrations,
            status: 200
        });
    } catch (error) {
        // console.error('Error fetching registration data:', error);
        res.status(500).json({
            message: 'Internal server error',
            status: 500
        });
    }
};

module.exports = {
    saveRegistrationData,
    getRegistrationData,
};
