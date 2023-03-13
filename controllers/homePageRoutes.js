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
        const applicationDetails = await ApplicationDetails.findAll({
            attributes:["user_id","streaming_services_id"],
            where: {user_id: req.session.user_id},
            include: [
                {
                    model: StreamingServices,
                    attributes: ['stream_name'],
                },
                {
                    model: User,
                    attributes: ['name'],
                }
            ],
        });

        const usingServices = await ApplicationDetails.findAll({
            attributes:["streaming_services_id","in_use_by"],
            where: {in_use_by: req.session.user_id},
            include:[
                {
                    model:StreamingServices,
                    attributes: ['stream_name'],
                }
            ]
        })

        const sharingData = applicationDetails.map((details) => details.get({ plain: true }));
        const usingServiceData = usingServices.map((details) => details.get({ plain: true }));
        // res.send(usingServicesData);
        //const abc = {message:"hello"};
        //userData.push(abc);

        const data = [
            sharingData,
            usingServiceData
        ]

        //res.send(data);

        if (data.length === 0){
            const message = {message:'please share one service to get other services'};
            res.render('profileMatching',{
                data:message,
                logged_in:true
            });
        }else{
            res.render('profileMatching',{
                data:data,
                logged_in:true
            });
        }
        
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/sharePage', withAuth, async(req,res) => {
    try {
        res.render('sharePage');
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;



