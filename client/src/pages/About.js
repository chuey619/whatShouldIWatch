import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/core";

function About() {
  return (
    <>
      <Flex
        width="full"
        align="center"
        justifyContent="center"
        bg="black"
        w="100%"
        h="auto"
        p={4}
        direction="column"
        gridArea="main"
      >
        <Box margin="0 auto" textAlign="center">
          <Heading color="purple.300">About</Heading>
          <Text
            color="white"
            margin="0 auto"
            textAlign="center"
            w="40%"
            fontSize="4xl"
          >
            Welcome to What To Watch. Anyone is welcome to search shows and
            movies to find where you can watch the show, or, sign up to create
            collections and filter search results based on the services you are
            subscribed to!
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default About;
