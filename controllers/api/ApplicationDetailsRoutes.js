const router = require('express').Router();
const { ApplicationDetails } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/')