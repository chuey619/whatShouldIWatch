import React from "react";
import { Flex, SimpleGrid, Link, Button } from "@chakra-ui/core";

const MovieResult = () => {
  // const imageURL = `/assets/${subscriptionName}`;
  // return <Image src="/assets/netflix-active.png" alt="moviename" />;
  return null;
};

function Results() {
  return (
    <>
      <Flex bg="black" p={4} gridArea="main">
        <Link>
          <Button border="1px" variant="outline" color="white" bg="black">
            Back to search
          </Button>
        </Link>
      </Flex>
      <SimpleGrid
        columns={[2, null, 3]}
        spacing="40px"
        width="full"
        bg="black"
        w="100%"
        h="80vh"
        p={4}
        overflow="scroll"
      >
        <MovieResult />
      </SimpleGrid>
    </>
  );
}
export default Results;
