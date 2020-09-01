const Collection = require("../models/Collection");
const Movie = require("../models/Movie");

const collectionsController = {};
collectionsController.index = async (req, res, next) => {
  resObj = { collections: [] };
  const collections = await Collection.getAllForUser(23);
  for (let i = 0; i < collections.length; i++) {
    let movieArr = await collections[i].getAllMoviesForCollection();
    await resObj.collections.push({
      name: collections[i].name,
      movies: movieArr,
    });
  }
  res.json({
    message: "ok",
    data: resObj,
  });
};
collectionsController.create = (req, res, next) => {
  new Collection({ name: req.body.name, user_id: req.user.id })
    .save()
    .then((savedCollection) => {
      res.json({
        message: "collection added",
        data: savedCollection,
      });
    })
    .catch(next);
};
collectionsController.show = (req, res, next) => {
  let name;
  Collection.findByNameForUser(req.params.name, 23)
    .then((foundCollection) => {
      name = foundCollection.name;
      return foundCollection.getAllMoviesForCollection();
    })
    .then((foundMovies) => {
      res.json({
        message: "ok",
        data: {
          name: name,
          movies: foundMovies,
        },
      });
    });
};
collectionsController.delete = (req, res, next) => {
  Collection.findByNameForUser(req.params.name, 23)
    .then((foundCollection) => {
      foundCollection.delete();
    })
    .then(() => {
      res.json({
        message: "collection deleted",
      });
    });
};
collectionsController.addToCollection = (req, res, next) => {
  Collection.findByNameForUser(req.params.name, 23)
    .then((foundCollection) => {
      foundCollection.addTo(parseInt(req.params.id));
    })
    .then(() => {
      res.json({
        message: "movie added succesfully",
      });
    });
};
collectionsController.removeFrom = (req, res, next) => {
  Collection.findByNameForUser(req.params.name, 23)
    .then((foundCollection) => {
      foundCollection.removeFrom(parseInt(req.params.id));
    })
    .then(() => {
      res.json({
        message: "movie removed succesfully",
      });
    });
};
module.exports = collectionsController;
