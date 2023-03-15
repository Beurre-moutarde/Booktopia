const router = require('express').Router();

const userRoutes = require('./UserRoutes');
const sharePageRoutes = require('./sharePageRoutes');
const profileMatchingRoutes = require('./profileMatching')

router.use('/sharePage', sharePageRoutes);
router.use('/users', userRoutes);
router. use('/profileMatching',profileMatchingRoutes)

module.exports = router;
router.use('/sharePage', sharePageRoutes);
router.use('/users', userRoutes);
router. use('/profileMatching',profileMatchingRoutes)
module.exports = router;