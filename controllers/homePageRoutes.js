const router = require('express').Router();
const { User,  StreamingServices, ApplicationDetails } = require('../models');
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

router.get('/profileMatching', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id,{
            attributes: { exclude: ['password'] },
        });

        const streamingServices = await StreamingServices.findByPk(req.session.user_id,
             {include:[{model: ApplicationDetails}]}
        )

        const user = userData.get({ plain: true });
        const stream = streamingServices.get({plain: true});
        res.render('profileMatching',{
            ...user,
            ...stream,
            logged_in:true
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;