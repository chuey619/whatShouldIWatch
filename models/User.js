const db = require("../db/config");
const Movie = require("./Movie");
class User {
  constructor(user) {
    (this.id = user.id || null),
      (this.username = user.username),
      (this.email = user.email),
      (this.password_digest = user.password_digest);
    this.services = [];
  }
  static getByUsername(username) {
    return db
      .oneOrNone(
        `
            SELECT * FROM users where username = $1
            `,
        username
      )
      .then((user) => {
        if (user) {
          return new this(user);
        } else {
          throw new Error("user not found");
        }
      });
  }
  static getById(id) {
    return db
      .oneOrNone(
        `
            SELECT * FROM users where id = $1
            `,
        id
      )
      .then((user) => {
        if (user) {
          return new this(user);
        } else {
          throw new Error("user not found");
        }
      });
  }
  getFavorites() {
    return db
      .manyOrNone(
        `
    SELECT movies.* FROM users_favorites JOIN movies
    ON movies.id = users_favorites.movie_id
    WHERE users_favorites.user_id = $1
    `,
        this.id
      )
      .then((movies) => {
        return movies;
      });
  }
  getWatchLater() {
    return db.manyOrNone(
      `
    SELECT movies.* FROM users_watch_later JOIN movies
    ON movies.id = users_watch_later.movie_id
    WHERE users_watch_later.user_id = $1
    `,
      this.id
    );
  }
  save() {
    return db
      .one(
        `
          INSERT INTO users
          (username, email, password_digest)
          VALUES ($/username/, $/email/, $/password_digest/)
          RETURNING *
          `,
        this
      )
      .then((savedUser) => Object.assign(this, savedUser));
  }
  setServices() {
    return db
      .manyOrNone(
        `
      SELECT services.name FROM services JOIN users_services
      ON services.id = users_services.service_id
      WHERE users_services.user_id = $1
      `,
        this.id
      )
      .then((services) => {
        services.map((service) => {
          this.services.push(service.name);
        });
      });
  }
}

module.exports = User;
