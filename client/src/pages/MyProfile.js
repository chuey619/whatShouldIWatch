import React from "react";
import { Flex, Heading, Box, Stack, Image } from "@chakra-ui/core";

function Feature({ title, ...rest }) {
  return (
    <Box p={5} shadow="md" bg="white" borderWidth="1px" {...rest}>
      <Image src="/assets/hulu-active.png" width="80px" height="80px"></Image>
      <Heading fontSize="sm">{title}</Heading>
    </Box>
  );
}

function MyProfile() {
  return (
    <>
      <Flex
        width="full"
        align="center"
        bg="black"
        w="100%"
        h="80vh"
        p={4}
        direction="column"
        gridArea="main"
        overflow="scroll"
      >
        <Box>
          <Heading color="purple.300">Welcome!</Heading>
        </Box>
        <Box textAlign="center" color="white" fontSize="16pt">
          <p>View your collections and manage your subscriptions below.</p>
        </Box>
        <Stack isInline spacing={8} overflow="scroll" mt="1vh" mb="1vh">
          <Feature title="Plan Money" />
          <Feature title="Save Money" />
          <Feature title="Save Money" />
          <Feature title="Save Money" />
          <Feature title="Save Money" />
          <Feature title="Save Money" />
          <Feature title="Save Money" />
          <Feature title="Save Money" />
          <Feature title="Save Money" />
          <Feature title="Save Money" />
          <Feature title="Save Money" />
        </Stack>
        <Stack isInline spacing={8} overflow="scroll" mt="1vh" mb="1vh">
          <Feature title="Plan Money" />
          <Feature title="Save Money" />
          <Feature title="Save Money" />
          <Feature title="Save Money" />
          <Feature title="Save Money" />
          <Feature title="Save Money" />
          <Feature title="Save Money" />
          <Feature title="Save Money" />
          <Feature title="Save Money" />
          <Feature title="Save Money" />
          <Feature title="Save Money" />
        </Stack>
      </Flex>
    </>
  );
}

export default MyProfile;
