const Movie = require("../models/Movie");
const mediaController = {};

mediaController.index = (req, res, next) => {
  Movie.getAllForUserByServices(req.user.id);
};

module.exports = mediaController;
