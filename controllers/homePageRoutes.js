const router = require('express').Router();
// const { User } = require('../models');
const withAuth = require('../utils/auth');


//    /homepage route 
router.get('/', (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
  });

router.get('/login', async (req, res) => {
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