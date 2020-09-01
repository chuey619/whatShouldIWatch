import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/core";

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
        <Box textAlign="center">
          <Heading color="purple.300">About</Heading>
        </Box>
        <Box textAlign="center" color="white" fontSize="30pt">
          <p>How to work the app blahblahblahblahblah</p>
        </Box>
      </Flex>
    </>
  );
}

export default About;
