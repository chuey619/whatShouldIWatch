const mediaRouter = require("express").Router();
const mediaController = require("../controllers/mediaController");

mediaRouter.get("/", mediaController.index);
mediaRouter.get("/:id", mediaController.show);
mediaRouter.post("/:id/favorite", mediaController.addToFavorties);
mediaRouter.delete("/:id/favorite", mediaController.deleteFromFavorites);
mediaRouter.post("/:id/watch-later", mediaController.addToWatchLater);
mediaRouter.delete("/:id/watch-later", mediaController.deleteFromWatchLater);
module.exports = mediaRouter;
