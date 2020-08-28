const axios = require("axios");
require("dotenv").config();
const user = {
  services: ["Hulu", "Netflix"],
};
axios({
  method: "GET",
  url:
    "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host":
      "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    "x-rapidapi-key": process.env.API_KEY,
    useQueryString: true,
  },
  params: {
    term: "The Office",
    country: "us",
  },
})
  .then((response) => {
    response.data.results.forEach((result) => {
      result.locations.forEach((location) => {
        if (user.services.includes(location.display_name)) {
          console.log(result.name);
        }
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });
