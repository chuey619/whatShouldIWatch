const collectionRouter = require("express").Router();
const collectionsController = require("../controllers/collectionsController");
collectionRouter.get("/", collectionsController.index);
collectionRouter.post("/", collectionsController.create);
collectionRouter.delete("/:name", collectionsController.delete);
collectionRouter.get("/:name", collectionsController.show);
collectionRouter.post("/:name/:id", collectionsController.addToCollection);
collectionRouter.delete("/:name/:id", collectionsController.removeFrom);

module.exports = collectionRouter;
