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
          Welcome Browse movies and shows in one click.
        </Heading>
        <p style={{ color: "#808080" }}>
          Search from six services and save your favorites for later!
        </p>
        <Search />
      </Box>
    </>
  );
}

export default Home;
