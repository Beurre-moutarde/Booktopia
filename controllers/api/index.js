const router = require('express').Router();
const UserRoutes = require('./userRoutes');
// const StreamingServicesRoutes = require('./StreamingServicesRoutes');
const ApplicationDetailsRoutes = require('./applicationDetailsRoutes');


router.use('/users', UserRoutes);
// router.use('/StreamingServices', StreamingServicesRoutes);
router.use('/applicationDetails', ApplicationDetailsRoutes);

module.exports = router;