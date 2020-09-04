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
    console.log(this.props);
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
                  <AddToCollectionPopover />
                </Box>
                <Text fontSize="16pt" color="white" pb="20px">
                  On:
                </Text>
                <List spacing="-60px">
                  {this.state.canWatch.length > 0 ? (
                    this.state.canWatch.map((location) => {
                      return (
                        <ListItem size="100px">
                          <Link href={location.url} isExternal>
                            <Image src={location.icon} />
                          </Link>
                        </ListItem>
                      );
                    })
                  ) : (
                    <>
                      <Text>
                        We could not find this on any of your subscriptions but
                        you can watch here:{""}
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
                  )}
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
