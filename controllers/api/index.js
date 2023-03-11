const router = require('express').Router();

const userRoutes = require('./userRoutes');
// const StreamingServicesRoutes = require('./StreamingServicesRoutes');
//const applicationDetailsRoutes = require('./applicationDetailsRoutes');
const sharePageRoutes = require('./sharePageRoutes');

router.use('/sharePage', sharePageRoutes);
router.use('/users', userRoutes);
//router.use('/sharePage',sharePageRoutes);

//router.use('/applicationDetails', applicationDetailsRoutes);

module.exports = router;