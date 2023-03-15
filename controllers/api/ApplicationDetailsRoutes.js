const router = require("express").Router();
const { ApplicationDetails } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const {
      application_login,
      application_password,
      streaming_services_id,
      in_use_by,
    } = req.body;

    const newSubscription = await ApplicationDetails.create({
      application_login,
      application_password,
      streaming_services_id,
      in_use_by,
      user_id: req.session.user_id,
    });
    res.status(200).json(newSubscription);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const subsciptionData = await ApplicationDetails.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!subsciptionData) {
      res.status(404).json({ message: "No subscription found with this id!" });
      return;
    }

    res.status(200).json(subsciptionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
