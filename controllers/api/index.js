const router = require('express').Router();

const userRoutes = require('./UserRoutes');
// const StreamingServicesRoutes = require('./StreamingServicesRoutes');
//const applicationDetailsRoutes = require('./applicationDetailsRoutes');
const sharePageRoutes = require('./sharePageRoutes');
const profileMatchingRoutes = require('./profileMatching')

router.use('/sharePage', sharePageRoutes);
router.use('/users', userRoutes);
router. use('/profileMatching',profileMatchingRoutes)
module.exports = router;