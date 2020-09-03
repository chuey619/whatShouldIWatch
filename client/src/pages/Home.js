import React from "react";
import { SubscriptionsModal } from "../components/";
import Search from "./Search";
import {
  useDisclosure,
  Box,
  Heading,
  FormControl,
  Input,
  Button,
  Text,
} from "@chakra-ui/core";
import useQuery from "../hooks/useQuery";

function Home(props) {
  const shouldAskSubscription = useQuery().has("askSubscription");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg="black"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridArea="main"
        margin="auto"
        width="100%"
        height="100%"
      >
        <Heading marginTop="10%" color="white">
          Welcome. Browse movies and shows in one click.
        </Heading>
        <Text style={{ color: "#808080" }} fontSize="20pt">
          Search from six services and save your favorites for later!
        </Text>
        <Search />
      </Box>
    </>
  );
}

export default Home;
