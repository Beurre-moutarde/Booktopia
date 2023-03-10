const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const StreamingServicesRoutes = require('./StreamingServicesRoutes');
const applicationDetailsRoutes = require('./applicationDetailsRoutes');


router.use('/users', userRoutes);

router.use('/applicationDetails', applicationDetailsRoutes);

module.exports = router;