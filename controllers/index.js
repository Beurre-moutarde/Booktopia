const router = require('express').Router();
const colored = require('colored');


const homePageRoutes = require('./homePageRoutes');
const apiRoutes = require ('./api');

router.use('/', homePageRoutes);
router.use('/api', apiRoutes);

console.log(colored('Routes loaded', 'green'));

module.exports = router;