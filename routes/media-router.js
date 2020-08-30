const mediaRouter = require("express").Router();
const mediaController = require("../controllers/mediaController");

mediaRouter.get("/", mediaController.index);
mediaRouter.get("/:id", mediaController.show);
module.exports = mediaRouter;
