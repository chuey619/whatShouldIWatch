const express = require("express");
const authRouter = express.Router();
const usersController = require("../controllers/users-controller");
const passport = require("../services/local");

authRouter.post("/register", usersController.create);

authRouter.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        data: {
          errors: [
            {
              title: "Invalid Login",
              description: "username or password was incorrect",
            },
          ],
        },
      });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).json({
        data: {
          user,
        },
      });
    });
  })(req, res, next);
});

authRouter.get("/me", (req, res) => {
  if (req.user)
    return res.status(200).json({
      message: "ok",
      data: {
        user: req.user,
      },
    });
  else
    return res.status(200).json({
      message: "Retry Login",
      data: {
        user: null,
      },
    });
});

authRouter.get("/logout", (req, res) => {
  req.logout();
  res.json({
    message: "logged out",
    auth: false,
    data: {
      user: null,
    },
  });
});

module.exports = authRouter;
