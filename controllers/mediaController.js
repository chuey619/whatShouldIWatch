const Movie = require("../models/Movie");
const User = require("../models/User");
const mediaController = {};
const fetch = require("node-fetch");

mediaController.index = async (req, res, next) => {
  let movies = await Movie.getAllForUserByServices(req.user.id);
  return res.json({
    message: "ok",
    data: movies,
  });
};
mediaController.show = async (req, res, next) => {
  try {
    let response = await fetch(
      `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?country=us&source_id=${req.params.id}&source=utelly`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.API_KEY,
        },
      }
    );
    let json = await response.json();
    await new Movie({
      title: json.collection.name,
      ref_id: json.id,
      picture: json.collection.picture,
    }).save();
    return res.json({
      message: "ok",
      data: json,
    });
  } catch {
    next();
  }
};
mediaController.getFavorites = async (req, res, next) => {
  try {
    let foundUser = await User.getById(req.params.user_id);
    let favorites = await foundUser.getFavorites();
    return res.json({
      message: "data found",
      data: favorites,
    });
  } catch {
    next();
  }
};
mediaController.getWatchLater = async (req, res, next) => {
  try {
    let foundUser = await User.getById(req.params.user_id);
    let watchLater = await foundUser.getWatchLater();
    return res.json({
      message: "data found",
      data: watchLater,
    });
  } catch {
    next();
  }
};
mediaController.addToFavorties = async (req, res, next) => {
  try {
    let foundMovie = await Movie.getByRefId(req.params.id);
    await foundMovie.saveToFavorites(req.user.id);
    return res.json({
      message: "movie saved succesfully",
    });
  } catch {
    next();
  }
};
mediaController.addToWatchLater = async (req, res, next) => {
  try {
    let foundMovie = await Movie.getByRefId(req.params.id);
    await foundMovie.saveToWatchLater(req.user.id);
    return res.json({
      message: "added to watch later",
    });
  } catch {
    next();
  }
};
mediaController.deleteFromWatchLater = async (req, res, next) => {
  try {
    let foundMovie = await Movie.getByRefId(req.params.id);
    await foundMovie.deleteFromWatchLater(req.user.id);
    return res.json({
      message: "removed from watch later",
    });
  } catch {
    next();
  }
};
mediaController.deleteFromFavorites = async (req, res, next) => {
  try {
    let foundMovie = awaitMovie.getByRefId(req.params.id);
    await foundMovie.deleteFromFavorites(req.user.id);
    return res.json({
      message: "removed from favorites",
    });
  } catch {
    next();
  }
};
mediaController.search = async (req, res, next) => {
  try {
    let response = await fetch(
      `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${req.body.term}&country=us`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "x-rapidapi-host":
            "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.API_KEY,
        },
      }
    );
    console.log(response, "=============== response here");
    let json = await response.json();
    console.log(json, "=========== json here");
    return res.json({
      message: "ok",
      data: json,
    });
  } catch {
    next();
  }
};
mediaController.findCollections = async (req, res, next) => {
  try {
    let foundMovie = await Movie.getByRefId(req.params.id);
    console.log(foundMovie);
    let collections = await foundMovie.getCollections();
    return res.json({
      message: "ok",
      data: collections,
    });
  } catch {
    next();
  }
};
module.exports = mediaController;
