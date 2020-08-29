const express = require("express"),
  logger = require("morgan"),
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser"),
  session = require("express-session"),
  methodOverride = require("method-override"),
  passport = require("passport");

const app = express();
require("dotenv").config();

app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(
  session({
    key: process.env.SECRET_KEY,
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));

app.use((req, res, next) => {
  console.log("---------", req.user, req.path);
  next();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

const mediaRoutes = require("./routes/media-router");
app.use("/api/media", mediaRoutes);
const authRoutes = require("./routes/auth-routes");
app.use("/api/auth", authRoutes);
app.use("*", (req, res) => {
  res.status(404).json({
    message: "not found",
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    error: err,
    message: err.message,
  });
});
