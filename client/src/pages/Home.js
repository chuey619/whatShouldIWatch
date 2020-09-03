import React from "react";

import Search from "./Search";
import {
  useDisclosure,
  Box,
  Heading,
  FormControl,
  Input,
  Button,
  Text,
} from "@chakra-ui/core";
import useQuery from "../hooks/useQuery";

function Home(props) {
  return (
    <>
      <Box
        bg="black"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridArea="main"
        margin="auto"
        width="100%"
        height="100%"
      >
        <Heading marginTop="10%" color="white">
          Welcome {props.user[0].user && props.user[0].user.username}, Browse
          movies and shows in one click.
        </Heading>
        <Text style={{ color: "#808080" }} fontSize="20pt">
          Search from six services and save your favorites for later!
        </Text>
        <Search />
      </Box>
    </>
  );
}

export default Home;
