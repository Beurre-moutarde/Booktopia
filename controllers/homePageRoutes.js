const router = require('express').Router();
// const { User, StreamingServices, ApplicationDetails } = require('../models');
// const withAuth = require('../utils/auth');


//    /homepage route 
router.get('/', (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;