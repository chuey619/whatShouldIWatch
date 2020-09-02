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

function Home() {
  const shouldAskSubscription = useQuery().has("askSubscription");
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Search />
      </Box>
    </>
  );
}

export default Home;
