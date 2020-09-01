const Movie = require("../models/Movie");
const User = require("../models/User");
const mediaController = {};
const fetch = require("node-fetch");
const axios = require("axios");
const { getByRefId, likes } = require("../models/Movie");
mediaController.index = (req, res, next) => {
  Movie.getAllForUserByServices(23).then((movies) => {
    return res.json({
      message: "ok",
      data: movies,
    });
  });
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
      return json({
        message: 'ok',
        data: json,
      });
    })
    .catch(next);
};
mediaController.getFavorites = (req, res, next) => {
  User.getById(req.params.user_id)
    .then((foundUser) => {
      return foundUser.getFavorites();
    })
    .then((favorites) => {
      return res.json({
        message: "data found",
        data: favorites,
      });
    })
    .catch(next);
};
mediaController.getWatchLater = (req, res, next) => {
  User.getById(req.params.user_id)
    .then((foundUser) => {
      return foundUser.getWatchLater();
    })
    .then((watchLater) => {
      return res.json({
        message: "data found",
        data: watchLater,
      });
    })
    .catch(next);
};
mediaController.addToFavorties = (req, res, next) => {
  Movie.getByRefId(req.params.id)
    .then((foundMovie) => {
      foundMovie.saveToFavorites(req.user.id);
      return res.json({
        message: "movie saved succesfully",
      });
    })
    .catch(next);
};
mediaController.addToWatchLater = (req, res, next) => {
  Movie.getByRefId(req.params.id)
    .then((foundMovie) => {
      foundMovie.saveToWatchLater(23);
      return res.json({
        message: "added to watch later",
      });
    })
    .catch(next);
};

mediaController.addLike = (req, res, next) => {
  User.getById(req.params.user_id)
  .then((foundUser) => {
   foundUser.addLike();
      return res.json({
        message: 'added like',
      });
    })
    .catch(next);
};


mediaController.deleteFromWatchLater = (req, res, next) => {
  Movie.getByRefId(req.params.id)
    .then((foundMovie) => {
      foundMovie.deleteFromWatchLater(23);
      return res.json({
        message: "removed from watch later",
      });
    })
    .catch(next);
};
mediaController.deleteFromFavorites = (req, res, next) => {
  Movie.getByRefId(req.params.id)
    .then((foundMovie) => {
      foundMovie.deleteFromFavorites(23);
      return res.json({
        message: "removed from favorites",
      });
    })
    .catch(next);
};
mediaController.deleteLike = (req, res, next) => {
  User.getById(req.params.user_id)
  .then((foundUser) => {
    return foundUser.deleteLike();
  })
  .then((likes) => {
    return res.json({
      message: 'unliked',
    })
  })
  .catch(next);
}
mediaController.search = (req, res, next) => {
  console.log(req.body);
  fetch(
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
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return res.json({
        message: "ok",
        data: json,
      });
    })
    .catch(next);
};




module.exports = mediaController;
