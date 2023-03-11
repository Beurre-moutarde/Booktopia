const router = require('express').Router();

const userRoutes = require('./userRoutes');
// const StreamingServicesRoutes = require('./StreamingServicesRoutes');
//const applicationDetailsRoutes = require('./applicationDetailsRoutes');
const sharePageRoutes = require('./sharePageRoutes');
const profileMatchingRoutes = require('./profileMatching')

router.use('/sharePage', sharePageRoutes);
router.use('/users', userRoutes);
router. use('/profileMatching',profileMatchingRoutes)
//router.use('/sharePage',sharePageRoutes);

//router.use('/applicationDetails', applicationDetailsRoutes);

module.exports = router;