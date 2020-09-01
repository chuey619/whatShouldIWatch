import React from "react";
import axios from "axios";
import { Box } from "@chakra-ui/core";
//when auth is up and running we have to find a way to get user so we can check against services

// response.data.results.map((result) => {
//   result.locations.forEach((location) => {
//
//     // if (req.user.services.incluces(location.display_name)) {
//     //   return result;
//     // }
//   });
// });
// this.setState({
//   results: res.data.results,
// });
// return;

import React from "react";
import axios from "axios";
import { Link, Router, Redirect } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      results: [],
      redirect: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      term: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    fetch("api/media/search", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({
          results: json.data.results,
          redirect: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // onclick should link to /api/media/result.id to get to show page
  // reference to movie is saved on show page so you can save to collections from there
  render() {
    return (
      <Box gridArea="main">
        {this.state.redirect && (
          <Redirect
            to={{
              pathname: "/results",
              state: { results: this.state.results },
            }}
          />
        )}
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
      </Box>
    );
  }
}

export default Search;
