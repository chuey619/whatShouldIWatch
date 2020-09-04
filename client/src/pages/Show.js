import React from "react";
import {
  Flex,
  Box,
  Image,
  Link,
  List,
  Heading,
  Text,
  ListItem,
  Button,
  ListIcon,
} from "@chakra-ui/core";
import LikeButton from "../components/like-button";
import Results from "./Results";
import { AddToCollectionPopover } from "../components";

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMedia: {},
      canWatch: [],
      cantWatch: [],
      collections: [],
      id: "",
    };
  }
  componentDidMount() {
    fetch(`/api/media/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          currentMedia: json.data.collection,
          id: json.our_id,
        });
        {
          this.props.user[0].user
            ? json.data.collection.locations.map((location) => {
                this.props.user[0].user.services.includes(location.display_name)
                  ? this.setState({
                      canWatch: this.state.canWatch.concat(location),
                    })
                  : this.setState({
                      cantWatch: this.state.cantWatch.concat(location),
                    });
              })
            : this.setState({
                canWatch: json.data.collection.locations,
              });
        }
      });

    fetch(`/api/media/${this.props.match.params.id}/collections`)
      .then((res) => res.json())
      .then((json) => {
        console.log("TESTING", json);
        this.setState({
          collections: json.data,
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

  renderCanWatch = () => {
    return (
      <>
        <Text fontSize="16pt" color="white" pb="20px">
          On:
        </Text>
        {this.state.canWatch.map((location) => {
          return (
            <ListItem>
              <Link href={location.url} isExternal>
                <Image src={location.icon} />
              </Link>
            </ListItem>
          );
        })}
        ;
      </>
    );
  };

  renderWatchHere = () => {
    return (
      <>
        <Text fontSize="16pt" color="white" pb="20px">
          You can't watch this with your current subscriptions. Try here:{""}
        </Text>
        {this.state.cantWatch.map((location) => {
          return (
            <ListItem>
              <Link href={location.url} isExternal>
                <Image src={location.icon} />
              </Link>
            </ListItem>
          );
        })}
      </>
    );
  };

  render() {
    return (
      <>
        <Box
          display="flex"
          width="full"
          alignItems="center"
          bg="black"
          w="100%"
          h="auto"
          p={4}
          gridArea="main"
          justifyContent="center"
          flexDirection="row"
        >
          {this.state.currentMedia !== {} ? (
            <>
              <Box mr="50px">
                <Image
                  w="500px"
                  borderRadius="10px"
                  src={this.state.currentMedia.picture}
                />
              </Box>
              <Box ml="50px">
                <Box display="flex" flexDirection="row">
                  <Heading
                    fontWeight="bold"
                    fontSize="35pt"
                    color="white"
                    pb="30px"
                    mr="20px"
                  >
                    {this.state.currentMedia.name}
                  </Heading>
                  <AddToCollectionPopover
                    user={this.props.user[0].user}
                    id={this.state.id}
                    currentCollections={this.state.collections}
                  />
                </Box>
                <List>
                  {this.state.canWatch.length > 0
                    ? this.renderCanWatch()
                    : this.renderWatchHere()}
                  <Text fontSize="16pt" color="white" pb="20px" pt="20px">
                    Currently saved in:{" "}
                  </Text>

                  {this.state.collections
                    ? this.state.collections.map((c) => (
                        <ListItem color="white" pb="10px">
                          <ListIcon icon="check" color="purple.400" />
                          {c.name}
                        </ListItem>
                      ))
                    : ""}
                </List>
              </Box>
            </>
          ) : (
            <Text>loading</Text>
          )}
        </Box>
      </>
    );
  }
}

export default Show;
