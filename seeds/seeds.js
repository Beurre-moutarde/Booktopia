const sequelize = require('../config/connection');
const { User, ApplicationDetails, StreamingServices } = require('../models');
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 9f09050c816f3e135896b5f88cca7a5e13297f99

=======


>>>>>>> 706c8c4d2d5479ece42f25a9eff51732973b0454
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