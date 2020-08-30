const Movie = require("../models/Movie");
const mediaController = {};
const fetch = require("node-fetch");
const axios = require("axios");
mediaController.index = (req, res, next) => {
  Movie.getAllForUserByServices(req.user.id);
};
mediaController.search = (req, res, next) => {
  res.results = [];
  console.log(req.body);
  axios({
    method: "GET",
    url:
      "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host":
        "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
      "x-rapidapi-key": "1621432a01mshfec417d2fd5717fp174e10jsnfbbf5825f3e2",
      useQueryString: true,
    },
    params: {
      term: req.body.term,
      country: "uk",
    },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = mediaController;
