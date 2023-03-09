const router = require('express').Router();
const { ApplicationDetails } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/applicationDetail', async (req,res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = await User.create({
            name,
            email,
            password
          });
          req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;
            res.status(200).json(newUser);
          });
        } catch (err) {
          res.status(400).json(err);
        }
      });