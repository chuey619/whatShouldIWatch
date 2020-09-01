import React from "react";
import { SubscriptionsModal } from "../components/";
import {
  useDisclosure,
  Box,
  Heading,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/core";
import useQuery from "../hooks/useQuery";

function Home() {
  const shouldAskSubscription = useQuery().has("askSubscription");
  const { isOpen, onOpen, onClose } = useDisclosure(shouldAskSubscription);

  return (
    <>
      <Box
        bg="black"
        display="flex"
        flexDirection="column"
        alignItems="left"
        gridArea="main"
      >
        <Heading color="white">Browse movies and shows in one click.</Heading>
        <p>Search from six services and save your favorites for later!</p>
        <form>
          <FormControl>
            <Input
              type="search"
              width="30vw"
              placeholder="What would you like to watch?"
              mt="20px"
            />
          </FormControl>
          <Button width="20vw" mt={4} type="submit" variantColor="purple">
            Search
          </Button>
        </form>
      </Box>
      <SubscriptionsModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}

export default Home;
