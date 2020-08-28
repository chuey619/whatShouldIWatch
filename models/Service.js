const db = require("../db/config");

class Service {
  constructor(service) {
    (this.id = service.id || null), (this.name = service.name);
  }
  static getIdByName(name) {
    return db
      .oneOrNone(
        `
    SELECT * FROM services
    WHERE name = $1
    `,
        name
      )
      .then((found) => {
        return new this(found);
      })
      .then((found) => {
        return found.id;
      });
  }
  save() {
    return db.one(`
    
    `);
  }
}

Service.getIdByName("hulu").then((found) => {
  console.log(found);
});

module.exports = Service;
