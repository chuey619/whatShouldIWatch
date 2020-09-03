import React from "react";

import Search from "./Search";
import { Box, Heading } from "@chakra-ui/core";

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
        <p style={{ color: "#808080" }}>
          Search from six services and save your favorites for later!
        </p>
        <Search />
      </Box>
    </>
  );
}

export default Home;
