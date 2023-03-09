const router = require('express').Router();
const { User, StreamingServices, ApplicationDetails } = require('../models');
const withAuth = require('../utils/auth');