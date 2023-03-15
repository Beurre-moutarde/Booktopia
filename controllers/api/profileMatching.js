const router = require('express').Router();
const sequelize = require('../../config/connection');
const { ApplicationDetails, StreamingServices } = require('../../models');
const{Op} = require('sequelize');
// const withAuth = require('../utils/auth');

router.put('/', async (req,res) => {
  try {
    const findServiceId = await StreamingServices.findAll({
        where: {stream_name: req.body.selectedPlatform},
        attributes: ['id']
        });

    const ifHadService = await ApplicationDetails.findAll({
        where:{
            in_use_by: req.session.user_id,
            streaming_services_id: findServiceId[0].id,
        }
    })

    if (ifHadService.length===0) {
        const findPassword = await ApplicationDetails.findAll({
            where:{
                in_use_by: 1,
                streaming_services_id: findServiceId[0].id,
                user_id: {
                    [Op.ne]: req.session.user_id,
                },
            },
            attributes: {
                include:['application_login','application_password'],
            },
            limit:1
        });
       
        const findNotInUse = await ApplicationDetails.update(
            {in_use_by: req.session.user_id},
            {where:{
                in_use_by: 1,
                streaming_services_id: findServiceId[0].id,
                user_id: {
                     [Op.ne]: req.session.user_id,
                },
            },
            limit:1
            }
        )
        res.status(200).json(findPassword);

    }else{
        res.status(200).json({hasMessage:'Already have this service'});
    }
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/stopUsing', async (req,res) => {
    const findStopServiceId = await StreamingServices.findAll({
        where: {stream_name: req.body.stopUsingService},
        attributes: ['id']
    });
    const updateStopUsingService = await ApplicationDetails.update(
        {in_use_by: 1},
        {where:{
            in_use_by: req.session.user_id,
            streaming_services_id: findStopServiceId[0].id
            },
        
        },
    )
    res.status(200).json(updateStopUsingService);
});


router.delete('/stopSharing', async (req,res) => {
    console.log(req.body.stopSharingService);
    const findStopServiceId = await StreamingServices.findAll({
        where: {stream_name: req.body.stopSharingService},
        attributes: ['id']
    });
    const stopSharingService = await ApplicationDetails.destroy(
        {where:{
            user_id: req.session.user_id,
            streaming_services_id: findStopServiceId[0].id
            },
        limit:1
        },
    )

    const checkUserHasSharing = await ApplicationDetails.findAll({
        where:{user_id:req.session.user_id},
    })

    if (checkUserHasSharing.length === 0) {
        await ApplicationDetails.update(
            {in_use_by:1},
            {where:{
                in_use_by:req.session.user_id
            }}
        )
    }

    res.status(200).json({message:'stop sharing'});
})



  

module.exports = router;