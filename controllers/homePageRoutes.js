const router = require('express').Router();
const { User, StreamingServices, ApplicationDetails } = require('../models');
const withAuth = require('../utils/auth');


//    /homepage route 
router.get('/', (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/signup', withAuth, async (req, res) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', withAuth, async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/website', withAuth, async (req, res) => {
    try {
        res.render('website');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;