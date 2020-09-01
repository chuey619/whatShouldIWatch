const bcrypt = require("bcryptjs");
const User = require("../models/User");

const usersController = {};

usersController.create = async (req, res, next) => {
  console.log(req.body);
  const salt = await bcrypt.genSaltSync();
  const hash = await bcrypt.hashSync(req.body.password, salt);
  new User({
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
  })
    .save()
    .then((user) => {
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
    })
    .catch(next);
};

module.exports = usersController;
