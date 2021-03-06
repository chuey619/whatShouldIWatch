const db = require("../db/config");
const User = require("./User");
class Movie {
  constructor(movie) {
    (this.id = movie.id || null),
      (this.title = movie.title),
      (this.ref_id = movie.ref_id),
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
  getCollections(id) {
    return db
      .manyOrNone(
        `SELECT users_collections.collection_id, collections.name FROM users_collections 
        JOIN collections ON collections.id = users_collections.collection_id
        WHERE media_id = $1 AND collections.user_id = $2
    `,
        [this.id, id]
      )
      .then((collection) => {
        return collection;
      });
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
      .then((savedMovie) => Object.assign(this, savedMovie))
      .catch(() => {
        console.log("movie already saved");
      });
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
// Movie.getByRefId("5d914028302b840050acbe62")
//   .then((foundMovie) => {
//     return foundMovie.getCollections();
//   })
//   .then((collection) => {
//     console.log(collection);
//   });
module.exports = Movie;
