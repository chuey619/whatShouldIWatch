const db = require("../db/config");
const Movie = require("./Movie");
class Collection {
  constructor(collection) {
    (this.id = collection.id || null),
      (this.name = collection.name),
      (this.user_id = collection.user_id);
  }
  static getAllForUser(user_id) {
    return db
      .manyOrNone(`SELECT * FROM collections WHERE user_id = $1`, user_id)
      .then((collections) => {
        return collections.map((collection) => {
          return new this(collection);
        });
      });
  }
  static findByNameForUser(name, user_id) {
    let realName = name.replace("+", " ");
    return db
      .one(`SELECT * FROM collections WHERE name = $1 AND user_id = $2`, [
        realName,
        user_id,
      ])
      .then((found) => {
        if (found) return new this(found);
        else throw new Error("no collection found");
      });
  }
  async getAllMoviesForCollection() {
    const movies = await db.manyOrNone(
      `
    SELECT movies.* FROM movies
    JOIN users_collections ON
    movies.id = users_collections.media_id
    JOIN collections ON collections.id = users_collections.collection_id
    WHERE collections.user_id = $1 AND collections.name = $2
    `,
      [this.user_id, this.name]
    );
    return movies.map((movie) => {
      return new Movie(movie);
    });
  }
  save() {
    return db
      .one(
        `
      INSERT INTO collections 
      (name, user_id)
      VALUES
      ($/name/, $/user_id/)
      RETURNING *
      `,
        this
      )
      .then((savedCollection) => Object.assign(this, savedCollection));
  }
  rename(name) {
    this.name = name;
    return db.one(
      `UPDATE collections
        SET name = $1
        WHERE id = $2
        RETURNING *`,
      [this.name, this.id]
    );
  }
  delete() {
    this.deleteAll().then(() => {
      return db.one(
        `
                DELETE FROM collections WHERE id = $1
                RETURNING *
                `,
        this.id
      );
    });
  }
  addTo(media_id) {
    return db.one(
      `
        INSERT INTO users_collections
        (collection_id, media_id)
        VALUES
        ($1, $2)
        RETURNING *
        `,
      [this.id, media_id]
    );
  }
  removeFrom(media_id) {
    return db.one(
      `DELETE FROM users_collections WHERE collection_id = $1 AND media_id = $2
      RETURNING *`,
      [this.id, media_id]
    );
  }
  deleteAll() {
    return db.manyOrNone(
      `
      DELETE FROM users_collections WHERE collection_id = $1
      `,
      this.id
    );
  }
}
// Collection.findByNameForUser("cool movies", 23).then((foundCollection) => {
//   foundCollection.rename("cooler movies");
// });
// Collection.getAllForUser(23).then((collections) => console.log(collections));
// Collection.findByNameForUser("cooler movies", 23)
//   .then((foundCollection) => {
//     return foundCollection.getAllMoviesForCollection();
//   })
//   .then((movies) => {
//     console.log(movies);
//   });
module.exports = Collection;
