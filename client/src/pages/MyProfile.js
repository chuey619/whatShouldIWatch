import React, { useState } from "react";
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

async function MyProfile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [collections, setCollections] = useState([]);
  const getCollections = async () => {
    let response = await fetch("/api/collections/");
    let json = await response.json();
    json.data.collections.forEach((collection) => {
      setCollections(collections.concat(collection));
    });
  };
  await getCollections();
  return (
    <>
      <CreateCollectionModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
      <Flex direction="column" overflowY="scroll" bg="black" p="20px">
        <Link>
          <Button border="1px" variant="outline" color="white">
            Create Collection
          </Button>
        </Link>
        {collections.map((collection) => {
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
                  overflowX="scroll"
                >
                  {collection.movies.map((movie) => {
                    return (
                      <ResultCard
                        picture={movie.picture}
                        id={movie.ref_id}
                        name={movie.title}
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
