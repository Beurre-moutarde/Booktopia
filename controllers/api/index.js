const router = require('express').Router();
const UserRoutes = require('./UserRoutes');
const StreamingServicesRoutes = require('./StreamingServicesRoutes');
const ApplicationDetailsRoutes = require('./ApplicationDetailsRoutes');


router.use('/users', UserRoutes);
router.use('/StreamingServices', StreamingServicesRoutes);
router.use('/ApplicationDetails', ApplicationDetailsRoutes);

module.exports = router;