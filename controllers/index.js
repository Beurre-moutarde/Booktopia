const router = require('express').Router();


const homePageRoutes = require('./homePageRoutes');
const applicationsRoutes = require('./applicationsRoutes')

// const apiRoutes = require ('./api');


router.use('/', homePageRoutes);
router.use('/application', applicationsRoutes)

// router.use('/api', apiRoutes);


module.exports = router;