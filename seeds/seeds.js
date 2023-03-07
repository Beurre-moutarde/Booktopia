const sequelize = require('../config/connection');
const { User, ApplicationDetails, StreamingServices } = require('../models');

const userData = require('./UserData.json');
const ApplicationDetailsData = require('./ApplicationDetailsData.json');
const StreamingServicesData = require('./StreamingServicesData.json');