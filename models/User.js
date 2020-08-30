const db = require("../db/config");

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
  getFavorites() {
    return db.manyOrNone(
      `
    SELECT movies.ref_id FROM users_favorites JOIN movies
    ON movies.id = user_favorites.movie_id
    WHERE user_favorites.user_id = $1
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

// User.getByUsername("test001").then((user) => {
//   user.setServices().then(() => {
//     console.log(user.services);
//   });
// });
module.exports = User;
