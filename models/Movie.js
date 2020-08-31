const db = require("../db/config");
const User = require("./User");
class Movie {
  constructor(movie) {
    (this.id = movie.id || null),
      (this.title = movie.title),
      (this.ref_id = movie.ref_id),
      (this.likes = movie.likes);
      (this.picture = movie.picture);
  }
  static getAll() {
    return db.manyOrNone(`SELECT * FROM movies`).then((movies) => {
      return movies.map((movie) => {
        return new this(movie);
      });
    });
  }
  static getByRefId(id) {
    return db
      .oneOrNone(
        `
    SELECT * FROM movies where ref_id = $1
    `,
        id
      )
      .then((movie) => {
        if (movie) return new this(movie);
        throw new Error("movie not found");
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
  static addLike(movie_id, user_id) {
    return db 
    .one (`INSERT INTO likes 
    (movie_id, user_id)
      VALUES ($1, $2)`, [movie_id, user_id])
  }
  save() {
    return db
      .one(
        `
    INSERT INTO movies
    (title, ref_id, picture)
    VALUES
    ($/title/, $/ref_id/, $/picture/)
    RETURNING *
    `,
        this
      )
      .then((savedMovie) => Object.assign(this, savedMovie));
  }
  saveToFavorites(user_id) {
    return db.one(
      `
        INSERT INTO users_favorites
        (user_id, movie_id)
        VALUES
        ($1, $2)
        RETURNING *
        `,
      [user_id, this.id]
    );
  }

  saveToWatchLater(user_id) {
    return db.one(
      `
        INSERT INTO users_watch_later
        (user_id, movie_id)
        VALUES
        ($1, $2)
        RETURNING *
        `,
      [user_id, this.id]
    );
  }
  deleteFromFavorites(user_id) {
    return db.one(
      `
      DELETE FROM users_favorites
      WHERE user_id = $1 AND movie_id = $2
      RETURNING *
      `,
      [user_id, this.id]
    );
  }
  deleteFromWatchLater(user_id) {
    return db.one(
      `
      DELETE FROM users_watch_later
      WHERE user_id = $1 AND movie_id = $2
      RETURNING *
      `,
      [user_id, this.id]
    );
  }
}

module.exports = Movie;
