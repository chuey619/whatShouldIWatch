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
  IconButton,
  Checkbox,
  CheckboxGroup,
  useToast,
} from "@chakra-ui/core";
import { CreateCollectionModal, ResultCard } from "../components";

function MyProfile(props) {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [shouldFetchWatchLater, setShouldFetchWatchLater] = useState(false);
  const [shouldFetchFavorites, setShouldFetchFavorites] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userCollections, setUserCollections] = useState([]);
  const toast = useToast();

  useEffect(() => {
    if (props.user[0].user) {
      fetch("/api/collections")
        .then((res) => res.json())
        .then((json) => setUserCollections(json.data && json.data.collections));
    }
  }, [shouldFetch, props.user[0].user]);

  const [services, setServices] = useState(
    JSON.parse(localStorage.getItem("services")) || []
  );
  useEffect(() => {
    if (props.user[0].user) {
      setServices(props.user[0].user.services);
      localStorage.setItem(
        "services",
        JSON.stringify(props.user[0].user.services)
      );
    }
  }, []);
  const serviceSubmit = async (e) => {
    // e.preventDefault();
    localStorage.setItem("services", JSON.stringify(services));
    await fetch("/api/users/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(services),
    });

    toast({
      position: "bottom",
      title: "Saved!",
      status: "success",
      duration: 1000,
    });
  };
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
                              <>
                                <IconButton
                                  aria-label="Remove from watch later"
                                  icon="minus"
                                  onClick={async () => {
                                    await fetch(
                                      `/api/collections/${collection.name.replace(
                                        " ",
                                        "+"
                                      )}/${movie.id}`,
                                      {
                                        method: "DELETE",
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                      }
                                    );
                                    setShouldFetch(!shouldFetch);
                                  }}
                                  variant="solid"
                                  variantColor="red"
                                  size="xs"
                                />
                                <ResultCard
                                  name={movie.title}
                                  id={movie.ref_id}
                                  picture={movie.picture}
                                />
                              </>
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
          <Button
            mt="10px"
            onClick={onOpen}
            border="1px"
            variant="outline"
            color="white"
          >
            Create Collection
          </Button>
        </Link>
        <form onSubmit={serviceSubmit}>
          <Text color="purple.300" fontSize="xl">
            Manage your subscriptions
          </Text>
          <CheckboxGroup
            name="services"
            defaultValue={
              (props.user[0].user && props.user[0].user.services) || services
            }
          >
            <Checkbox
              color="white"
              value="Hulu"
              onClick={(evt) => {
                if (
                  services.includes(evt.target.value) &&
                  evt.target.value !== undefined
                ) {
                  setServices(
                    services.filter((service) => service != evt.target.value)
                  );
                } else if (
                  !services.includes(evt.target.value) &&
                  evt.target.value !== undefined
                ) {
                  setServices(services.concat(evt.target.value));
                }
              }}
            >
              Hulu
            </Checkbox>
            <Checkbox
              onClick={(evt) => {
                if (
                  services.includes(evt.target.value) &&
                  evt.target.value !== undefined
                ) {
                  setServices(
                    services.filter((service) => service != evt.target.value)
                  );
                } else if (
                  !services.includes(evt.target.value) &&
                  evt.target.value !== undefined
                ) {
                  setServices(services.concat(evt.target.value));
                }
              }}
              color="white"
              value="Netflix"
            >
              Netflix
            </Checkbox>
            <Checkbox
              onClick={(evt) => {
                if (
                  services.includes(evt.target.value) &&
                  evt.target.value !== undefined
                ) {
                  setServices(
                    services.filter((service) => service != evt.target.value)
                  );
                } else if (
                  !services.includes(evt.target.value) &&
                  evt.target.value !== undefined
                ) {
                  setServices(services.concat(evt.target.value));
                }
              }}
              color="white"
              value="Amazon Prime Video"
            >
              Amazon Prime Video
            </Checkbox>
            <Checkbox
              onClick={(evt) => {
                if (
                  services.includes(evt.target.value) &&
                  evt.target.value !== undefined
                ) {
                  setServices(
                    services.filter((service) => service != evt.target.value)
                  );
                } else if (
                  !services.includes(evt.target.value) &&
                  evt.target.value !== undefined
                ) {
                  setServices(services.concat(evt.target.value));
                }
              }}
              color="white"
              value="Disney+"
            >
              Disney+
            </Checkbox>
            <Checkbox
              onClick={(evt) => {
                if (
                  services.includes(evt.target.value) &&
                  evt.target.value !== undefined
                ) {
                  setServices(
                    services.filter((service) => service != evt.target.value)
                  );
                } else if (
                  !services.includes(evt.target.value) &&
                  evt.target.value !== undefined
                ) {
                  setServices(services.concat(evt.target.value));
                }
              }}
              color="white"
              value="HBO"
            >
              HBO
            </Checkbox>
            <Checkbox
              onClick={(evt) => {
                if (
                  services.includes(evt.target.value) &&
                  evt.target.value !== undefined
                ) {
                  setServices(
                    services.filter((service) => service != evt.target.value)
                  );
                } else if (
                  !services.includes(evt.target.value) &&
                  evt.target.value !== undefined
                ) {
                  setServices(services.concat(evt.target.value));
                }
              }}
              color="white"
              value="AppleTV+"
            >
              AppleTV+
            </Checkbox>
          </CheckboxGroup>
          <Button border="1px" variant="outline" color="white" type="submit">
            Save
          </Button>
        </form>
      </Flex>
    </>
  );
}
export default MyProfile;
