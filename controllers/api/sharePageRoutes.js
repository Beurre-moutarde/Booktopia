const router = require('express').Router();
const { ApplicationDetails } = require('../../models');


// This route is used to create applicaiton
router.post('/', async (req,res) => {
    try {
        const { applicationLogin, applicationPassword, streamService } = req.body;
        const userid = req.session.user_id;
        const streaming_services_id = 3;

        const newApplicaitonDetail = await ApplicationDetails.create({
            applicationLogin,
            applicationPassword,
            userid,
            streaming_services_id,
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