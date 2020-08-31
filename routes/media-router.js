const mediaRouter = require("express").Router();
const mediaController = require("../controllers/mediaController");

mediaRouter.get("/", mediaController.index);
mediaRouter.get("/user/:user_id/favorites", mediaController.getFavorites);
mediaRouter.get("/user/:user_id/watch-later", mediaController.getWatchLater);
mediaRouter.get("/:id", mediaController.show);
mediaRouter.post("/:id/favorite", mediaController.addToFavorties);
mediaRouter.delete("/:id/favorite", mediaController.deleteFromFavorites);
mediaRouter.post("/:id/watch-later", mediaController.addToWatchLater);
mediaRouter.delete("/:id/watch-later", mediaController.deleteFromWatchLater);
module.exports = mediaRouter;
