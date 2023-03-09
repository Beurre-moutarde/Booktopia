const sequelize = require('../config/connection');
const { User, ApplicationDetails, StreamingServices } = require('../models');
// const User = require('../models/User');
// const StreamingServices = require('../models/StreamingServices');
// const ApplicationDetails = require('../models/ApplicationDetails');


const userData = require('./UserData.json');
const ApplicationDetailsData = require('./ApplicationDetailsData.json');
const StreamingServicesData = require('./StreamingServicesData.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(userData, {

      individualHooks: true,
      returning: true,
    });

    await StreamingServices.bulkCreate(StreamingServicesData);

    await ApplicationDetails.bulkCreate(ApplicationDetailsData);

    process.exit(0);
  };
  

  seedDatabase();