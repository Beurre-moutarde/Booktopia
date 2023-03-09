const router = require('express').Router();
// const { User, StreamingServices, ApplicationDetails } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/,', (req, res) => {
    try {
        res.render('applicationDetails');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;