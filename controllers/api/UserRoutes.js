const router = require("express").Router();
const { User } = require("../../models");

// This route is used to create new user.
router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await User.create({
      name,
      email,
      password,
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

// This route is used to log in a user by verifying their email and password against the stored values in the database.
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const userData = await User.findOne({ where: { email } });

    if (!userData || !userData.checkPassword(password)) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// This route handles a logout by using the destroy()method.
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
