import React from "react";
import { Flex, SimpleGrid, Button } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import ResultCard from "../components/ResultCard";

function Results(props) {
  const results = props.location.state.results;

  return (
    <>
      <Flex overflow="auto" bg="black" p={4} gridArea="main">
        <Link to="/">
          <Button border="1px" variant="outline" color="white">
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
          {results !== undefined ? (
            results.map((result) => <ResultCard {...result} />)
          ) : (
            <p>loading</p>
          )}
        </SimpleGrid>
      </Flex>
    </>
  );
}
export default Results;
