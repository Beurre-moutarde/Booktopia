const router = require('express').Router();
const { ApplicationDetails, StreamingServices } = require('../../models');

// This route is used to create applicaiton
router.put('/', async (req,res) => {
  try {
    const findServiceId = await StreamingServices.findAll({
      where: {stream_name: req.body.selectedPlatform},
      attributes: ['id']
    });

    const findPassword = await ApplicationDetails.findAll({
        where:{
            in_use_by: false,
            streaming_services_id: findServiceId[0].id
        },
        attributes: ['application_login','application_password']
    });

    const findNotInUse = await ApplicationDetails.update(
        {in_use_by: true},
        {where:{
            in_use_by: false,
            streaming_services_id: findServiceId[0].id
        },
        limit:1
        }
    )

    console.log(findPassword);
    //res.send(findNotInUse);
    // console.log(json(findServiceId));
    // const newApplicaitonDetail = await ApplicationDetails.create({
    //   application_login: req.body.applicationLogin,
    //   application_password: req.body.applicationPassword,
    //   user_id: req.session.user_id,
    //   streaming_services_id: findServiceId[0].id ,
    // });
    //res.status(200).json(findNotInUse);
    res.status(200).json(findPassword);
  } catch (err) {
    res.status(400).json(err);
  }
  });

  

  module.exports = router;