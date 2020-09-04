import React, { useState, useEffect } from "react";

import {
  Flex,
  Link,
  Button,
  Text,
  Box,
  Stack,
  useDisclosure,
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/core";
import { CreateCollectionModal, ResultCard } from "../components";

function MyProfile(props) {
  const [shouldFetch, setShouldFetch] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userCollections, setUserCollections] = useState([]);
  useEffect(() => {
    if (props.user[0].user) {
      fetch("/api/collections")
        .then((res) => res.json())
        .then((json) => setUserCollections(json.data && json.data.collections));
    }
  }, [shouldFetch]);
  const [userFavorites, setUserFavorites] = useState([]);
  useEffect(() => {
    if (props.user[0].user) {
      fetch(`/api/media/user/${props.user[0].user.id}/favorites`)
        .then((res) => res.json())
        .then((json) => setUserFavorites(json.data));
    }
  }, []);
  const [userWatchLater, setUserWatchLater] = useState([]);
  useEffect(() => {
    if (props.user[0].user) {
      fetch(`/api/media/user/${props.user[0].user.id}/watch-later`)
        .then((res) => res.json())
        .then((json) => setUserWatchLater(json.data));
    }
  }, []);

  return (
    <>
      <CreateCollectionModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        setShouldFetch={setShouldFetch}
        shouldFetch={shouldFetch}
      />
      <Flex direction="column" overflow="auto" bg="black" p="20px">
        <Text fontSize="xl" color="purple.300">
          Collections
        </Text>

        <Accordion allowMultiple={true} allowToggle={true}>
          <AccordionItem isOpen={true} defaultIsOpen={true}>
            <AccordionHeader>
              <Text fontSize="20pt" color="white">
                Watch Later
              </Text>
            </AccordionHeader>
            <AccordionPanel>
              <Box w="100%" h="200px" display="inline-flex" mr={1} mb={5}>
                <Stack
                  h="220px"
                  w="100%"
                  mr={8}
                  justify="start"
                  isInline
                  overflowX="auto"
                  overflowY="visible"
                  pt="15px"
                  pb="15px"
                  flexShrink={0}
                  borderTop="1px solid #b794f4"
                >
                  {userWatchLater &&
                    userWatchLater.map((movie) => {
                      return (
                        <ResultCard
                          name={movie.title}
                          id={movie.ref_id}
                          picture={movie.picture}
                        />
                      );
                    })}
                </Stack>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          );
          <AccordionItem>
            <AccordionHeader>
              <Text fontSize="20pt" color="white">
                Favorites
              </Text>
            </AccordionHeader>
            <AccordionPanel>
              <Box w="100%" h="200px" display="inline-flex" mr={1} mb={5}>
                <Stack
                  h="220px"
                  w="100%"
                  mr={8}
                  justify="start"
                  isInline
                  overflowX="auto"
                  overflowY="visible"
                  pt="15px"
                  pb="15px"
                  flexShrink={0}
                  borderTop="1px solid #b794f4"
                >
                  {userFavorites &&
                    userFavorites.map((movie) => {
                      return (
                        <ResultCard
                          name={movie.title}
                          id={movie.ref_id}
                          picture={movie.picture}
                        />
                      );
                    })}
                </Stack>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          );
          {userCollections &&
            userCollections.map((collection) => {
              return (
                <>
                  <AccordionItem>
                    <AccordionHeader fontSize="20pt" color="white">
                      {collection.name}
                    </AccordionHeader>
                    <AccordionPanel>
                      <Box
                        w="100%"
                        h="200px"
                        display="inline-flex"
                        mr={1}
                        mb={5}
                      >
                        <Stack
                          h="220px"
                          w="100%"
                          mr={8}
                          justify="start"
                          isInline
                          overflowX="auto"
                          overflowY="visible"
                          pt="15px"
                          pb="15px"
                          flexShrink={0}
                          borderTop="1px solid #b794f4"
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
                        </Stack>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </>
              );
            })}
        </Accordion>
        <Link>
          <Button onClick={onOpen} border="1px" variant="outline" color="white">
            Create Collection
          </Button>
        </Link>
      </Flex>
    </>
  );
}
export default MyProfile;
