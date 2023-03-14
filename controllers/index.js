const router = require('express').Router();


const homePageRoutes = require('./homePageRoutes');
const apiRoutes = require ('./api');

router.use('/', homePageRoutes);
router.use('/api', apiRoutes);

module.exports = router;