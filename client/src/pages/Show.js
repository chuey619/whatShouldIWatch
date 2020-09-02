import React from "react";
import { Flex, Box, Button, SimpleGrid } from '@chakra-ui/core';
class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMedia: {},
      locations: [],
    };
  }
  componentDidMount() {
    fetch(`/api/media/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          currentMedia: json.data.collection,
          locations: json.data.collection.locations,
        });
      });
  }
  addTo = (collection) => {
    fetch(`/api/media/${this.props.match.params.id}/${collection}`, {
      method: "POST",
    });
  };
  removeFrom = (collection) => {
    fetch(`/api/media/${this.props.match.params.id}/${collection}`, {
      method: "DELETE",
    });
  };
  render() {
    return (
      <>
        <Flex 
         overflow="auto"
         p={4}
         gridArea="main"
        w="100%"
        h="auto"
        direction="column"
        >
        <div>
        {this.state.currentMedia !== {} ? (
          <div>
            <h1>{this.state.currentMedia.name}</h1>
            <ul>
              {this.state.locations &&
                this.state.locations.map((location) => {
                  return (
                    <li>
                      <a href={location.url}>{location.display_name}</a>
                    </li>
                  );
                })}
              <div>
                <Box display="flex" textAlign="right" color="grey.50" justifyContent="space-between">
              <button
                onClick={() => {
                  this.addTo("favorites");
                }}
              >
                Add to favorites
              </button>
              <button
                onClick={() => {
                  this.addTo("watch-later");
                }}
              >
                Watch Later
              </button>
              </Box>
              </div> 
            </ul>
          </div>
        ) : (
          <p>loading</p>
        )}
      </div>
      </Flex>
      </>
    );
  }
}

export default Show;
