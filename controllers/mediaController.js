const Movie = require("../models/Movie");
const User = require("../models/User");
const mediaController = {};
const fetch = require("node-fetch");
const axios = require("axios");
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
      new Movie({ title: json.collection.name, ref_id: json.id }).save();
      return json;
    });
};
// mediaController.addToFavorties = (req, res, next) => {};

module.exports = mediaController;
