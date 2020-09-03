import React, { useState, useEffect } from "react";

import {
  Flex,
  Grid,
  Link,
  Button,
  Text,
  Box,
  Image,
  PseudoBox,
  useDisclosure,
} from "@chakra-ui/core";
import { CreateCollectionModal, ResultCard } from "../components";

function MyProfile(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userCollections, setUserCollections] = useState([]);
  useEffect(() => {
    if (props.user[0].user) {
      fetch("/api/collections")
        .then((res) => res.json())
        .then((json) => setUserCollections(json.data.collections));
    }
  }, []);
  // const getCollections = () => {
  //   fetch("/api/collections")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setUserCollections(json);
  //     });
  // };

  return (
    <>
      <CreateCollectionModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
      <Flex direction="column" overflow="auto" bg="black" p="20px">
        <Link>
          <Button border="1px" variant="outline" color="white">
            Create Collection
          </Button>
        </Link>
        {userCollections &&
          userCollections.map((collection) => {
            return (
              <>
                <Text fontSize="20pt" color="white">
                  {collection.name}
                </Text>
                <Box>
                  <Box
                    w="100%"
                    h="200px"
                    display="inline-flex"
                    mb={3}
                    overflowX="auto"
                    mr={1}
                  >
                    {collection.movies.map((movie) => {
                      return (
                        <ResultCard
                          name={movie.title}
                          id={movie.ref_id}
                          picture={movie.picture}
                        />
                      );
                    })}
                  </Box>
                </Box>
              </>
            );
          })}
      </Flex>
    </>
  );
}
export default MyProfile;
