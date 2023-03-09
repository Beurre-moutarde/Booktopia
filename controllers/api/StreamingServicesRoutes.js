const router = require('express').Router();
const { StreamingServices } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newStreamingServices = await StreamingServices.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newStreamingServices);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const StreamingServicesData = await StreamingServices.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!StreamingServicesData) {
        res.status(404).json({ message: 'No Streaming Services found with this id!' });
        return;
      }
  
      res.status(200).json(StreamingServicesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;  