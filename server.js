const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");

const authHelpers = require("./services/auth-helpers");

const authRouter = require("./routes/auth-router");
const mediaRouter = require("./routes/media-router");
const authRouter = require("./routes/auth-routes");
const collectionRouter = require("./routes/collection-routes");
const mediaRouter = require("./routes/media-router");

const app = express();
require("dotenv").config();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(cookieParser());

app.use(
  session({
    // key: process.env.SECRET_KEY,
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log("---------", req.user ? "req.user" : "Unauthenticated", req.path);
  next();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Ok");
});

app.use("/api/media", mediaRouter);
app.use("/api/auth", authRouter);
app.use("/api/collections", collectionRouter);
app.use("/api/media", mediaRouter);
app.use("/api/auth", authRouter);

app.use("*", (req, res) => {
  res.status(404).json({
    message: "not found",
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});
