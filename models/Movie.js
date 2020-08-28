const db = require("../db/config");

class Movie {
  constructor(movie) {
    (this.id = movie.id || null), (this.title = movie.title);
  }
  static getAll() {
    return db.manyOrNone(`SELECT * FROM movies`).then((movies) => {
      return movies.map((movie) => {
        return new this(movie);
      });
    });
  }
  static getAllForUserByServices(user_id) {
    return db.manyOrNone(
      `
    SELECT movies.* FROM users_services JOIN movies
    ON users_services.service_id = movies.service_id
    WHERE users_services.user_id = $1;
    `,
      user_id
    );
  }
}
Movie.getAllForUserByServices(3).then((res) => {
  console.log(res);
});

module.exports = Movie;
