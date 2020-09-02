import React from "react";
import { Flex, SimpleGrid, Button } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import ResultCard from "../components/ResultCard";
const MovieResult = () => {
  // const imageURL = `/assets/${subscriptionName}`;
  // return <Image src="/assets/netflix-active.png" alt="moviename" />;
  return null;
};

function Results(props) {
  const results = props.location.state.results;
  return (
    <>
      <Flex overflow="auto" bg="black" p={4} gridArea="main">
        <Link to="/">
          <Button border="1px" variant="outline" color="white" bg="black">
            Back to search
          </Button>
        </Link>
        <SimpleGrid
          columns={[2, null, 3]}
          width="full"
          bg="black"
          w="80%"
          h="60vh"
          m="auto"
        >
          {results.map((result) => (
            <ResultCard {...result} />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}
export default Results;
