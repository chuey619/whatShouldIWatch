import React from "react";
import { Flex, SimpleGrid, Button } from "@chakra-ui/core";
import { Link, useHistory } from "react-router-dom";
import ResultCard from "../components/ResultCard";
const MovieResult = () => {
  // const imageURL = `/assets/${subscriptionName}`;
  // return <Image src="/assets/netflix-active.png" alt="moviename" />;
  return null;
};

function Results(props) {
  const results = props.location.state.results;
  const history = useHistory();
  // history.push("/");
  return (
    <>
      <Flex overflow="auto" bg="black" p={4} gridArea="main">
        <Link>
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
          {results != undefined ? (
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
