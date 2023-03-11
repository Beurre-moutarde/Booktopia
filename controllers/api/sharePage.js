const router = require('express').Router();
const { ApplicationDetails } = require('../../models');
//const withAuth = require('../utils/auth');

// This route is used to create new user.
router.post('/api/sharePage/', async (req,res) => {
    try {
        
        const { applicationLogin, applicationPassword, streamService } = req.body;
        const userid = req.session.user_id;
        const streamService_id = 3;

    
        const newApplicaitonDetail = await ApplicationDetails.create({
            applicationLogin,
            applicationPassword,
            streamService_id,
            userid
        });
        req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.logged_in = true;
        res.status(200).json(newApplicaitonDetail);
      });
      
    } catch (err) {
      res.status(400).json(err);
    }
  });