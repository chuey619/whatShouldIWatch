const bcrypt = require("bcryptjs");
const User = require("../models/User");

const usersController = {};

usersController.create = async (req, res, next) => {
  console.log(req.body.services, "services");
  try {
    const salt = await bcrypt.genSaltSync();
    const hash = await bcrypt.hashSync(req.body.user.password, salt);
    let user = await new User({
      username: req.body.user.username,
      email: req.body.user.email,
      password_digest: hash,
      services: req.body.user.services,
    });
    await user.save();
    await user.setServices();
    req.login(user, (err) => {
      if (err) return next(err);
      res.status(201).json({
        message: "user created",
        auth: true,
        data: {
          user,
        },
      });
    });
  } catch {
    next();
  }
};
usersController.manageServices = async (req, res, next) => {
  try {
    console.log(req.body);
    let user = await User.findByUsername(req.user.username);
    await user.manageServices(req.body);
    let services = await user.getServices();
    return res.json({
      message: "subscriptions managed",
      data: services,
    });
  } catch {
    next();
  }
};

module.exports = usersController;
