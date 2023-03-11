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
        attributes: ['application_login','application_password'],
        limit:1
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

    res.status(200).json(findPassword);
  } catch (err) {
    res.status(400).json(err);
  }
  });

  

  module.exports = router;