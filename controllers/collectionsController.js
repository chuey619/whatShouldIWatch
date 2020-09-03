const Collection = require("../models/Collection");
const Movie = require("../models/Movie");

const collectionsController = {};
collectionsController.index = async (req, res, next) => {
  try {
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
  } catch {
    next();
  }
};
collectionsController.create = async (req, res, next) => {
  try {
    let collection = new Collection({
      name: req.body.name,
      user_id: req.user.id,
    });
    let savedCollection = await collection.save();
    return res.json({
      message: "collection added",
      data: savedCollection,
    });
  } catch {
    next();
  }
};
collectionsController.show = async (req, res, next) => {
  let foundCollection = await Collection.findByNameForUser(req.params.name, 23);
  let name = foundCollection.name;
  let foundMedia = await foundCollection.getAllMoviesForCollection();
  return res.json({
    message: "ok",
    data: {
      name: name,
      movies: foundMedia,
    },
  });
};
collectionsController.delete = async (req, res, next) => {
  let foundCollection = await Collection.findByNameForUser(req.params.name, 23);
  await foundCollection.delete();
  return res.json({
    message: "collection deleted",
  });
};
collectionsController.addToCollection = async (req, res, next) => {
  let foundCollection = await Collection.findByNameForUser(req.params.name, 23);
  await foundCollection.addTo(parseInt(req.params.id));
  return res.json({
    message: "movie added succesfully",
  });
};
collectionsController.removeFrom = async (req, res, next) => {
  let foundCollection = await Collection.findByNameForUser(req.params.name, 23);
  await foundCollection.removeFrom(parseInt(req.params.id));
  return res.json({
    message: "movie removed succesfully",
  });
};
module.exports = collectionsController;
