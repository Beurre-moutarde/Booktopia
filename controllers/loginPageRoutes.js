const router = require('express').Router();
const { User, StreamingServices, ApplicationDetails } = require('../models');
const withAuth = require('../utils/auth');



// Use withAuth middleware to prevent access to route
router.get('/matching', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Project }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('matching', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });



//   /login
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/matching');
      return;
    }
  
    res.render('matching');
  });



// fetch method: post re
// This route is used to log in a user by verifying their email and password against the stored values in the database.
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
  
      if (!user || !user.checkPassword(password)) {
        return res.status(401).json({ message: 'Incorrect email or password' });
      }
  
      req.session.save(() => {
        req.session.user_id = user.id;
        req.session.logged_in = true;
        res.json({ user, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(400).json(err);
    }
});