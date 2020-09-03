import React from "react";
import { Flex, Box, Image, Link, List } from '@chakra-ui/core';
import LikeButton from '../components/like-button';
import Results from "./Results";

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
    console.log(this.props)
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
            <Box fontWeight="bold" fontSize="20px">
            <h1>{this.state.currentMedia.name}:</h1>
            <Image h="500px" w="700px" rounded="full" src={this.state.currentMedia.picture}/>
            </Box>
            <ul>
              {this.state.locations &&
                this.state.locations.map((location) => {
                  return (
                this.props.user[0].user.services.includes(location.display_name) ?
                  
                      <List size="100px">
                      <Link href={location.url} isExternal>
                      <Image src={location.icon}/>
                      </Link>
                    </List>
                     : 
                  <p>no subscriptions</p> 
                 )})}
                <div>
                <Box fontSize="25px" textAlign="right" color="blue.800">
                <button
                onClick={() => {
                  this.addTo("favorites");
                }}
              >
                Add to favorites
              </button>
              </Box>
              <Box fontSize="25px" textAlign="right" color="blue.800">
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
