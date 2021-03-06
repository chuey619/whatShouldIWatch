const mediaRouter = require("express").Router();
const mediaController = require("../controllers/mediaController");

mediaRouter.get("/", mediaController.index);
mediaRouter.post("/search", mediaController.search);
mediaRouter.get("/user/:user_id/favorites", mediaController.getFavorites);
mediaRouter.get("/user/:user_id/watch-later", mediaController.getWatchLater);
mediaRouter.get("/:id", mediaController.show);
mediaRouter.post("/:id/favorites", mediaController.addToFavorties);
mediaRouter.delete("/:id/favorites", mediaController.deleteFromFavorites);
mediaRouter.post("/:id/watch-later", mediaController.addToWatchLater);
mediaRouter.delete("/:id/watch-later", mediaController.deleteFromWatchLater);
mediaRouter.get("/:id/collections", mediaController.findCollections);

module.exports = mediaRouter;
