import React from "react";
import { PseudoBox, Image, Heading } from "@chakra-ui/core";
import { useState } from "react";
import { Redirect } from "react-router-dom";
function ResultCard(props) {
  const [redirect, setRedirect] = useState(false);
  return (
    <PseudoBox
      border="2px solid rgba(183,148,244,1)"
      borderRadius="10px"
      bg="grey"
      maxW="xs"
      maxH="200px"
      bgPos="center"
      bgImage={`url(${props.picture})`}
      bgSize="cover"
      backgroundRepeat="no-repeat"
      _hover={{ boxShadow: "0px 0px 15px 2px rgba(183,148,244,1)" }}
      onClick={() => {
        setRedirect(true);
      }}
    >
      {redirect && <Redirect to={`/media/${props.id}`} />}
      <Heading as="h3" size="lg" color="white">
        {props.name}
      </Heading>
    </PseudoBox>
  );
}

export default ResultCard;
