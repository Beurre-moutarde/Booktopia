const sequelize = require('../config/connection');
const { User, Netflix, AmazonPrime } = require('../models');

const userData = require('./userData.json');
const NetflixData = require('./NetflixData.json');
const AmazonPrimeData = require('./AmazonPrimeData.json');