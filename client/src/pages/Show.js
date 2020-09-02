import React from "react";
import {
  Flex,
  Box, 
  Stack,
} from "@chakra-ui/core";
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
      width="full"
      align="left"
      w="100%"
      h="auto"
      p={2}
      gridArea="main"
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
                <Box mx={4} textAlign="right" w="100%" minW="360px">
              <button 
                onClick={() => {
                  this.addTo("favorites");
                }}
              >
                
                Add to favorites
              </button>
              </Box>
              <Box mx={4} textAlign="right" w="100%" minW="360px">
              <button 
                onClick={() => {
                  this.addTo("watch-later");
                }}
              >
                Watch Later
              </button>
              </Box>
            </ul>
            {/* <text as="h2" fontWeight="semibold" fontSize="xl" my={2}>
                Description
            </text>
            <Text fontWeight="light" fontSize="md">

            </Text> */}
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
