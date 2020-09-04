const db = require("../db/config");
const Movie = require("./Movie");
const Service = require("./Service");
class User {
  constructor(user) {
    this.id = user.id || null;
    this.username = user.username;
    this.email = user.email;
    this.password_digest = user.password_digest;
    this.services = user.services;
  }

  static findByUsername(username) {
    return db
      .oneOrNone("SELECT * FROM users WHERE username = $1", username)
      .then((user) => {
        if (user) return new this(user);
      });
  }

  static findByUserEmail(email) {
    return db
      .oneOrNone("SELECT * FROM users WHERE email = $1", email)
      .then((user) => {
        if (user) return new this(user);
      });
  }

  static getById(id) {
    return db
      .oneOrNone(`SELECT * FROM users where id = $1`, id)
      .then((user) => {
        if (user) {
          return new this(user);
        } else {
          throw new Error("user not found");
        }
      });
  }
  async setServices() {
    for (let i = 0; i < this.services.length; i++) {
      let serviceId = await Service.getIdByName(this.services[i]);
      await db.one(
        `
      INSERT INTO users_services
      (user_id, service_id)
      VALUES
      ($1, $2)
      RETURNING *
      `,
        [this.id, serviceId]
      );
    }
    return this;
  }

  getServices() {
    return db
      .manyOrNone(
        `
      SELECT services.* FROM services JOIN users_services
      ON services.id = users_services.service_id
      WHERE users_services.user_id = $1
      `,
        this.id
      )
      .then((services) => {
        return services.map((service) => service.name);
      });
  }
  getFavorites() {
    return db
      .manyOrNone(
        `
    SELECT movies.* FROM users_favorites 
    JOIN movies ON movies.id = users_favorites.movie_id
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
      .then((user) => Object.assign(this, user));
  }
  async manageServices(serviceArr) {
    let userServices = await this.getServices();

    userServices.forEach(async (service) => {
      if (!serviceArr.includes(service)) {
        let serviceId = await Service.getIdByName(service);
        try {
          return db.one(
            `
          DELETE FROM users_services 
          WHERE user_id = $1 AND service_id = $2
          RETURNING *
          `,
            [this.id, serviceId]
          );
        } catch {
          console.log("service already added");
        }
      }
    });
    serviceArr.forEach(async (service) => {
      if (!userServices.includes(service)) {
        let serviceId = await Service.getIdByName(service);
        return db.one(
          `
          INSERT INTO users_services
          (user_id, service_id)
          VALUES
          ($1, $2)
          RETURNING *
          `,
          [this.id, serviceId]
        );
      }
    });
  }
}

module.exports = User;
