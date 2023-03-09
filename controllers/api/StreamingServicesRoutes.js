const router = require('express').Router();
const { StreamingServices } = require('../../models');
const withAuth = require('../../utils/auth');

// This route is used to create a new Streaming service.
router.post('/', withAuth, async (req, res) => {
    try {
      const { name } = req.body;
  
      const newStreamingService = await StreamingService.create({
        name,
      });
  
      res.status(201).json(newStreamingService);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // This route is used to delete a already existing Streaming service.
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const streamingService = await StreamingService.findByPk(req.params.id);
  
      if (!streamingService) {
        res.status(404).json({ error: 'Streaming service not found' });
      } else {
        await streamingService.destroy();
        res.status(204).end();
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  module.exports = router;  