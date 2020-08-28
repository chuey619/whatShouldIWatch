const express = require('express');
const authRouter = express.Router();
const passport = require('../services/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');

authRouter.post('/reigster', usersController.create);

