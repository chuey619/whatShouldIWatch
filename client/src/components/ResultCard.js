import React from "react";
import { Box, Image, Heading } from "@chakra-ui/core";

function ResultCard(props) {
  return (
    <Box
      bg="grey"
      maxW="xs"
      maxH="200px"
      bgPos="center"
      bgImage={`url(${props.picture})`}
      bgSize="cover"
      backgroundRepeat="no-repeat"
      boxShadow="0px 0px 10px 2px rgba(183,148,244,1)"
    >
      <Heading color="white">{props.name}</Heading>
    </Box>
  );
}

export default ResultCard;
