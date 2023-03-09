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


router.get('/signup', (req, res) => {
    try{
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('signup', async(req,res) =>{
    try {
        const { name, email, password } = req.body;
        const newUser = await User.create({
            name,
            email,
            password
          });
          req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;
            res.status(200).json(newUser);
          });
    }catch (err) {
        res.status(400).json(err);
    }
});

// application detail table update
router.post()