const express = require("express");
const { saveRegistrationData, getRegistrationData } = require("../controllers/registration")



const router = express.Router();


router.route('/sendData').post(saveRegistrationData);
router.route('/getData').get(getRegistrationData);


module.exports = router;