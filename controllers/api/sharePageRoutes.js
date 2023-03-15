const router = require("express").Router();
const { ApplicationDetails, StreamingServices } = require("../../models");

// This route is used to create an application.
router.post("/", async (req, res) => {
  try {
    const findServiceId = await StreamingServices.findAll({
      where: { stream_name: req.body.streamService },
      attributes: ["id"],
    });
    const newApplicaitonDetail = await ApplicationDetails.create({
      application_login: req.body.applicationLogin,
      application_password: req.body.applicationPassword,
      user_id: req.session.user_id,
      streaming_services_id: findServiceId[0].id,
    });
    res.status(200).json(newApplicaitonDetail);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
