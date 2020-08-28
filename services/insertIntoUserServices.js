const db = require("../db/config");
const Service = require("../models/Service");
const usersServicesHelpers = {};

usersServicesHelpers.insert = (req, res, next) => {
  req.body.services.forEach((service) => {
    Service.getIdByName(service).then((foundServiceId) => {
      return db.one(
        `
          INSERT INTO users_services
          (user_id, service_id)
          VALUES
          ($1, $2)
          `,
        [req.user.id, foundServiceId]
      );
    });
  });
};

module.exports = usersServicesHelpers;
