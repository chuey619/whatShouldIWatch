import React from "react";
import axios from "axios";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      results: [],
    };
  }
  handleChange = (e) => {
    this.setState({
      term: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
        {
          headers: {
            "content-type": "application/octet-stream",
            "x-rapidapi-host":
              "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": process.env.API_KEY,
            useQueryString: true,
          },
          params: {
            term: this.state.term,
            country: "us",
          },
        }
      )
      .then((response) => {
        //when auth is up and running we have to find a way to get user so we can check against services

        // response.data.results.map((result) => {
        //   result.locations.forEach((location) => {
        //
        //     // if (req.user.services.incluces(location.display_name)) {
        //     //   return result;
        //     // }
        //   });
        // });
        this.setState({
          results: response.data.results,
        });
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // onclick should link to /api/media/result.id to get to show page
  // reference to movie is saved on show page so you can save to collections from there
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.term}
            placeholder="Search by title"
            onChange={this.handleChange}
            name="term"
          />
          <input type="submit" />
        </form>
        <div>
          {this.state.results &&
            this.state.results.map((movie) => {
              return <p>{movie.name}</p>;
            })}
        </div>
      </div>
    );
  }
}

export default Search;
