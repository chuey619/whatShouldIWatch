const db = require("../db/config");
const User = require("./User");
class Movie {
  constructor(movie) {
    (this.id = movie.id || null),
      (this.title = movie.title),
      (this.ref_id = movie.ref_id);
  }
  static getAll() {
    return db.manyOrNone(`SELECT * FROM movies`).then((movies) => {
      return movies.map((movie) => {
        return new this(movie);
      });
    });
  }
  static getAllForUserByServices(user_id) {
    return db
      .manyOrNone(
        `
    SELECT movies.* FROM users_services JOIN movies
    ON users_services.service_id = movies.service_id
    WHERE users_services.user_id = $1;
    `,
        user_id
      )
      .then((movies) => {
        return movies.map((movie) => {
          return new this(movie);
        });
      });
  }
  save() {
    return db
      .one(
        `
    INSERT INTO movies
    (title, ref_id)
    VALUES
    ($/title/, $/ref_id/)
    RETURNING *
    `,
        this
      )
      .then((savedMovie) => Object.assign(this, savedMovie));
  }
  saveToFavorites(username) {
    User.getByUsername(username).then((foundUser) => {
      return db.one(
        `
        INSERT INTO user_favorites
        (user_id, movie_id)
        VALUES
        ($1, $2)
        `,
        [foundUser.id, this.id]
      );
    });
  }
}

module.exports = Movie;
