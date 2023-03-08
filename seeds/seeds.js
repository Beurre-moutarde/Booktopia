const sequelize = require('../config/connection');
const { User, ApplicationDetails, StreamingServices } = require('../models');

const userData = require('./UserData.json');
const ApplicationDetailsData = require('./ApplicationDetailsData.json');
const StreamingServicesData = require('./StreamingServicesData.json');

const seedDatabase = async () => {
    try {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    const applicationsDetails = await ApplicationDetails.bulkCreate(ApplicationDetailsData);

    const streamingServices = await StreamingServices.bulkCreate(StreamingServicesData);

  
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
  };
  seedDatabase();