const Collection = require("../models/Collection");
const Movie = require("../models/Movie");

const collectionsController = {};
collectionsController.index = async (req, res, next) => {
  try {
    resObj = { collections: [] };
    const collections = await Collection.getAllForUser(req.user.id);
    for (let i = 0; i < collections.length; i++) {
      let movieArr = await collections[i].getAllMoviesForCollection();
      await resObj.collections.push({
        name: collections[i].name,
        movies: movieArr,
      });
    }
    return res.json({
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
  try {
    let foundCollection = await Collection.findByNameForUser(
      req.params.name,
      req.user.id
    );
    let name = foundCollection.name;
    let foundMedia = await foundCollection.getAllMoviesForCollection();
    return res.json({
      message: "ok",
      data: {
        name: name,
        movies: foundMedia,
      },
    });
  } catch {
    next();
  }
};
collectionsController.delete = async (req, res, next) => {
  try {
    let foundCollection = await Collection.findByNameForUser(
      req.params.name,
      req.user.id
    );
    await foundCollection.delete();
    return res.json({
      message: "collection deleted",
    });
  } catch {
    next();
  }
};
collectionsController.addToCollection = async (req, res, next) => {
  try {
    let foundCollection = await Collection.findByNameForUser(
      req.params.name,
      req.user.id
    );
    await foundCollection.addTo(parseInt(req.params.id));
    return res.json({
      message: "movie added succesfully",
    });
  } catch {
    next();
  }
};
collectionsController.removeFrom = async (req, res, next) => {
  try {
    let foundCollection = await Collection.findByNameForUser(
      req.params.name,
      req.user.id
    );
    await foundCollection.removeFrom(parseInt(req.params.id));
    return res.json({
      message: "movie removed succesfully",
    });
  } catch {
    next();
  }
};

module.exports = collectionsController;
