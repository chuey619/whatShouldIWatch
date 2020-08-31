const Movie = require("../models/Movie");
const User = require("../models/User");
const mediaController = {};
const fetch = require("node-fetch");
const axios = require("axios");
const { getByRefId } = require("../models/Movie");
mediaController.index = (req, res, next) => {
  Movie.getAllForUserByServices(req.user.id);
};
mediaController.show = (req, res, next) => {
  fetch(
    `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?country=us&source_id=${req.params.id}&source=utelly`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.API_KEY,
      },
    }
  )
    .then((res) => res.json())
    .then((json) => {
      new Movie({
        title: json.collection.name,
        ref_id: json.id,
        picture: json.collection.picture,
      }).save();
      return json;
    });
}; 

mediaController.addToFavorties = (req, res, next) => {
  Movie.getByRefId(req.params.id).then((foundMovie) => {
    foundMovie.saveToFavorites(23);
    next();
  });
};
mediaController.addToWatchLater = (req, res, next) => {
  Movie.getByRefId(req.params.id).then((foundMovie) => {
    foundMovie.saveToWatchLater(23);
    next();
  });
};

Movie.addLike(req.user_id) 
  MovieLikes++;

mediaController.deleteFromWatchLater = (req, res, next) => {
  Movie.getByRefId(req.params.id).then((foundMovie) => {
    foundMovie.deleteFromWatchLater(23);
    next();
  });
};
mediaController.deleteFromFavorites = (req, res, next) => {
  Movie.getByRefId(req.params.id).then((foundMovie) => {
    foundMovie.deleteFromFavorites(23);
    next();
  });
};
mediaController.deleteLike = (req, res, next) => {
  Movie.getByRefId(MovieLikes = counter-1)
};



module.exports = mediaController;
