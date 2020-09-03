import React from "react";
<<<<<<< HEAD
import { Flex, Box, Image, Link, List } from '@chakra-ui/core';
import LikeButton from '../components/like-button';
import Results from "./Results";
=======
import { Flex, Box, Image, Link } from "@chakra-ui/core";
>>>>>>> chuey/clean-up

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMedia: {},
      canWatch:[],
      cantWatch: [],
    };
  }
  // componentDidMount() {
  //   fetch(`/api/media/${this.props.match.params.id}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       this.setState({
  //         currentMedia: json.data.collection,
  //       });
  //       {this.props.user[0].user 
  //       ? json.data.collection.locations.map((location) => {
  //         this.props.user[0].user.services.includes(location.display_name)
  //         ?
  //         this.setState({canWatch: this.state.canWatch.concat(location),
  //         })
  //         : this.setState({
  //           cantWatch: this.state.cantWatch.concat(location),
  //         });
  //       })
  //       : this.setState({
  //         canWatch:
  //         json.data.collection.locations,
  //       });
  //     }
  //     });
  // }
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
<<<<<<< HEAD
        {/* <div>
        {this.state.currentMedia !== {} ? (
          <div>
            <Box fontWeight="bold" fontSize="20px">
            <h1>{this.state.currentMedia.name}:</h1>
            <Image h="500px" w="700px" rounded="full" src={this.state.currentMedia.picture}/>
            </Box>
            <ul>
              {this.state.canWatch.length > 0 
              ? ( 
                this.state.canWatch.map((location) => {
                  return (
                      <List size="100px">
                      <Link href={location.url} isExternal>
                      <Image src={location.icon}/>
                      </Link>
                    </List>
                  );
                })
              ) : (
                <>
              <h1>We could not find this on any of your subscriptions but you can watch here:{""}</h1>
              {this.state.cantWatch.map((location) => {
                return (
                  <List size="100px">
                    <Link href={location.url} isExternal>
                      <Image src={location.icon}/>
                    </Link>
                  </List>
                )
              })}
              </  >
              )}
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
      </div> */}
      </Flex>
=======
          <div>
            {this.state.currentMedia !== {} ? (
              <div>
                <Box fontWeight="bold" fontSize="20px">
                  <h1>{this.state.currentMedia.name}:</h1>
                  <Image
                    h="500px"
                    w="700px"
                    rounded="full"
                    src={this.state.currentMedia.picture}
                  />
                </Box>
                <ul>
                  {this.state.locations &&
                    this.state.locations.map((location) => {
                      return (
                        <Box
                          display="flex"
                          size="100px"
                          justifyContent="space-between"
                        >
                          <li>
                            <Link href={location.url} isExternal>
                              <Image src={location.icon} />
                            </Link>
                          </li>
                        </Box>
                      );
                    })}
                  <div>
                    <Box textAlign="right" color="blue.800">
                      <button
                        onClick={() => {
                          this.addTo("favorites");
                        }}
                      >
                        Add to favorites
                      </button>
                    </Box>
                    <Box textAlign="right" color="blue.800">
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
>>>>>>> chuey/clean-up
      </>
    );
  }
}

export default Show;
